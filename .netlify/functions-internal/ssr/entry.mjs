import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Pnw3gAuM.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_lIa91uMe.mjs');
const _page1 = () => import('./chunks/404_OqFN7Pdl.mjs');
const _page2 = () => import('./chunks/validacion_4p9hSEZX.mjs');
const _page3 = () => import('./chunks/index_gYQPGGVJ.mjs');
const _page4 = () => import('./chunks/Contacto_HatkPHJO.mjs');
const _page5 = () => import('./chunks/Contenido2_SVRyIjPT.mjs');
const _page6 = () => import('./chunks/Contenido3_Z7Y9QIbO.mjs');
const _page7 = () => import('./chunks/formularioExitoso_Qow_mka8.mjs');
const _page8 = () => import('./chunks/Galeria_PGDQOzcd.mjs');
const _page9 = () => import('./chunks/Informacion_pQU9ZpKW.mjs');
const _page10 = () => import('./chunks/Personalizacion_8O-wF1XJ.mjs');
const _page11 = () => import('./chunks/QuienesSomos_Fx64W-HP.mjs');
const _page12 = () => import('./chunks/Tecnicas_C3nzu9Ai.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/validacion.ts", _page2],
    ["src/pages/index.astro", _page3],
    ["src/pages/Contacto.astro", _page4],
    ["src/pages/Contenido2.astro", _page5],
    ["src/pages/Contenido3.astro", _page6],
    ["src/pages/formularioExitoso.astro", _page7],
    ["src/pages/Galeria.astro", _page8],
    ["src/pages/Informacion.astro", _page9],
    ["src/pages/Personalizacion.astro", _page10],
    ["src/pages/QuienesSomos.astro", _page11],
    ["src/pages/Tecnicas.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "28a27a52-7533-4369-a62b-928bc31af44a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
