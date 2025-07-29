import { defineConfig } from "vite";

import solidPlugin from "vite-plugin-solid";
import tailwindcssPlugin from "@tailwindcss/vite";

export default defineConfig({
    server: { allowedHosts: [".trycloudflare.com"] },
    plugins: [solidPlugin(), tailwindcssPlugin()]
});
