(function(){var e=this,t=e._,a={},r=Array.prototype,s=Object.prototype,n=Function.prototype,i=r.push,l=r.slice,o=r.concat,u=s.toString,d=s.hasOwnProperty,p=r.forEach,m=r.map,g=r.reduce,k=r.reduceRight,c=r.filter,_=r.every,h=r.some,f=r.indexOf,v=r.lastIndexOf,z=Array.isArray,y=Object.keys,b=n.bind,j=function(e){return e instanceof j?e:this instanceof j?(this._wrapped=e,void 0):new j(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):e._=j,j.VERSION="1.4.4";var w=j.each=j.forEach=function(e,t,r){if(null!=e)if(p&&e.forEach===p)e.forEach(t,r);else if(e.length===+e.length){for(var s=0,n=e.length;n>s;s++)if(t.call(r,e[s],s,e)===a)return}else for(var i in e)if(j.has(e,i)&&t.call(r,e[i],i,e)===a)return};j.map=j.collect=function(e,t,a){var r=[];return null==e?r:m&&e.map===m?e.map(t,a):(w(e,function(e,s,n){r[r.length]=t.call(a,e,s,n)}),r)};var x="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(e,t,a,r){var s=arguments.length>2;if(null==e&&(e=[]),g&&e.reduce===g)return r&&(t=j.bind(t,r)),s?e.reduce(t,a):e.reduce(t);if(w(e,function(e,n,i){s?a=t.call(r,a,e,n,i):(a=e,s=!0)}),!s)throw new TypeError(x);return a},j.reduceRight=j.foldr=function(e,t,a,r){var s=arguments.length>2;if(null==e&&(e=[]),k&&e.reduceRight===k)return r&&(t=j.bind(t,r)),s?e.reduceRight(t,a):e.reduceRight(t);var n=e.length;if(n!==+n){var i=j.keys(e);n=i.length}if(w(e,function(l,o,u){o=i?i[--n]:--n,s?a=t.call(r,a,e[o],o,u):(a=e[o],s=!0)}),!s)throw new TypeError(x);return a},j.find=j.detect=function(e,t,a){var r;return M(e,function(e,s,n){return t.call(a,e,s,n)?(r=e,!0):void 0}),r},j.filter=j.select=function(e,t,a){var r=[];return null==e?r:c&&e.filter===c?e.filter(t,a):(w(e,function(e,s,n){t.call(a,e,s,n)&&(r[r.length]=e)}),r)},j.reject=function(e,t,a){return j.filter(e,function(e,r,s){return!t.call(a,e,r,s)},a)},j.every=j.all=function(e,t,r){t||(t=j.identity);var s=!0;return null==e?s:_&&e.every===_?e.every(t,r):(w(e,function(e,n,i){return(s=s&&t.call(r,e,n,i))?void 0:a}),!!s)};var M=j.some=j.any=function(e,t,r){t||(t=j.identity);var s=!1;return null==e?s:h&&e.some===h?e.some(t,r):(w(e,function(e,n,i){return s||(s=t.call(r,e,n,i))?a:void 0}),!!s)};j.contains=j.include=function(e,t){return null==e?!1:f&&e.indexOf===f?-1!=e.indexOf(t):M(e,function(e){return e===t})},j.invoke=function(e,t){var a=l.call(arguments,2),r=j.isFunction(t);return j.map(e,function(e){return(r?t:e[t]).apply(e,a)})},j.pluck=function(e,t){return j.map(e,function(e){return e[t]})},j.where=function(e,t,a){return j.isEmpty(t)?a?null:[]:j[a?"find":"filter"](e,function(e){for(var a in t)if(t[a]!==e[a])return!1;return!0})},j.findWhere=function(e,t){return j.where(e,t,!0)},j.max=function(e,t,a){if(!t&&j.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.max.apply(Math,e);if(!t&&j.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return w(e,function(e,s,n){var i=t?t.call(a,e,s,n):e;i>=r.computed&&(r={value:e,computed:i})}),r.value},j.min=function(e,t,a){if(!t&&j.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.min.apply(Math,e);if(!t&&j.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return w(e,function(e,s,n){var i=t?t.call(a,e,s,n):e;r.computed>i&&(r={value:e,computed:i})}),r.value},j.shuffle=function(e){var t,a=0,r=[];return w(e,function(e){t=j.random(a++),r[a-1]=r[t],r[t]=e}),r};var T=function(e){return j.isFunction(e)?e:function(t){return t[e]}};j.sortBy=function(e,t,a){var r=T(t);return j.pluck(j.map(e,function(e,t,s){return{value:e,index:t,criteria:r.call(a,e,t,s)}}).sort(function(e,t){var a=e.criteria,r=t.criteria;if(a!==r){if(a>r||void 0===a)return 1;if(r>a||void 0===r)return-1}return e.index<t.index?-1:1}),"value")};var E=function(e,t,a,r){var s={},n=T(t||j.identity);return w(e,function(t,i){var l=n.call(a,t,i,e);r(s,l,t)}),s};j.groupBy=function(e,t,a){return E(e,t,a,function(e,t,a){(j.has(e,t)?e[t]:e[t]=[]).push(a)})},j.countBy=function(e,t,a){return E(e,t,a,function(e,t){j.has(e,t)||(e[t]=0),e[t]++})},j.sortedIndex=function(e,t,a,r){a=null==a?j.identity:T(a);for(var s=a.call(r,t),n=0,i=e.length;i>n;){var l=n+i>>>1;s>a.call(r,e[l])?n=l+1:i=l}return n},j.toArray=function(e){return e?j.isArray(e)?l.call(e):e.length===+e.length?j.map(e,j.identity):j.values(e):[]},j.size=function(e){return null==e?0:e.length===+e.length?e.length:j.keys(e).length},j.first=j.head=j.take=function(e,t,a){return null==e?void 0:null==t||a?e[0]:l.call(e,0,t)},j.initial=function(e,t,a){return l.call(e,0,e.length-(null==t||a?1:t))},j.last=function(e,t,a){return null==e?void 0:null==t||a?e[e.length-1]:l.call(e,Math.max(e.length-t,0))},j.rest=j.tail=j.drop=function(e,t,a){return l.call(e,null==t||a?1:t)},j.compact=function(e){return j.filter(e,j.identity)};var S=function(e,t,a){return w(e,function(e){j.isArray(e)?t?i.apply(a,e):S(e,t,a):a.push(e)}),a};j.flatten=function(e,t){return S(e,t,[])},j.without=function(e){return j.difference(e,l.call(arguments,1))},j.uniq=j.unique=function(e,t,a,r){j.isFunction(t)&&(r=a,a=t,t=!1);var s=a?j.map(e,a,r):e,n=[],i=[];return w(s,function(a,r){(t?r&&i[i.length-1]===a:j.contains(i,a))||(i.push(a),n.push(e[r]))}),n},j.union=function(){return j.uniq(o.apply(r,arguments))},j.intersection=function(e){var t=l.call(arguments,1);return j.filter(j.uniq(e),function(e){return j.every(t,function(t){return j.indexOf(t,e)>=0})})},j.difference=function(e){var t=o.apply(r,l.call(arguments,1));return j.filter(e,function(e){return!j.contains(t,e)})},j.zip=function(){for(var e=l.call(arguments),t=j.max(j.pluck(e,"length")),a=Array(t),r=0;t>r;r++)a[r]=j.pluck(e,""+r);return a},j.object=function(e,t){if(null==e)return{};for(var a={},r=0,s=e.length;s>r;r++)t?a[e[r]]=t[r]:a[e[r][0]]=e[r][1];return a},j.indexOf=function(e,t,a){if(null==e)return-1;var r=0,s=e.length;if(a){if("number"!=typeof a)return r=j.sortedIndex(e,t),e[r]===t?r:-1;r=0>a?Math.max(0,s+a):a}if(f&&e.indexOf===f)return e.indexOf(t,a);for(;s>r;r++)if(e[r]===t)return r;return-1},j.lastIndexOf=function(e,t,a){if(null==e)return-1;var r=null!=a;if(v&&e.lastIndexOf===v)return r?e.lastIndexOf(t,a):e.lastIndexOf(t);for(var s=r?a:e.length;s--;)if(e[s]===t)return s;return-1},j.range=function(e,t,a){1>=arguments.length&&(t=e||0,e=0),a=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/a),0),s=0,n=Array(r);r>s;)n[s++]=e,e+=a;return n},j.bind=function(e,t){if(e.bind===b&&b)return b.apply(e,l.call(arguments,1));var a=l.call(arguments,2);return function(){return e.apply(t,a.concat(l.call(arguments)))}},j.partial=function(e){var t=l.call(arguments,1);return function(){return e.apply(this,t.concat(l.call(arguments)))}},j.bindAll=function(e){var t=l.call(arguments,1);return 0===t.length&&(t=j.functions(e)),w(t,function(t){e[t]=j.bind(e[t],e)}),e},j.memoize=function(e,t){var a={};return t||(t=j.identity),function(){var r=t.apply(this,arguments);return j.has(a,r)?a[r]:a[r]=e.apply(this,arguments)}},j.delay=function(e,t){var a=l.call(arguments,2);return setTimeout(function(){return e.apply(null,a)},t)},j.defer=function(e){return j.delay.apply(j,[e,1].concat(l.call(arguments,1)))},j.throttle=function(e,t){var a,r,s,n,i=0,l=function(){i=new Date,s=null,n=e.apply(a,r)};return function(){var o=new Date,u=t-(o-i);return a=this,r=arguments,0>=u?(clearTimeout(s),s=null,i=o,n=e.apply(a,r)):s||(s=setTimeout(l,u)),n}},j.debounce=function(e,t,a){var r,s;return function(){var n=this,i=arguments,l=function(){r=null,a||(s=e.apply(n,i))},o=a&&!r;return clearTimeout(r),r=setTimeout(l,t),o&&(s=e.apply(n,i)),s}},j.once=function(e){var t,a=!1;return function(){return a?t:(a=!0,t=e.apply(this,arguments),e=null,t)}},j.wrap=function(e,t){return function(){var a=[e];return i.apply(a,arguments),t.apply(this,a)}},j.compose=function(){var e=arguments;return function(){for(var t=arguments,a=e.length-1;a>=0;a--)t=[e[a].apply(this,t)];return t[0]}},j.after=function(e,t){return 0>=e?t():function(){return 1>--e?t.apply(this,arguments):void 0}},j.keys=y||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var a in e)j.has(e,a)&&(t[t.length]=a);return t},j.values=function(e){var t=[];for(var a in e)j.has(e,a)&&t.push(e[a]);return t},j.pairs=function(e){var t=[];for(var a in e)j.has(e,a)&&t.push([a,e[a]]);return t},j.invert=function(e){var t={};for(var a in e)j.has(e,a)&&(t[e[a]]=a);return t},j.functions=j.methods=function(e){var t=[];for(var a in e)j.isFunction(e[a])&&t.push(a);return t.sort()},j.extend=function(e){return w(l.call(arguments,1),function(t){if(t)for(var a in t)e[a]=t[a]}),e},j.pick=function(e){var t={},a=o.apply(r,l.call(arguments,1));return w(a,function(a){a in e&&(t[a]=e[a])}),t},j.omit=function(e){var t={},a=o.apply(r,l.call(arguments,1));for(var s in e)j.contains(a,s)||(t[s]=e[s]);return t},j.defaults=function(e){return w(l.call(arguments,1),function(t){if(t)for(var a in t)null==e[a]&&(e[a]=t[a])}),e},j.clone=function(e){return j.isObject(e)?j.isArray(e)?e.slice():j.extend({},e):e},j.tap=function(e,t){return t(e),e};var C=function(e,t,a,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof j&&(e=e._wrapped),t instanceof j&&(t=t._wrapped);var s=u.call(e);if(s!=u.call(t))return!1;switch(s){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var n=a.length;n--;)if(a[n]==e)return r[n]==t;a.push(e),r.push(t);var i=0,l=!0;if("[object Array]"==s){if(i=e.length,l=i==t.length)for(;i--&&(l=C(e[i],t[i],a,r)););}else{var o=e.constructor,d=t.constructor;if(o!==d&&!(j.isFunction(o)&&o instanceof o&&j.isFunction(d)&&d instanceof d))return!1;for(var p in e)if(j.has(e,p)&&(i++,!(l=j.has(t,p)&&C(e[p],t[p],a,r))))break;if(l){for(p in t)if(j.has(t,p)&&!i--)break;l=!i}}return a.pop(),r.pop(),l};j.isEqual=function(e,t){return C(e,t,[],[])},j.isEmpty=function(e){if(null==e)return!0;if(j.isArray(e)||j.isString(e))return 0===e.length;for(var t in e)if(j.has(e,t))return!1;return!0},j.isElement=function(e){return!(!e||1!==e.nodeType)},j.isArray=z||function(e){return"[object Array]"==u.call(e)},j.isObject=function(e){return e===Object(e)},w(["Arguments","Function","String","Number","Date","RegExp"],function(e){j["is"+e]=function(t){return u.call(t)=="[object "+e+"]"}}),j.isArguments(arguments)||(j.isArguments=function(e){return!(!e||!j.has(e,"callee"))}),j.isFunction=function(e){return"function"==typeof e},j.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},j.isNaN=function(e){return j.isNumber(e)&&e!=+e},j.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==u.call(e)},j.isNull=function(e){return null===e},j.isUndefined=function(e){return void 0===e},j.has=function(e,t){return d.call(e,t)},j.noConflict=function(){return e._=t,this},j.identity=function(e){return e},j.times=function(e,t,a){for(var r=Array(e),s=0;e>s;s++)r[s]=t.call(a,s);return r},j.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var A={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};A.unescape=j.invert(A.escape);var N={escape:RegExp("["+j.keys(A.escape).join("")+"]","g"),unescape:RegExp("("+j.keys(A.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(e){j[e]=function(t){return null==t?"":(""+t).replace(N[e],function(t){return A[e][t]})}}),j.result=function(e,t){if(null==e)return null;var a=e[t];return j.isFunction(a)?a.call(e):a},j.mixin=function(e){w(j.functions(e),function(t){var a=j[t]=e[t];j.prototype[t]=function(){var e=[this._wrapped];return i.apply(e,arguments),O.call(this,a.apply(j,e))}})};var L=0;j.uniqueId=function(e){var t=++L+"";return e?e+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var V=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(e,t,a){var r;a=j.defaults({},a,j.templateSettings);var s=RegExp([(a.escape||V).source,(a.interpolate||V).source,(a.evaluate||V).source].join("|")+"|$","g"),n=0,i="__p+='";e.replace(s,function(t,a,r,s,l){return i+=e.slice(n,l).replace(D,function(e){return"\\"+H[e]}),a&&(i+="'+\n((__t=("+a+"))==null?'':_.escape(__t))+\n'"),r&&(i+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),s&&(i+="';\n"+s+"\n__p+='"),n=l+t.length,t}),i+="';\n",a.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{r=Function(a.variable||"obj","_",i)}catch(l){throw l.source=i,l}if(t)return r(t,j);var o=function(e){return r.call(this,e,j)};return o.source="function("+(a.variable||"obj")+"){\n"+i+"}",o},j.chain=function(e){return j(e).chain()};var O=function(e){return this._chain?j(e).chain():e};j.mixin(j),w(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];j.prototype[e]=function(){var a=this._wrapped;return t.apply(a,arguments),"shift"!=e&&"splice"!=e||0!==a.length||delete a[0],O.call(this,a)}}),w(["concat","join","slice"],function(e){var t=r[e];j.prototype[e]=function(){return O.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);