import{_ as r,o as n,c as o,f as d,F as p,d as e,t as c,w as u,v as m}from"./index.5a87026b.js";import{t as h}from"./types.7d33b1ee.js";const D={name:"Testing",data(){return{newData:"",allData:[],types:h}},methods:{addData(){let t={deg:this.newData};this.allData.push(t),this.newData=""},add(){db.collection("testing").add({bsmedical:this.allData}).then().catch(t=>{console.log(t)})}}},_={name:"",id:""},f=["value"];function g(t,a,v,w,l,y){return n(!0),o(p,null,d(l.types,s=>(n(),o("div",null,[e("select",_,[e("option",{value:s},c(s),9,f)]),u(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=i=>t.typse=i)},null,512),[[m,t.typse]])]))),256)}var $=r(D,[["render",g]]);export{$ as default};
