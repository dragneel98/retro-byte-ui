import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.tsx'),
      name: 'RetroByteUi',
      fileName: 'RetroByteUi',
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-native", "react/jsx-runtime"],
      output: {
        globals: {
          react: 'react',
          "react-dom": "ReactDOM",
          "react-native": "ReactNative",
          "react/jsx-runtime": "react/jsx-runtime"
        },
      },
    },
  },
})