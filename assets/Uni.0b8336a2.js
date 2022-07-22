import"./index.esm.860cfff6.js";import p from"./loader.ab3a48ce.js";import{_,f as y,r as m,o as n,c,a as f,b as d,d as s,F as u,g as v,p as k,j as U,h as x,i as C,k as S,t as o}from"./index.08c68c34.js";const B={name:"Uni",components:{loader:p},data(){return{univercities:[],loading:!1}},methods:{getData(){this.loading=!0,y.firestore().collection("Univercities").orderBy("name").get().then(l=>{l.forEach(r=>{const e=r.data(),i={uni_id:r.id,id:e.id,name:e.name,tags:e.tags,ranking:e.ranking,mainCampus:e.mainCampus,introduction:e.introduction,specialization:e.specialization,sector:e.sector,campuses:e.campuses,bsAdmission:e.bsAdmission,bsopendate:e.bsopendate,bsclosedate:e.bsclosedate,anycampus:e.anycampus,imgUrl:e.imgUrl,bsagricultue:e.bsagricultue,bsart:e.bsart,bsbiology:e.bsbiology,bschamical:e.bschamical,bscsdegree:e.bscsdegree,bsearth:e.bsearth,bseducation:e.bseducation,bsengineering:e.bsengineering,bslang:e.bslang,bsmanagement:e.bsmanagement,bsmedia:e.bsmedia,bsmedical:e.bsmedical,bsother:e.bsother,bsphysics:e.bsphysics,bsreligious:e.bsreligious,bssocial:e.bssocial,bstechnical:e.bschamical,msagricultue:e.msagricultue,msart:e.msart,msbiology:e.msbiology,mschamical:e.mschamical,mscsdegree:e.mscsdegree,msearth:e.msearth,mseducation:e.mseducation,msengineering:e.msengineering,mslang:e.mslang,msmanagement:e.msmanagement,msmedia:e.msmedia,msmedical:e.msmedical,msother:e.msother,msphysics:e.msphysics,msreligious:e.msreligious,mssocial:e.mssocial,mstechnical:e.mstechnical};this.univercities.push(i),this.loading=!1})})}},created(){this.getData()}},g=t=>(k("data-v-1ca7aa29"),t=t(),U(),t),N={key:1,class:"container"},V=g(()=>s("h1",{class:"heading"},"Univercities",-1)),z={class:"univercities flex jus-center center"},I=g(()=>s("tr",null,[s("th",null,"#"),s("th",null,"Name"),s("th",null,"Main Campus"),s("th",null,"Sector"),s("th",null,"Specialization"),s("th",null,"Ranking")],-1)),j={class:"imgUrl"},D=["src"],w={class:"name"};function A(t,l,r,e,i,E){const b=m("loader"),h=m("router-link");return n(),c(u,null,[i.loading?(n(),f(b,{key:0})):d("",!0),i.loading?d("",!0):(n(),c("section",N,[V,s("div",z,[s("table",null,[I,(n(!0),c(u,null,v(i.univercities,a=>(n(),c("tr",{key:a.name},[s("td",j,[s("img",{src:a.imgUrl,alt:""},null,8,D)]),s("td",w,[x(h,{to:{name:"details",params:{name:a.name.split(" ").join("-")}}},{default:C(()=>[S(o(a.name),1)]),_:2},1032,["to"])]),s("td",null,o(a.mainCampus),1),s("td",null,o(a.sector),1),s("td",null,o(a.specialization),1),s("td",null,o(a.ranking),1)]))),128))])])]))],64)}var R=_(B,[["render",A],["__scopeId","data-v-1ca7aa29"]]);export{R as default};
