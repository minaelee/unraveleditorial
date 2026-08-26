import { defineConfig, envField } from 'astro/config'
import { fileURLToPath } from 'url'
import compress from 'astro-compress'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
// Try to load optional workspace helper (symlink/dev helpers). If it's missing
// (moved into backups during cleanup), fall back to a no-op enhancer so the
// site can build without the helper present.
let enhanceConfigForWorkspace = (c) => c
try {
  const mod = await import('./scripts/workspace-config.js')
  if (mod?.enhanceConfigForWorkspace) enhanceConfigForWorkspace = mod.enhanceConfigForWorkspace
} catch (e) {
  // intentionally empty: workspace helper not present in this cleaned repo
}

// Vite configuration with path aliases and SCSS settings
const viteConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [fileURLToPath(new URL('./src/assets', import.meta.url))],
        logger: {
          warn: () => {},
        },
      },
    },
  },
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@public': fileURLToPath(new URL('./public', import.meta.url)),
      '@post-images': fileURLToPath(new URL('./public/posts', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@theme-config': fileURLToPath(new URL('./theme.config.ts', import.meta.url)),
    },
  },
}

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://unraveleditorial.com',
  integrations: [compress(), icon(), mdx(), sitemap()],
  vite: enhanceConfigForWorkspace(viteConfig),
  env: {
    schema: {
      BLOG_API_URL: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: 'https://jsonplaceholder.typicode.com/posts',
      }),
    },
  },
})
