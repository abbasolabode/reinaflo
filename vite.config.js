import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            keyframes: {
              zoomBlur: {
                '0%': {
                  transform: 'translate3d(0px, 128px, 0px) scale(1.0949)',
                  filter: 'blur(7.5px) brightness(0.715)',
                },
                '100%': {
                  transform: 'translate3d(0px, 0px, 0px) scale(1)',
                  filter: 'blur(0px) brightness(1)',
                },
              },
            },
            animation: {
              zoomBlur: 'zoomBlur 0.6s ease-out forwards',
            },
          },
        },
      },
    }),
  ],
});