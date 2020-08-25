(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){},41:function(e,t,a){e.exports=a(81)},63:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),s=a.n(r),i=a(5),c=a(3),o=a(4),m=a(8),u=a(7),h=a(19),d=a.n(h),p=d.a.create({baseURL:"https://rentalseum.herokuapp.com",withCredentials:!0});function g(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var f=function(e){return p.post("/api/auth/signup",e).then((function(e){return e.data})).catch(g)},E=function(e){return p.post("/api/auth/signin",e).then((function(e){return e.data})).catch(g)},b=function(){return p.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(g)},v=function(){return p.get("/api/auth/logout").then((function(e){return e.data})).catch(g)},N=function(){return p.get("/api/houses").then((function(e){return e.data})).catch(g)},y=function(e){return p.get("/api/houses/".concat(e)).then((function(e){return e.data})).catch(g)},C=function(e){return p.get("/api/houses",{params:{search:e}}).then((function(e){return e.data})).catch(g)},x=function(e){return p.post("/api/houses",e).then((function(e){return e.data})).catch(g)},w=function(e){return p.post("/api/leases",e).then((function(e){return e.data})).catch(g)},S=l.a.createContext(),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){console.log(t),e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return l.a.createElement(S.Provider,{value:e},this.props.children)}}]),a}(n.Component),k=a(1),L=function(e){return function(t){return l.a.createElement(S.Consumer,null,(function(a){return l.a.createElement(e,Object.assign({},t,{authContext:a}))}))}},j=(a(63),L((function(e){var t=e.authContext;return l.a.createElement("nav",{className:"NavMain"},l.a.createElement(i.c,{exact:!0,to:"/"},l.a.createElement("h3",null,"Rentalseum")),l.a.createElement("ul",null,t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(i.c,{to:"/houses/create"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),"Add House Review")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/profile"},t.user&&t.user.firstName)),l.a.createElement("li",null,l.a.createElement("p",{onClick:function(){v().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))}},"Logout"))),!t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(i.c,{to:"/signin"},"Log in")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/signup"},"Create account")))))}))),D=a(20),A=a(18),F=(a(73),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={search:"",results:[],isLoading:!1},n.handleSearchChange=n.handleSearchChange.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleSearchChange",value:function(e){var t=this;this.setState({search:e.target.value,isLoading:!0}),clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){t.performSearch()}),1e3)}},{key:"performSearch",value:function(){var e=this;""!==this.state.search?d.a.get("https://developers.onemap.sg/commonapi/search?searchVal=".concat(this.state.search,"&returnGeom=Y&getAddrDetails=Y&pageNum=1")).then((function(t){e.setState({results:t.data.results,isLoading:!1})})):this.setState({results:[],isLoading:!1})}},{key:"handleItemClicked",value:function(e){this.setState({search:e.ADDRESS,results:[]}),this.props.onSelect(e),this.props.onHighlight&&this.props.onHighlight(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"LocationAutoComplete"},l.a.createElement("input",{className:"input",type:"text",value:this.state.search,onChange:this.handleSearchChange,placeholder:"Enter an address in Singapore"}),l.a.createElement("ul",{className:"LocationAutoComplete-results"},this.state.results.map((function(t){return l.a.createElement("li",{key:t.X,className:"LocationAutoComplete-items",onClick:function(){return e.handleItemClicked(t)}},t.ADDRESS)})),this.state.isLoading&&l.a.createElement("li",{className:"LocationAutoComplete-items"},"Loading...")))}}]),a}(n.Component)),R=(a(74),a(38));new Image(40,20).src="images/house.png";var I=Object(D.c)({accessToken:"pk.eyJ1IjoidGF0aWphbmEiLCJhIjoiY2tkNjJtbmlxMDZoaTJxc2MyMmZhZDJzaCJ9.qP-nTy1IG3dDjZbwDIpHPQ"}),P={"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6},U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={searchedAddress:null,allPlaces:[],searchDone:!1,showDetails:!1,map:null,mapCenter:[103.851959,1.29027],zoom:15},e.initiateMap=function(e){for(var t,a=e.getStyle().layers,n=0;n<a.length;n++)if("symbol"===a[n].type&&a[n].layout["text-field"]){t=a[n].id;break}e.addSource("currentBuildings",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"highlight",source:"currentBuildings",type:"fill-extrusion",minzoom:14,paint:{"fill-extrusion-color":"white","fill-extrusion-height":["interpolate",["linear"],["zoom"],14,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],14,0,15.05,["get","min_height"]],"fill-extrusion-opacity":1}},t)},e.handlePlace=function(t){var a=[Number(t.LONGITUDE),Number(t.LATITUDE)];e.state.allPlaces.filter((function(t){return e.arraysEqual(t.coordinates,a)})).length>0?e.setState({searchedAddress:t,searchDone:!0,showDetails:!0}):e.setState({searchedAddress:"",searchDone:!0,showDetails:!1})},e.getBuildings=function(e,t){var a=e.queryRenderedFeatures({layers:["3d-buildings"]});t&&t(a)},e.highlightBuilding=function(t,a){var n=[Number(t.LONGITUDE),Number(t.LATITUDE)],l={lon:parseFloat(t.LONGITUDE),lat:parseFloat(t.LATITUDE)};e.setState({mapCenter:[l.lon,l.lat],zoom:18.5}),a.on("moveend",(function(t){e.getBuildings(a,(function(t){t.forEach((function(t){Object(R.booleanPointInPolygon)(n,t.geometry)&&e.selectFeatures(t,a)}))}))}))},e.selectFeatures=function(e,t){t.getSource("currentBuildings").setData({type:"FeatureCollection",features:[e]})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;N().then((function(t){e.setState({allPlaces:t})})).catch((function(e){console.log(e)}))}},{key:"arraysEqual",value:function(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var a=0;a<e.length;++a)if(e[a]!==t[a])return!1;return!0}},{key:"render",value:function(){var e=this,t=this.state.searchedAddress&&this.state.allPlaces.filter((function(t){return t.fullAddress===e.state.searchedAddress.ADDRESS}));return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"title-container"},l.a.createElement("h1",null,"Welcome to RS.com")),l.a.createElement("div",{className:"flex"},l.a.createElement(I,{style:"mapbox://styles/examples/cj68bstx01a3r2rndlud0pwpv",containerStyle:{height:"60vh",width:"70vw",marginLeft:"20px"},center:this.state.mapCenter,zoom:[this.state.zoom],pitch:[60],bearing:[-60],onStyleLoad:this.initiateMap},l.a.createElement(D.b.Consumer,null,(function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{searchType:"",onSelect:e.handlePlace,onHighlight:function(a){return e.highlightBuilding(a,t)}}),l.a.createElement(D.a,{id:"3d-buildings",sourceId:"composite",sourceLayer:"building",filter:["==","extrude","true"],type:"fill-extrusion",minZoom:14,paint:P}))}))),l.a.createElement("div",{className:"map-result"},!this.state.searchDone&&l.a.createElement("h2",null,"No search has been made yet."),this.state.searchDone&&this.state.showDetails&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"This address is registered on our website."),l.a.createElement("h3",null,"Here are all the houses registered at this address:"),t&&t.map((function(e,t){return l.a.createElement("p",{key:t},l.a.createElement(i.b,{className:"link",to:"/houses/".concat(e._id)},"House ",t+1," "),":"," ",e.unitNumbers?e.unitNumbers:"Unit Numbers Not Applicable")}))),this.state.searchDone&&!this.state.showDetails&&l.a.createElement("h2",null,"This address is not registered on our website."))))}}]),a}(n.Component),T=a(13),H=(a(16),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.handleChange=function(t){var a=t.target.name,n="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(T.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.authContext;E(e.state).then((function(t){a.setUser(t),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"form-section"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"Welcome back"," ",l.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc99"))),l.a.createElement("form",{autoComplete:"off",className:"form",onChange:this.handleChange,onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"title"},"Login"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"input",id:"email",type:"email",name:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"input",id:"password",type:"password",name:"password"})),l.a.createElement("button",{className:"btn-submit"},"Let's go!")),l.a.createElement("div",{className:"form-section-bottom"},l.a.createElement("p",null,"Already have an account? "),l.a.createElement(i.b,{className:"link",to:"/signup"},"Register")))}}]),a}(n.Component)),z=Object(k.g)(L(H)),B=function(e){return l.a.createElement(z,null)},Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.handleChange=function(t){var a="file"===t.target.type?t.target.files[0]:t.target.value,n=t.target.name;e.setState(Object(T.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.authContext;f(e.state).then((function(t){a.setUser(t),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"form-section"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"Hello",l.a.createElement("span",{role:"img","aria-label":"hand"},"\ud83d\udc4b"))),l.a.createElement("form",{autoComplete:"off",className:"form",onChange:this.handleChange,onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"title"},"Create account"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"firstName"},"First name"),l.a.createElement("input",{className:"input",id:"firstName",type:"text",name:"firstName"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{className:"input",id:"lastName",type:"text",name:"lastName"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"input",id:"email",type:"email",name:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"input",id:"password",type:"password",name:"password"})),l.a.createElement("button",{className:"btn-submit"},"Let's go!")),l.a.createElement("div",{className:"form-section-bottom"},l.a.createElement("p",null,"Already have an account? "),l.a.createElement(i.b,{className:"link",to:"/signin"},"Log in")))}}]),a}(n.Component),_=Object(k.g)(L(Y)),M=function(e){return l.a.createElement(_,null)},G=a(40),J=L((function(e){var t=e.component,a=e.authContext,n=Object(G.a)(e,["component","authContext"]);return a.isLoading?null:a.isLoggedIn?l.a.createElement(k.b,Object.assign({},n,{render:function(e){return l.a.createElement(t,e)}})):l.a.createElement(k.a,{to:"/signin"})})),V=(a(75),a(76),L(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.authContext.user;return l.a.createElement("div",{style:{padding:"100px",fontSize:"1.25rem"}},l.a.createElement("h2",{style:{fontSize:"1.5rem",marginBottom:"10px"}},"This is profile, it's protected !"),l.a.createElement("p",null,"Checkout the",l.a.createElement("b",null,"ProtectedRoute")," component in",l.a.createElement("code",null,"./components/ProtectRoute.jsx")),l.a.createElement("a",{style:{color:"dodgerblue",fontWeight:"bold"},target:"_blank",rel:"noopener noreferrer",href:"https://reacttraining.com/react-router/web/example/auth-workflow"},"React router dom Demo of a protected route"),l.a.createElement("section",{className:"Profile"},l.a.createElement("div",{className:"user-image round-image"},l.a.createElement("img",{src:e.profileImg,alt:e.firstName})),l.a.createElement("div",{className:"user-presentation"},l.a.createElement("h2",null,e.firstName," ",e.lastName),l.a.createElement(i.b,{className:"link",to:"/profile/settings"},"Edit profile")),l.a.createElement("div",{className:"user-contact"},l.a.createElement("h4",null,"Add a phone number"),l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"phoneNumber"},"Phone number"),l.a.createElement("input",{className:"input",id:"phoneNumber",type:"text",name:"phoneNumber",placeholder:"Add phone number"})),l.a.createElement("button",{className:"form__button"},"Add phone number"))),l.a.createElement("div",{className:"CardItem"},l.a.createElement("div",{className:"item-empty"},l.a.createElement("div",{className:"round-image"},l.a.createElement("img",{src:"/media/personal-page-empty-state.svg",alt:""})),l.a.createElement("p",null,"You don't have any items :("))),l.a.createElement("div",{className:"CardItem"},l.a.createElement("h3",null,"Your items"),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"round-image"},l.a.createElement("img",{src:"https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",alt:"item"})),l.a.createElement("div",{className:"description"},l.a.createElement("h2",null,"Name of item"),l.a.createElement("h4",null,"Quantity: 1 "),l.a.createElement("p",null,"Description of the item"),l.a.createElement("div",{className:"buttons"},l.a.createElement("span",null,l.a.createElement("button",{className:"btn-secondary"},"Delete")),l.a.createElement("span",null,l.a.createElement("button",{className:"btn-primary"},"Edit"))))))))}}]),a}(n.Component))),W=(a(77),[{name:"good",img:"/images/good.png"},{name:"neutral",img:"/images/neutral.png"},{name:"bad",img:"/images/bad.png"}]),Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={house:null,houseId:null,rating:null,discrimination:!1,abuseOnRent:!1,abuseOnDeposit:!1,displayReviews:!1,displayForm:!1,decription:""},e.handleChange=function(t){var a="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,n=t.target.name;e.setState(Object(T.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;for(var n in e.state)a.append("".concat(n),e.state[n]);w(a).then((function(t){e.setState({lease:t})})).catch((function(e){return console.log(e)}))},e.displayForm=function(){e.props.authContext.user?e.setState({displayForm:!0,displayReviews:!1}):e.props.history.push("/signin")},e.displayReviews=function(){e.setState({displayForm:!1,displayReviews:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y(this.props.match.params.houseId).then((function(t){e.setState({house:t,houseId:t._id})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"OneHouse"},this.state.house&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form"},l.a.createElement("h2",{className:"title"},"Recap of your search"),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Bloc number:"),l.a.createElement("p",null,this.state.house.blocNumber)),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Address:"),l.a.createElement("p",null,this.state.house.textAddress)),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Building:"),l.a.createElement("p",null,this.state.house.building)),this.state.house.unitNumbers&&l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Unit Numbers:"),l.a.createElement("p",null,this.state.house.unitNumbers)),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Category:"),l.a.createElement("p",null,this.state.house.category)),l.a.createElement("div",{className:"buttons flex"},l.a.createElement("button",{onClick:this.displayReviews},"See all existing reviews"),l.a.createElement("button",{onClick:this.displayForm},"Add my own review"))),this.state.displayReviews&&l.a.createElement("div",{className:"form"},this.state.house.leases.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"title"},"There are ",this.state.house.leases.length," reviews for this house."),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Verified reviews:"),l.a.createElement("div",null,this.state.house.leases.filter((function(e){return!0===e.isVerified})).map((function(e,t){return l.a.createElement("div",{className:"form-group review",key:t},l.a.createElement("p",{className:"label"},"Review #",t+1),l.a.createElement("div",{className:"form-group flex align-c"},l.a.createElement("p",null,"Overall satisfaction:"),l.a.createElement("img",{src:"/images/".concat(e.rating,".png"),style:{width:"50px",marginLeft:"10px"},alt:"overall satisfaction"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Has been victim of ..."),l.a.createElement("ul",null,l.a.createElement("li",null,"discrimination:",e.discrimination?" Yes":" No"),l.a.createElement("li",null,"abuse on rent:",e.abuseOnRent?" Yes":" No"),l.a.createElement("li",null,"abuse on deposit:",e.discrimination?" Yes":" No"))))})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Unverified reviews:"),l.a.createElement("div",null,this.state.house.leases.filter((function(e){return!1===e.isVerified})).map((function(e,t){return l.a.createElement("div",{className:"form-group review",key:t},l.a.createElement("p",{className:"label"},"Review #",t+1),l.a.createElement("div",{className:"form-group flex align-c"},l.a.createElement("p",null,"Overall satisfaction:"),l.a.createElement("img",{src:"/images/".concat(e.rating,".png"),style:{width:"50px",marginLeft:"10px"},alt:"overall satisfaction"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Has been victim of ..."),l.a.createElement("ul",null,l.a.createElement("li",null,"discrimination:",e.discrimination?" Yes":" No"),l.a.createElement("li",null,"abuse on rent:",e.abuseOnRent?" Yes":" No"),l.a.createElement("li",null,"abuse on deposit:",e.discrimination?" Yes":" No"))))}))))):l.a.createElement("h2",{className:"title"},"There are no existing reviews for this house"),l.a.createElement("button",{onClick:this.displayForm},"Add my own review")),this.state.displayForm&&l.a.createElement("form",{className:"form",onChange:this.handleChange,onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"title"},"Detailed information about my rental"),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label spaced-b"},"Please upload a proof of lease:"),l.a.createElement("label",{className:"custom-file-upload",htmlFor:"leasePicture"},"Upload my proof"),l.a.createElement("input",{type:"file",id:"leasePicture",name:"leasePicture"})),l.a.createElement("div",{className:"form-group spaced-t"},l.a.createElement("label",{className:"label",htmlFor:"rating"},"How would you rate your experience?"),l.a.createElement("div",{className:"rating-container"},W.map((function(t){return l.a.createElement("div",{key:t.name},l.a.createElement("label",{htmlFor:t.name,className:"ratingSelector"},l.a.createElement("input",{type:"radio",id:t.name,name:"rating",value:t.name,defaultChecked:e.state.rating===t.name}),l.a.createElement("img",{src:t.img,alt:t.name})))})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Have you experienced any of the following?"),l.a.createElement("label",{className:"flex align-c",htmlFor:"discrimination"},"Discrimination:",l.a.createElement("input",{id:"discrimination",name:"discrimination",type:"checkbox",defaultChecked:this.state.discrimination})),l.a.createElement("label",{className:"flex align-c",htmlFor:"abuseOnRent"},"Abuse on rent:",l.a.createElement("input",{id:"abuseOnRent",name:"abuseOnRent",type:"checkbox",defaultChecked:this.state.abuseOnRent})),l.a.createElement("label",{className:"flex align-c",htmlFor:"abuseOnDeposit"},"Abuse on deposit:",l.a.createElement("input",{id:"abuseOnDeposit",name:"abuseOnDeposit",type:"checkbox",defaultChecked:this.state.abuseOnDeposit}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label"},"Please describe your experience"),l.a.createElement("p",{style:{fontStyle:"italic"}},"Remember, no diffamation allowed"),l.a.createElement("textarea",{name:"description",id:"description"})),l.a.createElement("button",{className:"btn-submit"},"Send Review (subject to verification)"))))}}]),a}(n.Component),q=Object(k.g)(L(Z)),Q=a(39),K=(a(78),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={fullAddress:"",blocNumber:"",textAddress:"",building:"",category:"",unitNumbers1:"",unitNumbers2:"",unitRelevance:null,coordinates:[],errors:[]},e.mapCenter=[103.851959,1.29027],e.handleChange=function(t){if(t.target.name){var a=t.target.name;if("unitNumbers1"===a||"unitNumbers2"===a){var n=t.target,l=n.value,r=n.maxLength,s=l.slice(0,r);e.setState(Object(T.a)({},a,s))}else{var i=t.target.value;"radio"===t.target.type&&(i="true"===i),e.setState(Object(T.a)({},a,i))}}},e.handleSubmit=function(t){t.preventDefault();var a=Object(Q.a)({},e.state);a.unitNumbers=null,""!=e.state.unitNumbers1&&""!=e.state.unitNumbers2&&(a.unitNumbers="#".concat(e.state.unitNumbers1,"-").concat(e.state.unitNumbers2));var n=[],l="Please choose an address provided by the autocomplete",r="Please select one option for Unit Numbers",s="Please specify both unit numbers digits";""===a.fullAddress&&n.push(l),null===a.unitRelevance&&n.push(r),a.unitRelevance&&(e.state.unitNumbers1.length<2||e.state.unitNumbers2.length<3)&&n.push(s),n.length>0?e.setState({errors:n}):C(a).then((function(t){t.length>0?e.props.history.push("/houses/".concat(t[0]._id)):x(a).then((function(t){e.props.history.push("/houses/".concat(t._id))})).catch((function(e){console.log(e)}))})).catch((function(e){return console.log(e)}))},e.handlePlace=function(t){e.setState({fullAddress:t.ADDRESS,blocNumber:t.BLK_NO,textAddress:t.ROAD_NAME,building:t.BUILDING,coordinates:[Number(t.LONGITUDE),Number(t.LATITUDE)]})},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"FormHouse"},l.a.createElement("form",{className:"form",onChange:this.handleChange,onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"title"},"Detailed information about the location"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"location"},"Postal code or address *"),l.a.createElement(F,{searchType:"types=postcode&",onSelect:this.handlePlace,mapCenter:this.mapCenter})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"label"},"Unit numbers ",this.state.unitRelevance&&"*"),l.a.createElement("div",{className:"flex"},l.a.createElement("p",null,"Does your address contains unit numbers?"),l.a.createElement("div",{className:"flex"},l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"relevance1",name:"unitRelevance",value:!0,checked:!0===this.state.unitRelevance,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"contactChoice1"},"Yes")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"relevance2",name:"unitRelevance",value:!1,checked:!1===this.state.unitRelevance,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"contactChoice2"},"No")))),this.state.unitRelevance&&l.a.createElement("div",{className:"flex align-c"},l.a.createElement("p",null,"Please specify:"),l.a.createElement("div",{className:"unit-numbers flex align-c"},l.a.createElement("span",null,"#"),l.a.createElement("label",{className:"for-accessibility",htmlFor:"unitNumbers1"},"First two digits"),l.a.createElement("input",{className:"input",type:"text",name:"unitNumbers1",value:this.state.unitNumbers1,onChange:this.handleChange,placeholder:"15",maxLength:"2"}),l.a.createElement("span",null,"-"),l.a.createElement("label",{className:"for-accessibility",htmlFor:"unitNumbers2"},"Last three digits"),l.a.createElement("input",{className:"input",type:"text",name:"unitNumbers2",value:this.state.unitNumbers2,onChange:this.handleChange,placeholder:"369",maxLength:"3"})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"category"},"House category"),l.a.createElement("select",{id:"category",name:"category",defaultValue:"-1"},l.a.createElement("option",{value:"-1",disabled:!0},"Select a category"),l.a.createElement("option",{value:"Condo"},"Condo"),l.a.createElement("option",{value:"House"},"House"),l.a.createElement("option",{value:"Social Housing"},"Social Housing"))),this.state.errors.map((function(e){return l.a.createElement("p",null,e)})),l.a.createElement("button",{className:"btn-submit"},"Next")))}}]),a}(n.Component));var X=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,null),l.a.createElement(k.d,null,l.a.createElement(k.b,{exact:!0,path:"/",component:U}),l.a.createElement(k.b,{exact:!0,path:"/signin",component:B}),l.a.createElement(k.b,{exact:!0,path:"/signup",component:M}),l.a.createElement(k.b,{exact:!0,path:"/houses/create",component:K}),l.a.createElement(k.b,{exact:!0,path:"/houses/:houseId",component:q}),l.a.createElement(J,{exact:!0,path:"/profile",component:V})))};a(79),a(80);s.a.render(l.a.createElement(i.a,null,l.a.createElement(O,null,l.a.createElement(X,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ffd72520.chunk.js.map