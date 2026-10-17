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

## Contenido y contacto

La página presenta los servicios de auditoría, contabilidad, asesoría y el sistema ISC. Las fichas amplían su información en la misma página. El formulario de tres campos abre la aplicación de correo del visitante con un mensaje preparado; no envía ni almacena datos en un servidor.

Los datos de contacto y la preparación del correo están en [lib/contact.ts](lib/contact.ts). La página y el formulario usan ese módulo; cualquier cambio de teléfono, dirección o destinatario se hace allí. La propuesta PDF usada como referencia editorial permanece fuera de Git porque contiene información de un cliente y condiciones comerciales.

## Convención de commits

Husky se instala mediante el script `prepare` al ejecutar `pnpm install`. El hook `pre-commit` corre ESLint y TypeScript; `commit-msg` valida [Conventional Commits](https://www.conventionalcommits.org/). Ejemplos:

```text
feat: add service detail section
fix: correct contact link
docs: update setup instructions
```
