import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Chemins relatifs : le site marche sur GitHub Pages quel que soit
  // le nom du repo (https://user.github.io/<repo>/) sans configuration.
  base: "./",
  plugins: [react()],
});
