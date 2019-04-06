/*!
 * pickadate.js v3.6.2, 2019/03/19
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */
!function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(h,i,k,m){function o(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",C.component.nodes(x.open),z.box),z.wrap),z.frame),z.holder,'tabindex="-1"')}function p(){A.data(i,C).addClass(z.input).val(A.data("value")?C.get("select",y.format):h.value).on("focus."+x.id+" click."+x.id,f(function(a){a.preventDefault(),C.open()},100)),y.editable||A.on("keydown."+x.id,v),g(h,{haspopup:!0,expanded:!1,readonly:!1,owns:h.id+"_root"})}function q(){g(C.$root[0],"hidden",!0)}function r(){C.$holder.on({keydown:v,"focus.toOpen":u,blur:function(){A.removeClass(z.target)},focusin:function(a){C.$root.removeClass(z.focused),a.stopPropagation()},"mousedown click":function(b){var c=e(b,h);c!=C.$holder[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),C.$holder.eq(0).focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(z.navDisabled)||b.hasClass(z.disabled),e=j();e=e&&(e.type||e.href?e:null),(d||e&&!a.contains(C.$root[0],e))&&C.$holder.eq(0).focus(),!d&&c.nav?C.set("highlight",C.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?(C.set("select",c.pick),y.closeOnSelect&&C.close(!0)):c.clear?(C.clear(),y.closeOnClear&&C.close(!0)):c.close&&C.close(!0)})}function s(){var b;!0===y.hiddenName?(b=h.name,h.name=""):(b=["string"==typeof y.hiddenPrefix?y.hiddenPrefix:"","string"==typeof y.hiddenSuffix?y.hiddenSuffix:"_submit"],b=b[0]+h.name+b[1]),C._hidden=a('<input type=hidden name="'+b+'"'+(A.data("value")||h.value?' value="'+C.get("select",y.formatSubmit)+'"':"")+">")[0],A.on("change."+x.id,function(){C._hidden.value=h.value?C.get("select",y.formatSubmit):""})}function t(){w&&n?C.$holder.find("."+z.frame).one("transitionend",function(){C.$holder.eq(0).focus()}):setTimeout(function(){C.$holder.eq(0).focus()},0)}function u(a){a.stopPropagation(),A.addClass(z.target),C.$root.addClass(z.focused),C.open()}function v(a){var b=a.keyCode,c=/^(8|46)$/.test(b);if(27==b)return C.close(!0),!1;(32==b||c||!x.open&&C.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?C.clear().close():C.open())}if(!h)return b;var w=!1,x={id:h.id||"P"+Math.abs(~~(Math.random()*new Date))},y=k?a.extend(!0,{},k.defaults,m):m||{},z=a.extend({},b.klasses(),y.klass),A=a(h),B=function(){return this.start()},C=B.prototype={constructor:B,$node:A,start:function(){return x&&x.start?C:(x.methods={},x.start=!0,x.open=!1,x.type=h.type,h.autofocus=h==j(),h.readOnly=!y.editable,h.id=h.id||x.id,"text"!=h.type&&(h.type="text"),C.component=new k(C,y),C.$root=a('<div class="'+z.picker+'" id="'+h.id+'_root" />'),q(),C.$holder=a(o()).appendTo(C.$root),r(),y.formatSubmit&&s(),p(),y.containerHidden?a(y.containerHidden).append(C._hidden):A.after(C._hidden),y.container?a(y.container).append(C.$root):A.after(C.$root),C.on({start:C.component.onStart,render:C.component.onRender,stop:C.component.onStop,open:C.component.onOpen,close:C.component.onClose,set:C.component.onSet}).on({start:y.onStart,render:y.onRender,stop:y.onStop,open:y.onOpen,close:y.onClose,set:y.onSet}),w=c(C.$holder[0]),h.autofocus&&C.open(),C.trigger("start").trigger("render"))},render:function(b){return b?(C.$holder=a(o()),r(),C.$root.html(C.$holder)):C.$root.find("."+z.box).html(C.component.nodes(x.open)),C.trigger("render")},stop:function(){return x.start?(C.close(),C._hidden&&C._hidden.parentNode.removeChild(C._hidden),C.$root.remove(),A.removeClass(z.input).removeData(i),setTimeout(function(){A.off("."+x.id)},0),h.type=x.type,h.readOnly=!1,C.trigger("stop"),x.methods={},x.start=!1,C):C},open:function(c){return x.open?C:(A.addClass(z.active),g(h,"expanded",!0),setTimeout(function(){C.$root.addClass(z.opened),g(C.$root[0],"hidden",!1)},0),!1!==c&&(x.open=!0,w&&a("body").css("overflow","hidden").css("padding-right","+="+d()),t(),l.on("click."+x.id+" focusin."+x.id,function(a){var b=e(a,h);a.isSimulated||b==h||b==document||3==a.which||C.close(b===C.$holder[0])}).on("keydown."+x.id,function(c){var d=c.keyCode,f=C.component.key[d],g=e(c,h);27==d?C.close(!0):g!=C.$holder[0]||!f&&13!=d?a.contains(C.$root[0],g)&&13==d&&(c.preventDefault(),g.click()):(c.preventDefault(),f?b._.trigger(C.component.key.go,C,[b._.trigger(f)]):C.$root.find("."+z.highlighted).hasClass(z.disabled)||(C.set("select",C.component.item.highlight),y.closeOnSelect&&C.close(!0)))})),C.trigger("open"))},close:function(b){return b&&(y.editable?h.focus():(C.$holder.off("focus.toOpen").focus(),setTimeout(function(){C.$holder.on("focus.toOpen",u)},0))),A.removeClass(z.active),g(h,"expanded",!1),setTimeout(function(){C.$root.removeClass(z.opened+" "+z.focused),g(C.$root[0],"hidden",!0)},0),x.open?(x.open=!1,w&&a("body").css("overflow","").css("padding-right","-="+d()),l.off("."+x.id),C.trigger("close")):C},clear:function(a){return C.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in C.component.item&&(void 0===f&&(f=null),C.component.set(e,f,d)),"select"!=e&&"clear"!=e||!y.updateInput||A.val("clear"==e?"":C.get(e,y.format)).trigger("change");C.render()}return d.muted?C:C.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=x[a])return x[a];if("valueSubmit"==a){if(C._hidden)return C._hidden.value;a="value"}if("value"==a)return h.value;if(a in C.component.item){if("string"==typeof c){var d=C.component.get(a);return d?b._.trigger(C.component.formats.toString,C.component,[c,d]):""}return C.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),x.methods[e]=x.methods[e]||[],x.methods[e].push(f)}return C},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)(b=c[a])in x.methods&&delete x.methods[b];return C},trigger:function(a,c){var d=function(a){var d=x.methods[a];d&&d.map(function(a){b._.trigger(a,C,[c])})};return d("_"+a),d(a),C}};return new B}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(m.height()<=k.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(a,b){var c=[];return a.path&&(c=a.path),a.originalEvent&&a.originalEvent.path&&(c=a.originalEvent.path),c&&c.length>0?b&&c.indexOf(b)>=0?b:c[0]:a.target}function f(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}}function g(b,c,d){if(a.isPlainObject(c))for(var e in c)h(b,e,c[e]);else h(b,c,d)}function h(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function i(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d;c+=null==b[d]?"":e+'="'+b[d]+'"'}return c}function j(){try{return document.activeElement}catch(a){}}var k=a(window),l=a(document),m=a(document.documentElement),n=null!=document.documentElement.style.transition;return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(a<10?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1==0},ariaAttr:i},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){a(this).data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b});

/*!
 * Date picker for pickadate.js v3.6.2
 * http://amsul.github.io/pickadate.js/date.htm
 */
!function(a){"function"==typeof define&&define.amd?define(["./picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return!0===a[0]?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h,defaultValue:!0}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var f,g=this;return c=void 0===c?a:c,c==-1/0||c==1/0?f=c:b.isPlainObject(c)&&e.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=e.isDate(c)?c:g.create().obj):c=e.isInteger(c)||e.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:f||c.getFullYear(),month:f||c.getMonth(),date:f||c.getDate(),day:f||c.getDay(),obj:f||c,pick:f||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,f=function(a){return!0===a||b.isArray(a)||e.isDate(a)?d.create(a):a};return e.isInteger(a)||(a=f(a)),e.isInteger(c)||(c=f(c)),e.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:e.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:f(a),to:f(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return e.isInteger(b)?b=c.now(a,b,{rel:b}):b?"string"==typeof b&&(b=c.parse(a,b)):b="min"==a?-1/0:1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var f,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?f=!0:d>c.pick&&(g=!0)}return e.isInteger(a)}).length;if((!d||!d.nav&&!d.defaultValue)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||f||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!f&&l<0)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return e.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||e.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,f={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?e.trigger(c,d,[b,f]):a.replace(/^!/,"").length;c&&(f[a]=b.substr(0,g)),b=b.substr(g)}),[f.yyyy||f.yy,+(f.mm||f.m)-1,f.dd||f.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/[^\x00-\x7F]+|\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?e.digits(a):b.date},dd:function(a,b){return a?2:e.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?e.digits(a):b.month+1},mm:function(a,b){return a?2:e.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return e.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return e.isInteger(a)&&e.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(e.isDate(a)||b.isArray(a))&&(e.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:!(!b.isPlainObject(a)||!b.isPlainObject(c))&&d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to)},c.prototype.isDateOverlap=function(a,c){var d=this,f=d.settings.firstDay?1:0;return e.isInteger(a)&&(e.isDate(c)||b.isArray(c))?(a=a%7+f)===d.create(c).day+1:e.isInteger(c)&&(e.isDate(a)||b.isArray(a))?(c=c%7+f)===d.create(a).day+1:!(!b.isPlainObject(a)||!b.isPlainObject(c))&&d.overlapRanges(a,c)},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,f=d.item.disable.slice(0);return"flip"==c?d.flipEnable():!1===c?(d.flipEnable(1),f=[]):!0===c?(d.flipEnable(-1),f=[]):c.map(function(a){for(var c,g=0;g<f.length;g+=1)if(d.isDateExact(a,f[g])){c=!0;break}c||(e.isInteger(a)||e.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&f.push(a)}),f},c.prototype.activate=function(a,c){var d=this,f=d.item.disable,g=f.length;return"flip"==c?d.flipEnable():!0===c?(d.flipEnable(1),f=[]):!1===c?(d.flipEnable(-1),f=[]):c.map(function(a){var c,h,i,j;for(i=0;i<g;i+=1){if(h=f[i],d.isDateExact(h,a)){c=f[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):e.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;i<g;i+=1)if(d.isDateExact(f[i],a)){f[i]=null;break}if(j)for(i=0;i<g;i+=1)if(d.isDateOverlap(f[i],a)){f[i]=null;break}c&&f.push(c)}),f.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,f=b.item,g=f.now,h=f.select,i=f.highlight,j=f.view,k=f.disable,l=f.min,m=f.max,n=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),e.node("thead",e.node("tr",e.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysShort).slice(0),c.weekdaysFull.slice(0)),o=function(a){return e.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&j.year>=m.year&&j.month>=m.month||!a&&j.year<=l.year&&j.month<=l.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+e.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},p=function(){var d=c.showMonthsShort?c.monthsShort:c.monthsFull;return c.selectMonths?e.node("select",e.group({min:0,max:11,i:1,node:"option",item:function(a){return[d[a],0,"value="+a+(j.month==a?" selected":"")+(j.year==l.year&&a<l.month||j.year==m.year&&a>m.month?" disabled":"")]}}),c.klass.selectMonth,(a?"":"disabled")+" "+e.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):e.node("div",d[j.month],c.klass.month)},q=function(){var d=j.year,f=!0===c.selectYears?5:~~(c.selectYears/2);if(f){var g=l.year,h=m.year,i=d-f,k=d+f;if(g>i&&(k+=g-i,i=g),h<k){var n=i-g,o=k-h;i-=n>o?o:n,k=h}return e.node("select",e.group({min:i,max:k,i:1,node:"option",item:function(a){return[a,0,"value="+a+(d==a?" selected":"")]}}),c.klass.selectYear,(a?"":"disabled")+" "+e.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return e.node("div",d,c.klass.year)};return e.node("div",(c.selectYears?q()+p():p()+q())+o()+o(1),c.klass.header)+e.node("table",n+e.node("tbody",e.group({min:0,max:5,i:1,node:"tr",item:function(a){var f=c.firstDay&&0===b.create([j.year,j.month,1]).day?-7:0;return[e.group({min:d*a-j.day+f+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([j.year,j.month,a+(c.firstDay?1:0)]);var d=h&&h.pick==a.pick,f=i&&i.pick==a.pick,n=k&&b.disabled(a)||a.pick<l.pick||a.pick>m.pick,o=e.trigger(b.formats.toString,b,[c.format,a]);return[e.node("div",a.date,function(b){return b.push(j.month==a.month?c.klass.infocus:c.klass.outfocus),g.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),f&&b.push(c.klass.highlighted),n&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+e.ariaAttr({role:"gridcell",label:o,selected:!(!d||b.$node.val()!==o)||null,activedescendant:!!f||null,disabled:!!n||null})),"",e.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+e.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0}))+e.node("div",e.node("button",c.today,c.klass.buttonToday,"type=button data-pick="+g.pick+(a&&!b.disabled(g)?"":" disabled")+" "+e.ariaAttr({controls:b.$node[0].id}))+e.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+e.ariaAttr({controls:b.$node[0].id}))+e.node("button",c.close,c.klass.buttonClose,"type=button data-close=true "+(a?"":" disabled")+" "+e.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,updateInput:!0,format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)});

/*!
 * Time picker for pickadate.js v3.6.2
 * http://amsul.github.io/pickadate.js/time.htm
 */
!function(a){"function"==typeof define&&define.amd?define(["./picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0].value,e=a.$node.data("value"),f=e||d,g=e?b.formatSubmit:b.format;c.settings=b,c.$node=a.$node,c.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse create validate",view:"parse create validate",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.interval=b.interval||30,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return!0===a[0]?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),f?c.set("select",f,{format:g}):c.set("select",null).set("highlight",c.item.now),c.key={40:1,38:-1,39:1,37:-1,go:function(a){c.set("highlight",c.item.highlight.pick+a*c.item.interval,{interval:a*c.item.interval}),this.render()}},a.on("render",function(){var c=a.$root.children(),d=c.find("."+b.klass.viewset),e=function(a){return["webkit","moz","ms","o",""].map(function(b){return(b?"-"+b+"-":"")+a})},f=function(a,b){e("transform").map(function(c){a.css(c,b)}),e("transition").map(function(c){a.css(c,b)})};d.length&&(f(c,"none"),c[0].scrollTop=~~d.position().top-2*d[0].clientHeight,f(c,""))},1).on("open",function(){a.$root.find("button").attr("disabled",!1)},1).on("close",function(){a.$root.find("button").attr("disabled",!0)},1)}var d=24,e=60,f=12,g=d*e,h=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):"interval"==a?d.set("min",e.min,c).set("max",e.max,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",b,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",b,c),"min"==a&&d.set("max",e.max,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,f){var i=this;return c=void 0===c?a:c,h.isDate(c)&&(c=[c.getHours(),c.getMinutes()]),b.isPlainObject(c)&&h.isInteger(c.pick)?c=c.pick:b.isArray(c)?c=+c[0]*e+ +c[1]:h.isInteger(c)||(c=i.now(a,c,f)),"max"==a&&c<i.item.min.pick&&(c+=g),"min"!=a&&"max"!=a&&(c-i.item.min.pick)%i.item.interval!=0&&(c+=i.item.interval),c=i.normalize(a,c,f),{hour:~~(d+c/e)%d,mins:(e+c%e)%e,time:(g+c)%g,pick:c%g}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return!0===a||b.isArray(a)||h.isDate(a)?d.create(a):a};return h.isInteger(a)||(a=e(a)),h.isInteger(c)||(c=e(c)),h.isInteger(a)&&b.isPlainObject(c)?a=[c.hour,c.mins+a*d.settings.interval]:h.isInteger(c)&&b.isPlainObject(a)&&(c=[a.hour,a.mins+c*d.settings.interval]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b){var c,d=this.item.interval,f=new Date,g=f.getHours()*e+f.getMinutes(),i=h.isInteger(b);return g-=g%d,c=b<0&&d*b+g<=-d,g+="min"==a&&c?0:d,i&&(g+=d*(c&&"max"!=a?b+1:b)),g},c.prototype.normalize=function(a,b){var c=this.item.interval,d=this.item.min&&this.item.min.pick||0;return b-="min"==a?0:(b-d)%c},c.prototype.measure=function(a,c,f){var g=this;return c||(c="min"==a?[0,0]:[d-1,e-1]),"string"==typeof c?c=g.parse(a,c):!0===c||h.isInteger(c)?c=g.now(a,c,f):b.isPlainObject(c)&&h.isInteger(c.pick)&&(c=g.normalize(a,c.pick,f)),c},c.prototype.validate=function(a,b,c){var d=this,e=c&&c.interval?c.interval:d.item.interval;return d.disabled(b)&&(b=d.shift(b,e)),b=d.scope(b),d.disabled(b)&&(b=d.shift(b,-1*e)),b},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return h.isInteger(d)?a.hour==d:b.isArray(d)||h.isDate(d)?a.pick==c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[2]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.shift=function(a,b){var c=this,d=c.item.min.pick,e=c.item.max.pick;for(b=b||c.item.interval;c.disabled(a)&&(a=c.create(a.pick+=b),!(a.pick<=d||a.pick>=e)););return a},c.prototype.scope=function(a){var b=this.item.min.pick,c=this.item.max.pick;return this.create(a.pick>c?c:a.pick<b?b:a)},c.prototype.parse=function(a,b,c){var d,f,g,i,j,k=this,l={};if(!b||"string"!=typeof b)return b;c&&c.format||(c=c||{},c.format=k.settings.format),k.formats.toArray(c.format).map(function(a){var c,d=k.formats[a],e=d?h.trigger(d,k,[b,l]):a.replace(/^!/,"").length;d&&(c=b.substr(0,e),l[a]=c.match(/^\d+$/)?+c:c),b=b.substr(e)});for(i in l)j=l[i],h.isInteger(j)?i.match(/^(h|hh)$/i)?(d=j,"h"!=i&&"hh"!=i||(d%=12)):"i"==i&&(f=j):i.match(/^a$/i)&&j.match(/^p/i)&&("h"in l||"hh"in l)&&(g=!0);return(g?d+12:d)*e+f},c.prototype.formats={h:function(a,b){return a?h.digits(a):b.hour%f||f},hh:function(a,b){return a?2:h.lead(b.hour%f||f)},H:function(a,b){return a?h.digits(a):""+b.hour%24},HH:function(a,b){return a?h.digits(a):h.lead(b.hour%24)},i:function(a,b){return a?2:h.lead(b.mins)},a:function(a,b){return a?4:g/2>b.time%g?"a.m.":"p.m."},A:function(a,b){return a?2:g/2>b.time%g?"AM":"PM"},toArray:function(a){return a.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return h.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}},c.prototype.isTimeExact=function(a,c){var d=this;return h.isInteger(a)&&h.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(h.isDate(a)||b.isArray(a))&&(h.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:!(!b.isPlainObject(a)||!b.isPlainObject(c))&&(d.isTimeExact(a.from,c.from)&&d.isTimeExact(a.to,c.to))},c.prototype.isTimeOverlap=function(a,c){var d=this;return h.isInteger(a)&&(h.isDate(c)||b.isArray(c))?a===d.create(c).hour:h.isInteger(c)&&(h.isDate(a)||b.isArray(a))?c===d.create(a).hour:!(!b.isPlainObject(a)||!b.isPlainObject(c))&&d.overlapRanges(a,c)},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():!1===c?(d.flipEnable(1),e=[]):!0===c?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,f=0;f<e.length;f+=1)if(d.isTimeExact(a,e[f])){c=!0;break}c||(h.isInteger(a)||h.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,f=e.length;return"flip"==c?d.flipEnable():!0===c?(d.flipEnable(1),e=[]):!1===c?(d.flipEnable(-1),e=[]):c.map(function(a){var c,g,i,j;for(i=0;i<f;i+=1){if(g=e[i],d.isTimeExact(g,a)){c=e[i]=null,j=!0;break}if(d.isTimeOverlap(g,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[2]||c.push("inverted")):h.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;i<f;i+=1)if(d.isTimeExact(e[i],a)){e[i]=null;break}if(j)for(i=0;i<f;i+=1)if(d.isTimeOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.i=function(a,b){return h.isInteger(b)&&b>0?b:this.item.interval},c.prototype.nodes=function(a){var b=this,c=b.settings,d=b.item.select,e=b.item.highlight,f=b.item.view,g=b.item.disable;return h.node("ul",h.group({min:b.item.min.pick,max:b.item.max.pick,i:b.item.interval,node:"li",item:function(a){a=b.create(a);var i=a.pick,j=d&&d.pick==i,k=e&&e.pick==i,l=g&&b.disabled(a),m=h.trigger(b.formats.toString,b,[c.format,a]);return[h.trigger(b.formats.toString,b,[h.trigger(c.formatLabel,b,[a])||c.format,a]),function(a){return j&&a.push(c.klass.selected),k&&a.push(c.klass.highlighted),f&&f.pick==i&&a.push(c.klass.viewset),l&&a.push(c.klass.disabled),a.join(" ")}([c.klass.listItem]),"data-pick="+a.pick+" "+h.ariaAttr({role:"option",label:m,selected:!(!j||b.$node.val()!==m)||null,activedescendant:!!k||null,disabled:!!l||null})]}})+h.node("li",h.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+h.ariaAttr({controls:b.$node[0].id})),"",h.ariaAttr({role:"presentation"})),c.klass.list,h.ariaAttr({role:"listbox",controls:b.$node[0].id}))},c.defaults=function(a){return{clear:"Clear",format:"h:i A",interval:30,closeOnSelect:!0,closeOnClear:!0,updateInput:!0,klass:{picker:a+" "+a+"--time",holder:a+"__holder",list:a+"__list",listItem:a+"__list-item",disabled:a+"__list-item--disabled",selected:a+"__list-item--selected",highlighted:a+"__list-item--highlighted",viewset:a+"__list-item--viewset",now:a+"__list-item--now",buttonClear:a+"__button--clear"}}}(a.klasses().picker),a.extend("pickatime",c)});


(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map


/* Blob.js
 * A Blob, File, FileReader & URL implementation.
 * 2018-08-09
 *
 * By Eli Grey, http://eligrey.com
 * By Jimmy Wärting, https://github.com/jimmywarting
 * License: MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */

;(function(){

  var global = typeof window === 'object'
      ? window : typeof self === 'object'
      ? self : this

  var BlobBuilder = global.BlobBuilder
    || global.WebKitBlobBuilder
    || global.MSBlobBuilder
    || global.MozBlobBuilder;

  global.URL = global.URL || global.webkitURL || function(href, a) {
  	a = document.createElement('a')
  	a.href = href
  	return a
  }

  var origBlob = global.Blob
  var createObjectURL = URL.createObjectURL
  var revokeObjectURL = URL.revokeObjectURL
  var strTag = global.Symbol && global.Symbol.toStringTag
  var blobSupported = false
  var blobSupportsArrayBufferView = false
  var arrayBufferSupported = !!global.ArrayBuffer
  var blobBuilderSupported = BlobBuilder
    && BlobBuilder.prototype.append
    && BlobBuilder.prototype.getBlob;

  try {
    // Check if Blob constructor is supported
    blobSupported = new Blob(['ä']).size === 2

    // Check if Blob constructor supports ArrayBufferViews
    // Fails in Safari 6, so we need to map to ArrayBuffers there.
    blobSupportsArrayBufferView = new Blob([new Uint8Array([1,2])]).size === 2
  } catch(e) {}

  /**
   * Helper function that maps ArrayBufferViews to ArrayBuffers
   * Used by BlobBuilder constructor and old browsers that didn't
   * support it in the Blob constructor.
   */
  function mapArrayBufferViews(ary) {
    return ary.map(function(chunk) {
      if (chunk.buffer instanceof ArrayBuffer) {
        var buf = chunk.buffer;

        // if this is a subarray, make a copy so we only
        // include the subarray region from the underlying buffer
        if (chunk.byteLength !== buf.byteLength) {
          var copy = new Uint8Array(chunk.byteLength);
          copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
          buf = copy.buffer;
        }

        return buf;
      }

      return chunk;
    });
  }

  function BlobBuilderConstructor(ary, options) {
    options = options || {};

    var bb = new BlobBuilder();
    mapArrayBufferViews(ary).forEach(function(part) {
      bb.append(part);
    });

    return options.type ? bb.getBlob(options.type) : bb.getBlob();
  };

  function BlobConstructor(ary, options) {
    return new origBlob(mapArrayBufferViews(ary), options || {});
  };

  if (global.Blob) {
    BlobBuilderConstructor.prototype = Blob.prototype;
    BlobConstructor.prototype = Blob.prototype;
  }

  function FakeBlobBuilder() {
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6), 
          0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12), 
          0x80 | ((charcode>>6) & 0x3f), 
          0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
          | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18), 
          0x80 | ((charcode>>12) & 0x3f), 
          0x80 | ((charcode>>6) & 0x3f), 
          0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    function fromUtf8Array(array) {
      var out, i, len, c;
      var char2, char3;
      
      out = "";
      len = array.length;
      i = 0;
      while (i < len) {
        c = array[i++];
        switch (c >> 4)
        { 
          case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
          // 0xxxxxxx
          out += String.fromCharCode(c);
          break;
          case 12: case 13:
          // 110x xxxx   10xx xxxx
          char2 = array[i++];
          out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
          break;
          case 14:
          // 1110 xxxx  10xx xxxx  10xx xxxx
          char2 = array[i++];
          char3 = array[i++];
          out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0));
          break;
        }
      }    
      return out;
    }
    function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }
    function bufferClone(buf) {
      var view = new Array(buf.byteLength)
      var array = new Uint8Array(buf)
      var i = view.length
      while(i--) {
        view[i] = array[i]
      }
      return view
    }
    function encodeByteArray(input) {
      var byteToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

      var output = [];

      for (var i = 0; i < input.length; i += 3) {
        var byte1 = input[i];
        var haveByte2 = i + 1 < input.length;
        var byte2 = haveByte2 ? input[i + 1] : 0;
        var haveByte3 = i + 2 < input.length;
        var byte3 = haveByte3 ? input[i + 2] : 0;

        var outByte1 = byte1 >> 2;
        var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
        var outByte3 = ((byte2 & 0x0F) << 2) | (byte3 >> 6);
        var outByte4 = byte3 & 0x3F;

        if (!haveByte3) {
          outByte4 = 64;

          if (!haveByte2) {
            outByte3 = 64;
          }
        }

        output.push(
            byteToCharMap[outByte1], byteToCharMap[outByte2],
            byteToCharMap[outByte3], byteToCharMap[outByte4])
      }

      return output.join('')
    }

    var create = Object.create || function (a) {
      function c() {}
      c.prototype = a;
      return new c
    }
    
    if (arrayBufferSupported) {
      var viewClasses = [
        '[object Int8Array]',
        '[object Uint8Array]',
        '[object Uint8ClampedArray]',
        '[object Int16Array]',
        '[object Uint16Array]',
        '[object Int32Array]',
        '[object Uint32Array]',
        '[object Float32Array]',
        '[object Float64Array]'
      ]

      var isArrayBufferView = ArrayBuffer.isView || function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      }
    }

    
    
    /********************************************************/
    /*                   Blob constructor                   */
    /********************************************************/
    function Blob(chunks, opts) {
      chunks = chunks || []
      for (var i = 0, len = chunks.length; i < len; i++) {
        var chunk = chunks[i]
        if (chunk instanceof Blob) {
          chunks[i] = chunk._buffer
        } else if (typeof chunk === 'string') {
          chunks[i] = toUTF8Array(chunk)
        } else if (arrayBufferSupported && (ArrayBuffer.prototype.isPrototypeOf(chunk) || isArrayBufferView(chunk))) {
          chunks[i] = bufferClone(chunk)
        } else if (arrayBufferSupported && isDataView(chunk)) {
          chunks[i] = bufferClone(chunk.buffer)
        } else {
          chunks[i] = toUTF8Array(String(chunk))
        }
      }

      this._buffer = [].concat.apply([], chunks)
      this.size = this._buffer.length
      this.type = opts ? opts.type || '' : ''
    }

    Blob.prototype.slice = function(start, end, type) {
      var slice = this._buffer.slice(start || 0, end || this._buffer.length)
      return new Blob([slice], {type: type})
    }

    Blob.prototype.toString = function() {
      return '[object Blob]'
    }

    

    /********************************************************/
    /*                   File constructor                   */
    /********************************************************/
    function File(chunks, name, opts) {
      opts = opts || {}
      var a = Blob.call(this, chunks, opts) || this
      a.name = name
      a.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date
      a.lastModified = +a.lastModifiedDate
      
      return a
    }

    File.prototype = create(Blob.prototype);
    File.prototype.constructor = File;

    if (Object.setPrototypeOf) 
      Object.setPrototypeOf(File, Blob);
    else {
      try {File.__proto__ = Blob} catch (e) {}
    }

    File.prototype.toString = function() {
      return '[object File]'
    }

    
    /********************************************************/
    /*                FileReader constructor                */
    /********************************************************/
    // function FileReader() {
    // 	if (!(this instanceof FileReader))
    // 		throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.")

    // 	var delegate = document.createDocumentFragment()
    // 	this.addEventListener = delegate.addEventListener
    // 	this.dispatchEvent = function(evt) {
    // 		var local = this['on' + evt.type]
    // 		if (typeof local === 'function') local(evt)
    // 		delegate.dispatchEvent(evt)
    // 	}
    // 	this.removeEventListener = delegate.removeEventListener
    // }

    // function _read(fr, blob, kind) {
    // 	if (!(blob instanceof Blob))
    // 		throw new TypeError("Failed to execute '" + kind + "' on 'FileReader': parameter 1 is not of type 'Blob'.")
    	
    // 	fr.result = ''

    // 	setTimeout(function(){
    // 		this.readyState = FileReader.LOADING
    // 		fr.dispatchEvent(new Event('load'))
    // 		fr.dispatchEvent(new Event('loadend'))
    // 	})
    // }

    // FileReader.EMPTY = 0
    // FileReader.LOADING = 1
    // FileReader.DONE = 2
    // FileReader.prototype.error = null
    // FileReader.prototype.onabort = null
    // FileReader.prototype.onerror = null
    // FileReader.prototype.onload = null
    // FileReader.prototype.onloadend = null
    // FileReader.prototype.onloadstart = null
    // FileReader.prototype.onprogress = null

    // FileReader.prototype.readAsDataURL = function(blob) {
    // 	_read(this, blob, 'readAsDataURL')
    // 	this.result = 'data:' + blob.type + ';base64,' + encodeByteArray(blob._buffer)
    // }

    // FileReader.prototype.readAsText = function(blob) {
    // 	_read(this, blob, 'readAsText')
    // 	this.result = fromUtf8Array(blob._buffer)
    // }

    // FileReader.prototype.readAsArrayBuffer = function(blob) {
    // 	_read(this, blob, 'readAsText')
    // 	this.result = blob._buffer.slice()
    // }

    // FileReader.prototype.abort = function() {}

    
    /********************************************************/
    /*                         URL                          */
    /********************************************************/
    URL.createObjectURL = function(blob) {
      return blob instanceof Blob 
        ? 'data:' + blob.type + ';base64,' + encodeByteArray(blob._buffer)
        : createObjectURL.call(URL, blob)
    }
    
    URL.revokeObjectURL = function(url) {
      revokeObjectURL && revokeObjectURL.call(URL, url)
    }

    /********************************************************/
    /*                         XHR                          */
    /********************************************************/
    var _send = global.XMLHttpRequest && global.XMLHttpRequest.prototype.send
    if (_send) {
      XMLHttpRequest.prototype.send = function(data) {
        if (data instanceof Blob) {
          this.setRequestHeader('Content-Type', data.type)
          _send.call(this, fromUtf8Array(data._buffer))
        } else {
          _send.call(this, data)
        }
      }
    }
    
    global.FileReader = FileReader
    global.File = File
    global.Blob = Blob
  }

  if (strTag) {
    File.prototype[strTag] = 'File'
    Blob.prototype[strTag] = 'Blob'
    FileReader.prototype[strTag] = 'FileReader'
  }

  function fixFileAndXHR() {
    var isIE = !!global.ActiveXObject || (
      '-ms-scroll-limit' in document.documentElement.style && 
      '-ms-ime-align' in document.documentElement.style
    )

    // Monkey patched 
    // IE don't set Content-Type header on XHR whose body is a typed Blob
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/6047383
    var _send = global.XMLHttpRequest && global.XMLHttpRequest.prototype.send
    if (isIE && _send) {
      XMLHttpRequest.prototype.send = function(data) {
        if (data instanceof Blob) {
          this.setRequestHeader('Content-Type', data.type)
          _send.call(this, data)
        } else {
          _send.call(this, data)
        }
      }
    }

    try {
      new File([], '')
    } catch(e) {
      try {
        var klass = new Function('class File extends Blob {' + 
          'constructor(chunks, name, opts) {' +
            'opts = opts || {};' +
            'super(chunks, opts || {});' +
            'this.name = name;' +
            'this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;' +
            'this.lastModified = +this.lastModifiedDate;' +
          '}};' +
          'return new File([], ""), File'
        )()
        global.File = klass
      } catch(e) {
        var klass = function(b, d, c) {
          var blob = new Blob(b, c)
          var t = c && void 0 !== c.lastModified ? new Date(c.lastModified) : new Date
          
          blob.name = d
          blob.lastModifiedDate = t
          blob.lastModified = +t
          blob.toString = function() {
            return '[object File]'
          }
          
          if (strTag)
            blob[strTag] = 'File'
          
          return blob
        }
        global.File = klass
      }
    }
  }

  if (blobSupported) {
    fixFileAndXHR()
    global.Blob = blobSupportsArrayBufferView ? global.Blob : BlobConstructor
  } else if (blobBuilderSupported) {
    fixFileAndXHR()
    global.Blob = BlobBuilderConstructor;
  } else {
    FakeBlobBuilder()
  }

})();

/* global saveAs, Blob, BlobBuilder, console */
/* exported ics */

var ics = function(uidDomain, prodId) {
  'use strict';

  if (navigator.userAgent.indexOf('MSIE') > -1 && navigator.userAgent.indexOf('MSIE 10') == -1) {
    console.log('Unsupported Browser');
    return;
  }

  if (typeof uidDomain === 'undefined') { uidDomain = 'default'; }
  if (typeof prodId === 'undefined') { prodId = 'Calendar'; }

  var SEPARATOR = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
  var calendarEvents = [];
  var calendarStart = [
    'BEGIN:VCALENDAR',
    'PRODID:' + prodId,
    'VERSION:2.0'
  ].join(SEPARATOR);
  var calendarEnd = SEPARATOR + 'END:VCALENDAR';
  var BYDAY_VALUES = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return {
    /**
     * Returns events array
     * @return {array} Events
     */
    'events': function() {
      return calendarEvents;
    },

    /**
     * Returns calendar
     * @return {string} Calendar in iCalendar format
     */
    'calendar': function() {
      return calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;
    },

    /**
     * Add event to the calendar
     * @param  {string} subject     Subject/Title of event
     * @param  {string} description Description of event
     * @param  {string} location    Location of event
     * @param  {string} begin       Beginning date of event
     * @param  {string} stop        Ending date of event
     */
    'addEvent': function(subject, description, location, begin, stop, rrule) {
      // I'm not in the mood to make these optional... So they are all required
      if (typeof subject === 'undefined' ||
        typeof description === 'undefined' ||
        typeof location === 'undefined' ||
        typeof begin === 'undefined' ||
        typeof stop === 'undefined'
      ) {
        return false;
      }

      // validate rrule
      if (rrule) {
        if (!rrule.rrule) {
          if (rrule.freq !== 'YEARLY' && rrule.freq !== 'MONTHLY' && rrule.freq !== 'WEEKLY' && rrule.freq !== 'DAILY') {
            throw "Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";
          }

          if (rrule.until) {
            if (isNaN(Date.parse(rrule.until))) {
              throw "Recurrence rrule 'until' must be a valid date string";
            }
          }

          if (rrule.interval) {
            if (isNaN(parseInt(rrule.interval))) {
              throw "Recurrence rrule 'interval' must be an integer";
            }
          }

          if (rrule.count) {
            if (isNaN(parseInt(rrule.count))) {
              throw "Recurrence rrule 'count' must be an integer";
            }
          }

          if (typeof rrule.byday !== 'undefined') {
            if ((Object.prototype.toString.call(rrule.byday) !== '[object Array]')) {
              throw "Recurrence rrule 'byday' must be an array";
            }

            if (rrule.byday.length > 7) {
              throw "Recurrence rrule 'byday' array must not be longer than the 7 days in a week";
            }

            // Filter any possible repeats
            rrule.byday = rrule.byday.filter(function(elem, pos) {
              return rrule.byday.indexOf(elem) == pos;
            });

            for (var d in rrule.byday) {
              if (BYDAY_VALUES.indexOf(rrule.byday[d]) < 0) {
                throw "Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'";
              }
            }
          }
        }
      }

      //TODO add time and time zone? use moment to format?
      var start_date = new Date(begin);
      var end_date = new Date(stop);
      var now_date = new Date();

      var start_year = ("0000" + (start_date.getFullYear().toString())).slice(-4);
      var start_month = ("00" + ((start_date.getMonth() + 1).toString())).slice(-2);
      var start_day = ("00" + ((start_date.getDate()).toString())).slice(-2);
      var start_hours = ("00" + (start_date.getHours().toString())).slice(-2);
      var start_minutes = ("00" + (start_date.getMinutes().toString())).slice(-2);
      var start_seconds = ("00" + (start_date.getSeconds().toString())).slice(-2);

      var end_year = ("0000" + (end_date.getFullYear().toString())).slice(-4);
      var end_month = ("00" + ((end_date.getMonth() + 1).toString())).slice(-2);
      var end_day = ("00" + ((end_date.getDate()).toString())).slice(-2);
      var end_hours = ("00" + (end_date.getHours().toString())).slice(-2);
      var end_minutes = ("00" + (end_date.getMinutes().toString())).slice(-2);
      var end_seconds = ("00" + (end_date.getSeconds().toString())).slice(-2);

      var now_year = ("0000" + (now_date.getFullYear().toString())).slice(-4);
      var now_month = ("00" + ((now_date.getMonth() + 1).toString())).slice(-2);
      var now_day = ("00" + ((now_date.getDate()).toString())).slice(-2);
      var now_hours = ("00" + (now_date.getHours().toString())).slice(-2);
      var now_minutes = ("00" + (now_date.getMinutes().toString())).slice(-2);
      var now_seconds = ("00" + (now_date.getSeconds().toString())).slice(-2);

      // Since some calendars don't add 0 second events, we need to remove time if there is none...
      var start_time = '';
      var end_time = '';
      if (start_hours + start_minutes + start_seconds + end_hours + end_minutes + end_seconds != 0) {
        start_time = 'T' + start_hours + start_minutes + start_seconds;
        end_time = 'T' + end_hours + end_minutes + end_seconds;
      }
      var now_time = 'T' + now_hours + now_minutes + now_seconds;

      var start = start_year + start_month + start_day + start_time;
      var end = end_year + end_month + end_day + end_time;
      var now = now_year + now_month + now_day + now_time;

      // recurrence rrule vars
      var rruleString;
      if (rrule) {
        if (rrule.rrule) {
          rruleString = rrule.rrule;
        } else {
          rruleString = 'rrule:FREQ=' + rrule.freq;

          if (rrule.until) {
            var uDate = new Date(Date.parse(rrule.until)).toISOString();
            rruleString += ';UNTIL=' + uDate.substring(0, uDate.length - 13).replace(/[-]/g, '') + '000000Z';
          }

          if (rrule.interval) {
            rruleString += ';INTERVAL=' + rrule.interval;
          }

          if (rrule.count) {
            rruleString += ';COUNT=' + rrule.count;
          }

          if (rrule.byday && rrule.byday.length > 0) {
            rruleString += ';BYDAY=' + rrule.byday.join(',');
          }
        }
      }

      var stamp = new Date().toISOString();

      var calendarEvent = [
        'BEGIN:VEVENT',
        'UID:' + calendarEvents.length + "@" + uidDomain,
        'CLASS:PUBLIC',
        'DESCRIPTION:' + description,
        'DTSTAMP;VALUE=DATE-TIME:' + now,
        'DTSTART;VALUE=DATE-TIME:' + start,
        'DTEND;VALUE=DATE-TIME:' + end,
        'LOCATION:' + location,
        'SUMMARY;LANGUAGE=en-us:' + subject,
        'TRANSP:TRANSPARENT',
        'RRULE:' + 'FREQ=DAILY;INTERVAL=1;UNTIL=20190407T040000Z',
        'END:VEVENT'
      ];

      if (rruleString) {
        calendarEvent.splice(4, 0, rruleString);
      }

      calendarEvent = calendarEvent.join(SEPARATOR);

      calendarEvents.push(calendarEvent);
      return calendarEvent;
    },

    /**
     * Download calendar using the saveAs function from filesave.js
     * @param  {string} filename Filename
     * @param  {string} ext      Extention
     */
    'download': function(filename, ext) {
      if (calendarEvents.length < 1) {
        return false;
      }

      ext = (typeof ext !== 'undefined') ? ext : '.ics';
      filename = (typeof filename !== 'undefined') ? filename : 'calendar';
      var calendar = calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;

      var blob;
      if (navigator.userAgent.indexOf('MSIE 10') === -1) { // chrome or firefox
        blob = new Blob([calendar]);
      } else { // ie
        var bb = new BlobBuilder();
        bb.append(calendar);
        blob = bb.getBlob('text/x-vCalendar;charset=' + document.characterSet);
      }
      saveAs(blob, filename + ext);
      return calendar;
    },

    /**
     * Build and return the ical contents
     */
    'build': function() {
      if (calendarEvents.length < 1) {
        return false;
      }

      var calendar = calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;

      return calendar;
    }
  };
};

/* Helper Functions */
var getClosest = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;

};

var getCookie = function (name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
};

var sendRequest = function (url, success) {
  var xhr = new XMLHttpRequest();
  if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
  xhr.open('GET', url);
  xhr.onload = success;
  xhr.send();
  return xhr;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/* BEGIN CUSTOM DATE/TIME FUNCTIONS */

let zone_name =  moment.tz.guess();
let timezone = moment.tz(zone_name).zoneAbbr();
var user_id = getUrlParameter('u_id ') || getCookie('ifs_id') || 1011470;

function todaysDate(){
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();

    let formattedDate = [year];

    return formattedDate;
};

function currentTime(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    let timeNow = [hour, 30];

    return timeNow;
}

function daysFromToday(days){
    let currentTime = new Date();
    let _date = new Date( currentTime.setDate(currentTime.getDate() + days ) );

    let year = _date.getFullYear();
    let month = _date.getMonth();
    let day = _date.getDate();

    let formatedDate = [year, month, day];

    return formatedDate;
}

function formatDateTime( date , time , recipient ){
  let zone_name =  moment.tz.guess();
  let timezone = moment.tz(zone_name).zoneAbbr();
  var oldDateTime = date + ' ' + time;
  var newFormat, formattedDate;
  var newDateTime = moment(oldDateTime,'MMMM D, YYYY h:mm A');
  if( recipient === 'ifs'){
    newFormat = 'YYYY-MM-DD HH:mm:ss';
    formattedDate = newDateTime.tz(zone_name).format(newFormat) + '|' + zone_name;
  } else if ( recipient === 'google' ) {
    newFormat = 'YYYYMMDDTHHmmss';
    formattedDate = newDateTime.format(newFormat) +'|'+newDateTime.add(30,'minutes').format(newFormat) + '|' + zone_name;
  } else if ( recipient === 'ics' ) {
    newFormat = 'YYYY-MM-DD HH:mm:ss';
    formattedDate = newDateTime.format(newFormat) +'|'+newDateTime.add(30,'minutes').format(newFormat) + '|' + zone_name;
  } else if ( recipient === 'fb' ){
    var fbtime = newDateTime.format("HHmm");
    var fbday = newDateTime.format("dd");
    var fbdate = fbtime + String(fbday).toLowerCase();
    formattedDate = 'b64:'+btoa(fbdate);
  }
  
  return formattedDate;
}

currentTime();

let timePicker = $(".timepicker").pickatime({
    interval: 90,
    formatLabel: 'h:i a ' + timezone,
    disabled: [
      [0,30],
      [1.0],
      [2,0],
      [2,30],
      [3,30],
      [4,0],
      [4,30],
      [5,0],
      [5,30],
      [6,30],
      [7,0],
      [8],
      [8,30],
      [9,30],
      [10],
      [11],
      [11,30],
      [12,30]
      [13],
      [14],
      [14,30],
      [15,30],
      [16,0],
      [17],
      [17,30],
      [18,30],
      [19,0],
      [20,0],
      [20,30],
      [21,30],
      [22,0],
      [23],
      [23,30]
    ],
    onOpen: function(data){
        if(String(moment().format('MMMM D, YYYY')) === String($(".datepicker").val())){
          this.set('min',true);
        } else{
          this.set('min',false);
        }
    }
});

let datePicker = $(".datepicker").pickadate({
    today: '',
    clear: 'Clear',
    format: 'mmmm d, yyyy',
    close: '',
    min: todaysDate(),
    max: daysFromToday(3)
});



function addToGoogle(deets){
 var link = 'https://calendar.google.com/calendar/r/eventedit?' +
 'text='+ deets.title+ 
 '&location='+ deets.location + 
 '&dates=' + deets.start + '/' + deets.end +
 '&details=' + deets.description +
  '&ctz=' +  deets.timezone;

  return link
}

function icsDownload(deets){
  var cal = ics();
  cal.addEvent(
    deets.title, 
    deets.description, 
    deets.location , 
    deets.start, 
    deets.end
  );
  cal.download();
}

function loadFBChatBot(){
  window.fbMessengerPlugins = window.fbMessengerPlugins || {
        init: function() {
            FB.init({
                appId: "1678638095724206",
                xfbml: true,
                version: "v3.0"
            });
        },
        callable: []
    };
    window.fbAsyncInit = window.fbAsyncInit || function() {
        window.fbMessengerPlugins.callable.forEach(function(item) {
            item();
        });
        window.fbMessengerPlugins.init();
    };
    setTimeout(function() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, 0);
}

function sendToIFS(date, timezone, tags = []){
  var specialty = getUrlParameter('specialty') || 'healthcoach';
  
  // Date Magic
  var dateObject = moment(date,'YYYY-MM-DD HH:mm:ss').tz(timezone);
  var WebinarStartDateTime = dateObject.format('YYYY-MM-DD HH:mm:ss');
  var WebinarStartDate = dateObject.format('YYYY-MM-DD'); 
  var WebinarPstTime = dateObject.tz('America/Los_Angeles').format('YYYY-MM-DD HH:mm:ss');
  
  var cfQuery = '';
  
  // Begin Tagging
  tags.push(2774); // Calendar Reminder
  tags.push(1550); // Webinar sign-up
  
  // 5728 - HC Campaign 24 Hour
  
  // If webinar is today
  if(WebinarStartDate === String(moment().format('MMMM D, YYYY'))){
    tags.push(5116); // Webinar is Today
  }
  
   if (specialty == 'healthcoach') {
     tags.push(5514); // DatePicker - HEALTH COACH NEW
     tags.push(5406); // Webinar Signup - Health Coach
     cfQuery += '&custom_fields[_webinarhealthcoachdatetime]=' + WebinarStartDateTime;
     cfQuery += '&custom_fields[_webinarhealthcoachdate]=' + WebinarStartDate;   
     cfQuery += '&custom_fields[_webinarhealthcoachdatetimeConvertedToPST]=' + WebinarPstTime;
   } else if (specialty == 'nutrition') {
     tags.push(5448); // DatePicker - NUTRITION COACH
     tags.push(15155); // Evergreen Nutrition Webinar Registrant
     cfQuery += '&custom_fields[_webinarnutritiondatetime]=' + WebinarStartDateTime;
     cfQuery += '&custom_fields[_webinarnutritiondate]=' + WebinarStartDate;   
     cfQuery += '&custom_fields[_webinarnutritiondatetimeConvertedToPST]=' + WebinarPstTime;
   } else if (specialty == 'lifecoach') {
     tags.push(5440); // DatePicker - LIFE COACH
     tags.push(5408); // Webinar Signup - Life Coach
     cfQuery += '&custom_fields[_webinarlifecoachdatetime]=' + WebinarStartDateTime;
     cfQuery += '&custom_fields[_webinarlifecoachdate]=' + WebinarStartDate;   
     cfQuery += '&custom_fields[_webinarlifecoachdatetimeConvertedToPST]=' + WebinarPstTime;
   }
 
  var url = 'https://api.healthcoachinstitute.com/api/hmba/tag_user.php?u_id=' + user_id;
  tags.forEach(function(tag){
    url += '&tags[]='+tag;
  });
  var finalURL = url+cfQuery;
  
  if(user_id){

    sendRequest(finalURL, function(request){
          if(request){
            console.log('user tagged!');
          }                
     });
    
  }
}


function getDescription(){
	var str = document.getElementById('vision-text').value;
 	var patt = /^take[a-zA-Z0-9_.\n ]{0,140}$/gmi;
 	var res = str.match(patt) + "...";
 	var result = res.replace(/\n+/g, ". ");
 	console.log(result);
	return result;
}

function getTitle(){
	var title = "Tylenol 500mg";

	var str = document.getElementById('vision-text').value;
 	var patt = /(\S+\s+\S+)MG/gmi;
 	// var patt = /^[a-zA-Z0-9_. ]*$/gmi;
 	//^[a-zA-Z0-9_. ]*$
 	var result = str.match(patt);
	return result[0];
	// return title;
}

function getTabletcount(){
	var tabletCount = 1;

	var str = document.getElementById('vision-text').value;
 	var patt = /(?=take).*(?=tablet)/gmi;
    var result = str.match(patt);
 	tabletCount = result[0].match(/\d+/gmi);

	return tabletCount;
}

function getQuantity(){
	var quantity = 30;

	var str = document.getElementById('vision-text').value;
 	var patt = /(?=qty).*/gmi;
    var result = str.match(patt);
 	quantity = result[0].match(/\d+/gmi);

	return quantity;
}
//april 8, 2019
function monthName() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  return n;
}
function getDate(){
	var currentdate = new Date(); 
	var datetime = monthName() +" " + 
				   currentdate.getDate() + ", " +
				   currentdate.getFullYear();
	return datetime;
}
//value="3:00 PM"
 function getMeridian() {
               var d = new Date("Mon Jun 22 03:45:24 PDT 2015");
				var h = (d.getHours() + 11) % 12 + 1; //Courtesy @tinka
				var m = h > 12 ? 'pm' : 'am';
				return m;
      }
function getTime(){
	var currentdate = new Date(); 
	var datetime = ((currentdate.getHours() + 11) % 12 + 1) + ":"  
                + currentdate.getMinutes() + " " 
                + getMeridian();
    console.log(datetime);
	return datetime;
}



// EVENT LISTENERS

document.addEventListener('click', function (event) {

	if ( event.target.classList.contains('load') ) {
    event.preventDefault();

    document.querySelector('.title').value = getTitle();
    document.querySelector('.tabletpicker').value = getTabletcount();
    document.querySelector('.quantity').value = getQuantity();
    document.querySelector('.datepicker').value = getDate();
    document.querySelector('.timepicker').value = getTime();
    // document.querySelector('.description').value = getDescription();
  }
}, false);
// Schedule Form Submit
document.addEventListener('click', function (event) {

	if ( event.target.classList.contains('submit') ) {
    event.preventDefault();
    
		// Get the parent with the `.accordion` class
		var parent = getClosest(event.target, '.schedule');
    var step1 = parent.querySelector('.step1');
    var step2 = parent.querySelector('.step2');
    var date = parent.querySelector('.datepicker');
    var dateWrapper = getClosest(date, '.pick-wrapper-field');
    var time = parent.querySelector('.timepicker');
    var timeWrapper = getClosest(time, '.pick-wrapper-field');
    var title = parent.querySelector('.title');
    var titleWrapper = getClosest(title, '.pick-wrapper-field');

    // Basic Validation
     if(!title.value || title.value === null){
     console.log('please type a title');
     titleWrapper.classList.add('has-error');
     return;
   } else {
   	 console.log(title.value);
   	 titleWrapper.classList.add('has-success');
   }

    if(!date.value || date.value === null){
     console.log('please select date');
     dateWrapper.classList.add('has-error');
     return;
   } else{
   	 console.log(date.value);
     dateWrapper.classList.add('has-success');
   }
    
    if(!time.value || time.value === null){
     console.log('please select time');
     timeWrapper.classList.add('has-error');
     return;
   } else{
   	  console.log(time.value);
     timeWrapper.classList.add('has-success');
   }
    
    
    var ifsDates = formatDateTime(date.value,time.value,'ifs').split('|');
    sendToIFS(ifsDates[0],ifsDates[1]);
    
    var calDates = formatDateTime(date.value,time.value,'google').split('|');
    document.querySelector('[data-cal-type=google]').setAttribute('data-cal-start', calDates[0]);
    document.querySelector('[data-cal-type=google]').setAttribute('data-cal-end', calDates[1]);
    document.querySelector('[data-cal-type=google]').setAttribute('data-cal-timezone', calDates[2]);
    document.querySelector('[data-cal-type=google]').setAttribute('data-cal-title', title.value);
    document.querySelector('[data-cal-type=google]').setAttribute('data-cal-description', getDescription());
    
    var icsDates = formatDateTime(date.value,time.value,'ics').split('|');
    parent.querySelectorAll('[data-cal-type=ics]').forEach( 
       function(link){
                link.setAttribute('data-cal-start', icsDates[0]);
                link.setAttribute('data-cal-end', icsDates[1]);
                link.setAttribute('data-cal-timezone', icsDates[2]);
                link.setAttribute('data-cal-title', title.value);
                link.setAttribute('data-cal-description', getDescription());
                // link.setAttribute('rrule', 'FREQ=DAILY;INTERVAL=1;UNTIL=20190407T040000Z');
              }                                                           
    );

    var fbDate = formatDateTime(date.value,time.value,'fb');
    if(fbDate !== null && typeof fbDate !== 'undefined'){
      parent.querySelector('.fb-send-to-messenger').setAttribute('data-ref',fbDate);
    }
  
    step1.classList.remove('show');
    step1.classList.add('hide');
    step2.classList.remove('hide');
    
    loadFB();
    
  }
}, false);

// Add to google Link
document.addEventListener('click', function (event) {
	if ( event.target.getAttribute('data-cal-type') === 'google'  ) {
    // Event Data
    var link = event.target;
    var url;
    var myEvent = [];
    myEvent['location'] = 'https://t-rx.herokuapp.com/';
    myEvent['organizer'] = 'Self';
    myEvent['email'] = 't-rx@mailinator.com';
    myEvent['type'] = link.getAttribute('data-cal-type');
    myEvent['start'] = link.getAttribute('data-cal-start'); 
    myEvent['end'] = link.getAttribute('data-cal-end');
    myEvent['title'] = link.getAttribute('data-cal-title'); 
    myEvent['description'] = link.getAttribute('data-cal-description');
    myEvent['timezone'] = link.getAttribute('data-cal-timezone');
    
    url = addToGoogle(myEvent);
    
    window.open(url,'_blank');
    
  }

}, false);
 
// Add to Outlook/iCal
document.addEventListener('click', function (event) {
	if ( event.target.getAttribute('data-cal-type') === 'ics' ) {
    // Event Data
    var link = event.target;
    var url;
    var myEvent = [];
    myEvent['location'] = 'https://t-rx.herokuapp.com/';
    myEvent['organizer'] = 'Self';
    myEvent['email'] = 't-rx@mailinator.com';
    myEvent['type'] = link.getAttribute('data-cal-type');
    myEvent['start'] = link.getAttribute('data-cal-start'); 
    myEvent['end'] = link.getAttribute('data-cal-end');
    myEvent['title'] = link.getAttribute('data-cal-title'); 
    myEvent['description'] = link.getAttribute('data-cal-description');
    // myEvent['rrule'] = link.getAttribute('rrule');
    
    myEvent['timezone'] = link.getAttribute('data-cal-timezone');
    
    icsDownload(myEvent);
    
  }

}, false);