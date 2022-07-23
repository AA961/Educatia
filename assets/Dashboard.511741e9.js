import"./index.esm.4b08e6fb.js";import k from"./loader.01e06a15.js";import{_ as C,f as c,ap as D,r as g,o as r,c as l,a as U,b as _,d as s,h as d,i as u,F as p,g as x,p as B,j as E,t as f,k as h}from"./index.95d23eb1.js";const I={name:"Dashboard",components:{loader:k},data(){return{univercities:[],loading:!1}},methods:{deleteUni(t){const a=c.firestore();confirm("Confirm to delete "+t)&&a.collection("Univercities").where("name","==",t).get().then(n=>{n.forEach(e=>{e.ref.delete()})}),this.univercities.slice(0,this.univercities.length),this.$router.push({name:"Home"})},getData(){this.loading=!0,c.firestore().collection("Univercities").orderBy("name").get().then(a=>{a.forEach(n=>{const e=n.data(),o={uni_id:n.id,id:e.id,name:e.name,tags:e.tags,ranking:e.ranking,mainCampus:e.mainCampus,introduction:e.introduction,specialization:e.specialization,sector:e.sector,campuses:e.campuses,bsAdmission:e.bsAdmission,bsopendate:e.bsopendate,bsclosedate:e.bsclosedate,anycampus:e.anycampus,bsagricultue:e.bsagricultue,bsart:e.bsart,bsbiology:e.bsbiology,bschamical:e.bschamical,bscsdegree:e.bscsdegree,bsearth:e.bsearth,bseducation:e.bseducation,bsengineering:e.bsengineering,bslang:e.bslang,bsmanagement:e.bsmanagement,bsmedia:e.bsmedia,bsmedical:e.bsmedical,bsother:e.bsother,bsphysics:e.bsphysics,bsreligious:e.bsreligious,bssocial:e.bssocial,bstechnical:e.bschamical,msagricultue:e.msagricultue,msart:e.msart,msbiology:e.msbiology,mschamical:e.mschamical,mscsdegree:e.mscsdegree,msearth:e.msearth,mseducation:e.mseducation,msengineering:e.msengineering,mslang:e.mslang,msmanagement:e.msmanagement,msmedia:e.msmedia,msmedical:e.msmedical,msother:e.msother,msphysics:e.msphysics,msreligious:e.msreligious,mssocial:e.mssocial,mstechnical:e.mstechnical};this.univercities.push(o),this.loading=!1})})},authing(){const t=D();c.auth().onAuthStateChanged(function(a){a||t.push("/admin")})},logout(){c.auth().signOut(),this.$router.push("/")}},beforeMount(){this.getData(),this.authing()}},v=t=>(B("data-v-20e29e74"),t=t(),E(),t),N={key:1,class:"container"},S={class:"btn btn-secondry"},V=h("Add University"),j=v(()=>s("h1",{class:"heading"},"Univercities",-1)),A={class:"univercities flex jus-center center"},w={border:"1"},$=v(()=>s("tr",null,[s("th",null,"ID"),s("th",null,"Name"),s("th",null,"#"),s("th",null,"#")],-1)),z={class:"name"},F=h("Edit"),L=["onClick"];function O(t,a,n,e,o,b){const y=g("loader"),m=g("router-link");return r(),l(p,null,[o.loading?(r(),U(y,{key:0})):_("",!0),o.loading?_("",!0):(r(),l("section",N,[s("button",S,[d(m,{to:"/add"},{default:u(()=>[V]),_:1})]),j,s("div",A,[s("table",w,[$,(r(!0),l(p,null,x(o.univercities,i=>(r(),l("tr",{key:i.name},[s("td",null,f(i.id),1),s("td",z,[d(m,{to:{name:"details",params:{name:i.name.split(" ").join("-")}}},{default:u(()=>[h(f(i.name),1)]),_:2},1032,["to"])]),d(m,{to:{name:"Edit",params:{name:i.name.split(" ").join("-")}}},{default:u(()=>[F]),_:2},1032,["to"]),s("td",null,[s("button",{onClick:H=>b.deleteUni(i.name)},"Delete",8,L)])]))),128))])])])),s("button",{class:"btn btn-secondry margin-tb btn-logout",onClick:a[0]||(a[0]=i=>b.logout())},"Log Out")],64)}var q=C(I,[["render",O],["__scopeId","data-v-20e29e74"]]);export{q as default};
