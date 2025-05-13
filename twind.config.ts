import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
} as Options;

plugins: [
  require('@tailwindcss/line-clamp'),
],
