# Arrova Store -- Web oficial

Sitio web estático de **Arrova Store**, un emprendimiento de regalos y
accesorios hechos a mano y personalizados, con atención directa a través
de WhatsApp.

Este proyecto está pensado como: - Landing de marca - Catálogo de
productos - Base sólida para evolucionar a un ecommerce completo en el
futuro

## 🧵 Contexto del negocio

Arrova Store trabaja con **producción limitada** y atención
personalizada, no como una tienda masiva.

Existen dos líneas de producto:

-   **Productos personalizados (hechos a pedido)**\
    Elaborados artesanalmente bajo confirmación previa, con tiempos de
    producción definidos y adelanto del 50%.

-   **Productos en stock**\
    Accesorios listos para entrega, con disponibilidad limitada.

La web busca comunicar claramente estos procesos, generar confianza y
dirigir la conversión hacia WhatsApp.


## 🛠️ Stack técnico

-   **Framework:** Next.js (App Router)
-   **Rendering:** Static Site Generation (SSG)
-   **Estilos:** Tailwind CSS
-   **Íconos:** lucide-react
-   **Lenguaje:** TypeScript
-   **Deploy:** Vercel
-   **Dominio:** GoDaddy

Todo el sitio es **100% estático**.


## 📁 Estructura del proyecto

``` txt
app

shared/
  data/
  lib/
  ui/components
    header/
    footer/
    home/
    product/

public/
  brand/
  products/
```

## 📦 Datos estáticos

Los productos y categorías se gestionan mediante archivos JSON:

-   `data/products.json`
-   `data/categories.json`
-   `data/tags.json`

Las imágenes de productos siguen la convención:

``` txt
public/products/<id>.png
```


## 🚀 Desarrollo local

``` bash
pnpm install
pnpm run dev
```

Abrir: http://localhost:3000


## 🌐 Deploy

El proyecto está preparado para desplegarse en **Vercel** como sitio
estático.

``` bash
pnpm run build
```


## 🎨 Diseño y UX

-   Claridad de procesos
-   Conversión directa a WhatsApp
-   Mobile-first
-   Estilo artesanal


## 🔮 Roadmap

-   Catálogo avanzado
-   Página de producto
-   Checkout
-   CMS / backend
-   SEO dinámico


## 📄 Licencia

Proyecto privado de ArrovaStore.\
Todos los derechos reservados.
