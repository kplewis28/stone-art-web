import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Figma Make exports pin versions directly in import specifiers
// (e.g. "sonner@2.0.3"); strip the version so normal resolution applies.
function versionedImportResolver() {
  const versionSuffix = /@\d+\.\d+\.\d+.*$/
  return {
    name: 'versioned-import-resolver',
    resolveId(id) {
      if (versionSuffix.test(id)) {
        return this.resolve(id.replace(versionSuffix, ''), undefined, { skipSelf: true })
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    versionedImportResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
