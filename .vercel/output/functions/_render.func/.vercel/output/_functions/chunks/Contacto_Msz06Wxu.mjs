export { renderers } from '../renderers.mjs';

const page = () => import('./pages/Contacto_V4MT-Md_.mjs').then(n => n.C);

export { page };
