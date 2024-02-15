import{l as u,t as ni,b as oi}from"./client.uraMUaZ6.js";import"./preload-helper.hlDPvxQM.js";var S,v,N,P,O=0,I=[],m=[],T=u.__b,z=u.__r,G=u.diffed,J=u.__c,B=u.unmount;function K(t,i){u.__h&&u.__h(v,t,O||i),O=0;var n=v.__H||(v.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:m}),n.__[t]}function ri(t,i){var n=K(S++,3);!u.__s&&M(n.__H,i)&&(n.__=t,n.i=i,v.__H.__h.push(n))}function L(t){return O=5,H(function(){return{current:t}},[])}function H(t,i){var n=K(S++,7);return M(n.__H,i)?(n.__V=t(),n.i=i,n.__h=t,n.__V):n.__}function fi(){for(var t;t=I.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(b),t.__H.__h.forEach(F),t.__H.__h=[]}catch(i){t.__H.__h=[],u.__e(i,t.__v)}}u.__b=function(t){v=null,T&&T(t)},u.__r=function(t){z&&z(t),S=0;var i=(v=t.__c).__H;i&&(N===v?(i.__h=[],v.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=m,n.__N=n.i=void 0})):(i.__h.forEach(b),i.__h.forEach(F),i.__h=[],S=0)),N=v},u.diffed=function(t){G&&G(t);var i=t.__c;i&&i.__H&&(i.__H.__h.length&&(I.push(i)!==1&&P===u.requestAnimationFrame||((P=u.requestAnimationFrame)||ei)(fi)),i.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==m&&(n.__=n.__V),n.i=void 0,n.__V=m})),N=v=null},u.__c=function(t,i){i.some(function(n){try{n.__h.forEach(b),n.__h=n.__h.filter(function(o){return!o.__||F(o)})}catch(o){i.some(function(f){f.__h&&(f.__h=[])}),i=[],u.__e(o,n.__v)}}),J&&J(t,i)},u.unmount=function(t){B&&B(t);var i,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{b(o)}catch(f){i=f}}),n.__H=void 0,i&&u.__e(i,n.__v))};var D=typeof requestAnimationFrame=="function";function ei(t){var i,n=function(){clearTimeout(o),D&&cancelAnimationFrame(i),setTimeout(t)},o=setTimeout(n,100);D&&(i=requestAnimationFrame(n))}function b(t){var i=v,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),v=i}function F(t){var i=v;t.__c=t.__(),v=i}function M(t,i){return!t||t.length!==i.length||i.some(function(n,o){return n!==t[o]})}function x(){throw new Error("Cycle detected")}var _i=Symbol.for("preact-signals");function E(){if(h>1)h--;else{for(var t,i=!1;p!==void 0;){var n=p;for(p=void 0,j++;n!==void 0;){var o=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&W(n))try{n.c()}catch(f){i||(t=f,i=!0)}n=o}}if(j=0,h--,i)throw t}}function ai(t){if(h>0)return t();h++;try{return t()}finally{E()}}var e=void 0,V=0;function di(t){if(V>0)return t();var i=e;e=void 0,V++;try{return t()}finally{V--,e=i}}var p=void 0,h=0,j=0,g=0;function Q(t){if(e!==void 0){var i=t.n;if(i===void 0||i.t!==e)return i={i:0,S:t,p:e.s,n:void 0,t:e,e:void 0,x:void 0,r:i},e.s!==void 0&&(e.s.n=i),e.s=i,t.n=i,32&e.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=e.s,i.n=void 0,e.s.n=i,e.s=i),i}}function s(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}s.prototype.brand=_i;s.prototype.h=function(){return!0};s.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};s.prototype.U=function(t){if(this.t!==void 0){var i=t.e,n=t.x;i!==void 0&&(i.x=n,t.e=void 0),n!==void 0&&(n.e=i,t.x=void 0),t===this.t&&(this.t=n)}};s.prototype.subscribe=function(t){var i=this;return U(function(){var n=i.value,o=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=o}})};s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+""};s.prototype.toJSON=function(){return this.value};s.prototype.peek=function(){return this.v};Object.defineProperty(s.prototype,"value",{get:function(){var t=Q(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(e instanceof c&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){j>100&&x(),this.v=t,this.i++,g++,h++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{E()}}}});function R(t){return new s(t)}function W(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function X(t){for(var i=t.s;i!==void 0;i=i.n){var n=i.S.n;if(n!==void 0&&(i.r=n),i.S.n=i,i.i=-1,i.n===void 0){t.s=i;break}}}function Y(t){for(var i=t.s,n=void 0;i!==void 0;){var o=i.p;i.i===-1?(i.S.U(i),o!==void 0&&(o.n=i.n),i.n!==void 0&&(i.n.p=o)):n=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=o}t.s=n}function c(t){s.call(this,void 0),this.x=t,this.s=void 0,this.g=g-1,this.f=4}(c.prototype=new s).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===g))return!0;if(this.g=g,this.f|=1,this.i>0&&!W(this))return this.f&=-2,!0;var t=e;try{X(this),e=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return e=t,Y(this),this.f&=-2,!0};c.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}s.prototype.S.call(this,t)};c.prototype.U=function(t){if(this.t!==void 0&&(s.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};c.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};c.prototype.peek=function(){if(this.h()||x(),16&this.f)throw this.v;return this.v};Object.defineProperty(c.prototype,"value",{get:function(){1&this.f&&x();var t=Q(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Z(t){return new c(t)}function ii(t){var i=t.u;if(t.u=void 0,typeof i=="function"){h++;var n=e;e=void 0;try{i()}catch(o){throw t.f&=-2,t.f|=8,q(t),o}finally{e=n,E()}}}function q(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,ii(t)}function ui(t){if(e!==this)throw new Error("Out-of-order effect");Y(this),e=t,this.f&=-2,8&this.f&&q(this),E()}function l(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}l.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.u=i)}finally{t()}};l.prototype.S=function(){1&this.f&&x(),this.f|=1,this.f&=-9,ii(this),X(this),h++;var t=e;return e=this,ui.bind(this,t)};l.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)};l.prototype.d=function(){this.f|=8,1&this.f||q(this)};function U(t){var i=new l(t);try{i.c()}catch(n){throw i.d(),n}return i.d.bind(i)}var k,A;function d(t,i){u[t]=i.bind(null,u[t]||function(){})}function w(t){A&&A(),A=t&&t.S()}function ti(t){var i=this,n=t.data,o=vi(n);o.value=n;var f=H(function(){for(var r=i.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return i.__$u.c=function(){var _;!ni(f.peek())&&((_=i.base)==null?void 0:_.nodeType)===3?i.base.data=f.peek():(i.__$f|=1,i.setState({}))},Z(function(){var _=o.value.value;return _===0?0:_===!0?"":_||""})},[]);return f.value}ti.displayName="_st";Object.defineProperties(s.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ti},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});d("__b",function(t,i){if(typeof i.type=="string"){var n,o=i.props;for(var f in o)if(f!=="children"){var r=o[f];r instanceof s&&(n||(i.__np=n={}),n[f]=r,o[f]=r.peek())}}t(i)});d("__r",function(t,i){w();var n,o=i.__c;o&&(o.__$f&=-2,(n=o.__$u)===void 0&&(o.__$u=n=function(f){var r;return U(function(){r=this}),r.c=function(){o.__$f|=1,o.setState({})},r}())),k=o,w(n),t(i)});d("__e",function(t,i,n,o){w(),k=void 0,t(i,n,o)});d("diffed",function(t,i){w(),k=void 0;var n;if(typeof i.type=="string"&&(n=i.__e)){var o=i.__np,f=i.props;if(o){var r=n.U;if(r)for(var _ in r){var a=r[_];a!==void 0&&!(_ in o)&&(a.d(),r[_]=void 0)}else n.U=r={};for(var y in o){var $=r[y],C=o[y];$===void 0?($=si(n,y,C,f),r[y]=$):$.o(C,f)}}}t(i)});function si(t,i,n,o){var f=i in t&&t.ownerSVGElement===void 0,r=R(n);return{o:function(_,a){r.value=_,o=a},d:U(function(){var _=r.value.value;o[i]!==_&&(o[i]=_,f?t[i]=_:_?t.setAttribute(i,_):t.removeAttribute(i))})}}d("unmount",function(t,i){if(typeof i.type=="string"){var n=i.__e;if(n){var o=n.U;if(o){n.U=void 0;for(var f in o){var r=o[f];r&&r.d()}}}}else{var _=i.__c;if(_){var a=_.__$u;a&&(_.__$u=void 0,a.d())}}t(i)});d("__h",function(t,i,n,o){(o<3||o===9)&&(i.__$f|=2),t(i,n,o)});oi.prototype.shouldComponentUpdate=function(t,i){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var o in i)return!0;for(var f in t)if(f!=="__source"&&t[f]!==this.props[f])return!0;for(var r in this.props)if(!(r in t))return!0;return!1};function vi(t){return H(function(){return R(t)},[])}function pi(t){var i=L(t);return i.current=t,k.__$f|=4,H(function(){return Z(function(){return i.current()})},[])}function li(t){var i=L(t);i.current=t,ri(function(){return U(function(){return i.current()})},[])}export{s as Signal,ai as batch,Z as computed,U as effect,R as signal,di as untracked,pi as useComputed,vi as useSignal,li as useSignalEffect};
