import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import { islandComponents } from '../../src/vite/island-components'

export default defineConfig({
  ssr: {
    external: ['react', 'react-dom'],
  },
  plugins: [
    islandComponents(),
    {
      ...mdx({
        jsxImportSource: 'react',
      }),
    },
  ],
})
