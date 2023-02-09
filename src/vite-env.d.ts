/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DB_HOST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
