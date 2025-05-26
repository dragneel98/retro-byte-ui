// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import tsconfigPaths from "file:///home/project/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///home/project/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  resolve: {
    alias: {
      "react-native": "react-native-web"
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.tsx"),
      name: "RetroByteUi",
      fileName: "RetroByteUi"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-native", "react/jsx-runtime"],
      output: {
        globals: {
          react: "react",
          "react-dom": "ReactDOM",
          "react-native": "ReactNative",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdHNjb25maWdQYXRocygpLCBkdHMoeyByb2xsdXBUeXBlczogdHJ1ZSB9KV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ3JlYWN0LW5hdGl2ZSc6ICdyZWFjdC1uYXRpdmUtd2ViJ1xuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ2xpYi9tYWluLnRzeCcpLFxuICAgICAgbmFtZTogJ1JldHJvQnl0ZVVpJyxcbiAgICAgIGZpbGVOYW1lOiAnUmV0cm9CeXRlVWknLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwicmVhY3QtbmF0aXZlXCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAncmVhY3QnLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgICBcInJlYWN0LW5hdGl2ZVwiOiBcIlJlYWN0TmF0aXZlXCIsXG4gICAgICAgICAgXCJyZWFjdC9qc3gtcnVudGltZVwiOiBcInJlYWN0L2pzeC1ydW50aW1lXCJcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxJQUFJLEVBQUUsYUFBYSxLQUFLLENBQUMsQ0FBQztBQUFBLEVBQzlELFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxnQkFBZ0IsbUJBQW1CO0FBQUEsTUFDcEUsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsZ0JBQWdCO0FBQUEsVUFDaEIscUJBQXFCO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
