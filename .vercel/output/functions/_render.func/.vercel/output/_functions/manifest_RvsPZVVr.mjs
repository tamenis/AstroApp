import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_EF-VlZpl.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"Contenido2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contenido2","isIndex":false,"type":"page","pattern":"^\\/Contenido2\\/?$","segments":[[{"content":"Contenido2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Contenido2.astro","pathname":"/Contenido2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"Contenido3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contenido3","isIndex":false,"type":"page","pattern":"^\\/Contenido3\\/?$","segments":[[{"content":"Contenido3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Contenido3.astro","pathname":"/Contenido3","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"formularioExitoso/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/formularioexitoso","isIndex":false,"type":"page","pattern":"^\\/formularioExitoso\\/?$","segments":[[{"content":"formularioExitoso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/formularioExitoso.astro","pathname":"/formularioExitoso","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"Galeria/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/galeria","isIndex":false,"type":"page","pattern":"^\\/Galeria\\/?$","segments":[[{"content":"Galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Galeria.astro","pathname":"/Galeria","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"Informacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/informacion","isIndex":false,"type":"page","pattern":"^\\/Informacion\\/?$","segments":[[{"content":"Informacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Informacion.astro","pathname":"/Informacion","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"Personalizacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/personalizacion","isIndex":false,"type":"page","pattern":"^\\/Personalizacion\\/?$","segments":[[{"content":"Personalizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Personalizacion.astro","pathname":"/Personalizacion","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"QuienesSomos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/quienessomos","isIndex":false,"type":"page","pattern":"^\\/QuienesSomos\\/?$","segments":[[{"content":"QuienesSomos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/QuienesSomos.astro","pathname":"/QuienesSomos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"Tecnicas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tecnicas","isIndex":false,"type":"page","pattern":"^\\/Tecnicas\\/?$","segments":[[{"content":"Tecnicas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Tecnicas.astro","pathname":"/Tecnicas","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DIC1WmG9.js"}],"styles":[{"type":"external","src":"/_astro/Contacto.gysGWYdG.css"},{"type":"inline","content":"nav{position:fixed;top:0;z-index:50;width:100%;border-color:#000;background-color:#dedddc}@media (prefers-color-scheme: dark){nav{--tw-bg-opacity: 1;background-color:rgb(24 25 29 / var(--tw-bg-opacity));border-width:2px}}nav{border-bottom-width:2px}@media (prefers-color-scheme: dark){nav{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}}nav{padding:1.5rem}@media (min-width: 1024px){nav{padding-right:1.25rem;padding-left:.75rem}}nav{display:flex;align-items:center;justify-content:space-between}@media screen and (max-width: 450px){.LogoGithub{display:none}}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}html{font-family:monospace,system-ui;background:#e0dddd}@media (prefers-color-scheme: dark){html{--tw-bg-opacity: 1;background-color:rgb(24 25 29 / var(--tw-bg-opacity))}}html{overflow-x:hidden;scrollbar-width:none}body{display:grid;grid-template-areas:\"Header Header\" \"Sidebar Slot\" \"Sidebar Slot\";grid-template-columns:.15fr .85fr;grid-template-rows:.1fr .5fr}body::-webkit-scrollbar{display:none}@media (width<1480px){#sidebar{display:none}body{grid-template-areas:\"Header\" \"Slot\";grid-template-columns:1fr;grid-template-rows:.2fr 1fr}}\n"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/Contacto\\/?$","segments":[[{"content":"Contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Contacto.astro","pathname":"/Contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/tamenis/Documents/Uned/AstroApp/src/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contacto.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/Contacto@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contenido2.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/Contenido2@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contenido3.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/Contenido3@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Galeria.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/Galeria@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Informacion.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/Informacion@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Personalizacion.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/Personalizacion@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/QuienesSomos.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/QuienesSomos@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Tecnicas.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/Tecnicas@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/formularioExitoso.astro",{"propagation":"none","containsHead":true}],["C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_qZYZDDLW.mjs","\u0000@astrojs-manifest":"manifest_RvsPZVVr.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_cx6Dek-4.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_pBRZvTnt.mjs","\u0000@astro-page:src/pages/Contacto@_@astro":"chunks/Contacto_WD2Hitic.mjs","\u0000@astro-page:src/pages/Contenido2@_@astro":"chunks/Contenido2_HJTbH3DW.mjs","\u0000@astro-page:src/pages/Contenido3@_@astro":"chunks/Contenido3_PcPWmoTY.mjs","\u0000@astro-page:src/pages/formularioExitoso@_@astro":"chunks/formularioExitoso_q_geJFud.mjs","\u0000@astro-page:src/pages/Galeria@_@astro":"chunks/Galeria_NBhNXDpg.mjs","\u0000@astro-page:src/pages/Informacion@_@astro":"chunks/Informacion_4Svjl8fS.mjs","\u0000@astro-page:src/pages/Personalizacion@_@astro":"chunks/Personalizacion_fgMnDFqD.mjs","\u0000@astro-page:src/pages/QuienesSomos@_@astro":"chunks/QuienesSomos_ulx2VWbU.mjs","\u0000@astro-page:src/pages/Tecnicas@_@astro":"chunks/Tecnicas_YON72tum.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_sVOt2_Me.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.DIC1WmG9.js","/astro/hoisted.js?q=0":"_astro/hoisted.6ejUE41p.js","C:/Users/tamenis/Documents/Uned/AstroApp/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.Ylh9TGkz.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/Contacto.gysGWYdG.css","/_astro/Galeria.r0cKqxDr.css","/Contacto.svg","/favicon.svg","/Galeria.svg","/img-1.webp","/img-10.webp","/img-11.webp","/img-12.webp","/img-2.webp","/img-3.webp","/img-4.webp","/img-5.webp","/img-6.webp","/img-7.webp","/img-8.webp","/img-9.webp","/Informacion.svg","/Inicio.svg","/Logo.svg","/QuienesSomos.svg","/_astro/hoisted.6ejUE41p.js","/_astro/hoisted.DIC1WmG9.js","/_astro/photoswipe.esm.Ylh9TGkz.js","/404.html","/Contenido2/index.html","/Contenido3/index.html","/formularioExitoso/index.html","/Galeria/index.html","/Informacion/index.html","/Personalizacion/index.html","/QuienesSomos/index.html","/Tecnicas/index.html","/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
