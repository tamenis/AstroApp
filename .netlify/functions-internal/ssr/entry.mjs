import { renderers } from './renderers.mjs';
import { manifest } from './manifest_F9teN9s1.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_agQCRD5M.mjs');
const _page1 = () => import('./chunks/404_CxqPr16A.mjs');
const _page2 = () => import('./chunks/endpoint_tp6LJZcJ.mjs');
const _page3 = () => import('./chunks/Contacto_-SyoxbYC.mjs');
const _page4 = () => import('./chunks/Contenido2_WIaRwUhV.mjs');
const _page5 = () => import('./chunks/Contenido3_cQ-KgiWe.mjs');
const _page6 = () => import('./chunks/formHandler_HdhTl4FW.mjs');
const _page7 = () => import('./chunks/formularioExitoso_ocPoFfyF.mjs');
const _page8 = () => import('./chunks/Galeria_TAlnfqke.mjs');
const _page9 = () => import('./chunks/Informacion_BNA7G46N.mjs');
const _page10 = () => import('./chunks/Personalizacion_RwraU9Bd.mjs');
const _page11 = () => import('./chunks/QuienesSomos_hNxtMHfU.mjs');
const _page12 = () => import('./chunks/Tecnicas_GvRSwsA9.mjs');
const _page13 = () => import('./chunks/index_Fc1HQBkI.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/endpoint.ts", _page2],
    ["src/pages/Contacto.astro", _page3],
    ["src/pages/Contenido2.astro", _page4],
    ["src/pages/Contenido3.astro", _page5],
    ["src/pages/formHandler.ts", _page6],
    ["src/pages/formularioExitoso.astro", _page7],
    ["src/pages/Galeria.astro", _page8],
    ["src/pages/Informacion.astro", _page9],
    ["src/pages/Personalizacion.astro", _page10],
    ["src/pages/QuienesSomos.astro", _page11],
    ["src/pages/Tecnicas.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "5d4499bb-5039-49b8-bc23-2b4ed1c5ba5c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
