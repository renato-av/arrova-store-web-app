# Catálogo importado de Instagram

Fecha de revisión: 29 de octubre de 2026. Cuenta: [@arrova.store](https://www.instagram.com/arrova.store/).

- 81 productos, con 143 imágenes locales WebP y galerías por producto.
- Se recorrieron 82 publicaciones fotográficas y sus carruseles, además de las portadas de los dos reels accesibles. El perfil mostraba 85 publicaciones; se pudieron identificar 84 enlaces accesibles. No se presupone cobertura de contenido oculto o no disponible.
- Se excluyó `DPKZlq0EY2t`, un gráfico informativo sobre flores, y se unieron las publicaciones de la misma bandana floral (`DVFXQUKDGe-` y `DTp87E0joor`). Las portadas de los reels se incorporaron como fotos, no como videos.
- Se reemplazaron los 13 productos de prueba y se eliminaron sus imágenes numeradas.
- Se conservaron 13 precios explícitos publicados. Los otros 68 productos muestran “Consultar precio”. Son precios de publicaciones históricas, cuya vigencia debe confirmarse al pedir.
- Chimuelo y Furia Luminosa: S/ 22 por la pareja. Un verano sin ti: S/ 12 por unidad; promoción publicada de dos por S/ 20.
- Los dos duendes de Clash Royale tienen diseños distintos en las fotos y se conservan por separado con sus precios publicados de S/ 25 y S/ 23.
- Los nombres y las descripciones se adaptaron a fichas de producto y se contrastaron con las fotos. Los colores y medidas se incluyeron cuando estaban visibles o indicados en la publicación.
- `available: true` mantiene visible una idea en este catálogo de pedidos por WhatsApp; no certifica stock actual. No se trasladaron promesas antiguas de entrega inmediata ni se inventaron tiempos de elaboración. El adelanto del 50% proviene del contexto comercial existente del proyecto.

El archivo `instagram-catalog-sources.json` relaciona cada publicación con el producto, el precio observado y el número de fotos de esa fuente. Dos fuentes pueden apuntar a un mismo producto. Las imágenes están en `public/products/instagram/` y no dependen de enlaces temporales de Instagram. No se guardaron cookies, credenciales, comentarios ni datos de seguidores.

Validación: compilación de producción de Next.js y TypeScript correctas; ESLint de los archivos de código modificados correcto; IDs y slugs únicos, categorías y etiquetas válidas, una portada por producto y todas las rutas de imagen existentes. Se probó en el navegador el catálogo de 81 productos y la selección de la cuarta foto de Spider-Man. Hay 43 productos con más de una imagen. Las imágenes ocupan aproximadamente 24,3 MB en total.
