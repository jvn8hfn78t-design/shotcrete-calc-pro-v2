import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = !!process.env.VERCEL;
const isCapacitorBuild = process.env.CAPACITOR_BUILD === "true";

export default defineConfig({
  nitro: isVercel
    ? {
        preset: "vercel",
      }
    : true,

  tanstackStart: {
    server: { entry: "server" },

    ...(isCapacitorBuild
      ? {
          spa: {
            enabled: true,
            prerender: {
              outputPath: "/index.html",
              crawlLinks: false,
              retryCount: 0,
            },
          },
        }
      : {}),
  },
});