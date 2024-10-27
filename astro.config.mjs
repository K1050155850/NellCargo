import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: 'https://K1050155850.github.io',
    base: 'NellCargo',
});
