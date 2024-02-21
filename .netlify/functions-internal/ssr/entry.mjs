import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cK0okLFu.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_agQCRD5M.mjs');
const _page1 = () => import('./chunks/404_SxHNroll.mjs');
const _page2 = () => import('./chunks/Contacto_RTHDFuLK.mjs');
const _page3 = () => import('./chunks/ContactoPrueba_mjjYE0FU.mjs');
const _page4 = () => import('./chunks/Contenido2_wXoCwcOf.mjs');
const _page5 = () => import('./chunks/Contenido3_jMpVlnqd.mjs');
const _page6 = () => import('./chunks/formulario_Lq-V0m2L.mjs');
const _page7 = () => import('./chunks/formularioExitoso_fYLQ8NWI.mjs');
const _page8 = () => import('./chunks/Galeria_V72iQzwL.mjs');
const _page9 = () => import('./chunks/Informacion_Uuh2M7Bo.mjs');
const _page10 = () => import('./chunks/Personalizacion_FPIWsl8g.mjs');
const _page11 = () => import('./chunks/QuienesSomos_S5tVjtLB.mjs');
const _page12 = () => import('./chunks/Tecnicas_5az7yCTU.mjs');
const _page13 = () => import('./chunks/index_jbb2Pmu_.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/Contacto.astro", _page2],
    ["src/pages/ContactoPrueba.astro", _page3],
    ["src/pages/Contenido2.astro", _page4],
    ["src/pages/Contenido3.astro", _page5],
    ["src/pages/formulario.ts", _page6],
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
    "middlewareSecret": "1b5b8244-fe5b-4ee3-8480-03906fe52b5c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
