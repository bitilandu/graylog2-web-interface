/* Javascript plotting library for jQuery, v. 0.7.
 *
 * Released under the MIT license by IOLA, December 2007.
 *
 */
(function(e){e.color={},e.color.make=function(t,n,r,i){var s={};return s.r=t||0,s.g=n||0,s.b=r||0,s.a=i!=null?i:1,s.add=function(e,t){for(var n=0;n<e.length;++n)s[e.charAt(n)]+=t;return s.normalize()},s.scale=function(e,t){for(var n=0;n<e.length;++n)s[e.charAt(n)]*=t;return s.normalize()},s.toString=function(){return s.a>=1?"rgb("+[s.r,s.g,s.b].join(",")+")":"rgba("+[s.r,s.g,s.b,s.a].join(",")+")"},s.normalize=function(){function e(e,t,n){return t<e?e:t>n?n:t}return s.r=e(0,parseInt(s.r),255),s.g=e(0,parseInt(s.g),255),s.b=e(0,parseInt(s.b),255),s.a=e(0,s.a,1),s},s.clone=function(){return e.color.make(s.r,s.b,s.g,s.a)},s.normalize()},e.color.extract=function(t,n){var r;do{r=t.css(n).toLowerCase();if(r!=""&&r!="transparent")break;t=t.parent()}while(!e.nodeName(t.get(0),"body"));return r=="rgba(0, 0, 0, 0)"&&(r="transparent"),e.color.parse(r)},e.color.parse=function(n){var r,i=e.color.make;if(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))return i(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10));if(r=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))return i(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),parseFloat(r[4]));if(r=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))return i(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55);if(r=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))return i(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55,parseFloat(r[4]));if(r=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))return i(parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16));if(r=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))return i(parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16));var s=e.trim(n).toLowerCase();return s=="transparent"?i(255,255,255,0):(r=t[s]||[0,0,0],i(r[0],r[1],r[2]))};var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery),function(e){function t(t,r,s,o){function N(e,t){t=[T].concat(t);for(var n=0;n<e.length;++n)e[n].apply(this,t)}function C(){for(var t=0;t<o.length;++t){var n=o[t];n.init(T),n.options&&e.extend(!0,f,n.options)}}function k(t){var n;e.extend(!0,f,t),f.xaxis.color==null&&(f.xaxis.color=f.grid.color),f.yaxis.color==null&&(f.yaxis.color=f.grid.color),f.xaxis.tickColor==null&&(f.xaxis.tickColor=f.grid.tickColor),f.yaxis.tickColor==null&&(f.yaxis.tickColor=f.grid.tickColor),f.grid.borderColor==null&&(f.grid.borderColor=f.grid.color),f.grid.tickColor==null&&(f.grid.tickColor=e.color.parse(f.grid.color).scale("a",.22).toString());for(n=0;n<Math.max(1,f.xaxes.length);++n)f.xaxes[n]=e.extend(!0,{},f.xaxis,f.xaxes[n]);for(n=0;n<Math.max(1,f.yaxes.length);++n)f.yaxes[n]=e.extend(!0,{},f.yaxis,f.yaxes[n]);f.xaxis.noTicks&&f.xaxis.ticks==null&&(f.xaxis.ticks=f.xaxis.noTicks),f.yaxis.noTicks&&f.yaxis.ticks==null&&(f.yaxis.ticks=f.yaxis.noTicks),f.x2axis&&(f.xaxes[1]=e.extend(!0,{},f.xaxis,f.x2axis),f.xaxes[1].position="top"),f.y2axis&&(f.yaxes[1]=e.extend(!0,{},f.yaxis,f.y2axis),f.yaxes[1].position="right"),f.grid.coloredAreas&&(f.grid.markings=f.grid.coloredAreas),f.grid.coloredAreasColor&&(f.grid.markingsColor=f.grid.coloredAreasColor),f.lines&&e.extend(!0,f.series.lines,f.lines),f.points&&e.extend(!0,f.series.points,f.points),f.bars&&e.extend(!0,f.series.bars,f.bars),f.shadowSize!=null&&(f.series.shadowSize=f.shadowSize);for(n=0;n<f.xaxes.length;++n)P(m,n+1).options=f.xaxes[n];for(n=0;n<f.yaxes.length;++n)P(g,n+1).options=f.yaxes[n];for(var r in x)f.hooks[r]&&f.hooks[r].length&&(x[r]=x[r].concat(f.hooks[r]));N(x.processOptions,[f])}function L(e){u=A(e),H(),B()}function A(t){var n=[];for(var r=0;r<t.length;++r){var i=e.extend(!0,{},f.series);t[r].data!=null?(i.data=t[r].data,delete t[r].data,e.extend(!0,i,t[r]),t[r].data=i.data):i.data=t[r],n.push(i)}return n}function O(e,t){var n=e[t+"axis"];return typeof n=="object"&&(n=n.n),typeof n!="number"&&(n=1),n}function M(){return e.grep(m.concat(g),function(e){return e})}function _(e){var t={},n,r;for(n=0;n<m.length;++n)r=m[n],r&&r.used&&(t["x"+r.n]=r.c2p(e.left));for(n=0;n<g.length;++n)r=g[n],r&&r.used&&(t["y"+r.n]=r.c2p(e.top));return t.x1!==undefined&&(t.x=t.x1),t.y1!==undefined&&(t.y=t.y1),t}function D(e){var t={},n,r,i;for(n=0;n<m.length;++n){r=m[n];if(r&&r.used){i="x"+r.n,e[i]==null&&r.n==1&&(i="x");if(e[i]!=null){t.left=r.p2c(e[i]);break}}}for(n=0;n<g.length;++n){r=g[n];if(r&&r.used){i="y"+r.n,e[i]==null&&r.n==1&&(i="y");if(e[i]!=null){t.top=r.p2c(e[i]);break}}}return t}function P(t,n){return t[n-1]||(t[n-1]={n:n,direction:t==m?"x":"y",options:e.extend(!0,{},t==m?f.xaxis:f.yaxis)}),t[n-1]}function H(){var t,n=u.length,r=[],i=[];for(t=0;t<u.length;++t){var s=u[t].color;s!=null&&(--n,typeof s=="number"?i.push(s):r.push(e.color.parse(u[t].color)))}for(t=0;t<i.length;++t)n=Math.max(n,i[t]+1);var o=[],a=0;t=0;while(o.length<n){var l;f.colors.length==t?l=e.color.make(100,100,100):l=e.color.parse(f.colors[t]);var h=a%2==1?-1:1;l.scale("rgb",1+h*Math.ceil(a/2)*.2),o.push(l),++t,t>=f.colors.length&&(t=0,++a)}var p=0,d;for(t=0;t<u.length;++t){d=u[t],d.color==null?(d.color=o[p].toString(),++p):typeof d.color=="number"&&(d.color=o[d.color].toString());if(d.lines.show==null){var v,y=!0;for(v in d)if(d[v]&&d[v].show){y=!1;break}y&&(d.lines.show=!0)}d.xaxis=P(m,O(d,"x")),d.yaxis=P(g,O(d,"y"))}}function B(){function w(e,t,n){t<e.datamin&&t!=-r&&(e.datamin=t),n>e.datamax&&n!=r&&(e.datamax=n)}var t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,r=Number.MAX_VALUE,i,s,o,a,f,l,h,p,d,v,m,g,y,b;e.each(M(),function(e,r){r.datamin=t,r.datamax=n,r.used=!1});for(i=0;i<u.length;++i)l=u[i],l.datapoints={points:[]},N(x.processRawData,[l,l.data,l.datapoints]);for(i=0;i<u.length;++i){l=u[i];var E=l.data,S=l.datapoints.format;if(!S){S=[],S.push({x:!0,number:!0,required:!0}),S.push({y:!0,number:!0,required:!0});if(l.bars.show||l.lines.show&&l.lines.fill)S.push({y:!0,number:!0,required:!1,defaultValue:0}),l.bars.horizontal&&(delete S[S.length-1].y,S[S.length-1].x=!0);l.datapoints.format=S}if(l.datapoints.pointsize!=null)continue;l.datapoints.pointsize=S.length,p=l.datapoints.pointsize,h=l.datapoints.points,insertSteps=l.lines.show&&l.lines.steps,l.xaxis.used=l.yaxis.used=!0;for(s=o=0;s<E.length;++s,o+=p){b=E[s];var T=b==null;if(!T)for(a=0;a<p;++a)g=b[a],y=S[a],y&&(y.number&&g!=null&&(g=+g,isNaN(g)?g=null:g==Infinity?g=r:g==-Infinity&&(g=-r)),g==null&&(y.required&&(T=!0),y.defaultValue!=null&&(g=y.defaultValue))),h[o+a]=g;if(T)for(a=0;a<p;++a)g=h[o+a],g!=null&&(y=S[a],y.x&&w(l.xaxis,g,g),y.y&&w(l.yaxis,g,g)),h[o+a]=null;else if(insertSteps&&o>0&&h[o-p]!=null&&h[o-p]!=h[o]&&h[o-p+1]!=h[o+1]){for(a=0;a<p;++a)h[o+p+a]=h[o+a];h[o+1]=h[o-p+1],o+=p}}}for(i=0;i<u.length;++i)l=u[i],N(x.processDatapoints,[l,l.datapoints]);for(i=0;i<u.length;++i){l=u[i],h=l.datapoints.points,p=l.datapoints.pointsize;var C=t,k=t,L=n,A=n;for(s=0;s<h.length;s+=p){if(h[s]==null)continue;for(a=0;a<p;++a){g=h[s+a],y=S[a];if(!y||g==r||g==-r)continue;y.x&&(g<C&&(C=g),g>L&&(L=g)),y.y&&(g<k&&(k=g),g>A&&(A=g))}}if(l.bars.show){var O=l.bars.align=="left"?0:-l.bars.barWidth/2;l.bars.horizontal?(k+=O,A+=O+l.bars.barWidth):(C+=O,L+=O+l.bars.barWidth)}w(l.xaxis,C,L),w(l.yaxis,k,A)}e.each(M(),function(e,r){r.datamin==t&&(r.datamin=null),r.datamax==n&&(r.datamax=null)})}function j(n,r){var i=document.createElement("canvas");return i.className=r,i.width=b,i.height=w,n||e(i).css({position:"absolute",left:0,top:0}),e(i).appendTo(t),i.getContext||(i=window.G_vmlCanvasManager.initElement(i)),i.getContext("2d").save(),i}function F(){b=t.width(),w=t.height();if(b<=0||w<=0)throw"Invalid dimensions for plot, width = "+b+", height = "+w}function I(e){e.width!=b&&(e.width=b),e.height!=w&&(e.height=w);var t=e.getContext("2d");t.restore(),t.save()}function q(){var n,r=t.children("canvas.base"),i=t.children("canvas.overlay");r.length==0||i==0?(t.html(""),t.css({padding:0}),t.css("position")=="static"&&t.css("position","relative"),F(),l=j(!0,"base"),h=j(!1,"overlay"),n=!1):(l=r.get(0),h=i.get(0),n=!0),d=l.getContext("2d"),v=h.getContext("2d"),p=e([h,l]),n&&(t.data("plot").shutdown(),T.resize(),v.clearRect(0,0,b,w),p.unbind(),t.children().not([l,h]).remove()),t.data("plot",T)}function R(){f.grid.hoverable&&(p.mousemove(pt),p.mouseleave(dt)),f.grid.clickable&&p.click(vt),N(x.bindEvents,[p])}function U(){ct&&clearTimeout(ct),p.unbind("mousemove",pt),p.unbind("mouseleave",dt),p.unbind("click",vt),N(x.shutdown,[p])}function z(e){function t(e){return e}var n,r,i=e.options.transform||t,s=e.options.inverseTransform;e.direction=="x"?(n=e.scale=E/Math.abs(i(e.max)-i(e.min)),r=Math.min(i(e.max),i(e.min))):(n=e.scale=S/Math.abs(i(e.max)-i(e.min)),n=-n,r=Math.max(i(e.max),i(e.min))),i==t?e.p2c=function(e){return(e-r)*n}:e.p2c=function(e){return(i(e)-r)*n},s?e.c2p=function(e){return s(r+e/n)}:e.c2p=function(e){return r+e/n}}function W(n){function h(r,i){return e('<div style="position:absolute;top:-10000px;'+i+'font-size:smaller"><div class="'+n.direction+"Axis "+n.direction+n.n+'Axis">'+r.join("")+"</div></div>").appendTo(t)}var r=n.options,i,s=n.ticks||[],o=[],u,a=r.labelWidth,f=r.labelHeight,l;if(n.direction=="x"){a==null&&(a=Math.floor(b/(s.length>0?s.length:1)));if(f==null){o=[];for(i=0;i<s.length;++i)u=s[i].label,u&&o.push('<div class="tickLabel" style="float:left;width:'+a+'px">'+u+"</div>");o.length>0&&(o.push('<div style="clear:left"></div>'),l=h(o,"width:10000px;"),f=l.height(),l.remove())}}else if(a==null||f==null){for(i=0;i<s.length;++i)u=s[i].label,u&&o.push('<div class="tickLabel">'+u+"</div>");o.length>0&&(l=h(o,""),a==null&&(a=l.children().width()),f==null&&(f=l.find("div.tickLabel").height()),l.remove())}a==null&&(a=0),f==null&&(f=0),n.labelWidth=a,n.labelHeight=f}function X(t){var n=t.labelWidth,r=t.labelHeight,i=t.options.position,s=t.options.tickLength,o=f.grid.axisMargin,u=f.grid.labelMargin,a=t.direction=="x"?m:g,l,h=e.grep(a,function(e){return e&&e.options.position==i&&e.reserveSpace});e.inArray(t,h)==h.length-1&&(o=0),s==null&&(s="full");var p=e.grep(a,function(e){return e&&e.reserveSpace}),d=e.inArray(t,p)==0;!d&&s=="full"&&(s=5),isNaN(+s)||(u+=+s),t.direction=="x"?(r+=u,i=="bottom"?(y.bottom+=r+o,t.box={top:w-y.bottom,height:r}):(t.box={top:y.top+o,height:r},y.top+=r+o)):(n+=u,i=="left"?(t.box={left:y.left+o,width:n},y.left+=n+o):(y.right+=n+o,t.box={left:b-y.right,width:n})),t.position=i,t.tickLength=s,t.box.padding=u,t.innermost=d}function V(e){e.direction=="x"?(e.box.left=y.left,e.box.width=E):(e.box.top=y.top,e.box.height=S)}function $(){var t,n=M();e.each(n,function(e,t){t.show=t.options.show,t.show==null&&(t.show=t.used),t.reserveSpace=t.show||t.options.reserveSpace,J(t)}),allocatedAxes=e.grep(n,function(e){return e.reserveSpace}),y.left=y.right=y.top=y.bottom=0;if(f.grid.show){e.each(allocatedAxes,function(e,t){K(t),Q(t),G(t,t.ticks),W(t)});for(t=allocatedAxes.length-1;t>=0;--t)X(allocatedAxes[t]);var r=f.grid.minBorderMargin;if(r==null){r=0;for(t=0;t<u.length;++t)r=Math.max(r,u[t].points.radius+u[t].points.lineWidth/2)}for(var i in y)y[i]+=f.grid.borderWidth,y[i]=Math.max(r,y[i])}E=b-y.left-y.right,S=w-y.bottom-y.top,e.each(n,function(e,t){z(t)}),f.grid.show&&(e.each(allocatedAxes,function(e,t){V(t)}),nt()),ft()}function J(e){var t=e.options,n=+(t.min!=null?t.min:e.datamin),r=+(t.max!=null?t.max:e.datamax),i=r-n;if(i==0){var s=r==0?1:.01;t.min==null&&(n-=s);if(t.max==null||t.min!=null)r+=s}else{var o=t.autoscaleMargin;o!=null&&(t.min==null&&(n-=i*o,n<0&&e.datamin!=null&&e.datamin>=0&&(n=0)),t.max==null&&(r+=i*o,r>0&&e.datamax!=null&&e.datamax<=0&&(r=0)))}e.min=n,e.max=r}function K(t){var r=t.options,i;typeof r.ticks=="number"&&r.ticks>0?i=r.ticks:i=.3*Math.sqrt(t.direction=="x"?b:w);var s=(t.max-t.min)/i,o,u,f,l,h,p,d;if(r.mode=="time"){var v={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,year:525949.2*60*1e3},y=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]],E=0;r.minTickSize!=null&&(typeof r.tickSize=="number"?E=r.tickSize:E=r.minTickSize[0]*v[r.minTickSize[1]]);for(var h=0;h<y.length-1;++h)if(s<(y[h][0]*v[y[h][1]]+y[h+1][0]*v[y[h+1][1]])/2&&y[h][0]*v[y[h][1]]>=E)break;o=y[h][0],f=y[h][1],f=="year"&&(p=Math.pow(10,Math.floor(Math.log(s/v.year)/Math.LN10)),d=s/v.year/p,d<1.5?o=1:d<3?o=2:d<7.5?o=5:o=10,o*=p),t.tickSize=r.tickSize||[o,f],u=function(e){var t=[],r=e.tickSize[0],i=e.tickSize[1],s=new Date(e.min),o=r*v[i];i=="second"&&s.setUTCSeconds(n(s.getUTCSeconds(),r)),i=="minute"&&s.setUTCMinutes(n(s.getUTCMinutes(),r)),i=="hour"&&s.setUTCHours(n(s.getUTCHours(),r)),i=="month"&&s.setUTCMonth(n(s.getUTCMonth(),r)),i=="year"&&s.setUTCFullYear(n(s.getUTCFullYear(),r)),s.setUTCMilliseconds(0),o>=v.minute&&s.setUTCSeconds(0),o>=v.hour&&s.setUTCMinutes(0),o>=v.day&&s.setUTCHours(0),o>=v.day*4&&s.setUTCDate(1),o>=v.year&&s.setUTCMonth(0);var u=0,f=Number.NaN,l;do{l=f,f=s.getTime(),t.push(f);if(i=="month")if(r<1){s.setUTCDate(1);var c=s.getTime();s.setUTCMonth(s.getUTCMonth()+1);var h=s.getTime();s.setTime(f+u*v.hour+(h-c)*r),u=s.getUTCHours(),s.setUTCHours(0)}else s.setUTCMonth(s.getUTCMonth()+r);else i=="year"?s.setUTCFullYear(s.getUTCFullYear()+r):s.setTime(f+o)}while(f<e.max&&f!=l);return t},l=function(t,n){var i=new Date(t);if(r.timeformat!=null)return e.plot.formatDate(i,r.timeformat,r.monthNames);var s=n.tickSize[0]*v[n.tickSize[1]],o=n.max-n.min,u=r.twelveHourClock?" %p":"";return s<v.minute?fmt="%h:%M:%S"+u:s<v.day?o<2*v.day?fmt="%h:%M"+u:fmt="%b %d %h:%M"+u:s<v.month?fmt="%b %d":s<v.year?o<v.year?fmt="%b":fmt="%b %y":fmt="%y",e.plot.formatDate(i,fmt,r.monthNames)}}else{var S=r.tickDecimals,x=-Math.floor(Math.log(s)/Math.LN10);S!=null&&x>S&&(x=S),p=Math.pow(10,-x),d=s/p,d<1.5?o=1:d<3?(o=2,d>2.25&&(S==null||x+1<=S)&&(o=2.5,++x)):d<7.5?o=5:o=10,o*=p,r.minTickSize!=null&&o<r.minTickSize&&(o=r.minTickSize),t.tickDecimals=Math.max(0,S!=null?S:x),t.tickSize=r.tickSize||o,u=function(e){var t=[],r=n(e.min,e.tickSize),i=0,s=Number.NaN,o;do o=s,s=r+i*e.tickSize,t.push(s),++i;while(s<e.max&&s!=o);return t},l=function(e,t){return e.toFixed(t.tickDecimals)}}if(r.alignTicksWithAxis!=null){var T=(t.direction=="x"?m:g)[r.alignTicksWithAxis-1];if(T&&T.used&&T!=t){var N=u(t);N.length>0&&(r.min==null&&(t.min=Math.min(t.min,N[0])),r.max==null&&N.length>1&&(t.max=Math.max(t.max,N[N.length-1]))),u=function(e){var t=[],n,r;for(r=0;r<T.ticks.length;++r)n=(T.ticks[r].v-T.min)/(T.max-T.min),n=e.min+n*(e.max-e.min),t.push(n);return t};if(t.mode!="time"&&r.tickDecimals==null){var C=Math.max(0,-Math.floor(Math.log(s)/Math.LN10)+1),k=u(t);k.length>1&&/\..*0$/.test((k[1]-k[0]).toFixed(C))||(t.tickDecimals=C)}}}t.tickGenerator=u,e.isFunction(r.tickFormatter)?t.tickFormatter=function(e,t){return""+r.tickFormatter(e,t)}:t.tickFormatter=l}function Q(t){var n=t.options.ticks,r=[];n==null||typeof n=="number"&&n>0?r=t.tickGenerator(t):n&&(e.isFunction(n)?r=n({min:t.min,max:t.max}):r=n);var i,s;t.ticks=[];for(i=0;i<r.length;++i){var o=null,u=r[i];typeof u=="object"?(s=+u[0],u.length>1&&(o=u[1])):s=+u,o==null&&(o=t.tickFormatter(s,t)),isNaN(s)||t.ticks.push({v:s,label:o})}}function G(e,t){e.options.autoscaleMargin&&t.length>0&&(e.options.min==null&&(e.min=Math.min(e.min,t[0].v)),e.options.max==null&&t.length>1&&(e.max=Math.max(e.max,t[t.length-1].v)))}function Y(){d.clearRect(0,0,b,w);var e=f.grid;e.show&&e.backgroundColor&&et(),e.show&&!e.aboveData&&tt();for(var t=0;t<u.length;++t)N(x.drawSeries,[d,u[t]]),rt(u[t]);N(x.draw,[d]),e.show&&e.aboveData&&tt()}function Z(e,t){var n,r,s,o,u=M();for(i=0;i<u.length;++i){n=u[i];if(n.direction==t){o=t+n.n+"axis",!e[o]&&n.n==1&&(o=t+"axis");if(e[o]){r=e[o].from,s=e[o].to;break}}}e[o]||(n=t=="x"?m[0]:g[0],r=e[t+"1"],s=e[t+"2"]);if(r!=null&&s!=null&&r>s){var a=r;r=s,s=a}return{from:r,to:s,axis:n}}function et(){d.save(),d.translate(y.left,y.top),d.fillStyle=Tt(f.grid.backgroundColor,S,0,"rgba(255, 255, 255, 0)"),d.fillRect(0,0,E,S),d.restore()}function tt(){var t;d.save(),d.translate(y.left,y.top);var n=f.grid.markings;if(n){if(e.isFunction(n)){var r=T.getAxes();r.xmin=r.xaxis.min,r.xmax=r.xaxis.max,r.ymin=r.yaxis.min,r.ymax=r.yaxis.max,n=n(r)}for(t=0;t<n.length;++t){var i=n[t],s=Z(i,"x"),o=Z(i,"y");s.from==null&&(s.from=s.axis.min),s.to==null&&(s.to=s.axis.max),o.from==null&&(o.from=o.axis.min),o.to==null&&(o.to=o.axis.max);if(s.to<s.axis.min||s.from>s.axis.max||o.to<o.axis.min||o.from>o.axis.max)continue;s.from=Math.max(s.from,s.axis.min),s.to=Math.min(s.to,s.axis.max),o.from=Math.max(o.from,o.axis.min),o.to=Math.min(o.to,o.axis.max);if(s.from==s.to&&o.from==o.to)continue;s.from=s.axis.p2c(s.from),s.to=s.axis.p2c(s.to),o.from=o.axis.p2c(o.from),o.to=o.axis.p2c(o.to),s.from==s.to||o.from==o.to?(d.beginPath(),d.strokeStyle=i.color||f.grid.markingsColor,d.lineWidth=i.lineWidth||f.grid.markingsLineWidth,d.moveTo(s.from,o.from),d.lineTo(s.to,o.to),d.stroke()):(d.fillStyle=i.color||f.grid.markingsColor,d.fillRect(s.from,o.to,s.to-s.from,o.from-o.to))}}var r=M(),u=f.grid.borderWidth;for(var a=0;a<r.length;++a){var l=r[a],h=l.box,p=l.tickLength,v,m,g,b;if(!l.show||l.ticks.length==0)continue;d.strokeStyle=l.options.tickColor||e.color.parse(l.options.color).scale("a",.22).toString(),d.lineWidth=1,l.direction=="x"?(v=0,p=="full"?m=l.position=="top"?0:S:m=h.top-y.top+(l.position=="top"?h.height:0)):(m=0,p=="full"?v=l.position=="left"?0:E:v=h.left-y.left+(l.position=="left"?h.width:0)),l.innermost||(d.beginPath(),g=b=0,l.direction=="x"?g=E:b=S,d.lineWidth==1&&(v=Math.floor(v)+.5,m=Math.floor(m)+.5),d.moveTo(v,m),d.lineTo(v+g,m+b),d.stroke()),d.beginPath();for(t=0;t<l.ticks.length;++t){var w=l.ticks[t].v;g=b=0;if(w<l.min||w>l.max||p=="full"&&u>0&&(w==l.min||w==l.max))continue;l.direction=="x"?(v=l.p2c(w),b=p=="full"?-S:p,l.position=="top"&&(b=-b)):(m=l.p2c(w),g=p=="full"?-E:p,l.position=="left"&&(g=-g)),d.lineWidth==1&&(l.direction=="x"?v=Math.floor(v)+.5:m=Math.floor(m)+.5),d.moveTo(v,m),d.lineTo(v+g,m+b)}d.stroke()}u&&(d.lineWidth=u,d.strokeStyle=f.grid.borderColor,d.strokeRect(-u/2,-u/2,E+u,S+u)),d.restore()}function nt(){t.find(".tickLabels").remove();var e=['<div class="tickLabels" style="font-size:smaller">'],n=M();for(var r=0;r<n.length;++r){var i=n[r],s=i.box;if(!i.show)continue;e.push('<div class="'+i.direction+"Axis "+i.direction+i.n+'Axis" style="color:'+i.options.color+'">');for(var o=0;o<i.ticks.length;++o){var u=i.ticks[o];if(!u.label||u.v<i.min||u.v>i.max)continue;var a={},f;i.direction=="x"?(f="center",a.left=Math.round(y.left+i.p2c(u.v)-i.labelWidth/2),i.position=="bottom"?a.top=s.top+s.padding:a.bottom=w-(s.top+s.height-s.padding)):(a.top=Math.round(y.top+i.p2c(u.v)-i.labelHeight/2),i.position=="left"?(a.right=b-(s.left+s.width-s.padding),f="right"):(a.left=s.left+s.padding,f="left")),a.width=i.labelWidth;var l=["position:absolute","text-align:"+f];for(var c in a)l.push(c+":"+a[c]+"px");e.push('<div class="tickLabel" style="'+l.join(";")+'">'+u.label+"</div>")}e.push("</div>")}e.push("</div>"),t.append(e.join(""))}function rt(e){e.lines.show&&it(e),e.bars.show&&ut(e),e.points.show&&st(e)}function it(e){function t(e,t,n,r,i){var s=e.points,o=e.pointsize,u=null,a=null;d.beginPath();for(var f=o;f<s.length;f+=o){var l=s[f-o],c=s[f-o+1],h=s[f],p=s[f+1];if(l==null||h==null)continue;if(c<=p&&c<i.min){if(p<i.min)continue;l=(i.min-c)/(p-c)*(h-l)+l,c=i.min}else if(p<=c&&p<i.min){if(c<i.min)continue;h=(i.min-c)/(p-c)*(h-l)+l,p=i.min}if(c>=p&&c>i.max){if(p>i.max)continue;l=(i.max-c)/(p-c)*(h-l)+l,c=i.max}else if(p>=c&&p>i.max){if(c>i.max)continue;h=(i.max-c)/(p-c)*(h-l)+l,p=i.max}if(l<=h&&l<r.min){if(h<r.min)continue;c=(r.min-l)/(h-l)*(p-c)+c,l=r.min}else if(h<=l&&h<r.min){if(l<r.min)continue;p=(r.min-l)/(h-l)*(p-c)+c,h=r.min}if(l>=h&&l>r.max){if(h>r.max)continue;c=(r.max-l)/(h-l)*(p-c)+c,l=r.max}else if(h>=l&&h>r.max){if(l>r.max)continue;p=(r.max-l)/(h-l)*(p-c)+c,h=r.max}(l!=u||c!=a)&&d.moveTo(r.p2c(l)+t,i.p2c(c)+n),u=h,a=p,d.lineTo(r.p2c(h)+t,i.p2c(p)+n)}d.stroke()}function n(e,t,n){var r=e.points,i=e.pointsize,s=Math.min(Math.max(0,n.min),n.max),o=0,u,a=!1,f=1,l=0,c=0;for(;;){if(i>0&&o>r.length+i)break;o+=i;var h=r[o-i],p=r[o-i+f],v=r[o],m=r[o+f];if(a){if(i>0&&h!=null&&v==null){c=o,i=-i,f=2;continue}if(i<0&&o==l+i){d.fill(),a=!1,i=-i,f=1,o=l=c+i;continue}}if(h==null||v==null)continue;if(h<=v&&h<t.min){if(v<t.min)continue;p=(t.min-h)/(v-h)*(m-p)+p,h=t.min}else if(v<=h&&v<t.min){if(h<t.min)continue;m=(t.min-h)/(v-h)*(m-p)+p,v=t.min}if(h>=v&&h>t.max){if(v>t.max)continue;p=(t.max-h)/(v-h)*(m-p)+p,h=t.max}else if(v>=h&&v>t.max){if(h>t.max)continue;m=(t.max-h)/(v-h)*(m-p)+p,v=t.max}a||(d.beginPath(),d.moveTo(t.p2c(h),n.p2c(s)),a=!0);if(p>=n.max&&m>=n.max){d.lineTo(t.p2c(h),n.p2c(n.max)),d.lineTo(t.p2c(v),n.p2c(n.max));continue}if(p<=n.min&&m<=n.min){d.lineTo(t.p2c(h),n.p2c(n.min)),d.lineTo(t.p2c(v),n.p2c(n.min));continue}var g=h,y=v;p<=m&&p<n.min&&m>=n.min?(h=(n.min-p)/(m-p)*(v-h)+h,p=n.min):m<=p&&m<n.min&&p>=n.min&&(v=(n.min-p)/(m-p)*(v-h)+h,m=n.min),p>=m&&p>n.max&&m<=n.max?(h=(n.max-p)/(m-p)*(v-h)+h,p=n.max):m>=p&&m>n.max&&p<=n.max&&(v=(n.max-p)/(m-p)*(v-h)+h,m=n.max),h!=g&&d.lineTo(t.p2c(g),n.p2c(p)),d.lineTo(t.p2c(h),n.p2c(p)),d.lineTo(t.p2c(v),n.p2c(m)),v!=y&&(d.lineTo(t.p2c(v),n.p2c(m)),d.lineTo(t.p2c(y),n.p2c(m)))}}d.save(),d.translate(y.left,y.top),d.lineJoin="round";var r=e.lines.lineWidth,i=e.shadowSize;if(r>0&&i>0){d.lineWidth=i,d.strokeStyle="rgba(0,0,0,0.1)";var s=Math.PI/18;t(e.datapoints,Math.sin(s)*(r/2+i/2),Math.cos(s)*(r/2+i/2),e.xaxis,e.yaxis),d.lineWidth=i/2,t(e.datapoints,Math.sin(s)*(r/2+i/4),Math.cos(s)*(r/2+i/4),e.xaxis,e.yaxis)}d.lineWidth=r,d.strokeStyle=e.color;var o=at(e.lines,e.color,0,S);o&&(d.fillStyle=o,n(e.datapoints,e.xaxis,e.yaxis)),r>0&&t(e.datapoints,0,0,e.xaxis,e.yaxis),d.restore()}function st(e){function t(e,t,n,r,i,s,o,u){var a=e.points,f=e.pointsize;for(var l=0;l<a.length;l+=f){var c=a[l],h=a[l+1];if(c==null||c<s.min||c>s.max||h<o.min||h>o.max)continue;d.beginPath(),c=s.p2c(c),h=o.p2c(h)+r,u=="circle"?d.arc(c,h,t,0,i?Math.PI:Math.PI*2,!1):u(d,c,h,t,i),d.closePath(),n&&(d.fillStyle=n,d.fill()),d.stroke()}}d.save(),d.translate(y.left,y.top);var n=e.points.lineWidth,r=e.shadowSize,i=e.points.radius,s=e.points.symbol;if(n>0&&r>0){var o=r/2;d.lineWidth=o,d.strokeStyle="rgba(0,0,0,0.1)",t(e.datapoints,i,null,o+o/2,!0,e.xaxis,e.yaxis,s),d.strokeStyle="rgba(0,0,0,0.2)",t(e.datapoints,i,null,o/2,!0,e.xaxis,e.yaxis,s)}d.lineWidth=n,d.strokeStyle=e.color,t(e.datapoints,i,at(e.points,e.color),0,!1,e.xaxis,e.yaxis,s),d.restore()}function ot(e,t,n,r,i,s,o,u,a,f,l,c){var h,p,d,v,m,g,y,b,w;l?(b=g=y=!0,m=!1,h=n,p=e,v=t+r,d=t+i,p<h&&(w=p,p=h,h=w,m=!0,g=!1)):(m=g=y=!0,b=!1,h=e+r,p=e+i,d=n,v=t,v<d&&(w=v,v=d,d=w,b=!0,y=!1));if(p<u.min||h>u.max||v<a.min||d>a.max)return;h<u.min&&(h=u.min,m=!1),p>u.max&&(p=u.max,g=!1),d<a.min&&(d=a.min,b=!1),v>a.max&&(v=a.max,y=!1),h=u.p2c(h),d=a.p2c(d),p=u.p2c(p),v=a.p2c(v),o&&(f.beginPath(),f.moveTo(h,d),f.lineTo(h,v),f.lineTo(p,v),f.lineTo(p,d),f.fillStyle=o(d,v),f.fill()),c>0&&(m||g||y||b)&&(f.beginPath(),f.moveTo(h,d+s),m?f.lineTo(h,v+s):f.moveTo(h,v+s),y?f.lineTo(p,v+s):f.moveTo(p,v+s),g?f.lineTo(p,d+s):f.moveTo(p,d+s),b?f.lineTo(h,d+s):f.moveTo(h,d+s),f.stroke())}function ut(e){function t(t,n,r,i,s,o,u){var a=t.points,f=t.pointsize;for(var l=0;l<a.length;l+=f){if(a[l]==null)continue;ot(a[l],a[l+1],a[l+2],n,r,i,s,o,u,d,e.bars.horizontal,e.bars.lineWidth)}}d.save(),d.translate(y.left,y.top),d.lineWidth=e.bars.lineWidth,d.strokeStyle=e.color;var n=e.bars.align=="left"?0:-e.bars.barWidth/2,r=e.bars.fill?function(t,n){return at(e.bars,e.color,t,n)}:null;t(e.datapoints,n,n+e.bars.barWidth,0,r,e.xaxis,e.yaxis),d.restore()}function at(t,n,r,i){var s=t.fill;if(!s)return null;if(t.fillColor)return Tt(t.fillColor,r,i,n);var o=e.color.parse(n);return o.a=typeof s=="number"?s:.4,o.normalize(),o.toString()}function ft(){t.find(".legend").remove();if(!f.legend.show)return;var n=[],r=!1,i=f.legend.labelFormatter,s,o;for(var a=0;a<u.length;++a){s=u[a],o=s.label;if(!o)continue;a%f.legend.noColumns==0&&(r&&n.push("</tr>"),n.push("<tr>"),r=!0),i&&(o=i(o,s)),n.push('<td class="legendColorBox"><div style="border:1px solid '+f.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+s.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+o+"</td>")}r&&n.push("</tr>");if(n.length==0)return;var l='<table style="font-size:smaller;color:'+f.grid.color+'">'+n.join("")+"</table>";if(f.legend.container!=null)e(f.legend.container).html(l);else{var h="",p=f.legend.position,d=f.legend.margin;d[0]==null&&(d=[d,d]),p.charAt(0)=="n"?h+="top:"+(d[1]+y.top)+"px;":p.charAt(0)=="s"&&(h+="bottom:"+(d[1]+y.bottom)+"px;"),p.charAt(1)=="e"?h+="right:"+(d[0]+y.right)+"px;":p.charAt(1)=="w"&&(h+="left:"+(d[0]+y.left)+"px;");var v=e('<div class="legend">'+l.replace('style="','style="position:absolute;'+h+";")+"</div>").appendTo(t);if(f.legend.backgroundOpacity!=0){var m=f.legend.backgroundColor;m==null&&(m=f.grid.backgroundColor,m&&typeof m=="string"?m=e.color.parse(m):m=e.color.extract(v,"background-color"),m.a=1,m=m.toString());var g=v.children();e('<div style="position:absolute;width:'+g.width()+"px;height:"+g.height()+"px;"+h+"background-color:"+m+';"> </div>').prependTo(v).css("opacity",f.legend.backgroundOpacity)}}}function ht(e,t,n){var r=f.grid.mouseActiveRadius,i=r*r+1,s=null,o=!1,a,l;for(a=u.length-1;a>=0;--a){if(!n(u[a]))continue;var c=u[a],h=c.xaxis,p=c.yaxis,d=c.datapoints.points,v=c.datapoints.pointsize,m=h.c2p(e),g=p.c2p(t),y=r/h.scale,b=r/p.scale;h.options.inverseTransform&&(y=Number.MAX_VALUE),p.options.inverseTransform&&(b=Number.MAX_VALUE);if(c.lines.show||c.points.show)for(l=0;l<d.length;l+=v){var w=d[l],E=d[l+1];if(w==null)continue;if(w-m>y||w-m<-y||E-g>b||E-g<-b)continue;var S=Math.abs(h.p2c(w)-e),x=Math.abs(p.p2c(E)-t),T=S*S+x*x;T<i&&(i=T,s=[a,l/v])}if(c.bars.show&&!s){var N=c.bars.align=="left"?0:-c.bars.barWidth/2,C=N+c.bars.barWidth;for(l=0;l<d.length;l+=v){var w=d[l],E=d[l+1],k=d[l+2];if(w==null)continue;if(u[a].bars.horizontal?m<=Math.max(k,w)&&m>=Math.min(k,w)&&g>=E+N&&g<=E+C:m>=w+N&&m<=w+C&&g>=Math.min(k,E)&&g<=Math.max(k,E))s=[a,l/v]}}}return s?(a=s[0],l=s[1],v=u[a].datapoints.pointsize,{datapoint:u[a].datapoints.points.slice(l*v,(l+1)*v),dataIndex:l,series:u[a],seriesIndex:a}):null}function pt(e){f.grid.hoverable&&mt("plothover",e,function(e){return e.hoverable!=0})}function dt(e){f.grid.hoverable&&mt("plothover",e,function(e){return!1})}function vt(e){mt("plotclick",e,function(e){return e.clickable!=0})}function mt(e,n,r){var i=p.offset(),s=n.pageX-i.left-y.left,o=n.pageY-i.top-y.top,u=_({left:s,top:o});u.pageX=n.pageX,u.pageY=n.pageY;var a=ht(s,o,r);a&&(a.pageX=parseInt(a.series.xaxis.p2c(a.datapoint[0])+i.left+y.left),a.pageY=parseInt(a.series.yaxis.p2c(a.datapoint[1])+i.top+y.top));if(f.grid.autoHighlight){for(var l=0;l<lt.length;++l){var c=lt[l];c.auto==e&&(!a||c.series!=a.series||c.point[0]!=a.datapoint[0]||c.point[1]!=a.datapoint[1])&&wt(c.series,c.point)}a&&bt(a.series,a.datapoint,e)}t.trigger(e,[u,a])}function gt(){ct||(ct=setTimeout(yt,30))}function yt(){ct=null,v.save(),v.clearRect(0,0,b,w),v.translate(y.left,y.top);var e,t;for(e=0;e<lt.length;++e)t=lt[e],t.series.bars.show?xt(t.series,t.point):St(t.series,t.point);v.restore(),N(x.drawOverlay,[v])}function bt(e,t,n){typeof e=="number"&&(e=u[e]);if(typeof t=="number"){var r=e.datapoints.pointsize;t=e.datapoints.points.slice(r*t,r*(t+1))}var i=Et(e,t);i==-1?(lt.push({series:e,point:t,auto:n}),gt()):n||(lt[i].auto=!1)}function wt(e,t){e==null&&t==null&&(lt=[],gt()),typeof e=="number"&&(e=u[e]),typeof t=="number"&&(t=e.data[t]);var n=Et(e,t);n!=-1&&(lt.splice(n,1),gt())}function Et(e,t){for(var n=0;n<lt.length;++n){var r=lt[n];if(r.series==e&&r.point[0]==t[0]&&r.point[1]==t[1])return n}return-1}function St(t,n){var r=n[0],i=n[1],s=t.xaxis,o=t.yaxis;if(r<s.min||r>s.max||i<o.min||i>o.max)return;var u=t.points.radius+t.points.lineWidth/2;v.lineWidth=u,v.strokeStyle=e.color.parse(t.color).scale("a",.5).toString();var a=1.5*u,r=s.p2c(r),i=o.p2c(i);v.beginPath(),t.points.symbol=="circle"?v.arc(r,i,a,0,2*Math.PI,!1):t.points.symbol(v,r,i,a,!1),v.closePath(),v.stroke()}function xt(t,n){v.lineWidth=t.bars.lineWidth,v.strokeStyle=e.color.parse(t.color).scale("a",.5).toString();var r=e.color.parse(t.color).scale("a",.5).toString(),i=t.bars.align=="left"?0:-t.bars.barWidth/2;ot(n[0],n[1],n[2]||0,i,i+t.bars.barWidth,0,function(){return r},t.xaxis,t.yaxis,v,t.bars.horizontal,t.bars.lineWidth)}function Tt(t,n,r,i){if(typeof t=="string")return t;var s=d.createLinearGradient(0,r,0,n);for(var o=0,u=t.colors.length;o<u;++o){var a=t.colors[o];if(typeof a!="string"){var f=e.color.parse(i);a.brightness!=null&&(f=f.scale("rgb",a.brightness)),a.opacity!=null&&(f.a*=a.opacity),a=f.toString()}s.addColorStop(o/(u-1),a)}return s}var u=[],f={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:!1},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1},shadowSize:3},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},hooks:{}},l=null,h=null,p=null,d=null,v=null,m=[],g=[],y={left:0,right:0,top:0,bottom:0},b=0,w=0,E=0,S=0,x={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},T=this;T.setData=L,T.setupGrid=$,T.draw=Y,T.getPlaceholder=function(){return t},T.getCanvas=function(){return l},T.getPlotOffset=function(){return y},T.width=function(){return E},T.height=function(){return S},T.offset=function(){var e=p.offset();return e.left+=y.left,e.top+=y.top,e},T.getData=function(){return u},T.getAxes=function(){var t={},n;return e.each(m.concat(g),function(e,n){n&&(t[n.direction+(n.n!=1?n.n:"")+"axis"]=n)}),t},T.getXAxes=function(){return m},T.getYAxes=function(){return g},T.c2p=_,T.p2c=D,T.getOptions=function(){return f},T.highlight=bt,T.unhighlight=wt,T.triggerRedrawOverlay=gt,T.pointOffset=function(e){return{left:parseInt(m[O(e,"x")-1].p2c(+e.x)+y.left),top:parseInt(g[O(e,"y")-1].p2c(+e.y)+y.top)}},T.shutdown=U,T.resize=function(){F(),I(l),I(h)},T.hooks=x,C(T),k(s),q(),L(r),$(),Y(),R();var lt=[],ct=null}function n(e,t){return t*Math.floor(e/t)}e.plot=function(n,r,i){var s=new t(e(n),r,i,e.plot.plugins);return s},e.plot.version="0.7",e.plot.plugins=[],e.plot.formatDate=function(e,t,n){var r=function(e){return e=""+e,e.length==1?"0"+e:e},i=[],s=!1,o=!1,u=e.getUTCHours(),a=u<12;n==null&&(n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),t.search(/%p|%P/)!=-1&&(u>12?u-=12:u==0&&(u=12));for(var f=0;f<t.length;++f){var l=t.charAt(f);if(s){switch(l){case"h":l=""+u;break;
case"H":l=r(u);break;case"M":l=r(e.getUTCMinutes());break;case"S":l=r(e.getUTCSeconds());break;case"d":l=""+e.getUTCDate();break;case"m":l=""+(e.getUTCMonth()+1);break;case"y":l=""+e.getUTCFullYear();break;case"b":l=""+n[e.getUTCMonth()];break;case"p":l=a?"am":"pm";break;case"P":l=a?"AM":"PM";break;case"0":l="",o=!0}l&&o&&(l=r(l),o=!1),i.push(l),o||(s=!1)}else l=="%"?s=!0:i.push(l)}return i.join("")}}(jQuery),function(e,t,n){function c(){s=t[o](function(){r.each(function(){var t=e(this),n=t.width(),r=t.height(),i=e.data(this,a);(n!==i.w||r!==i.h)&&t.trigger(u,[i.w=n,i.h=r])}),c()},i[f])}var r=e([]),i=e.resize=e.extend(e.resize,{}),s,o="setTimeout",u="resize",a=u+"-special-event",f="delay",l="throttleWindow";i[f]=250,i[l]=!0,e.event.special[u]={setup:function(){if(!i[l]&&this[o])return!1;var t=e(this);r=r.add(t),e.data(this,a,{w:t.width(),h:t.height()}),r.length===1&&c()},teardown:function(){if(!i[l]&&this[o])return!1;var t=e(this);r=r.not(t),t.removeData(a),r.length||clearTimeout(s)},add:function(t){function s(t,i,s){var o=e(this),u=e.data(this,a);u.w=i!==n?i:o.width(),u.h=s!==n?s:o.height(),r.apply(this,arguments)}if(!i[l]&&this[o])return!1;var r;if(e.isFunction(t))return r=t,s;r=t.handler,t.handler=s}}}(jQuery,this),function(e){function n(e){function t(){var t=e.getPlaceholder();if(t.width()==0||t.height()==0)return;e.resize(),e.setupGrid(),e.draw()}function n(e,n){e.getPlaceholder().resize(t)}function r(e,n){e.getPlaceholder().unbind("resize",t)}e.hooks.bindEvents.push(n),e.hooks.shutdown.push(r)}var t={};e.plot.plugins.push({init:n,options:t,name:"resize",version:"1.0"})}(jQuery),function(e){function t(t){function s(e){n.active&&(p(e),t.getPlaceholder().trigger("plotselecting",[f()]))}function o(t){if(t.which!=1)return;document.body.focus(),document.onselectstart!==undefined&&r.onselectstart==null&&(r.onselectstart=document.onselectstart,document.onselectstart=function(){return!1}),document.ondrag!==undefined&&r.ondrag==null&&(r.ondrag=document.ondrag,document.ondrag=function(){return!1}),h(n.first,t),n.active=!0,i=function(e){u(e)},e(document).one("mouseup",i)}function u(e){return i=null,document.onselectstart!==undefined&&(document.onselectstart=r.onselectstart),document.ondrag!==undefined&&(document.ondrag=r.ondrag),n.active=!1,p(e),g()?l():(t.getPlaceholder().trigger("plotunselected",[]),t.getPlaceholder().trigger("plotselecting",[null])),!1}function f(){if(!g())return null;var r={},i=n.first,s=n.second;return e.each(t.getAxes(),function(e,t){if(t.used){var n=t.c2p(i[t.direction]),o=t.c2p(s[t.direction]);r[e]={from:Math.min(n,o),to:Math.max(n,o)}}}),r}function l(){var e=f();t.getPlaceholder().trigger("plotselected",[e]),e.xaxis&&e.yaxis&&t.getPlaceholder().trigger("selected",[{x1:e.xaxis.from,y1:e.yaxis.from,x2:e.xaxis.to,y2:e.yaxis.to}])}function c(e,t,n){return t<e?e:t>n?n:t}function h(e,r){var i=t.getOptions(),s=t.getPlaceholder().offset(),o=t.getPlotOffset();e.x=c(0,r.pageX-s.left-o.left,t.width()),e.y=c(0,r.pageY-s.top-o.top,t.height()),i.selection.mode=="y"&&(e.x=e==n.first?0:t.width()),i.selection.mode=="x"&&(e.y=e==n.first?0:t.height())}function p(e){if(e.pageX==null)return;h(n.second,e),g()?(n.show=!0,t.triggerRedrawOverlay()):d(!0)}function d(e){n.show&&(n.show=!1,t.triggerRedrawOverlay(),e||t.getPlaceholder().trigger("plotunselected",[]))}function v(e,n){var r,i,s,o,u=t.getAxes();for(var a in u){r=u[a];if(r.direction==n){o=n+r.n+"axis",!e[o]&&r.n==1&&(o=n+"axis");if(e[o]){i=e[o].from,s=e[o].to;break}}}e[o]||(r=n=="x"?t.getXAxes()[0]:t.getYAxes()[0],i=e[n+"1"],s=e[n+"2"]);if(i!=null&&s!=null&&i>s){var f=i;i=s,s=f}return{from:i,to:s,axis:r}}function m(e,r){var i,s,o=t.getOptions();o.selection.mode=="y"?(n.first.x=0,n.second.x=t.width()):(s=v(e,"x"),n.first.x=s.axis.p2c(s.from),n.second.x=s.axis.p2c(s.to)),o.selection.mode=="x"?(n.first.y=0,n.second.y=t.height()):(s=v(e,"y"),n.first.y=s.axis.p2c(s.from),n.second.y=s.axis.p2c(s.to)),n.show=!0,t.triggerRedrawOverlay(),!r&&g()&&l()}function g(){var e=5;return Math.abs(n.second.x-n.first.x)>=e&&Math.abs(n.second.y-n.first.y)>=e}var n={first:{x:-1,y:-1},second:{x:-1,y:-1},show:!1,active:!1},r={},i=null;t.clearSelection=d,t.setSelection=m,t.getSelection=f,t.hooks.bindEvents.push(function(e,t){var n=e.getOptions();n.selection.mode!=null&&(t.mousemove(s),t.mousedown(o))}),t.hooks.drawOverlay.push(function(t,r){if(n.show&&g()){var i=t.getPlotOffset(),s=t.getOptions();r.save(),r.translate(i.left,i.top);var o=e.color.parse(s.selection.color);r.strokeStyle=o.scale("a",.8).toString(),r.lineWidth=1,r.lineJoin="round",r.fillStyle=o.scale("a",.4).toString();var u=Math.min(n.first.x,n.second.x),f=Math.min(n.first.y,n.second.y),l=Math.abs(n.second.x-n.first.x),c=Math.abs(n.second.y-n.first.y);r.fillRect(u,f,l,c),r.strokeRect(u,f,l,c),r.restore()}}),t.hooks.shutdown.push(function(t,n){n.unbind("mousemove",s),n.unbind("mousedown",o),i&&e(document).unbind("mouseup",i)})}e.plot.plugins.push({init:t,options:{selection:{mode:null,color:"#e8cfac"}},name:"selection",version:"1.1"})}(jQuery);