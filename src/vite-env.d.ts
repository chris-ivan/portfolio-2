/// <reference types="vite/client" />
// / <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE: string;
  readonly VITE_EMAILJS_TEMPLATE: string;
  readonly VITE_EMAILJS_ENDPOINT: string;
  readonly VITE_EMAILJS_USER_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
