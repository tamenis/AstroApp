import{_ as se}from"./preload-helper.hlDPvxQM.js";var H,p,ee,ue,w,J,_e,R,D={},B=[],fe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,V=Array.isArray;function S(e,_){for(var t in _)e[t]=_[t];return e}function te(e){var _=e.parentNode;_&&_.removeChild(e)}function C(e,_,t){var r,o,l,u={};for(l in _)l=="key"?r=_[l]:l=="ref"?o=_[l]:u[l]=_[l];if(arguments.length>2&&(u.children=arguments.length>3?H.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)u[l]===void 0&&(u[l]=e.defaultProps[l]);return N(e,u,r,o,null)}function N(e,_,t,r,o){var l={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++ee,__i:-1,__u:0};return o==null&&p.vnode!=null&&p.vnode(l),l}function I(e){return e.children}function U(e,_){this.props=e,this.context=_}function x(e,_){if(_==null)return e.__?x(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?x(e):null}function ae(e,_,t){var r,o=e.__v,l=o.__e,u=e.__P;if(u)return(r=S({},o)).__v=o.__v+1,p.vnode&&p.vnode(r),z(u,r,o,e.__n,u.ownerSVGElement!==void 0,32&o.__u?[l]:null,_,l??x(o),!!(32&o.__u),t),r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=l&&ne(r),r}function ne(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return ne(e)}}function K(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!A.__r++||J!==p.debounceRendering)&&((J=p.debounceRendering)||_e)(A)}function A(){var e,_,t,r=[],o=[];for(w.sort(R);e=w.shift();)e.__d&&(t=w.length,_=ae(e,r,o)||_,t===0||w.length>t?($(r,_,o),o.length=r.length=0,_=void 0,w.sort(R)):_&&p.__c&&p.__c(_,B));_&&$(r,_,o),A.__r=0}function oe(e,_,t,r,o,l,u,a,f,i,c){var n,h,s,v,b,y=r&&r.__k||B,d=_.length;for(t.__d=f,ce(t,_,y),f=t.__d,n=0;n<d;n++)(s=t.__k[n])!=null&&typeof s!="boolean"&&typeof s!="function"&&(h=s.__i===-1?D:y[s.__i]||D,s.__i=n,z(e,s,h,o,l,u,a,f,i,c),v=s.__e,s.ref&&h.ref!=s.ref&&(h.ref&&G(h.ref,null,s),c.push(s.ref,s.__c||v,s)),b==null&&v!=null&&(b=v),65536&s.__u||h.__k===s.__k?f=re(s,f,e):typeof s.type=="function"&&s.__d!==void 0?f=s.__d:v&&(f=v.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=f,t.__e=b}function ce(e,_,t){var r,o,l,u,a,f=_.length,i=t.length,c=i,n=0;for(e.__k=[],r=0;r<f;r++)(o=e.__k[r]=(o=_[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?N(null,o,null,null,o):V(o)?N(I,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?N(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,a=pe(o,t,u=r+n,c),o.__i=a,l=null,a!==-1&&(c--,(l=t[a])&&(l.__u|=131072)),l==null||l.__v===null?(a==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):a!==u&&(a===u+1?n++:a>u?c>f-u?n+=a-u:n--:n=a<u&&a==u-1?a-u:0,a!==r+n&&(o.__u|=65536))):(l=t[r])&&l.key==null&&l.__e&&(l.__e==e.__d&&(e.__d=x(l)),F(l,l,!1),t[r]=null,c--);if(c)for(r=0;r<i;r++)(l=t[r])!=null&&!(131072&l.__u)&&(l.__e==e.__d&&(e.__d=x(l)),F(l,l))}function re(e,_,t){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,_=re(r[o],_,t));return _}e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function pe(e,_,t,r){var o=e.key,l=e.type,u=t-1,a=t+1,f=_[t];if(f===null||f&&o==f.key&&l===f.type)return t;if(r>(f!=null&&!(131072&f.__u)?1:0))for(;u>=0||a<_.length;){if(u>=0){if((f=_[u])&&!(131072&f.__u)&&o==f.key&&l===f.type)return u;u--}if(a<_.length){if((f=_[a])&&!(131072&f.__u)&&o==f.key&&l===f.type)return a;a++}}return-1}function Q(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||fe.test(_)?t:t+"px"}function M(e,_,t,r,o){var l;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||Q(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||Q(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")l=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+l]=t,t?r?t.u=r.u:(t.u=Date.now(),e.addEventListener(_,l?Y:X,l)):e.removeEventListener(_,l?Y:X,l);else{if(o)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_!=="role"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function X(e){if(this.l){var _=this.l[e.type+!1];if(e.t){if(e.t<=_.u)return}else e.t=Date.now();return _(p.event?p.event(e):e)}}function Y(e){if(this.l)return this.l[e.type+!0](p.event?p.event(e):e)}function z(e,_,t,r,o,l,u,a,f,i){var c,n,h,s,v,b,y,d,g,k,E,P,q,T,W,m=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),l=[a=_.__e=t.__e]),(c=p.__b)&&c(_);e:if(typeof m=="function")try{if(d=_.props,g=(c=m.contextType)&&r[c.__c],k=c?g?g.props.value:c.__:r,t.__c?y=(n=_.__c=t.__c).__=n.__E:("prototype"in m&&m.prototype.render?_.__c=n=new m(d,k):(_.__c=n=new U(d,k),n.constructor=m,n.render=he),g&&g.sub(n),n.props=d,n.state||(n.state={}),n.context=k,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=S({},n.__s)),S(n.__s,m.getDerivedStateFromProps(d,n.__s))),s=n.props,v=n.state,n.__v=_,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&d!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(d,k),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(d,n.__s,k)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(n.props=d,n.state=n.__s,n.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(L){L&&(L.__=_)}),E=0;E<n._sb.length;E++)n.__h.push(n._sb[E]);n._sb=[],n.__h.length&&u.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(d,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,v,b)})}if(n.context=k,n.props=d,n.__P=e,n.__e=!1,P=p.__r,q=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,P&&P(_),c=n.render(n.props,n.state,n.context),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[]}else do n.__d=!1,P&&P(_),c=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++q<25);n.state=n.__s,n.getChildContext!=null&&(r=S(S({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(b=n.getSnapshotBeforeUpdate(s,v)),oe(e,V(W=c!=null&&c.type===I&&c.key==null?c.props.children:c)?W:[W],_,t,r,o,l,u,a,f,i),n.base=_.__e,_.__u&=-161,n.__h.length&&u.push(n),y&&(n.__E=n.__=null)}catch(L){_.__v=null,f||l!=null?(_.__e=a,_.__u|=f?160:32,l[l.indexOf(a)]=null):(_.__e=t.__e,_.__k=t.__k),p.__e(L,_,t)}else l==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=de(t.__e,_,t,r,o,l,u,f,i);(c=p.diffed)&&c(_)}function $(e,_,t){for(var r=0;r<t.length;r++)G(t[r],t[++r],t[++r]);p.__c&&p.__c(_,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(l){l.call(o)})}catch(l){p.__e(l,o.__v)}})}function de(e,_,t,r,o,l,u,a,f){var i,c,n,h,s,v,b,y=t.props,d=_.props,g=_.type;if(g==="svg"&&(o=!0),l!=null){for(i=0;i<l.length;i++)if((s=l[i])&&"setAttribute"in s==!!g&&(g?s.localName===g:s.nodeType===3)){e=s,l[i]=null;break}}if(e==null){if(g===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,d.is&&d),l=null,a=!1}if(g===null)y===d||a&&e.data===d||(e.data=d);else{if(l=l&&H.call(e.childNodes),y=t.props||D,!a&&l!=null)for(y={},i=0;i<e.attributes.length;i++)y[(s=e.attributes[i]).name]=s.value;for(i in y)s=y[i],i=="children"||(i=="dangerouslySetInnerHTML"?n=s:i==="key"||i in d||M(e,i,null,s,o));for(i in d)s=d[i],i=="children"?h=s:i=="dangerouslySetInnerHTML"?c=s:i=="value"?v=s:i=="checked"?b=s:i==="key"||a&&typeof s!="function"||y[i]===s||M(e,i,s,y[i],o);if(c)a||n&&(c.__html===n.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),_.__k=[];else if(n&&(e.innerHTML=""),oe(e,V(h)?h:[h],_,t,r,o&&g!=="foreignObject",l,u,l?l[0]:t.__k&&x(t,0),a,f),l!=null)for(i=l.length;i--;)l[i]!=null&&te(l[i]);a||(i="value",v!==void 0&&(v!==e[i]||g==="progress"&&!v||g==="option"&&v!==y[i])&&M(e,i,v,y[i],!1),i="checked",b!==void 0&&b!==e[i]&&M(e,i,b,y[i],!1))}return e}function G(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){p.__e(r,t)}}function F(e,_,t){var r,o;if(p.unmount&&p.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||G(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){p.__e(l,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&F(r[o],_,t||typeof e.type!="function");t||e.__e==null||te(e.__e),e.__=e.__e=e.__d=void 0}function he(e,_,t){return this.constructor(e,t)}function j(e,_,t){var r,o,l,u;p.__&&p.__(e,_),o=(r=typeof t=="function")?null:t&&t.__k||_.__k,l=[],u=[],z(_,e=(!r&&t||_).__k=C(I,null,[e]),o||D,D,_.ownerSVGElement!==void 0,!r&&t?[t]:o?null:_.firstChild?H.call(_.childNodes):null,l,!r&&t?t:o?o.__e:_.firstChild,r,u),e.__d=void 0,$(l,e,u)}function le(e,_){j(e,_,le)}H=B.slice,p={__e:function(e,_,t,r){for(var o,l,u;_=_.__;)if((o=_.__c)&&!o.__)try{if((l=o.constructor)&&l.getDerivedStateFromError!=null&&(o.setState(l.getDerivedStateFromError(e)),u=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(a){e=a}throw e}},ee=0,ue=function(e){return e!=null&&e.constructor==null},U.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},t),this.props)),e&&S(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),K(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),K(this))},U.prototype.render=I,w=[],_e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R=function(e,_){return e.__v.__b-_.__v.__b},A.__r=0;const ie=({value:e,name:_,hydrate:t=!0})=>e?C(t?"astro-slot":"astro-static-slot",{name:_,dangerouslySetInnerHTML:{__html:e}}):null;ie.shouldComponentUpdate=()=>!1;var Z=ie;const O=new Map;var ye=e=>async(_,t,{default:r,...o},{client:l})=>{if(!e.hasAttribute("ssr"))return;for(const[f,i]of Object.entries(o))t[f]=C(Z,{value:i,name:f});if(e.dataset.preactSignals){const{signal:f}=await se(()=>import("./signals.module.bL9FZnbv.js"),__vite__mapDeps([0,1]));let i=JSON.parse(e.dataset.preactSignals);for(const[c,n]of Object.entries(i)){if(!O.has(n)){const h=f(t[c]);O.set(n,h)}t[c]=O.get(n)}}(l!=="only"?le:j)(C(_,t,r!=null?C(Z,{value:r}):r),e),e.addEventListener("astro:unmount",()=>j(null,e),{once:!0})};export{U as b,ye as c,p as l,ue as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/signals.module.bL9FZnbv.js","_astro/preload-helper.hlDPvxQM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}