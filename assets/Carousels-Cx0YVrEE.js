import{r as s,_ as te,R as c,b as X,c as Y,P as r,j as e}from"./index-BdaBm8SC.js";import{u as xe,i as fe,a as ye,b as E}from"./DefaultLayout-Ckyyxl45.js";import"./index.esm-DQbrliO6.js";import{R as H}from"./react-DAYWnhSM.js";import{C as ke,a as w}from"./CRow-FpoC6OTk.js";import{C as N,a as y}from"./CCardBody-Ca5ilI96.js";import{C as k}from"./CCardHeader-CLtrdHpL.js";var ve=s.createContext({}),v=s.forwardRef(function(t,D){var C=t.children,g=t.activeIndex,i=g===void 0?0:g,P=t.className,V=t.controls,J=t.dark,K=t.indicators,F=t.interval,p=F===void 0?5e3:F,W=t.onSlid,h=t.onSlide,M=t.pause,S=M===void 0?"hover":M,A=t.touch,Z=A===void 0?!0:A,T=t.transition,R=t.wrap,q=R===void 0?!0:R,I=te(t,["children","activeIndex","className","controls","dark","indicators","interval","onSlid","onSlide","pause","touch","transition","wrap"]),f=s.useRef(null),G=xe(D,f),m=s.useRef({}).current,B=s.useState(i),l=B[0],x=B[1],d=s.useState(!1),o=d[0],_=d[1],b=s.useState(),re=b[0],je=b[1],ae=s.useState("next"),Q=ae[0],$=ae[1],ne=s.useState(0),U=ne[0],pe=ne[1],le=s.useState(null),Ce=le[0],ie=le[1],ce=s.useState(),oe=ce[0],de=ce[1];s.useEffect(function(){pe(s.Children.toArray(C).length)}),s.useEffect(function(){oe&&ee()},[oe]),s.useEffect(function(){!o&&ee(),!o&&W&&W(l,Q),o&&h&&h(l,Q)},[o]),s.useEffect(function(){return window.addEventListener("scroll",me),function(){window.removeEventListener("scroll",me)}});var ee=function(){he(),!(!q&&l===U-1)&&typeof p=="number"&&(m.timeout=setTimeout(function(){return ge()},typeof re=="number"?re:p))},he=function(){return S&&m.timeout&&clearTimeout(m.timeout)},ge=function(){if(!document.hidden&&f.current&&fe(f.current)){if(o)return;L("next")}},L=function(a){o||($(a),a==="next"?l===U-1?x(0):x(l+1):x(l===0?U-1:l-1))},be=function(a){if(l!==a){if(l<a){$("next"),x(a);return}l>a&&($("prev"),x(a))}},me=function(){!document.hidden&&f.current&&fe(f.current)?de(!0):de(!1)},Ee=function(a){var u=Ce;if(u!==null){var Ne=a.touches[0].clientX,ue=u-Ne;ue>5&&L("next"),ue<-5&&L("prev"),ie(null)}},we=function(a){var u=a.touches[0].clientX;ie(u)};return c.createElement("div",X({className:Y("carousel slide",{"carousel-fade":T==="crossfade"},P)},J&&{"data-coreui-theme":"dark"},{onMouseEnter:he,onMouseLeave:ee},Z&&{onTouchStart:we,onTouchMove:Ee},I,{ref:G}),c.createElement(ve.Provider,{value:{setAnimating:_,setCustomInterval:je}},K&&c.createElement("div",{className:"carousel-indicators"},Array.from({length:U},function(a,u){return u}).map(function(a){return c.createElement("button",X({key:"indicator".concat(a),onClick:function(){!o&&be(a)},className:Y({active:l===a}),"data-coreui-target":""},l===a&&{"aria-current":!0},{"aria-label":"Slide ".concat(a+1)}))})),c.createElement("div",{className:"carousel-inner"},s.Children.map(C,function(a,u){if(c.isValidElement(a))return c.cloneElement(a,{active:l===u,direction:Q,key:u})})),V&&c.createElement(c.Fragment,null,c.createElement("button",{className:"carousel-control-prev",onClick:function(){return L("prev")}},c.createElement("span",{className:"carousel-control-prev-icon","aria-label":"prev"})),c.createElement("button",{className:"carousel-control-next",onClick:function(){return L("next")}},c.createElement("span",{className:"carousel-control-next-icon","aria-label":"next"})))))});v.propTypes={activeIndex:r.number,children:r.node,className:r.string,controls:r.bool,dark:r.bool,indicators:r.bool,interval:r.oneOfType([r.bool,r.number]),onSlid:r.func,onSlide:r.func,pause:r.oneOf([!1,"hover"]),touch:r.bool,transition:r.oneOf(["slide","crossfade"]),wrap:r.bool};v.displayName="CCarousel";var j=s.forwardRef(function(t,D){var C=t.className,g=te(t,["className"]);return c.createElement("div",X({className:Y("carousel-caption",C)},g,{ref:D}))});j.propTypes={className:r.string};j.displayName="CCarouselCaption";var n=s.forwardRef(function(t,D){var C=t.children,g=t.className,i=t.active,P=t.direction,V=t.interval,J=V===void 0?!1:V,K=te(t,["children","className","active","direction","interval"]),F=s.useContext(ve),p=F.setAnimating,W=F.setCustomInterval,h=s.useRef(null),M=xe(D,h),S=s.useRef(),A=s.useState(),Z=A[0],T=A[1],R=s.useState(),q=R[0],I=R[1],f=s.useState(i&&"active"),G=f[0],m=f[1],B=s.useState(0),l=B[0],x=B[1];return s.useEffect(function(){i&&(W(J),l!==0&&I("carousel-item-".concat(P))),S.current&&!i&&m("active"),(i||S.current)&&setTimeout(function(){var d;l!==0&&((d=h.current)===null||d===void 0||d.offsetHeight,T("carousel-item-".concat(P==="next"?"start":"end")))},0),S.current=i,l===0&&x(l+1)},[i]),s.useEffect(function(){var d,o;return(d=h.current)===null||d===void 0||d.addEventListener("transitionstart",function(){i&&p(!0)}),(o=h.current)===null||o===void 0||o.addEventListener("transitionend",function(){i&&p(!1),T(""),I(""),i&&m("active"),i||m("")}),function(){var _,b;(_=h.current)===null||_===void 0||_.removeEventListener("transitionstart",function(){i&&p(!0)}),(b=h.current)===null||b===void 0||b.removeEventListener("transitionend",function(){i&&p(!1),T(""),I(""),i&&m("active"),i||m("")})}}),c.createElement("div",X({className:Y("carousel-item",G,Z,q,g),ref:M},K),C)});n.propTypes={active:r.bool,children:r.node,className:r.string,direction:r.string,interval:r.oneOfType([r.bool,r.number])};n.displayName="CCarouselItem";const z="/product-data-react/assets/angular-DbhKAn4Z.jpg",O="/product-data-react/assets/vue-Ces23Jk5.jpg",se=["data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E","data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E","data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"],Be=()=>e.jsxs(ke,{children:[e.jsxs(w,{xs:12,children:[e.jsx(ye,{href:"components/carousel/"}),e.jsxs(N,{className:"mb-4",children:[e.jsxs(k,{children:[e.jsx("strong",{children:"Carousel"})," ",e.jsx("small",{children:"Slide only"})]}),e.jsxs(y,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Here’s a carousel with slides"}),e.jsx(E,{href:"components/carousel",children:e.jsxs(v,{children:[e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:H,alt:"slide 1"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:z,alt:"slide 2"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:O,alt:"slide 3"})})]})})]})]})]}),e.jsx(w,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(k,{children:[e.jsx("strong",{children:"Carousel"})," ",e.jsx("small",{children:"With controls"})]}),e.jsxs(y,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Adding in the previous and next controls by ",e.jsx("code",{children:"controls"})," property."]}),e.jsx(E,{href:"components/carousel/#with-controls",children:e.jsxs(v,{controls:!0,children:[e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:H,alt:"slide 1"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:z,alt:"slide 2"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:O,alt:"slide 3"})})]})})]})]})}),e.jsx(w,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(k,{children:[e.jsx("strong",{children:"Carousel"})," ",e.jsx("small",{children:"With indicators"})]}),e.jsxs(y,{children:[e.jsx("p",{className:"text-body-secondary small",children:"You can attach the indicators to the carousel, lengthwise the controls, too."}),e.jsx(E,{href:"components/carousel/#with-indicators",children:e.jsxs(v,{controls:!0,indicators:!0,children:[e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:H,alt:"slide 1"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:z,alt:"slide 2"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:O,alt:"slide 3"})})]})})]})]})}),e.jsx(w,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(k,{children:[e.jsx("strong",{children:"Carousel"})," ",e.jsx("small",{children:"With captions"})]}),e.jsxs(y,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["You can add captions to slides with the ",e.jsx("code",{children:"<CCarouselCaption>"})," element within any ",e.jsx("code",{children:"<CCarouselItem>"}),". They can be immediately hidden on smaller viewports, as shown below, with optional"," ",e.jsx("a",{href:"https://coreui.io//utilities/display",children:"display utilities"}),". We hide them with ",e.jsx("code",{children:".d-none"})," and draw them back on medium-sized devices with"," ",e.jsx("code",{children:".d-md-block"}),"."]}),e.jsx(E,{href:"components/carousel/#with-captions",children:e.jsxs(v,{controls:!0,indicators:!0,children:[e.jsxs(n,{children:[e.jsx("img",{className:"d-block w-100",src:H,alt:"slide 1"}),e.jsxs(j,{className:"d-none d-md-block",children:[e.jsx("h5",{children:"First slide label"}),e.jsx("p",{children:"Some representative placeholder content for the first slide."})]})]}),e.jsxs(n,{children:[e.jsx("img",{className:"d-block w-100",src:z,alt:"slide 2"}),e.jsxs(j,{className:"d-none d-md-block",children:[e.jsx("h5",{children:"Second slide label"}),e.jsx("p",{children:"Some representative placeholder content for the first slide."})]})]}),e.jsxs(n,{children:[e.jsx("img",{className:"d-block w-100",src:O,alt:"slide 3"}),e.jsxs(j,{className:"d-none d-md-block",children:[e.jsx("h5",{children:"Third slide label"}),e.jsx("p",{children:"Some representative placeholder content for the first slide."})]})]})]})})]})]})}),e.jsx(w,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(k,{children:[e.jsx("strong",{children:"Carousel"})," ",e.jsx("small",{children:"Crossfade"})]}),e.jsxs(y,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:'transition="crossfade"'})," to your carousel to animate slides with a fade transition instead of a slide."]}),e.jsx(E,{href:"components/carousel/#crossfade",children:e.jsxs(v,{controls:!0,transition:"crossfade",children:[e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:H,alt:"slide 1"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:z,alt:"slide 2"})}),e.jsx(n,{children:e.jsx("img",{className:"d-block w-100",src:O,alt:"slide 3"})})]})})]})]})}),e.jsx(w,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(k,{children:[e.jsx("strong",{children:"Carousel"})," ",e.jsx("small",{children:"Dark variant"})]}),e.jsxs(y,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"dark"})," property to the ",e.jsx("code",{children:"CCarousel"})," for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the ",e.jsx("code",{children:"filter"})," CSS property. Captions and controls have additional Sass variables that customize the ",e.jsx("code",{children:"color"})," and ",e.jsx("code",{children:"background-color"}),"."]}),e.jsx(E,{href:"components/carousel/#dark-variant",children:e.jsxs(v,{controls:!0,indicators:!0,dark:!0,children:[e.jsxs(n,{children:[e.jsx("img",{className:"d-block w-100",src:se[0],alt:"slide 1"}),e.jsxs(j,{className:"d-none d-md-block",children:[e.jsx("h5",{children:"First slide label"}),e.jsx("p",{children:"Some representative placeholder content for the first slide."})]})]}),e.jsxs(n,{children:[e.jsx("img",{className:"d-block w-100",src:se[1],alt:"slide 2"}),e.jsxs(j,{className:"d-none d-md-block",children:[e.jsx("h5",{children:"Second slide label"}),e.jsx("p",{children:"Some representative placeholder content for the first slide."})]})]}),e.jsxs(n,{children:[e.jsx("img",{className:"d-block w-100",src:se[2],alt:"slide 3"}),e.jsxs(j,{className:"d-none d-md-block",children:[e.jsx("h5",{children:"Third slide label"}),e.jsx("p",{children:"Some representative placeholder content for the first slide."})]})]})]})})]})]})})]});export{Be as default};