import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000, // Porta local para desenvolvimento
    proxy: {
      '/cdn': {
        target: 'https://cdn.phaser.io',
        changeOrigin: true, // Para alterar o cabeçalho Origin para o alvo
        secure: false,      // Se o site de destino usar https, defina como `true`
        rewrite: (path) => path.replace(/^\/cdn/, ''), // Reescreve o caminho de '/cdn'
      },
    }
  },
  root: "./", // Raiz do projeto
  publicDir: "public", // Onde os assets e HTML estão localizados
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
