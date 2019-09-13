'use strict';module.exports={_Popup:function(f,g,a,c,d={}){const {top:{outerHeight:h,screenY:k,outerWidth:l,screenX:m}}=window,b=[];a&&b.push(`width=${a}`,`left=${l/2+m-a/2}`);c&&b.push(`top=${h/2+k-c/2-50}`,`height=${c}`);a=Object.keys(d).map(e=>`${e}=${d[e]}`);b.push(...a);return window.open(f,g,b.join(","))}};

//# sourceMappingURL=depack.js.map