# Young & Rich — Landing

Landing page del programa educativo **Young & Rich**, hecha con Next.js 16 (App Router), React 19 y Tailwind CSS 4.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Textos, clases, FAQ, precio, fechas y links | `lib/content.ts` |
| Colores (incluido el acento lima) y tipografías | `app/globals.css` (`@theme`) y `app/layout.tsx` |
| Secciones de la página | `components/*.tsx`, ensambladas en `app/page.tsx` |
| Animaciones (entrada del titular, revelado al hacer scroll, tarjetas) | `app/globals.css`, `components/motion.tsx`, `components/words.tsx` |
| Título y descripción para Google / redes | `metadata` en `app/layout.tsx` |

Los partners (XTB y ÉDÉN Studio) y los datos de ÉDÉN están en `lib/content.ts`. Los logos están en `public/partners/` y se enlazan con el campo `logo` de cada partner.

Para poner las fotos de Javier y David, copia las imágenes a `public/` y agrega `photo: "/nombre.jpg"` a cada mentor en `lib/content.ts`.

## Pendientes

Busca `TODO` en `lib/content.ts`:

- Link de pago y de WhatsApp.
- Rol, edad, foto y bio de David.
- Confirmar el año, la zona horaria y las fechas de cada clase (se asumió que la primera es el lunes 4 de enero de 2027 a las 7:45 pm, hora de El Salvador).
