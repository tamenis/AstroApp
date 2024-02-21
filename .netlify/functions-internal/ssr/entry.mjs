import { renderers } from './renderers.mjs';
import { manifest } from './manifest_vebaCtbS.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_qJAuS_NF.mjs');
const _page1 = () => import('./chunks/404_YkaxoM1w.mjs');
const _page2 = () => import('./chunks/formulario_dmqmJQUg.mjs');
const _page3 = () => import('./chunks/Contacto_qdCYhAPR.mjs');
const _page4 = () => import('./chunks/ContactoPrueba_2WbD3Zcg.mjs');
const _page5 = () => import('./chunks/Contenido2_w0SIk70c.mjs');
const _page6 = () => import('./chunks/Contenido3_1kQ5Qm_w.mjs');
const _page7 = () => import('./chunks/formularioExitoso_zMToFZvN.mjs');
const _page8 = () => import('./chunks/Galeria_0n4-icb9.mjs');
const _page9 = () => import('./chunks/Informacion_hp3q7u63.mjs');
const _page10 = () => import('./chunks/Personalizacion_oq4_kyLX.mjs');
const _page11 = () => import('./chunks/QuienesSomos_37WBH_cO.mjs');
const _page12 = () => import('./chunks/Tecnicas_A-ITDi8F.mjs');
const _page13 = () => import('./chunks/index_pG41oZt1.mjs');
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
    "middlewareSecret": "19d2355a-e9b0-4cdc-a024-227bddb072a2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
