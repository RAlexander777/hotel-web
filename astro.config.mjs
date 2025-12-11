// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 1. Dominio 
  site: "https://hostalacuariuspuno.com", 
  
  // 2. Carpeta del repositorio
  base: "/",
  
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