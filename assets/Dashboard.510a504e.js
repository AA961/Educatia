import{_ as y,l,u as C,m as D,r as p,o,c as i,g as x,d as f,b as e,f as c,i as d,F as g,h as S,p as I,a as N,t as v,j as u}from"./index.516b1feb.js";import{l as U}from"./loader.2c1c751a.js";const V={name:"Dashboard",components:{loader:U},data(){return{univercities:[],loading:!1}},methods:{deleteUni(t){const n=l.firestore();confirm("Confirm to delete "+t)&&n.collection("Univercities").where("name","==",t).get().then(h=>{h.forEach(_=>{_.ref.delete()})}),this.univercities.slice(0,this.univercities.length),this.$router.push({name:"Home"})},getData(){this.loading=!0;const t=C();this.univercities.length<1&&(this.univercities=t.univercities),this.loading=!1},authing(){const t=D();l.auth().onAuthStateChanged(function(n){n||t.push("/admin")})},logout(){l.auth().signOut(),this.$router.push("/")}},beforeMount(){this.getData(),this.authing()}},b=t=>(I("data-v-36f5e059"),t=t(),N(),t),j={key:1,class:"container"},B={class:"btn btn-secondry"},E=u("Add University"),w=b(()=>e("h1",{class:"heading"},"Univercities",-1)),L={class:"univercities flex jus-center center"},$={border:"1"},A=b(()=>e("tr",null,[e("th",null,"ID"),e("th",null,"Name"),e("th",null,"#"),e("th",null,"#")],-1)),F={class:"name"},O=u("Edit"),H=["onClick"];function M(t,n,h,_,a,m){const k=p("loader"),r=p("router-link");return o(),i(g,null,[a.loading?(o(),x(k,{key:0})):f("",!0),a.loading?f("",!0):(o(),i("section",j,[e("button",B,[c(r,{to:"/add"},{default:d(()=>[E]),_:1})]),w,e("div",L,[e("table",$,[A,(o(!0),i(g,null,S(a.univercities,s=>(o(),i("tr",{key:s.name},[e("td",null,v(s.id),1),e("td",F,[c(r,{to:{name:"details",params:{name:s.name.split(" ").join("-")}}},{default:d(()=>[u(v(s.name),1)]),_:2},1032,["to"])]),c(r,{to:{name:"Edit",params:{name:s.name.split(" ").join("-")}}},{default:d(()=>[O]),_:2},1032,["to"]),e("td",null,[e("button",{onClick:R=>m.deleteUni(s.name)},"Delete",8,H)])]))),128))])])])),e("button",{class:"btn btn-secondry margin-tb btn-logout",onClick:n[0]||(n[0]=s=>m.logout())},"Log Out")],64)}var z=y(V,[["render",M],["__scopeId","data-v-36f5e059"]]);export{z as default};
