import{_ as b,o as i,c as n,p as U,a as C,b as e,u as k,r as v,d,w as m,v as I,e as x,f as h,t as r,g as S,F as f,h as g,K as j,i as p,j as c,k as w}from"./index.516b1feb.js";import{n as V}from"./notes.26f42153.js";var A="/Educatia/educatia.png";const E={name:"animation"},B=s=>(U("data-v-59a55b94"),s=s(),C(),s),M={class:"wrapper flex center jus-center"},z=B(()=>e("div",{class:"img"},[e("img",{src:A,alt:"loading...."})],-1)),H=[z];function T(s,l,D,y,a,u){return i(),n("div",M,H)}var F=b(E,[["render",T],["__scopeId","data-v-59a55b94"]]),K="/Educatia/assets/unis.5e6f69da.png",L="/Educatia/assets/admission.81ebc620.png",R="/Educatia/assets/notes.f407f445.png";const O={name:"Home",components:{animationVue:F},data(){return{searchIn:"",searching:!1,searchData:"",univercities:[],searchedUni:[],searchNote:[],loading:!0,isData:!1,readActivated:!1,noData:!1,showData:!1,notes:V}},watch:{},methods:{SearchingData(){this.searchData?(this.searching=!0,this.univercities.length<1?this.noData=!0:this.noData=!1,this.searchIn=="Degrees"||(this.searchIn=="Notes"?(this.searchNote=[],this.notes.forEach(s=>{(s.name.toUpperCase().includes(this.searchData.toUpperCase())||s.subjecCode.toUpperCase().includes(this.searchData.toUpperCase())||s.class.toUpperCase().includes(this.searchData.toUpperCase())||s.fileName.toUpperCase().includes(this.searchData.toUpperCase()))&&this.searchNote.push(s)})):(this.searching=!0,this.searchedUni.splice(0,this.searchedUni.length),this.univercities.forEach(s=>{(s.tags.toUpperCase().includes(this.searchData.toUpperCase())||s.mainCampus.toUpperCase().includes(this.searchData.toUpperCase())||Math.floor(s.ranking)==Math.floor(this.searchData)||s.specialization.toUpperCase().includes(this.searchData.toUpperCase()))&&this.searchedUni.push(s)})))):this.searchData||(this.searching=!1,this.searchedUni.splice(0,this.searchedUni.length))},getdata(){const s=k();this.univercities.length<1&&(this.univercities=s.univercities)}},created(){this.getdata(),setInterval(()=>{this.univercities.length>0?(this.noData=!1,this.loading=!1):this.showData=!0},1e3)}},o=s=>(U("data-v-5e4071b8"),s=s(),C(),s),P={class:"loading-container"},q={class:"container"},G=o(()=>e("h1",{class:"heading main-heading"},"EDUCATIA",-1)),J={class:"search-p"},Q={key:0},W=c("Browse and find the best Univercities for your education across Pakistan. Search University by "),X=o(()=>e("span",null,"Name, ",-1)),Y=o(()=>e("span",null,"City, ",-1)),Z=c(),$=o(()=>e("span",null,"Specialization, ",-1)),ee=c(" or "),se=o(()=>e("span",null,"Ranking",-1)),te=[W,X,Y,Z,$,ee,se],ae={key:1},ie=c("Browse and find the best Notes. Search Notes by "),ne=o(()=>e("span",null,"Name, ",-1)),oe=o(()=>e("span",null,"Class, ",-1)),ce=c(),re=o(()=>e("span",null,"Subject, ",-1)),le=c(" or "),de=o(()=>e("span",null,"Subject Code",-1)),he=[ie,ne,oe,ce,re,le,de],_e={key:0,class:"search-bar flex center jus-center"},pe={class:"flex center jus-center"},ue=o(()=>e("option",{disabled:"",value:""},"Search In",-1)),ve=o(()=>e("option",{value:"Universities"},"Universities",-1)),me=o(()=>e("option",{value:"Degrees"},"Degrees",-1)),fe=o(()=>e("option",{value:"Notes"},"Notes",-1)),ge=[ue,ve,me,fe],be={key:1},Ue={class:"container"},Ce={key:0,class:"searching flex center jus-center"},De=c("Searching "),ye=c(" in "),Ne={key:1},ke={class:"wrapper"},Ie={class:"search-results container flex jus-center center col"},xe={class:"logo-wrapper"},Se={class:"logo"},je=["src"],we={class:"s-name"},Ve={class:"flex center jus-center col"},Ae=o(()=>e("tr",null,[e("th",null,"Ranking"),e("th",null,"Main Campus"),e("th",null,"Sepecialization"),e("th",null,"Admission")],-1)),Ee={key:0},Be={key:1},Me={key:0,class:"search-intro"},ze={class:"read"},He=c("...read more"),Te={key:2},Fe={class:"note container flex jus-center center col"},Ke={class:"wrapper"},Le={class:"note-table"},Re=o(()=>e("tr",null,[e("th",null,"Subject Code"),e("th",null,"Class")],-1)),Oe={key:0,class:"container"},Pe={class:"options flex center jus-center col"},qe={class:"option-box"},Ge={class:"overlay"},Je=o(()=>e("span",null,"Univercities",-1)),Qe=c("Visit"),We=o(()=>e("img",{src:K,alt:"Univercities"},null,-1)),Xe=w('<div class="option-box" data-v-5e4071b8><div class="overlay" data-v-5e4071b8><span data-v-5e4071b8>Admission</span><a href="#" data-v-5e4071b8>Visit</a></div><img src="'+L+'" alt="Admission" data-v-5e4071b8></div><div class="option-box" data-v-5e4071b8><div class="overlay" data-v-5e4071b8><span data-v-5e4071b8>Notes</span><a href="#" data-v-5e4071b8>Visit</a></div><img src="'+R+'" alt="Notes" data-v-5e4071b8></div>',2);function Ye(s,l,D,y,a,u){const N=v("animationVue"),_=v("router-link");return i(),n("div",P,[e("section",q,[G,e("div",J,[a.searchIn=="Universities"||a.searchIn==""?(i(),n("p",Q,te)):a.searchIn=="Notes"?(i(),n("p",ae,he)):d("",!0)]),a.loading?(i(),n("div",be,[h(N)])):(i(),n("div",_e,[e("div",pe,[m(e("input",{type:"search",name:"",id:"main-search","onUpdate:modelValue":l[0]||(l[0]=t=>a.searchData=t),onInput:l[1]||(l[1]=t=>u.SearchingData()),ref:"search"},null,544),[[I,a.searchData]])]),m(e("select",{name:"",id:"search-options","onUpdate:modelValue":l[2]||(l[2]=t=>a.searchIn=t),onChange:l[3]||(l[3]=t=>u.SearchingData())},ge,544),[[x,a.searchIn]])]))]),e("section",Ue,[a.searching?(i(),n("div",Ce,[e("div",null,[e("h4",null,[De,e("span",null,r(a.searchData),1),ye,e("span",null,r(a.searchIn),1)])])])):d("",!0),a.searchIn=="Universities"||a.searchIn==""?(i(),n("div",Ne,[e("div",ke,[(i(),S(j,null,[(i(!0),n(f,null,g(a.searchedUni,t=>(i(),n("div",Ie,[e("div",xe,[e("div",Se,[e("img",{src:t.imgUrl,alt:""},null,8,je)]),e("h2",we,[h(_,{to:{name:"details",params:{name:t.name.split(" ").join("-")}}},{default:p(()=>[c(r(t.name),1)]),_:2},1032,["to"])])]),e("div",Ve,[e("table",null,[Ae,e("tr",null,[e("td",null,r(t.ranking),1),e("td",null,r(t.mainCampus),1),e("td",null,r(t.specialization),1),t.bsAdmission==!0?(i(),n("td",Ee,"Open")):(i(),n("td",Be,"Close"))])]),a.readActivated?d("",!0):(i(),n("p",Me,[c(r(t.introduction.slice(0,150)),1),e("span",ze,[h(_,{to:{name:"details",params:{name:t.name.split(" ").join("-")}}},{default:p(()=>[He]),_:2},1032,["to"])])]))])]))),256))],1024))])])):d("",!0),a.searchIn=="Notes"?(i(),n("div",Te,[(i(!0),n(f,null,g(a.searchNote,t=>(i(),n("div",Fe,[e("div",Ke,[e("div",null,[e("h2",null,[h(_,{to:{name:"Note",params:{fileName:t.fileName}}},{default:p(()=>[c(r(t.name),1)]),_:2},1032,["to"])])]),e("div",Le,[e("table",null,[Re,e("tr",null,[e("td",null,r(t.subjecCode),1),e("td",null,r(t.class),1)])])])])]))),256))])):d("",!0)]),a.searching?d("",!0):(i(),n("section",Oe,[e("div",Pe,[e("div",qe,[e("div",Ge,[Je,h(_,{to:{name:"Univercities"}},{default:p(()=>[Qe]),_:1})]),We]),Xe])]))])}var es=b(O,[["render",Ye],["__scopeId","data-v-5e4071b8"]]);export{es as default};
