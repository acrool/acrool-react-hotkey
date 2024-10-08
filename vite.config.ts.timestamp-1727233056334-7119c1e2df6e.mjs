// vite.config.ts
import { defineConfig } from "file:///Users/imagine/project/packages/acrool-react-hotkey/node_modules/vite/dist/node/index.js";
import react from "file:///Users/imagine/project/packages/acrool-react-hotkey/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///Users/imagine/project/packages/acrool-react-hotkey/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "node:path";
import { visualizer } from "file:///Users/imagine/project/packages/acrool-react-hotkey/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import eslint from "file:///Users/imagine/project/packages/acrool-react-hotkey/node_modules/vite-plugin-eslint/dist/index.mjs";
import svgr from "file:///Users/imagine/project/packages/acrool-react-hotkey/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "/Users/imagine/project/packages/acrool-react-hotkey";
var vite_config_default = defineConfig({
  plugins: [
    eslint(),
    react(),
    svgr(),
    dts({
      insertTypesEntry: true
    }),
    visualizer()
  ],
  build: {
    minify: process.env.NODE_ENV === "production",
    sourcemap: process.env.NODE_ENV !== "production",
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `acrool-react-hotkey.${format}.js`
    },
    cssTarget: "chrome61",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaW1hZ2luZS9wcm9qZWN0L3BhY2thZ2VzL2Fjcm9vbC1yZWFjdC1ob3RrZXlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9pbWFnaW5lL3Byb2plY3QvcGFja2FnZXMvYWNyb29sLXJlYWN0LWhvdGtleS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaW1hZ2luZS9wcm9qZWN0L3BhY2thZ2VzL2Fjcm9vbC1yZWFjdC1ob3RrZXkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7dmlzdWFsaXplcn0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGVzbGludCgpLFxuICAgICAgICByZWFjdCgpLFxuICAgICAgICBzdmdyKCksXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgdmlzdWFsaXplcigpIGFzIFBsdWdpbixcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG1pbmlmeTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgc291cmNlbWFwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGFjcm9vbC1yZWFjdC1ob3RrZXkuJHtmb3JtYXR9LmpzYCxcbiAgICAgICAgfSxcbiAgICAgICAgY3NzVGFyZ2V0OiAnY2hyb21lNjEnLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFRLG9CQUFtQjtBQUN0VyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLFlBQVksVUFBVTtBQUN0QixTQUFRLGtCQUFpQjtBQUN6QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBTmpCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxRQUFRLFFBQVEsSUFBSSxhQUFhO0FBQUEsSUFDakMsV0FBVyxRQUFRLElBQUksYUFBYTtBQUFBLElBQ3BDLEtBQUs7QUFBQSxNQUNELE9BQVksYUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLFVBQVUsQ0FBQyxXQUFXLHVCQUF1QixNQUFNO0FBQUEsSUFDdkQ7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
