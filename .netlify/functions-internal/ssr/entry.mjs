import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Hz_S7KXq.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_agQCRD5M.mjs');
const _page1 = () => import('./chunks/404_j0G2uP6B.mjs');
const _page2 = () => import('./chunks/formulario_MNFsFbDm.mjs');
const _page3 = () => import('./chunks/Contacto_RTHDFuLK.mjs');
const _page4 = () => import('./chunks/ContactoPrueba_T_MCeuvB.mjs');
const _page5 = () => import('./chunks/Contenido2_h7hOc3V-.mjs');
const _page6 = () => import('./chunks/Contenido3_gvBNj9zT.mjs');
const _page7 = () => import('./chunks/formularioExitoso_8BXN9n6n.mjs');
const _page8 = () => import('./chunks/Galeria_B6KhCZHK.mjs');
const _page9 = () => import('./chunks/Informacion_pba8Qqgz.mjs');
const _page10 = () => import('./chunks/Personalizacion_htdjpJyX.mjs');
const _page11 = () => import('./chunks/QuienesSomos_5Pc5j8Q4.mjs');
const _page12 = () => import('./chunks/Tecnicas_AwCMboI1.mjs');
const _page13 = () => import('./chunks/index_DGaQIzcH.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/formulario.ts", _page2],
    ["src/pages/Contacto.astro", _page3],
    ["src/pages/ContactoPrueba.astro", _page4],
    ["src/pages/Contenido2.astro", _page5],
    ["src/pages/Contenido3.astro", _page6],
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
    "middlewareSecret": "3c739c02-94f2-4683-8ff1-7b77e853b2ae"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
