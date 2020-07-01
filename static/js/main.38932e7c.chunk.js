(this["webpackJsonpstar-wars-wiki"]=this["webpackJsonpstar-wars-wiki"]||[]).push([[0],{103:function(e,t,a){e.exports=a(251)},125:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(94),c=a.n(r),s=a(256),i=a(12),o=a(3),m=a(5),u=a(11),p=a.n(u),E=a(257),d=a(255),b=a(4),v=a(33),f=a.n(v),g=a(34),h=a.n(g),y=a(35),S=a.n(y),j=a(95),O=a.n(j);a(125);var k=function(e){return l.a.createElement("header",null,l.a.createElement("nav",{className:"nav-main"},l.a.createElement(i.b,{to:"/"},l.a.createElement("img",{src:O.a,alt:"Logo Star Wars"})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/",className:"home"},"HOME")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/personagens",className:"personagens"},"CHARACTERS")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/planetas",className:"planetas"},"PLANETS")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/espaco-naves",className:"espaco-naves"},"STARSHIPS")))))};a(130);var N=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"fonte-api"},l.a.createElement("a",{href:"https://swapi.dev/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.f,null),l.a.createElement("p",null,"Star Wars API "))),l.a.createElement("div",{className:"criador"},l.a.createElement("span",null,"Developed by Abner Pereira Silva"),l.a.createElement("span",null,l.a.createElement("strong",null,"Full Stack Developer"))),l.a.createElement("div",{className:"redes-sociais"},l.a.createElement("a",{href:"https://codepen.io/Abner_Silva",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.c,null)),l.a.createElement("a",{href:"https://www.linkedin.com/in/abner-pereira-silva-8715a326/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.g,null)),l.a.createElement("a",{href:"https://github.com/AbnerPS",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.e,null))))},P=a(96),R=a.n(P),x=(a(131),a(132),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/films/").then((function(e){var t=e.data.results;r(t)}))}),[]),l.a.createElement("div",{id:"home-page"},l.a.createElement(k,{url:"home"}),l.a.createElement("div",{className:"content"},l.a.createElement("img",{src:R.a,alt:"Logo Star Wars"}),l.a.createElement("section",null,l.a.createElement("h1",null,"Star Wars Wiki"),l.a.createElement("p",null,"Star Wars Wiki, the most complete wikipedia about the Star Wars universe."),l.a.createElement("p",null,"Here you find everything you need to know about the Star Wars universe.")),l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"card-spotlight"},l.a.createElement("img",{src:f.a,alt:"Icone Personagens"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Characters"),l.a.createElement("p",null,"Here you can find information about all the characters in the Star Wars franchise."),l.a.createElement(i.b,{to:"/personagens"},"View more ",l.a.createElement(b.d,null)))),l.a.createElement("div",{className:"card-spotlight"},l.a.createElement("img",{src:h.a,alt:"Icone Planetas"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Planets"),l.a.createElement("p",null,"Here you can find information about all the planets in the Star Wars franchise."),l.a.createElement(i.b,{to:"/planetas"},"View more ",l.a.createElement(b.d,null)))),l.a.createElement("div",{className:"card-spotlight"},l.a.createElement("img",{src:S.a,alt:"Icone Espa\xe7o-Naves"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Startships"),l.a.createElement("p",null,"Here you can find information about all the starships in the Star Wars franchise."),l.a.createElement(i.b,{to:"/espaco-naves"},"View more ",l.a.createElement(b.d,null))))),l.a.createElement("section",{className:"section-timeline"},l.a.createElement("h2",null,"Classic Star Wars Movies"),l.a.createElement(E.a,{className:"timeline"},a.map((function(e){return l.a.createElement(E.a.Item,{dot:l.a.createElement(b.f,null)},l.a.createElement("h3",null,e.title),l.a.createElement("strong",null,"Episode ",e.episode_id),l.a.createElement("p",null,Object(d.a)(new Date(e.release_date),"dd/MM/yyyy")),l.a.createElement("p",null,e.opening_crawl))}))))),l.a.createElement(N,null))}),A=(a(247),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(m.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(1),E=Object(m.a)(u,2),d=E[0],v=E[1],g=Object(n.useState)([]),h=Object(m.a)(g,2),y=h[0],S=h[1],j=Object(n.useState)([]),O=Object(m.a)(j,2),P=O[0],R=O[1];return Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/people/?page=".concat(d)).then((function(e){var t=e.data.count,a=e.data.results;o(t),r(a),null===e.data.next?document.getElementById("btnNext").style.display="none":document.getElementById("btnNext").style.display="block",null===e.data.previous?document.getElementById("btnPrevious").style.display="none":document.getElementById("btnPrevious").style.display="block"}))}),[d]),Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/species/?page=".concat(d)).then((function(e){var t=e.data.results.map((function(e){return e.name}));S(t)}))}),[d]),Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/planets/?page=".concat(d)).then((function(e){var t=e.data.results.map((function(e){return e.name}));R(t)}))}),[d]),l.a.createElement("div",{id:"main"},l.a.createElement(k,null),l.a.createElement("div",{className:"count"},l.a.createElement("h1",null,"TOTAL CHARACTERS: ",i),l.a.createElement("img",{src:f.a,alt:"Imagem Personagem"})),l.a.createElement("div",{id:"content"},a.map((function(e){return l.a.createElement("div",{className:"card-personagem",key:e.name},l.a.createElement("h2",null,e.name),l.a.createElement("span",null,"Height: ",e.height/100," m"),l.a.createElement("span",null,"Mass: ",e.mass," kg"),l.a.createElement("span",null,"Hair Color: ",e.hair_color),l.a.createElement("span",null,"Skin Color: ",e.skin_color),l.a.createElement("span",null,"Eye Color: ",e.eye_color),l.a.createElement("span",null,"Birth Year: ",e.birth_year),l.a.createElement("span",null,"Gender: ",e.gender),l.a.createElement("span",null,"Species: ",y[String(e.species[0]).substr(29,3).replace("/","")-1]),l.a.createElement("span",null,"Homeworld: ",P[String(e.homeworld).substr(29,3).replace("/","")-1]))}))),l.a.createElement("div",{className:"navigation-page"},l.a.createElement("button",{id:"btnPrevious",onClick:function(){v(d-1)}},l.a.createElement(b.a,null),"PREVIOUS PAGE"),l.a.createElement("button",{id:"btnNext",onClick:function(){v(d+1)}},"NEXT PAGE",l.a.createElement(b.b,null))),l.a.createElement(N,null))}),Z=(a(248),function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(m.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)([]),E=Object(m.a)(u,2),d=E[0],v=E[1],f=Object(n.useState)([]),g=Object(m.a)(f,2),y=g[0],S=g[1];return Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/planets/?page=".concat(a)).then((function(e){var t=e.data.count,a=e.data.results;o(t),v(a),null===e.data.next?document.getElementById("btnNext").style.display="none":document.getElementById("btnNext").style.display="block",null===e.data.previous?document.getElementById("btnPrevious").style.display="none":document.getElementById("btnPrevious").style.display="block"}))}),[a]),Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/people/?page=".concat(a)).then((function(e){var t=e.data.results.map((function(e){return e.name}));S(t)}))}),[a]),l.a.createElement("div",{id:"main"},l.a.createElement(k,null),l.a.createElement("div",{className:"count"},l.a.createElement("h1",null,"TOTAL PLANETS: ",i),l.a.createElement("img",{src:h.a,alt:"Imagem Planeta"})),l.a.createElement("div",{id:"content"},d.map((function(e){return l.a.createElement("div",{className:"card-planetas",key:e.name},l.a.createElement("h2",null,e.name),l.a.createElement("span",null,"Rotation Period: ",e.rotation_period),l.a.createElement("span",null,"Orbital Period: ",e.orbital_period),l.a.createElement("span",null,"Diameter: ",e.diameter),l.a.createElement("span",null,"Climate: ",e.climate),l.a.createElement("span",null,"Gravity: ",e.gravity),l.a.createElement("span",null,"Terrain: ",e.terrain),l.a.createElement("span",null,"Surface Water: ",e.surface_water),l.a.createElement("span",null,"Population: ",e.population),l.a.createElement("span",null,"Residents: ",y[String(e.residents[0]).substr(28,3).replace("/","")-1]))}))),l.a.createElement("div",{className:"navigation-page"},l.a.createElement("button",{id:"btnPrevious",onClick:function(){r(a-1)}},l.a.createElement(b.a,null),"PREVIOUS PAGE"),l.a.createElement("button",{id:"btnNext",onClick:function(){r(a+1)}},"NEXT PAGE",l.a.createElement(b.b,null))),l.a.createElement(N,null))}),V=(a(249),function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(m.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)([]),E=Object(m.a)(u,2),d=E[0],v=E[1],f=Object(n.useState)([]),g=Object(m.a)(f,2),h=g[0],y=g[1];return Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/starships/?page=".concat(a)).then((function(e){var t=e.data.count,a=e.data.results;o(t),v(a),null===e.data.next?document.getElementById("btnNext").style.display="none":document.getElementById("btnNext").style.display="block",null===e.data.previous?document.getElementById("btnPrevious").style.display="none":document.getElementById("btnPrevious").style.display="block"}))}),[a]),Object(n.useEffect)((function(){p.a.get("https://swapi.dev/api/people/?page=".concat(a)).then((function(e){var t=e.data.results.map((function(e){return e.name}));y(t)}))}),[a]),l.a.createElement("div",{id:"main"},l.a.createElement(k,null),l.a.createElement("div",{className:"count"},l.a.createElement("h1",null,"TOTAL STARSHIPS: ",i),l.a.createElement("img",{src:S.a,alt:"Imagem Espa\xe7o-Nave"})),l.a.createElement("div",{id:"content"},d.map((function(e){return l.a.createElement("div",{className:"card-naves",key:e.name},l.a.createElement("h2",null,e.name),l.a.createElement("span",null,"Model: ",e.model),l.a.createElement("span",null,"Manufacturer: ",e.manufacturer),l.a.createElement("span",null,"Cost in Credits: ",e.cost_in_credits),l.a.createElement("span",null,"Length: ",e.length),l.a.createElement("span",null,"max_atmosphering_speed: ",e.max_atmosphering_speed),l.a.createElement("span",null,"Crew: ",e.crew),l.a.createElement("span",null,"Passengers: ",e.passengers),l.a.createElement("span",null,"Cargo Capacity: ",e.cargo_capacity),l.a.createElement("span",null,"Consumables: ",e.consumables),l.a.createElement("span",null,"Hyperdrive Rating: ",e.hyperdrive_rating),l.a.createElement("span",null,"MGLT: ",e.MGLT),l.a.createElement("span",null,"Starship Class: ",e.starship_class),l.a.createElement("span",null,"Pilots: ",h[String(e.pilots[0]).substr(28,3).replace("/","")-1]))}))),l.a.createElement("div",{className:"navigation-page"},l.a.createElement("button",{id:"btnPrevious",onClick:function(){r(a-1)}},l.a.createElement(b.a,null),"PREVIOUS PAGE"),l.a.createElement("button",{id:"btnNext",onClick:function(){r(a+1)}},"NEXT PAGE",l.a.createElement(b.b,null))),l.a.createElement(N,null))}),L=function(){return l.a.createElement(i.a,null,l.a.createElement(o.a,{path:"/",exact:!0,component:x}),l.a.createElement(o.a,{path:"/personagens",component:A}),l.a.createElement(o.a,{path:"/planetas",component:Z}),l.a.createElement(o.a,{path:"/espaco-naves",component:V}))};a(250);var C=function(){return l.a.createElement(L,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,{locale:"en"},l.a.createElement(C,null))),document.getElementById("root"))},33:function(e,t,a){e.exports=a.p+"static/media/stormtrooper.04ef2bb6.png"},34:function(e,t,a){e.exports=a.p+"static/media/planeta.de1364c7.png"},35:function(e,t,a){e.exports=a.p+"static/media/nave.ed5ab9e5.png"},95:function(e,t){e.exports="data:image/png;base64,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"},96:function(e,t,a){e.exports=a.p+"static/media/logoYellow.f5bdff62.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.38932e7c.chunk.js.map