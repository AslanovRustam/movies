"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[544],{8011:function(e,t,n){n.d(t,{O:function(){return m}});var r="moviesList_list__HguQ5",a=n(7689),c=n(1087),s="moviesItem_item__jav7K",o="moviesItem_info__5mdZ5",u="moviesItem_image__L9VS0",i="moviesItem_title__-QR22",p="moviesItem_vote__bEep3",v=n(6500),f=n(184),l=function(e){var t=e.id,n=e.title,r=e.poster,l=e.vote.toFixed(1),m=(0,a.TH)();return(0,f.jsx)("li",{className:s,children:(0,f.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:m},children:[(0,f.jsx)("img",{className:u,src:r?"https://image.tmdb.org/t/p/w500/".concat(r):v,alt:n}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h2",{className:i,children:n}),(0,f.jsx)("span",{className:p,children:l})]})]})})},m=function(e){var t=e.movies;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:r,children:t.map((function(e){var t=e.id,n=e.title,r=e.poster_path,a=e.vote_average;return(0,f.jsx)(l,{id:t,title:n,poster:r,vote:a},t)}))})})}},9544:function(e,t,n){n.r(t);var r=n(9439),a=n(2791),c=n(4390),s=n(8011),o=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1];return(0,a.useEffect)((function(){(0,c.XD)().then((function(e){return u(e)}))}),[]),(0,o.jsx)(o.Fragment,{children:n&&(0,o.jsx)(s.O,{movies:n})})}},4390:function(e,t,n){n.d(t,{KH:function(){return p},Pc:function(){return v},XD:function(){return u},ed:function(){return f},fA:function(){return i}});var r=n(4165),a=n(5861),c=n(1243),s="65125fece056379d46954e3213fdb44a",o="https://api.themoviedb.org/3",u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US&append_to_response=videos"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},6500:function(e,t,n){e.exports=n.p+"static/media/no_poster.f23aa90466cf18cf0619.png"}}]);
//# sourceMappingURL=544.ff8c9711.chunk.js.map