!function(d){function t(t){for(var n,e,o=t[0],a=t[1],r=t[2],i=0,c=[];i<o.length;i++)e=o[i],Object.prototype.hasOwnProperty.call(f,e)&&f[e]&&c.push(f[e][0]),f[e]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(d[n]=a[n]);for(s&&s(t);c.length;)c.shift()();return l.push.apply(l,r||[]),u()}function u(){for(var t,n=0;n<l.length;n++){for(var e=l[n],o=!0,a=1;a<e.length;a++){var r=e[a];0!==f[r]&&(o=!1)}o&&(l.splice(n--,1),t=i(i.s=e[0]))}return t}var e={},f={0:0},l=[];function i(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return d[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=d,i.c=e,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)i.d(e,o,function(t){return n[t]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var n=window.webpackJsonp=window.webpackJsonp||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var a=0;a<n.length;a++)t(n[a]);var s=o;l.push([208,16,5,14,15,6,8,7,4,1,13,17,18,9,11,3,19,10,12,2]),u()}({107:function(t,n,e){t.exports=e.p+"52fd02299d7c87cee77f3a81fc7869bf.png"},19:function(t,n,e){"use strict";e.d(n,"d",function(){return o}),e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i});var o=["#splash","#home","#xebiaGroup","#bornInNetherlands","#organisationStructure","#organizationMatrix","#cultureOfInovation","#toolsWeUse","#thingsToRemember","#thankyou","#feelingBored"],a=0,r=o[a],i=0},193:function(t,f,l){"use strict";(function(n){l.d(f,"a",function(){return u});var e=l(19),o=e.a,a=!1;function t(){n(e.d[o]).show()}function r(){n(e.d[o]).hide()}function i(t){n(e.d[o]).removeClass(t)}function c(){!function(t){n(e.d[o]).addClass("slide-out-right"),setTimeout(function(){t()},250)}(function(){r(),i("slide-out-right"),void 0!==e.d[o-1]&&(o-=1),t(),function(t){a=!0,n(e.d[o]).addClass("slide-in-left"),setTimeout(function(){t(),a=!1},250)}(function(){i("slide-in-left")})})}function d(){!function(t){n(e.d[o]).addClass("slide-out-left"),setTimeout(function(){t()},250)}(function(){r(),i("slide-out-left"),void 0!==e.d[o+1]&&(o+=1),t(),function(t){a=!0,n(e.d[o]).addClass("slide-in-right"),setTimeout(function(){t(),a=!1},250)}(function(){i("slide-in-right")})})}function u(t){if(!a){switch(t.keyCode){case 37:c();break;case 39:d()}o>=e.c?n("#navArrows").show():n("#navArrows").hide()}}}).call(this,l(70))},194:function(t,n,e){t.exports=e.p+"eb59857abbbb2dcc4cefa5961d8457bf.svg"},195:function(t,n,e){t.exports=e.p+"fa21b5300dd217509c6e8c8073feb379.png"},196:function(t,n,e){t.exports=e.p+"1616c7d9062a6cc3ade606699234e288.svg"},197:function(t,n,e){t.exports=e.p+"7cd76ff3fa1a9bd631b68f5268525e91.png"},198:function(t,n,e){t.exports=e.p+"60bc3dceccd59451a72a96445caf9dad.svg"},199:function(t,n,e){t.exports=e.p+"8c7e68fab1b2330f204029a21da848f5.svg"},200:function(t,n,e){t.exports=e.p+"1e9fa35f829f3c83082f0bf64c240b43.svg"},201:function(t,n,e){t.exports=e.p+"87234456d2d17a54ad6e7c70af807827.svg"},202:function(t,n,e){t.exports=e.p+"586c405d8510de13b3bbfb0e26c98404.svg"},203:function(t,n,e){t.exports=e.p+"b85331fbf637cfa6830213f09d912e79.svg"},204:function(t,n,e){t.exports=e.p+"4698ed6815c24d052c4eb1c6075bd660.svg"},205:function(t,n,e){t.exports=e.p+"ff8c9982fc6f393dbcb74f3eef14d048.svg"},208:function(t,n,d){"use strict";d.r(n),function(t){d(249),d(250),d(251),d(252),d(253),d(254),d(255),d(256),d(257),d(258),d(259),d(260),d(261),d(262),d(263),d(264),d(265),d(266);var n=d(19),e=d(193);d(267),d(269),d(268);document.addEventListener("keydown",e.a);var o=!0,a=!1,r=void 0;try{for(var i,c=n.d[Symbol.iterator]();!(o=(i=c.next()).done);o=!0)screen=i.value,screen!==n.b&&t(screen).hide()}catch(t){a=!0,r=t}finally{try{o||null==c.return||c.return()}finally{if(a)throw r}}}.call(this,d(70))},250:function(t,n,e){},251:function(t,n,e){},252:function(t,n,e){},253:function(t,n,e){},254:function(t,n,e){},255:function(t,n,e){},256:function(t,n,e){},257:function(t,n,e){},258:function(t,n,e){},259:function(t,n,e){},260:function(t,n,e){},261:function(t,n,e){},262:function(t,n,e){},263:function(t,n,e){},264:function(t,n,e){},265:function(t,n,e){},266:function(t,n,e){},267:function(t,n,e){(function(t){t("#homeStartButton").click(function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:39}))}),t("#navArrowPrev").click(function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:37}))}),t("#navArrowNext").click(function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:39}))})}).call(this,e(70))},268:function(t,n,e){(function(e){e(".project-row").click(function(t){var n=e(".xebian");t.target.append(n[0])})}).call(this,e(70))},269:function(t,n,e){"use strict";var o=e(194),a=e(195),r=e(196),i=e(197),c=e(198),d=e(107),u=e(199),f=e(200),l=e(201),s={name:"Xebia Group",id:"Xebia-Group",logo:d,children:[{name:"Xebia Netherlands",logo:d},{name:"Xpirit",logo:c},{name:"Binx.io",logo:o},{name:"Xebia Global Services",logo:d,id:"Xebia-Global-Services",children:[{name:"Xebia India",id:"Xebia-India",logo:f,children:[{name:"Xebia Gurugram",logo:e(202),id:"Xebia-Gurugram"},{name:"Xebia Pune",logo:e(203),id:"Xebia-Pune"},{name:"Xebia Bangalore",logo:e(204),id:"Xebia-Bangalore"},{name:"Xebia Academy",logo:e(205),id:"Xebia-Academy"}]},{name:"Xebia Middle East",id:"Xebia-Middle-East",logo:l},{name:"Xebia US",id:"Xebia-US",logo:u}]},{name:"GoDataDriven",logo:a},{name:"Xccelerated",logo:i},{name:"Stack State",logo:r}]},p=e(82);function b(t,d){t.each(function(){for(var t,n=p.b(this),e=n.text().split(/\s+/).reverse(),o=[],a=0,r=n.attr("x"),i=n.attr("y"),c=n.text(null).append("tspan").attr("x",r).attr("y",i).attr("dy","0em");t=e.pop();)o.push(t),c.text(o.join(" ")),c.node().getComputedTextLength()>d&&(o.pop(),c.text(o.join(" ")),o=[t],c=n.append("tspan").attr("x",r).attr("y",i).attr("dy",1.1*++a+0+"em").text(t));o.join(" ")===n.text()&&c.attr("y",(parseInt(i,10)+5).toString())})}var g,h,y,v,m,x;g="",h=.5*window.innerWidth,y=.21*window.innerHeight,v=p.b("#organization_tree").append("svg").attr("width",window.outerWidth).attr("height",window.outerHeight).append("g").attr("transform","translate(".concat(h,", ").concat(y,")")),m=p.c().nodeSize([236,178]),x=p.a(s),m(x),v.append("defs").append("filter").attr("id","drop-shadow").attr("height","150%").append("feDropShadow").attr("dx",0).attr("dy",0).attr("flood-color","rgba(0,0,0,0.10)").attr("stdDeviation",5),v.selectAll("path").data(x.descendants().slice(1)).enter().append("path").attr("d",function(t){return"M".concat(t.x+110,",").concat(t.y," L").concat(t.x+110,",").concat(t.y-20," L").concat(t.parent.x+110,",").concat(t.y-20," L").concat(t.parent.x+110,",").concat(t.parent.y)}).style("fill","none").attr("stroke","#F7941D").attr("stroke-width","2"),v.selectAll("g").data(x.descendants()).enter().append("g").attr("transform",function(t){return"translate(".concat(t.x,",").concat(t.y,")")}).append("rect").attr("rx",30).attr("ry",30).attr("width",220).attr("height",50).attr("filter","url(#drop-shadow)").style("fill","#ffffff"),v.selectAll("g").append("text").text(function(t){return t.data.name}).attr("text-anchor","middle").attr("y",function(t){return 25}).attr("x",function(t){return 140}).call(b,110),v.selectAll("g").append("image").attr("x",function(t){return 25}).attr("xlink:href",function(t){return t.data.logo}).attr("height","50px").attr("width","50px"),v.selectAll("g").on("click",function(t,n){(document.getElementById("organization_details").style.display="")!==g&&(document.getElementById(g).style.display="none"),document.getElementById(t.data.id).style.display="",g=t.data.id})}});