import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  esbuild: {
    jsx: "transform",
    jsxFactory: "createElement", // 커스텀 CreateElement 함수 지정
    jsxInject: `import createElement from "@/vdom/createElements";`, // 자동 임포트
  },
});
