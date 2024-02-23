import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { sveltekit_modal } from "sveltekit-modal/vite";
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [
    Inspect(),
    sveltekit_modal(),
    sveltekit()
  ],
  logLevel: "error"
});
