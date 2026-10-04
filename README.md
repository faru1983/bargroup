# 🍸 Bargroup — Coctelería de Autor & Barras Móviles Premium (Chile)

Landing page moderna, ultra elegante y con efecto **Parallax Scrolling inmersivo multicapa** desarrollada para la marca **Bargroup**, servicio referente en Chile de coctelería de autor y barras móviles de alta gama para matrimonios, eventos corporativos y celebraciones privadas.

---

## ✨ Características Principales

1. **Dirección de Arte & Haute Cocktail Lounge (2026)**:
   - Paleta cromática en negro carbón (`#090909`), grafito (`#141414`), oro licor y ámbar (`#D4AF37`, `#E5C158`) y cristales traslúcidos.
   - Tipografía editorial `Cormorant Garamond` combinada con `Plus Jakarta Sans`.
   - Efecto Glassmorphism con specular glare reactivo al cursor y backdrop-filter.
   - Partículas doradas ambientales en Canvas ultraligero que simulan el brillo tenue de un speakeasy exclusivo.

2. **Hero Section con Parallax 3D Multicapa**:
   - **Capa 0**: Barra iluminada con botillería de alta gama en bokeh y degradado radial.
   - **Capa 1**: Copa coupé en cristal tallado con cóctel insignia y halo ámbar.
   - **Capa 2**: Tipografía editorial con alto impacto y doble CTA ("Cotiza tu Barra" y "Ver Carta").
   - **Capa 3**: Capa frontal de elementos botánicos y hielo puro flotante con aceleración en el eje Y y seguimiento del cursor.

3. **Sección "Nuestra Experiencia"**:
   - Métricas y cifras clave (+380 celebraciones, +18 mixólogos, +48.000 cócteles servidos, 100% garantía de excelencia).
   - Animación de contadores al entrar en viewport con Intersection Observer.

4. **Catálogo Interactivo de Mixología**:
   - 4 cócteles de autor fotografiados en alta definición: *Patagonia Smoke*, *Golden Andes Spritz*, *Atacama Botanicals*, *Velvet Espresso Noir*.
   - Filtros por categoría y tarjetas con efecto **3D Tilt** reactivo a la posición del mouse.
   - Fichas técnicas con notas de cata, destilado base y cristalería.

5. **Modalidades de Barra Móvil**:
   - *Barras Matrimoniales (Wedding Luxe)*: Mármol iluminado y copistería fina para bodas boutique.
   - *Barras Corporativas (Corporate & Brand)*: Coctelería de alta velocidad con branding de empresa.
   - *Barras Speakeasy Privadas*: Atmósfera clandestina íntima para residencias y penthouses VIP.

6. **Cotizador Dinámico & Generador Directo de WhatsApp**:
   - Selector por tipo de evento, slider interactivo de invitados (30 a 450+) y horas de servicio.
   - Formateo automático del mensaje codificado para WhatsApp con resumen instantáneo.
   - Integración directa con Instagram (`@bargroup.chile`).

---

## 🚀 Despliegue en Vercel + GitHub

### 1. Clonar o subir a GitHub
```bash
git add .
git commit -m "feat: landing page inmersiva bargroup con parallax y cotizador whatsapp"
git remote add origin https://github.com/TU_USUARIO/bargroup.git
git branch -M main
git push -u origin main
```

### 2. Despliegue en Vercel
1. Ingresa a [Vercel](https://vercel.com/) y pulsa **Add New Project**.
2. Conecta tu repositorio de GitHub `bargroup`.
3. Vercel detectará automáticamente **Next.js**.
4. Pulsa **Deploy** y tu sitio estará en producción con SSL, CDN global y compresión de imágenes nativa.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Estilos**: Tailwind CSS v4 + Glassmorphism + CSS Scroll-Driven Animations
- **Animaciones**: Framer Motion + Lenis Smooth Scroll Engine
- **Iconos**: Lucide React + SVG Brand Icons
- **Efectos**: Canvas HTML5 + Canvas Confetti
