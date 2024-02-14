import { renderers } from './renderers.mjs';
import { manifest } from './manifest_MYn6-egm.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_lIa91uMe.mjs');
const _page1 = () => import('./chunks/404_tG7H0iWV.mjs');
const _page2 = () => import('./chunks/validacion_CnUQSGd5.mjs');
const _page3 = () => import('./chunks/index_VX0f52zm.mjs');
const _page4 = () => import('./chunks/Contacto_b3-EZoqz.mjs');
const _page5 = () => import('./chunks/Contenido2_DYHCthS2.mjs');
const _page6 = () => import('./chunks/Contenido3_dKmD7o6F.mjs');
const _page7 = () => import('./chunks/formularioExitoso_CvQjuqPN.mjs');
const _page8 = () => import('./chunks/Galeria_wi1kRX4t.mjs');
const _page9 = () => import('./chunks/Informacion_H5nBufNK.mjs');
const _page10 = () => import('./chunks/Personalizacion_yuyDWSBr.mjs');
const _page11 = () => import('./chunks/QuienesSomos_fuE9-QuF.mjs');
const _page12 = () => import('./chunks/Tecnicas_qSHhgYh2.mjs');
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
    "middlewareSecret": "4c79770f-0441-4c81-b3e2-68232f30772f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
