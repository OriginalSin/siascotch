var app=function(){"use strict";function t(){}function e(t,e){for(var s in e)t[s]=e[s];return t}function s(t,e){for(var s in e)t[s]=1;return t}function i(t){t()}function n(t,e){t.appendChild(e)}function a(t,e,s){t.insertBefore(e,s)}function o(t){t.parentNode.removeChild(t)}function r(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function l(t,e,s,i){t.addEventListener(e,s,i)}function u(t,e,s,i){t.removeEventListener(e,s,i)}function h(t,e,s){t.style.setProperty(e,s)}function d(){return Object.create(null)}function m(t){t._lock=!0,p(t._beforecreate),p(t._oncreate),p(t._aftercreate),t._lock=!1}function f(t,e){t._handlers=d(),t._slots=d(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function p(t){for(;t&&t.length;)t.shift()()}var v={destroy:function(e){this.destroy=t,this.fire("destroy"),this.set=t,this._fragment.d(!1!==e),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var s=t in this._handlers&&this._handlers[t].slice();if(s)for(var i=0;i<s.length;i+=1){var n=s[i];if(!n.__calling)try{n.__calling=!0,n.call(this,e)}finally{n.__calling=!1}}},on:function(t,e){var s=this._handlers[t]||(this._handlers[t]=[]);return s.push(e),{cancel:function(){var t=s.indexOf(e);~t&&s.splice(t,1)}}},set:function(t){this._set(e({},t)),this.root._lock||m(this.root)},_recompute:t,_set:function(t){var s=this._state,i={},n=!1;for(var a in t=e(this._staged,t),this._staged={},t)this._differs(t[a],s[a])&&(i[a]=n=!0);n&&(this._state=e(e({},s),t),this._recompute(i,this._state),this._bind&&this._bind(i,this._state),this._fragment&&(this.fire("state",{changed:i,current:this._state,previous:s}),this._fragment.p(i,this._state),this.fire("update",{changed:i,current:this._state,previous:s})))},_stage:function(t){e(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}};function g(s){var n,c;f(this,s),this._state=e({},s.data),this._intro=!!s.intro,this._fragment=(this._state,{c:function(){(n=r("div")).innerHTML='<div class="col-sm-6 col-one"><div class="block-content"><a href="//shopsiascotch.com" title="Buy SIA Online"><img src="//siascotch.com/images/home-buy-image-hover.png" alt="BUY" class="svelte-fq92yk"></a></div></div>\n\n\t\t\t\t<div class="col-sm-6 col-two svelte-fq92yk"><div class="block-content"><a href="//siascotch.com/retailers/" title="Find a Retailer"><img src="//siascotch.com/images/home-find-image-hover.png" alt="FIND" class="svelte-fq92yk"></a></div></div>\n\n\t\t\t\t<div class="col-sm-6 col-three"><div class="block-content"><a href="//siascotch.com/blog/category/drinks/" title="Drinks"><img src="//siascotch.com/images/home-drinks-image-hover.png" alt="DRINKS" class="svelte-fq92yk"></a></div></div>\n\n\t\t\t\t<div class="col-sm-6 col-four"><div class="block-content"><a href="//siascotch.com/press/" title="Press"><img src="//siascotch.com/images/home-press-image-hover.png" alt="PRESS" class="svelte-fq92yk"></a></div></div>',n.className="hover-image"},m:function(t,e){a(t,n,e),c=!0},p:t,i:function(t,e){c||this.m(t,e)},o:i,d:function(t){t&&o(n)}}),s.target&&(this._fragment.c(),this._mount(s.target,s.anchor)),this._intro=!0}e(g.prototype,v);window.serverBase;var _={buttons:["zipcode","sButton","searchBARS","searchALL","searchSTORE","closetome"],getButtonType:function(t){for(var e=0,s=_.buttons.length;e<s;e++){var i=_.buttons[e];if(L.DomUtil.hasClass(t,i))return i}return null},setCurrentType:function(t){for(var e=2,s=_.buttons.length;e<s;e++){var i=_.buttons[e];fname=t===i?"addClass":"removeClass",L.DomUtil[fname](document.getElementsByClassName(i)[0],"current")}},locationfound:function(t){console.log("locationfound",t)},setFilter:function(t){var e=t?t.target:null,s=e&&e.className?_.getButtonType(e):"searchALL",i=0,n=_.geoJsonLayer.getLayers(),a=map.getBounds();if("sButton"===s)for(var o=document.getElementsByClassName("zipcode")[0].value,r=o.match(/[^\d]/)?"Address":"Zipcode",c=0,l=n.length;c<l;c++){var u=n[c];if(-1!==String(u.feature.properties[r]).indexOf(o))return map.setView(u.getLatLng(),17),void u.openPopup()}else"closetome"===s?map.locate({setView:!0}):-1!==s.indexOf("search")&&(_.setCurrentType(s),n.forEach(function(t){var e=t.feature,n=e.properties,o=e.dom,r=a.contains(t.getLatLng());"searchBARS"===s?"DRINK"!==n.Category&&(r=!1):"searchSTORE"===s&&"STORE"!==n.Category&&(r=!1),r?(i++,L.DomUtil.removeClass(o,"gmx-hidden")):L.DomUtil.addClass(o,"gmx-hidden")}),viewItemsCount.innerHTML=i)},getFeatureCollection:function(t){return{type:"FeatureCollection",features:t.map(function(t,e){var s=L.DomUtil.create("div","point-detail vcard");return s.innerHTML='<div class="icon"><div class="name fn org overflow-controlled" title="'+t.Name+'"><a href="'+t.Website+'" target="none">'+t.Name+'</a></div><div class="caption">'+t.Description+'</div></div><div class="metadata"><strong><div class="address adr overflow-controlled" title="'+t.Address+'">'+t.Address+'</div><div class="phone tel overflow-controlled">(202) 543-9300</div><div class="url overflow-controlled"><a href="'+t.Website+'" target="_blank">Website</a></div></strong></div>',{type:"Feature",id:e+1,dom:s,properties:t,geometry:{type:"Point",coordinates:[t.Lng,t.Lat]}}})}}};var y={createMap:function(t){var e=this.get().layersTree,s=(t=t||{}).app||{},i=s.gmxMap||{},n=t.state||{},a=(n.calendar,i.mapID,i.apiKey,n.map?n.map.position:{});fetch("data/sia6.json").then(function(t){return t.json()}).then(function(t){s.theme&&document.body.classList.add(s.theme),L.leafletMap&&L.leafletMap.remove(),e=n.layersTree||e,this.layersTree=e;var i=_.getFeatureCollection(t),o=L.markerClusterGroup({showCoverageOnHover:!1,disableClusteringAtZoom:16}),r=_.geoJsonLayer=L.geoJson(i,{onEachFeature:function(t,e){var s=t.properties,i=(s.Image?'<img src="'+s.Image+'" />':"")+"<br><strong>"+s.Name+"</strong>\t\t\t\t\t\t\t\t<br>"+s.Address+"\t\t\t\t\t\t\t\t<br>"+s["Phone Number"]+'\t\t\t\t\t\t\t\t<a href="'+s.Website+'">WEBSITE</a>';e.bindPopup(i)}}),c=document.getElementsByClassName("map")[0],l=L.leafletMap=new L.Map(c,{srs:3857,layers:[L.tileLayer("https://tilessputnik.ru/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],center:new L.LatLng(a.y||33.17434155100208,a.x||-98.0419921875),zoom:a.z||4}).on("moveend",this.setFilter.bind(this));o.addLayer(r),document.getElementsByClassName("viewItemsCount")[0].innerHTML=i.features.length,l.addLayer(o),this.markers=o,this.setFilter()}.bind(this))},closeToMe:function(){L.leafletMap.locate({setView:!0})},setFilter:function(){if(_.geoJsonLayer){var t=this.get().filter,e=_.geoJsonLayer.getLayers(),s=L.leafletMap.getBounds(),i=[];e.forEach(function(e){var n=e.feature.properties,a=s.contains(e.getLatLng());t&&n.Category!==t&&(a=!1),a&&i.push(e)}),document.getElementsByClassName("viewItemsCount")[0].innerHTML=i.length,this.markers.clearLayers(),this.markers.addLayers(i);var n=document.getElementsByClassName("mode-controls")[0];n.getElementsByClassName("STORE")[0].classList["STORE"===t?"add":"remove"]("current"),n.getElementsByClassName("DRINK")[0].classList["DRINK"===t?"add":"remove"]("current"),n.getElementsByClassName("ALL")[0].classList[""===t?"add":"remove"]("current")}}};function b(t){var e=t.changed,s=t.current,i=t.previous;console.log("map onstate",e,s,i),e.menu&&"retailers"===s.menu&&this.createMap(s.permalink),e.filter&&this.setFilter(s.filter)}function S(h){var d=this;f(this,h),this._state=e({layersTree:{visible:{},expanded:{}},filter:""},h.data),this._intro=!!h.intro,this._handlers.state=[b],b.call(this,{changed:s({},this._state),current:this._state}),this._fragment=function(e,s){var h,d,m,f,p,v,g,_,y,b,L,S,A,N,I,k,T,C;function w(t){e.set({filter:"STORE"})}function B(t){e.set({filter:"DRINK"})}function E(t){e.set({filter:""})}function M(t){e.closeToMe()}return{c:function(){h=r("div"),d=c("\r\n"),m=r("div"),(f=r("div")).innerHTML='<input class="zipcode svelte-58u772" type="text" placeholder="Enter your City or Zip Code" size="25">\n\t\t\t\t<input type="submit" value="SUBMIT" class="sButton svelte-58u772">',p=c("\r\n  "),v=r("div"),(g=r("a")).textContent="STORES",_=c("\r\n\t"),(y=r("a")).textContent="BARS",b=c("\r\n\t"),(L=r("a")).textContent="ALL",S=c("  \r\n\t"),(A=r("a")).textContent="CloseToMe",N=c("\r\n"),(I=r("div")).innerHTML='Visible items: <span class="viewItemsCount">0</span>',k=c("\r\n"),T=r("div"),h.className="map svelte-58u772",f.className="title svelte-58u772",l(g,"click",w),g.href="#STORE",g.className="menu STORE svelte-58u772",l(y,"click",B),y.href="#DRINK",y.className="menu DRINK svelte-58u772",l(L,"click",E),L.href="#ALL",L.className="menu current ALL svelte-58u772",l(A,"click",M),A.href="#ALL",A.className="menu closetome svelte-58u772",v.className="mode-controls svelte-58u772",m.className="header svelte-58u772",I.className="viewItemsCountCont svelte-58u772",T.className="viewItems svelte-58u772"},m:function(t,e){a(t,h,e),a(t,d,e),a(t,m,e),n(m,f),n(m,p),n(m,v),n(v,g),n(v,_),n(v,y),n(v,b),n(v,L),n(v,S),n(v,A),a(t,N,e),a(t,I,e),a(t,k,e),a(t,T,e),C=!0},p:t,i:function(t,e){C||this.m(t,e)},o:i,d:function(t){t&&(o(h),o(d),o(m)),u(g,"click",w),u(y,"click",B),u(L,"click",E),u(A,"click",M),t&&(o(N),o(I),o(k),o(T))}}}(this,this._state),this.root._oncreate.push(function(){d.fire("update",{changed:s({},d._state),current:d._state})}),h.target&&(this._fragment.c(),this._mount(h.target,h.anchor),m(this)),this._intro=!0}e(S.prototype,v),e(S.prototype,y);window.serverBase;var A={openMenu:function(){document.body.classList.add("show_sidebar")},closeMenu:function(){document.body.classList.remove("show_sidebar")}};function N(t){var e=t.changed,s=t.current,i=t.previous;console.log("in onstate",e,s,i)}function I(t,e){var s;return{c:function(){(s=r("div")).className="b butleSIA svelte-b22zl6"},m:function(t,e){a(t,s,e)},d:function(t){t&&o(s)}}}function k(e,s){var i,n,l,u=new g({root:e.root,store:e.store});return{c:function(){(i=r("div")).innerHTML='<div class="main-text">"Outstanding! One of the best for its style. Distinctive."</div>\n\t\t\t    <div class="name">- Whisky Advocate Magazine</div>\n\t\t\t    <div class="buy-button"><a href="//shopsiascotch.com" title="Buy SIA Online"><img alt="" src="//siascotch.com/images/buy-button.png" border="0" class="home_button"></a></div>',n=c("\r\n"),u._fragment.c(),i.className="home-text"},m:function(t,e){a(t,i,e),a(t,n,e),u._mount(t,e),l=!0},p:t,i:function(t,e){l||this.m(t,e)},o:function(t){l&&(u&&u._fragment.o(t),l=!1)},d:function(t){t&&(o(i),o(n)),u.destroy(t)}}}function T(t,e){var s,i={menu:e.menu},n=new S({root:t.root,store:t.store,data:i});return{c:function(){n._fragment.c()},m:function(t,e){n._mount(t,e),s=!0},p:function(t,e){var s={};t.menu&&(s.menu=e.menu),n._set(s)},i:function(t,e){s||this.m(t,e)},o:function(t){s&&(n&&n._fragment.o(t),s=!1)},d:function(t){n.destroy(t)}}}function C(t){var i=this;f(this,t),this._state=e({menu:"retailers",share:!1,conf:"",urlParams:{},dropdownMenu:[{name:"refresh",title:"Refresh"},{name:"link",title:"Share",checked:!1}],map:null,permalink:null},t.data),this._intro=!!t.intro,this._handlers.state=[N],N.call(this,{changed:s({},this._state),current:this._state}),this._fragment=function(t,e){var s,i,d,m,f,p,v,g,_,y,b,L,S,A,N,C,w,B,E,M,O,R,W,x,D,H,F,U,P,z,K,G,Y,J,q,j,V,Z,$,Q,X,tt,et,st;function it(e){t.closeMenu()}function nt(e){t.openMenu()}var at="retailers"!==e.menu&&I();function ot(e){t.set({menu:"retailers"})}var rt=[T,k],ct=[];function lt(t){return"retailers"===t.menu?0:1}return j=lt(e),V=ct[j]=rt[j](t,e),{c:function(){var t,e,n;(s=r("div")).innerHTML="<h2>SIA Scotch Whisky - Buy SIA Online</h2>\n\t\t\t\t<p>Award-winning blend of Speyside, Highland and Islay whiskies. Perfect Gift. Under $50. Buy SIA Blended Scotch Whisky Today.</p>",i=c("\r\n\r\n"),(d=r("div")).innerHTML='<div class="simple-banner-inner"><span class="regular-text">Free shipping when you buy SIA Scotch Whisky. Get one for yourself and one for a friend.</span>\n\t\t\t\t\t<span class="yellow-text">FREE SHIPPING</span>\n\t\t\t\t\t<a href="//www.reservebar.com/sia-scotch-whisky" id="hb-traffic-cta" class="hb-cta hb-cta-style-button wiggle">BUY NOW </a></div>',m=c("\r\n \r\n"),f=r("div"),p=r("span"),v=r("i"),g=c("\r\n\r\n\t"),(_=r("ul")).innerHTML='<li><a href="//www.reservebar.com/products/sia-scotch-whisky?utm_source=SIA_BrandWebsite&utm_medium=website&utm_campaign=SIA" title="BUY SIA ONLINE">BUY SIA ONLINE</a></li>\n\t\t\t\t\t<li><a href="//siascotch.com/retailers/" title="FIND A RETAILER">FIND A RETAILER</a></li>\n\t\t\t\t\t<li><a href="//siascotch.com/about/" title="ABOUT SIA">ABOUT SIA</a></li>\n\t\t\t\t\t<li><a href="//siascotch.com/blog/" title="BLOG">BLOG</a></li>\n\t\t\t\t\t  <li><a href="//siascotch.com/press/" title="PRESS">Press</a></li>\t  \n\t\t\t\t\t<li><a href="//siascotch.com/contact/" title="CONTACT"> CONTACT </a></li>\n\t\t\t\t\t <li class="hr-line"><hr></li>                         \n\t\t\t\t\t <li><a href="//siascotch.com/legal/" title="LEGAL"> Legal </a></li>\n\t\t\t\t\t  <li><a href="//siascotch.com/trade/" title="DOWNLOADS"> Trade </a></li>\n\t\t\t\t\t   <li class="hr-line"><hr></li>',y=c("\r\n\r\n"),b=r("div"),L=r("div"),(S=r("div")).innerHTML='<a href="//siascotch.com/" title="SIA Scotch Whisky"><img src="//siascotch.com/wp-content/uploads/2013/07/SIA_Scotch_Whisky_Logo.png" border="0" alt="SIA Scotch Whisky"></a>\n\t\t\t\t\t\t<a href="//shopsiascotch.com" class="home_m" title="BUY SIA ONLINE"><img src="//siascotch.com/images/a.gif" border="0" class="buy" alt="BUY SIA ONLINE"></a>',A=c("\r\n\t\t"),N=r("div"),C=r("span"),w=r("i"),B=c("\r\n\r\n"),at&&at.c(),E=c("\r\n"),M=r("div"),O=r("div"),(R=r("div")).innerHTML='<div class="logo_wrapper"><a href="//siascotch.com/" title="SIA Scotch Whisky"><img src="//siascotch.com/wp-content/uploads/2013/07/SIA_Scotch_Whisky_Logo.png" border="0" alt="SIA Scotch Whisky"></a>\n\t\t\t            <h1 style="display:none;">SIA Scotch Whisky</h1></div>',W=c("\r\n        "),x=r("div"),D=r("div"),H=r("div"),F=r("ul"),(U=r("li")).innerHTML='<a href="//shopsiascotch.com" class="home_m" title="SIA Scotch Whisky - Buy SIA Online"><img src="//siascotch.com/images/a.gif" border="0" class="buy" alt="Buy SIA Online"></a>',P=c("\r\n\t\t\t\t\t\t"),(z=r("li")).innerHTML='<a href="#ret" class="contact_m" title="SIA Scotch Whisky - Find a Retailer"><img src="//siascotch.com/images/FIND-A-RETAILER.gif" border="0" class="buy-2" alt="Find a Retailer"></a>',K=c("\r\n\t\t\t\t\t\t"),(G=r("li")).innerHTML='<a href="//siascotch.com/about" class="about_m" title="SIA Scotch Whisky - About"><img src="//siascotch.com/images/SIA_nav_ABOUT.gif" class="about" border="0" alt="ABOUT"></a>',Y=c("\r\n\t\t\t\t\t\t"),(J=r("li")).innerHTML='<a href="//siascotch.com/contact" class="contact_m" title="SIA Scotch Whisky - Contact"><img src="//siascotch.com/images/SIA_nav_CONTACT.gif" class="contact" border="0" alt="CONTACT"></a>',q=c("\r\n"),V.c(),Z=c("\r\n\r\n"),($=r("div")).innerHTML='<div><div class="textwidget">© Copyright 2018 Whisky Archive, Inc. SIA Scotch Whisky is a Registered Trademark. All rights reserved.  <a href="//siascotch.com/legal/" title="Legal">Legal</a>  <a href="//siascotch.com/trade/" title="Downloads">Trade</a>\n\t\t\t  <a href="//siascotch.com/retailers" title="Retailers">Retailers</a>  \n\t\t\t<a href="//siascotch.com/blog/" title="Blog">Blog</a>  \n\t\t\t<a href="//siascotch.com/contact/" title="Contact">Contact</a></div></div>',Q=c("\r\n\r\n"),(X=r("div")).innerHTML='<div id="footer" role="contentinfo"><div id="colophon"><div id="site-info-text"><div><div class="textwidget">© Copyright 2018 Whisky Archive, Inc. SIA Scotch Whisky is a Registered Trademark. All rights reserved.  <a href="//siascotch.com/legal/" title="Legal">Legal</a>  <a href="//siascotch.com/trade/" title="Downloads">Trade</a>\n\t\t\t  <a href="//siascotch.com/retailers" title="Retailers">Retailers</a>  \n\t\t\t<a href="//siascotch.com/blog/" title="Blog">Blog</a>  \n\t\t\t<a href="//siascotch.com/contact/" title="Contact">Contact</a></div></div></div></div></div>\n\n\t\t\t\t\t<div id="subscribepopup_container" style="display: none;"><div class="subscribepopup_box subscribepopup_font_dark"><div class="subscribepopup_message"></div>\n\t\t\t\t\t\t\t<div id="subscribepopup_form"><input class="subscribepopup_input" name="subscribepopup_email" placeholder="Enter your e-mail" id="subscribepopup_email" value="Enter your e-mail">\n\t\t\t\t\t\t\t\t<input type="button" id="subscribepopup_submit" value="JOIN" onclick="subscribepopup_subscribe();">\n\t\t\t\t\t\t\t\t<img id="subscribepopup_progress" src="//siascotch.com/wp-content/plugins/subscribe-popup/images/loading.gif" alt="" width="16" height="16"></div></div></div>',tt=c("\r\n\r\n\r\n"),et=r("iframe"),h(s,"display","none"),d.id="simple-banner",d.className="simple-banner",l(v,"click",it),v.className="fa fa-close svelte-b22zl6",p.className="nav_trigger svelte-b22zl6",_.className="list-unstyled",f.className="push_sidebar svelte-b22zl6",S.className="mobile-logo",l(w,"click",nt),w.className="fa fa-navicon",C.className="nav_trigger",N.className="mobile-menu",L.className="mobile-wrapper",b.id="mobile-header",R.id="logo_part",l(z,"click",ot),F.id="menu-main_menu",F.className="menu",H.id="access",t=H,e="role",null==(n="navigation")?t.removeAttribute(e):t.setAttribute(e,n),D.className="menu_wrapper",x.id="menu_part",O.id="header_part",M.id="wrapper",M.className="hfeed",$.id="site-info-text",$.className="site-info-text",h(X,"display","none"),et.title="",h(et,"display","none")},m:function(t,e){a(t,s,e),a(t,i,e),a(t,d,e),a(t,m,e),a(t,f,e),n(f,p),n(p,v),n(f,g),n(f,_),a(t,y,e),a(t,b,e),n(b,L),n(L,S),n(L,A),n(L,N),n(N,C),n(C,w),a(t,B,e),at&&at.m(t,e),a(t,E,e),a(t,M,e),n(M,O),n(O,R),n(O,W),n(O,x),n(x,D),n(D,H),n(H,F),n(F,U),n(F,P),n(F,z),n(F,K),n(F,G),n(F,Y),n(F,J),a(t,q,e),ct[j].m(t,e),a(t,Z,e),a(t,$,e),a(t,Q,e),a(t,X,e),a(t,tt,e),a(t,et,e),st=!0},p:function(e,s){"retailers"!==s.menu?at||((at=I()).c(),at.m(E.parentNode,E)):at&&(at.d(1),at=null);var i=j;(j=lt(s))===i?ct[j].p(e,s):(V.o(function(){ct[i].d(1),ct[i]=null}),(V=ct[j])||(V=ct[j]=rt[j](t,s)).c(),V.m(Z.parentNode,Z))},i:function(t,e){st||this.m(t,e)},o:function(t){st&&(V?V.o(t):t(),st=!1)},d:function(t){t&&(o(s),o(i),o(d),o(m),o(f)),u(v,"click",it),t&&(o(y),o(b)),u(w,"click",nt),t&&o(B),at&&at.d(t),t&&(o(E),o(M)),u(z,"click",ot),t&&o(q),ct[j].d(t),t&&(o(Z),o($),o(Q),o(X),o(tt),o(et))}}}(this,this._state),this.root._oncreate.push(function(){i.fire("update",{changed:s({},i._state),current:i._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),m(this)),this._intro=!0}e(C.prototype,v),e(C.prototype,A);var w,B=(w={},location.search.substr(1).split("&").forEach(function(t){var e=t.split("=");w[e[0]]=e[1]}),w);return new C({target:document.body,data:{urlParams:B,name:"world"}})}();
//# sourceMappingURL=bundle.js.map
