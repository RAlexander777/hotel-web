// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 1. Dominio base
  site: "https://RAlexander777.github.io", 
  
  // 2. Carpeta del repositorio
  base: "/hotel-web", 
  
  outDir: "dist",

  // 3. CONFIGURACIÓN DE IDIOMAS
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: true, 
        redirectToDefaultLocale: true
    }
  },
});