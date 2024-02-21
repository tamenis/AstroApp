export { renderers } from '../renderers.mjs';

const page = () => import('./pages/Informacion_n3-V_5Lx.mjs').then(n => n.I);

export { page };
