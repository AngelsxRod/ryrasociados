# R&R Asociados

Landing informativa de R&R Asociados, construida con Next.js 16, React 19, Tailwind CSS 4 y componentes shadcn/ui (Base UI).

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000). Para verificar el código:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## CodeGraph para el equipo

Instalar la CLI de [CodeGraph](https://github.com/colbymchenry/codegraph) en cada equipo, asegurándose de que `codegraph` esté disponible en `PATH`. Después de clonar el repositorio, ejecutar una vez:

```bash
codegraph init
codegraph status
```

El índice queda en `.codegraph/` y se reconstruye en cada equipo; Git solo guarda su `.gitignore`. El repositorio incluye la configuración MCP para Codex, Claude Code y Cursor. Reiniciar el agente después de instalar la CLI. En Codex, confiar en el proyecto para habilitar `.codex/config.toml`.

## Contenido y contacto

La página presenta los servicios de auditoría, contabilidad, asesoría y el sistema ISC. Las fichas amplían su información en la misma página. Por ahora, la versión publicada muestra teléfono y dirección, sin formulario ni correo. El componente del formulario queda en el proyecto para una publicación posterior. Tiene Turnstile preparado, pero todavía no envía ni almacena datos.

Los datos de contacto están en [lib/contact.ts](lib/contact.ts). La propuesta PDF usada como referencia editorial permanece fuera de Git porque contiene información de un cliente y condiciones comerciales.

### Turnstile del formulario pendiente de publicación

El widget «Contacto R&R Asociados» de Cloudflare permite `ryrasociados.com.gt`, usa el modo gestionado y no tiene preautorización. Para probar el componente localmente, define `NEXT_PUBLIC_TURNSTILE_SITE_KEY` en `.env.local`; usa la clave de prueba `1x00000000000000000000AA` en `localhost` o la clave pública del widget para una vista en el dominio autorizado. Next.js incorpora esta variable al JavaScript durante `pnpm build`, así que hay que configurarla antes de compilar la versión que publique el formulario. La clave secreta permanece en Cloudflare y nunca debe ponerse en `NEXT_PUBLIC_` ni en el repositorio.

El formulario sigue sin montarse en `app/page.tsx` y no tiene acción de envío. Antes de habilitarlo se debe implementar un endpoint que valide cada token con Siteverify y luego procese el mensaje; completar el widget en el navegador por sí solo no protege el formulario.

## Publicación en cPanel

GitHub Actions compila la exportación estática y la sincroniza por FTPS con cPanel al subir cambios a `main`. También permite ejecutar el despliegue manualmente desde Actions. La configuración inicial, las verificaciones y la forma de revertir una publicación están en [docs/publicacion.md](docs/publicacion.md).

## Convención de commits

Husky se instala mediante el script `prepare` al ejecutar `pnpm install`. El hook `pre-commit` corre ESLint y TypeScript; `commit-msg` valida [Conventional Commits](https://www.conventionalcommits.org/). Ejemplos:

```text
feat: add service detail section
fix: correct contact link
docs: update setup instructions
```
