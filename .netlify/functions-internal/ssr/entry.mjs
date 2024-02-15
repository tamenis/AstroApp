import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Xbpxhenx.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_lIa91uMe.mjs');
const _page1 = () => import('./chunks/404_mj2SQUDg.mjs');
const _page2 = () => import('./chunks/validacion_CnUQSGd5.mjs');
const _page3 = () => import('./chunks/index_GqcJ9MYF.mjs');
const _page4 = () => import('./chunks/Contacto_Elv-R9k9.mjs');
const _page5 = () => import('./chunks/Contenido2_hk5vWvgx.mjs');
const _page6 = () => import('./chunks/Contenido3_FczeVAid.mjs');
const _page7 = () => import('./chunks/formularioExitoso_gk-OFPoC.mjs');
const _page8 = () => import('./chunks/Galeria_t-GZMMvF.mjs');
const _page9 = () => import('./chunks/Informacion_MoqQnHzh.mjs');
const _page10 = () => import('./chunks/Personalizacion_2qdU_st2.mjs');
const _page11 = () => import('./chunks/QuienesSomos_ikLJJpg_.mjs');
const _page12 = () => import('./chunks/Tecnicas_K_iIaaBE.mjs');
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
    "middlewareSecret": "7229e27a-bd7f-49fc-87dc-37428bc0e12e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
