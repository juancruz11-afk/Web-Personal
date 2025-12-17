import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // <--- Obligatorio para GitHub Pages
  
  // Opcional: Si tu repositorio NO es "tu-usuario.github.io" sino "web-personal",
  // necesitas la base path para que carguen el CSS y JS.
  // Si vas a usar un dominio personalizado (ej. juan.com), borra esta línea.
  basePath: '/Web-Personal', 

  images: {
    unoptimized: true, // <--- Obligatorio: GitHub Pages no optimiza imágenes por defecto
  },
};

export default nextConfig;