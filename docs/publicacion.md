# Publicación de ryrasociados.com.gt

## Estado actual

El sitio se construye con Next.js como exportación estática (`output: "export"` en `next.config.ts`). `pnpm build` genera los archivos que se publican en `out/`. No se ejecuta una aplicación Node.js en el hosting: cPanel sirve los archivos HTML, CSS, JavaScript e imágenes.

La publicación se automatiza con GitHub Actions y FTPS cuando se sube un commit a `main`. La carpeta pública del dominio es:

```text
/home/qinoelkb/ryrasociados.com.gt
```

La versión acordada muestra teléfono y dirección. El formulario y el correo no están publicados.

## Configuración inicial del despliegue automático

1. En cPanel, abre **Files → FTP Accounts** y crea `deploy@ryrasociados.com.gt`. En **Directory**, usa `ryrasociados.com.gt` relativo a `/home/qinoelkb/`, sin el subdirectorio que cPanel propone por defecto. Comprueba que la ruta final sea exactamente `/home/qinoelkb/ryrasociados.com.gt`. Usa una contraseña única y una cuota suficiente para el sitio. No reutilices la cuenta `bkryr@ryrasociados.com.gt`, que apunta a una subcarpeta de respaldo.
2. En el repositorio de GitHub, abre **Settings → Secrets and variables → Actions** y crea el secreto de repositorio `FTP_PASSWORD` con la contraseña de esa cuenta. No incluyas la contraseña en archivos, commits ni variables públicas.
3. El workflow [deploy.yml](../.github/workflows/deploy.yml) conecta a `premium225.web-hosting.com` por FTPS explícito, puerto 21, con validación estricta del certificado. cPanel muestra `ftp.qinotzib.net`, pero ese nombre no coincide con el certificado TLS del servidor. La cuenta FTP queda limitada a la raíz del dominio, por eso `server-dir: ./` es la ruta correcta desde su sesión.

El workflow instala dependencias con `pnpm install --frozen-lockfile`, ejecuta ESLint y TypeScript, compila con `pnpm build` y comprueba los archivos esenciales antes de subir el contenido de `out/`. Se ejecuta en cada push a `main` y también admite **Actions → Publicar sitio por FTPS → Run workflow**. Solo se publica código confirmado y subido a GitHub; los cambios locales pendientes no forman parte del despliegue.

La acción sincroniza los archivos que administra sin vaciar la carpeta del dominio. Deja intactos los archivos que ya estaban allí y que no forman parte de su estado de sincronización. El archivo de estado `.ftp-deploy-sync-state.json` se guarda en la raíz del dominio y `.htaccess` bloquea su acceso por HTTP.

## Publicación manual de respaldo

1. Desde la raíz del repositorio, instala las dependencias si hace falta y verifica el proyecto:

   ```bash
   pnpm install --frozen-lockfile
   pnpm lint
   pnpm exec tsc --noEmit
   ```

2. Detén `pnpm dev` si está en ejecución y genera una exportación nueva:

   ```bash
   pnpm build
   ```

   La compilación debe terminar sin errores y crear `out/index.html` y `out/404.html`.

3. Crea un ZIP **con el contenido de `out/` en la raíz del archivo**, no con la carpeta `out` como nivel adicional. El comando `zip -r ... .` incluye archivos ocultos, entre ellos `.htaccess`:

   ```bash
   cd out
   zip -qr /tmp/ryrasociados-publicacion-$(date +%Y%m%d-%H%M).zip .
   ```

   `/tmp` es temporal. Para poder revertir, guarda una copia del ZIP publicado en una carpeta local persistente fuera de este repositorio hasta comprobar la siguiente publicación. El ZIP no se guarda en Git.

## Subir y extraer en cPanel

1. Entra a [cPanel](https://premium225.web-hosting.com:2083/) y abre **Files → File Manager**.
2. Navega a `/home/qinoelkb/ryrasociados.com.gt`. Comprueba esta ruta antes de subir: **no uses `public_html`**.
3. Pulsa **Upload → Select File** y selecciona manualmente el ZIP recién creado en `/tmp`. Espera a que la carga indique **100 % complete**. La carga por sí sola todavía no actualiza el sitio.
4. Regresa al Administrador de archivos. Selecciona el ZIP y pulsa **Extract**.
5. En el cuadro de extracción, comprueba que el destino sea la carpeta del dominio. cPanel puede mostrarla como `/ryrasociados.com.gt`, relativa a `/home/qinoelkb`. Pulsa **Extract Files** y revisa que el resultado liste los archivos extraídos, incluidos `index.html`, `404.html` y `.htaccess`.

La extracción sustituye los archivos con el mismo nombre, pero no elimina archivos antiguos con nombres distintos. Por eso el ZIP debe contener la exportación completa de una sola compilación. Los archivos del sitio deben quedar directamente en la carpeta del dominio, nunca dentro de `out/` ni de otra subcarpeta.

## Comprobar y limpiar

1. Abre [la página principal](https://ryrasociados.com.gt/) y verifica que se vean imágenes y tipografías, que **Conocer servicio** abra cada ficha y que no aparezcan el formulario ni el correo.
2. Abre una ruta inexistente, por ejemplo [esta prueba de 404](https://ryrasociados.com.gt/esta-pagina-no-existe-404). Debe mostrar la página 404 diseñada para R&R Asociados con enlaces funcionales al inicio y a servicios.
3. Comprueba en el Administrador de archivos que `index.html`, `404.html` y `.htaccess` estén en la carpeta del dominio.
4. Si usaste el procedimiento manual, cuando el sitio funcione, borra los ZIP de publicación de esa carpeta para que no queden accesibles en el servidor. En cPanel, selecciona únicamente los `.zip`, pulsa **Delete** y marca **Skip the trash and permanently delete the files**. No borres los archivos extraídos ni las carpetas del sitio.

Para un despliegue automático, revisa además que la ejecución correspondiente de GitHub Actions haya terminado correctamente. Si falla la conexión FTPS, comprueba el secreto, la ruta de la cuenta FTP y el certificado del servidor antes de volver a ejecutar el workflow.

`public/.htaccess` se copia a `out/.htaccess` durante la compilación. Configura la página de error con `ErrorDocument 404 /404.html` y aplica los encabezados HTTP del sitio. Si falta en el ZIP o en la carpeta pública, la ruta inexistente puede dejar de mostrar la 404 personalizada.

## Si una publicación falla

Conserva el ZIP anterior en el equipo local para poder volver a subirlo y extraerlo en la misma carpeta. Después de revertir, vuelve a comprobar la página principal y la ruta inexistente. No se borran archivos del sitio para revertir: la extracción del ZIP anterior reemplaza los archivos con el mismo nombre.
