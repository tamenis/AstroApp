import { renderers } from './renderers.mjs';
import { manifest } from './manifest_dqrbrAIY.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_nTyU7kDh.mjs');
const _page1 = () => import('./chunks/404_-iwYrrwE.mjs');
const _page2 = () => import('./chunks/Contacto_vZsI_JyY.mjs');
const _page3 = () => import('./chunks/Contenido2_lyF8vEKu.mjs');
const _page4 = () => import('./chunks/Contenido3_uwaIo6DK.mjs');
const _page5 = () => import('./chunks/formularioExitoso_eORBtz4g.mjs');
const _page6 = () => import('./chunks/Galeria_xl0kYhOQ.mjs');
const _page7 = () => import('./chunks/Informacion__jgkHznd.mjs');
const _page8 = () => import('./chunks/Personalizacion_A4LzYZDa.mjs');
const _page9 = () => import('./chunks/QuienesSomos_7P-FCZHT.mjs');
const _page10 = () => import('./chunks/Tecnicas_sJ6SVSvk.mjs');
const _page11 = () => import('./chunks/index_xUPwpchb.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/Contacto.astro", _page2],
    ["src/pages/Contenido2.astro", _page3],
    ["src/pages/Contenido3.astro", _page4],
    ["src/pages/formularioExitoso.astro", _page5],
    ["src/pages/Galeria.astro", _page6],
    ["src/pages/Informacion.astro", _page7],
    ["src/pages/Personalizacion.astro", _page8],
    ["src/pages/QuienesSomos.astro", _page9],
    ["src/pages/Tecnicas.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "5b2e3e59-1c18-4507-8959-9b98b2bcd3e5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
