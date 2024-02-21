import { renderers } from './renderers.mjs';
import { manifest } from './manifest_x8vS3hFd.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_qJAuS_NF.mjs');
const _page1 = () => import('./chunks/404_fcOCofxJ.mjs');
const _page2 = () => import('./chunks/formulario_Dqe1hoXZ.mjs');
const _page3 = () => import('./chunks/Contacto_PfbgkQsC.mjs');
const _page4 = () => import('./chunks/Contenido2_V3jfa5pq.mjs');
const _page5 = () => import('./chunks/Contenido3_KJplXxJX.mjs');
const _page6 = () => import('./chunks/formularioExitoso_0RXoejTK.mjs');
const _page7 = () => import('./chunks/Galeria_5ElfP0LJ.mjs');
const _page8 = () => import('./chunks/Informacion_dJiGibGa.mjs');
const _page9 = () => import('./chunks/Personalizacion_ulreef4D.mjs');
const _page10 = () => import('./chunks/QuienesSomos_mEYtLPGT.mjs');
const _page11 = () => import('./chunks/Tecnicas_EdX3ycMe.mjs');
const _page12 = () => import('./chunks/index_kJ6GfkW5.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/formulario.ts", _page2],
    ["src/pages/Contacto.astro", _page3],
    ["src/pages/Contenido2.astro", _page4],
    ["src/pages/Contenido3.astro", _page5],
    ["src/pages/formularioExitoso.astro", _page6],
    ["src/pages/Galeria.astro", _page7],
    ["src/pages/Informacion.astro", _page8],
    ["src/pages/Personalizacion.astro", _page9],
    ["src/pages/QuienesSomos.astro", _page10],
    ["src/pages/Tecnicas.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2a219f34-6ec0-4415-9f37-b951b12f8d34"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
