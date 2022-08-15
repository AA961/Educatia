import{_ as fe,o as v,c as M,p as _e,a as pe,b as h,u as ne,r as ie,d as F,w as re,v as Ae,e as be,f as U,t as w,g as Ne,F as ce,h as oe,K as ke,i as P,j as y}from"./index.71c3a4d2.js";import{n as Le}from"./notes.aa3aa818.js";var Ce="/Educatia/educatia.png";const Re={name:"animation"},De=t=>(_e("data-v-59a55b94"),t=t(),pe(),t),je={class:"wrapper flex center jus-center"},Oe=De(()=>h("div",{class:"img"},[h("img",{src:Ce,alt:"loading...."})],-1)),$e=[Oe];function Te(t,e,s,i,n,r){return v(),M("div",je,$e)}var Fe=fe(Re,[["render",Te],["__scopeId","data-v-59a55b94"]]);function N(t){return Array.isArray?Array.isArray(t):ve(t)==="[object Array]"}const Ue=1/0;function Pe(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Ue?"-0":e}function Ke(t){return t==null?"":Pe(t)}function A(t){return typeof t=="string"}function ge(t){return typeof t=="number"}function Ve(t){return t===!0||t===!1||Be(t)&&ve(t)=="[object Boolean]"}function me(t){return typeof t=="object"}function Be(t){return me(t)&&t!==null}function x(t){return t!=null}function Y(t){return!t.trim().length}function ve(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ze="Incorrect 'index' type",We=t=>`Invalid value for key ${t}`,He=t=>`Pattern length exceeds max of ${t}.`,Ye=t=>`Missing ${t} property in key`,Ge=t=>`Property 'weight' in key '${t}' must be a positive integer`,ae=Object.prototype.hasOwnProperty;class Qe{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(i=>{let n=Me(i);s+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(i=>{i.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Me(t){let e=null,s=null,i=null,n=1,r=null;if(A(t)||N(t))i=t,e=he(t),s=G(t);else{if(!ae.call(t,"name"))throw new Error(Ye("name"));const o=t.name;if(i=o,ae.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(Ge(o));e=he(o),s=G(o),r=t.getFn}return{path:e,id:s,weight:n,src:i,getFn:r}}function he(t){return N(t)?t:t.split(".")}function G(t){return N(t)?t.join("."):t}function Xe(t,e){let s=[],i=!1;const n=(r,o,a)=>{if(!!x(r))if(!o[a])s.push(r);else{let c=o[a];const l=r[c];if(!x(l))return;if(a===o.length-1&&(A(l)||ge(l)||Ve(l)))s.push(Ke(l));else if(N(l)){i=!0;for(let u=0,f=l.length;u<f;u+=1)n(l[u],o,a+1)}else o.length&&n(l,o,a+1)}};return n(t,A(e)?e.split("."):e,0),i?s:s[0]}const Je={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ze={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},qe={location:0,threshold:.6,distance:100},et={useExtendedSearch:!1,getFn:Xe,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var d={...Ze,...Je,...qe,...et};const tt=/[^ ]+/g;function st(t=1,e=3){const s=new Map,i=Math.pow(10,e);return{get(n){const r=n.match(tt).length;if(s.has(r))return s.get(r);const o=1/Math.pow(r,.5*t),a=parseFloat(Math.round(o*i)/i);return s.set(r,a),a},clear(){s.clear()}}}class ee{constructor({getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){this.norm=st(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,i)=>{this._keysMap[s.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,A(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();A(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,i=this.size();s<i;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!x(e)||Y(e))return;let i={v:e,i:s,n:this.norm.get(e)};this.records.push(i)}_addObject(e,s){let i={i:s,$:{}};this.keys.forEach((n,r)=>{let o=n.getFn?n.getFn(e):this.getFn(e,n.path);if(!!x(o)){if(N(o)){let a=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:l,value:u}=c.pop();if(!!x(u))if(A(u)&&!Y(u)){let f={v:u,i:l,n:this.norm.get(u)};a.push(f)}else N(u)&&u.forEach((f,_)=>{c.push({nestedArrIndex:_,value:f})})}i.$[r]=a}else if(A(o)&&!Y(o)){let a={v:o,n:this.norm.get(o)};i.$[r]=a}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function ye(t,e,{getFn:s=d.getFn,fieldNormWeight:i=d.fieldNormWeight}={}){const n=new ee({getFn:s,fieldNormWeight:i});return n.setKeys(t.map(Me)),n.setSources(e),n.create(),n}function nt(t,{getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){const{keys:i,records:n}=t,r=new ee({getFn:e,fieldNormWeight:s});return r.setKeys(i),r.setIndexRecords(n),r}function B(t,{errors:e=0,currentLocation:s=0,expectedLocation:i=0,distance:n=d.distance,ignoreLocation:r=d.ignoreLocation}={}){const o=e/t.length;if(r)return o;const a=Math.abs(i-s);return n?o+a/n:a?1:o}function it(t=[],e=d.minMatchCharLength){let s=[],i=-1,n=-1,r=0;for(let o=t.length;r<o;r+=1){let a=t[r];a&&i===-1?i=r:!a&&i!==-1&&(n=r-1,n-i+1>=e&&s.push([i,n]),i=-1)}return t[r-1]&&r-i>=e&&s.push([i,r-1]),s}const j=32;function rt(t,e,s,{location:i=d.location,distance:n=d.distance,threshold:r=d.threshold,findAllMatches:o=d.findAllMatches,minMatchCharLength:a=d.minMatchCharLength,includeMatches:c=d.includeMatches,ignoreLocation:l=d.ignoreLocation}={}){if(e.length>j)throw new Error(He(j));const u=e.length,f=t.length,_=Math.max(0,Math.min(i,f));let p=r,m=_;const I=a>1||c,R=I?Array(f):[];let b;for(;(b=t.indexOf(e,m))>-1;){let S=B(e,{currentLocation:b,expectedLocation:_,distance:n,ignoreLocation:l});if(p=Math.min(S,p),m=b+u,I){let k=0;for(;k<u;)R[b+k]=1,k+=1}}m=-1;let $=[],D=1,K=u+f;const we=1<<u-1;for(let S=0;S<u;S+=1){let k=0,L=K;for(;k<L;)B(e,{errors:S,currentLocation:_+L,expectedLocation:_,distance:n,ignoreLocation:l})<=p?k=L:K=L,L=Math.floor((K-k)/2+k);K=L;let te=Math.max(1,_-L+1),H=o?f:Math.min(_+L,f)+u,T=Array(H+2);T[H+1]=(1<<S)-1;for(let E=H;E>=te;E-=1){let V=E-1,se=s[t.charAt(V)];if(I&&(R[V]=+!!se),T[E]=(T[E+1]<<1|1)&se,S&&(T[E]|=($[E+1]|$[E])<<1|1|$[E+1]),T[E]&we&&(D=B(e,{errors:S,currentLocation:V,expectedLocation:_,distance:n,ignoreLocation:l}),D<=p)){if(p=D,m=V,m<=_)break;te=Math.max(1,2*_-m)}}if(B(e,{errors:S+1,currentLocation:_,expectedLocation:_,distance:n,ignoreLocation:l})>p)break;$=T}const W={isMatch:m>=0,score:Math.max(.001,D)};if(I){const S=it(R,a);S.length?c&&(W.indices=S):W.isMatch=!1}return W}function ct(t){let e={};for(let s=0,i=t.length;s<i;s+=1){const n=t.charAt(s);e[n]=(e[n]||0)|1<<i-s-1}return e}class xe{constructor(e,{location:s=d.location,threshold:i=d.threshold,distance:n=d.distance,includeMatches:r=d.includeMatches,findAllMatches:o=d.findAllMatches,minMatchCharLength:a=d.minMatchCharLength,isCaseSensitive:c=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){if(this.options={location:s,threshold:i,distance:n,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(_,p)=>{this.chunks.push({pattern:_,alphabet:ct(_),startIndex:p})},f=this.pattern.length;if(f>j){let _=0;const p=f%j,m=f-p;for(;_<m;)u(this.pattern.substr(_,j),_),_+=j;if(p){const I=f-j;u(this.pattern.substr(I),I)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:i}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return i&&(m.indices=[[0,e.length-1]]),m}const{location:n,distance:r,threshold:o,findAllMatches:a,minMatchCharLength:c,ignoreLocation:l}=this.options;let u=[],f=0,_=!1;this.chunks.forEach(({pattern:m,alphabet:I,startIndex:R})=>{const{isMatch:b,score:$,indices:D}=rt(e,m,I,{location:n+R,distance:r,threshold:o,findAllMatches:a,minMatchCharLength:c,includeMatches:i,ignoreLocation:l});b&&(_=!0),f+=$,b&&D&&(u=[...u,...D])});let p={isMatch:_,score:_?f/this.chunks.length:1};return _&&i&&(p.indices=u),p}}class C{constructor(e){this.pattern=e}static isMultiMatch(e){return le(e,this.multiRegex)}static isSingleMatch(e){return le(e,this.singleRegex)}search(){}}function le(t,e){const s=t.match(e);return s?s[1]:null}class ot extends C{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class at extends C{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class ht extends C{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class lt extends C{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ut extends C{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class dt extends C{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Ie extends C{constructor(e,{location:s=d.location,threshold:i=d.threshold,distance:n=d.distance,includeMatches:r=d.includeMatches,findAllMatches:o=d.findAllMatches,minMatchCharLength:a=d.minMatchCharLength,isCaseSensitive:c=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){super(e),this._bitapSearch=new xe(e,{location:s,threshold:i,distance:n,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Se extends C{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,i;const n=[],r=this.pattern.length;for(;(i=e.indexOf(this.pattern,s))>-1;)s=i+r,n.push([i,s-1]);const o=!!n.length;return{isMatch:o,score:o?0:1,indices:n}}}const Q=[ot,Se,ht,lt,dt,ut,at,Ie],ue=Q.length,ft=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,_t="|";function pt(t,e={}){return t.split(_t).map(s=>{let i=s.trim().split(ft).filter(r=>r&&!!r.trim()),n=[];for(let r=0,o=i.length;r<o;r+=1){const a=i[r];let c=!1,l=-1;for(;!c&&++l<ue;){const u=Q[l];let f=u.isMultiMatch(a);f&&(n.push(new u(f,e)),c=!0)}if(!c)for(l=-1;++l<ue;){const u=Q[l];let f=u.isSingleMatch(a);if(f){n.push(new u(f,e));break}}}return n})}const gt=new Set([Ie.type,Se.type]);class mt{constructor(e,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:i=d.includeMatches,minMatchCharLength:n=d.minMatchCharLength,ignoreLocation:r=d.ignoreLocation,findAllMatches:o=d.findAllMatches,location:a=d.location,threshold:c=d.threshold,distance:l=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:i,minMatchCharLength:n,findAllMatches:o,ignoreLocation:r,location:a,threshold:c,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=pt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let r=0,o=[],a=0;for(let c=0,l=s.length;c<l;c+=1){const u=s[c];o.length=0,r=0;for(let f=0,_=u.length;f<_;f+=1){const p=u[f],{isMatch:m,indices:I,score:R}=p.search(e);if(m){if(r+=1,a+=R,i){const b=p.constructor.type;gt.has(b)?o=[...o,...I]:o.push(I)}}else{a=0,r=0,o.length=0;break}}if(r){let f={isMatch:!0,score:a/r};return i&&(f.indices=o),f}}return{isMatch:!1,score:1}}}const X=[];function vt(...t){X.push(...t)}function J(t,e){for(let s=0,i=X.length;s<i;s+=1){let n=X[s];if(n.condition(t,e))return new n(t,e)}return new xe(t,e)}const z={AND:"$and",OR:"$or"},Z={PATH:"$path",PATTERN:"$val"},q=t=>!!(t[z.AND]||t[z.OR]),Mt=t=>!!t[Z.PATH],yt=t=>!N(t)&&me(t)&&!q(t),de=t=>({[z.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ee(t,e,{auto:s=!0}={}){const i=n=>{let r=Object.keys(n);const o=Mt(n);if(!o&&r.length>1&&!q(n))return i(de(n));if(yt(n)){const c=o?n[Z.PATH]:r[0],l=o?n[Z.PATTERN]:n[c];if(!A(l))throw new Error(We(c));const u={keyId:G(c),pattern:l};return s&&(u.searcher=J(l,e)),u}let a={children:[],operator:r[0]};return r.forEach(c=>{const l=n[c];N(l)&&l.forEach(u=>{a.children.push(i(u))})}),a};return q(t)||(t=de(t)),i(t)}function xt(t,{ignoreFieldNorm:e=d.ignoreFieldNorm}){t.forEach(s=>{let i=1;s.matches.forEach(({key:n,norm:r,score:o})=>{const a=n?n.weight:null;i*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(e?1:r))}),s.score=i})}function It(t,e){const s=t.matches;e.matches=[],x(s)&&s.forEach(i=>{if(!x(i.indices)||!i.indices.length)return;const{indices:n,value:r}=i;let o={indices:n,value:r};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),e.matches.push(o)})}function St(t,e){e.score=t.score}function Et(t,e,{includeMatches:s=d.includeMatches,includeScore:i=d.includeScore}={}){const n=[];return s&&n.push(It),i&&n.push(St),t.map(r=>{const{idx:o}=r,a={item:e[o],refIndex:o};return n.length&&n.forEach(c=>{c(r,a)}),a})}class O{constructor(e,s={},i){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new Qe(this.options.keys),this.setCollection(e,i)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ee))throw new Error(ze);this._myIndex=s||ye(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!x(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let i=0,n=this._docs.length;i<n;i+=1){const r=this._docs[i];e(r,i)&&(this.removeAt(i),i-=1,n-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:i,includeScore:n,shouldSort:r,sortFn:o,ignoreFieldNorm:a}=this.options;let c=A(e)?A(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return xt(c,{ignoreFieldNorm:a}),r&&c.sort(o),ge(s)&&s>-1&&(c=c.slice(0,s)),Et(c,this._docs,{includeMatches:i,includeScore:n})}_searchStringList(e){const s=J(e,this.options),{records:i}=this._myIndex,n=[];return i.forEach(({v:r,i:o,n:a})=>{if(!x(r))return;const{isMatch:c,score:l,indices:u}=s.searchIn(r);c&&n.push({item:r,idx:o,matches:[{score:l,value:r,norm:a,indices:u}]})}),n}_searchLogical(e){const s=Ee(e,this.options),i=(a,c,l)=>{if(!a.children){const{keyId:f,searcher:_}=a,p=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:_});return p&&p.length?[{idx:l,item:c,matches:p}]:[]}const u=[];for(let f=0,_=a.children.length;f<_;f+=1){const p=a.children[f],m=i(p,c,l);if(m.length)u.push(...m);else if(a.operator===z.AND)return[]}return u},n=this._myIndex.records,r={},o=[];return n.forEach(({$:a,i:c})=>{if(x(a)){let l=i(s,a,c);l.length&&(r[c]||(r[c]={idx:c,item:a,matches:[]},o.push(r[c])),l.forEach(({matches:u})=>{r[c].matches.push(...u)}))}}),o}_searchObjectList(e){const s=J(e,this.options),{keys:i,records:n}=this._myIndex,r=[];return n.forEach(({$:o,i:a})=>{if(!x(o))return;let c=[];i.forEach((l,u)=>{c.push(...this._findMatches({key:l,value:o[u],searcher:s}))}),c.length&&r.push({idx:a,item:o,matches:c})}),r}_findMatches({key:e,value:s,searcher:i}){if(!x(s))return[];let n=[];if(N(s))s.forEach(({v:r,i:o,n:a})=>{if(!x(r))return;const{isMatch:c,score:l,indices:u}=i.searchIn(r);c&&n.push({score:l,key:e,value:r,idx:o,norm:a,indices:u})});else{const{v:r,n:o}=s,{isMatch:a,score:c,indices:l}=i.searchIn(r);a&&n.push({score:c,key:e,value:r,norm:o,indices:l})}return n}}O.version="6.6.2";O.createIndex=ye;O.parseIndex=nt;O.config=d;O.parseQuery=Ee;vt(mt);var wt="/Educatia/assets/unis.5e6f69da.png",At="/Educatia/assets/notes.f407f445.png",bt="/Educatia/assets/admission.81ebc620.png";const Nt={name:"Home",components:{animationVue:Fe},data(){return{searchIn:"",searching:!1,searchData:"",univercities:[],searchedUni:[],searchNote:[],loading:!0,isData:!1,readActivated:!1,noData:!1,showData:!1,uniKeys:{includeScore:!0,includeMatches:!0,shouldSort:!0,keys:["name","tags","mainCampus","ranking","sector","specializtion"]},noteKeys:{includeScore:!0,includeMatches:!0,shouldSort:!0,keys:["name","fileName","subjectCode","class"]},notes:Le}},watch:{},methods:{SearchingData(){this.searchData?(this.searching=!0,this.univercities.length<1?this.noData=!0:this.noData=!1,this.searchIn=="Degrees"||(this.searchIn=="Notes"?(this.searchNote=[],new O(this.notes,this.noteKeys).search(this.searchData).forEach(s=>{this.searchNote.push(s.item)})):new O(this.univercities,this.uniKeys).search(this.searchData).forEach(s=>{this.searchedUni.push(s.item)}))):this.searchData||(this.searching=!1,this.searchedUni.splice(0,this.searchedUni.length))},getdata(){const t=ne();this.univercities.length<1&&(this.univercities=t.univercities)},watchingData(){this.univercities.length>0?(this.noData=!1,this.loading=!1):this.showData=!0}},mounted(){const t=ne();this.getdata();const e=setInterval(this.watchingData,1e3);t.univercities.length>1&&(clearInterval(e),this.loading=!1)}},g=t=>(_e("data-v-95e3e984"),t=t(),pe(),t),kt={class:"loading-container"},Lt={class:"container"},Ct=g(()=>h("h1",{class:"heading main-heading"},"EDUCATIA",-1)),Rt={class:"search-p"},Dt={key:0},jt=y("Browse and find the best Univercities for your education across Pakistan. Search University by "),Ot=g(()=>h("span",null,"Name, ",-1)),$t=g(()=>h("span",null,"City, ",-1)),Tt=y(),Ft=g(()=>h("span",null,"Specialization, ",-1)),Ut=y(" or "),Pt=g(()=>h("span",null,"Ranking",-1)),Kt=[jt,Ot,$t,Tt,Ft,Ut,Pt],Vt={key:1},Bt=y("Browse and find the best Notes. Search Notes by "),zt=g(()=>h("span",null,"Name, ",-1)),Wt=g(()=>h("span",null,"Class, ",-1)),Ht=y(),Yt=g(()=>h("span",null,"Subject, ",-1)),Gt=y(" or "),Qt=g(()=>h("span",null,"Subject Code",-1)),Xt=[Bt,zt,Wt,Ht,Yt,Gt,Qt],Jt={key:0,class:"search-bar flex center jus-center"},Zt={class:"flex center jus-center"},qt=g(()=>h("option",{disabled:"",value:""},"Search In",-1)),es=g(()=>h("option",{value:"Universities"},"Universities",-1)),ts=g(()=>h("option",{value:"Degrees"},"Degrees",-1)),ss=g(()=>h("option",{value:"Notes"},"Notes",-1)),ns=[qt,es,ts,ss],is={key:1},rs={class:"container"},cs={key:0,class:"searching flex center jus-center"},os=y("Searching "),as=y(" in "),hs={key:1},ls={class:"wrapper"},us={class:"search-results container flex jus-center center col"},ds={class:"logo-wrapper"},fs={class:"logo"},_s=["src"],ps={class:"s-name"},gs={class:"flex center jus-center col"},ms=g(()=>h("tr",null,[h("th",null,"Ranking"),h("th",null,"Main Campus"),h("th",null,"Sepecialization"),h("th",null,"Admission")],-1)),vs={key:0},Ms={key:1},ys={key:0,class:"search-intro"},xs={class:"read"},Is=y("...read more"),Ss={key:2},Es={class:"note container flex jus-center center col"},ws={class:"wrapper"},As={class:"note-table"},bs=g(()=>h("tr",null,[h("th",null,"Subject Code"),h("th",null,"Class")],-1)),Ns={key:0,class:"container"},ks={class:"options flex center jus-center col"},Ls={class:"option-box"},Cs={class:"overlay"},Rs=g(()=>h("span",null,"Univercities",-1)),Ds=y("Visit"),js=g(()=>h("img",{src:wt,alt:"Univercities"},null,-1)),Os={class:"option-box"},$s={class:"overlay"},Ts=g(()=>h("span",null,"Notes",-1)),Fs=y("Visit"),Us=g(()=>h("img",{src:At,alt:"Notes"},null,-1)),Ps=g(()=>h("div",{class:"option-box"},[h("div",{class:"overlay"},[h("span",null,"Admission"),h("a",{href:"#"},"Visit")]),h("img",{src:bt,alt:"Admission"})],-1));function Ks(t,e,s,i,n,r){const o=ie("animationVue"),a=ie("router-link");return v(),M("div",kt,[h("section",Lt,[Ct,h("div",Rt,[n.searchIn=="Universities"||n.searchIn==""?(v(),M("p",Dt,Kt)):n.searchIn=="Notes"?(v(),M("p",Vt,Xt)):F("",!0)]),n.loading?(v(),M("div",is,[U(o)])):(v(),M("div",Jt,[h("div",Zt,[re(h("input",{type:"search",name:"",id:"main-search","onUpdate:modelValue":e[0]||(e[0]=c=>n.searchData=c),onInput:e[1]||(e[1]=c=>r.SearchingData()),ref:"search"},null,544),[[Ae,n.searchData]])]),re(h("select",{name:"",id:"search-options","onUpdate:modelValue":e[2]||(e[2]=c=>n.searchIn=c),onChange:e[3]||(e[3]=c=>r.SearchingData())},ns,544),[[be,n.searchIn]])]))]),h("section",rs,[n.searching?(v(),M("div",cs,[h("div",null,[h("h4",null,[os,h("span",null,w(n.searchData),1),as,h("span",null,w(n.searchIn),1)])])])):F("",!0),n.searchIn=="Universities"||n.searchIn==""?(v(),M("div",hs,[h("div",ls,[(v(),Ne(ke,null,[(v(!0),M(ce,null,oe(n.searchedUni,c=>(v(),M("div",us,[h("div",ds,[h("div",fs,[h("img",{src:c.imgUrl,alt:""},null,8,_s)]),h("h2",ps,[U(a,{to:{name:"details",params:{name:c.name.split(" ").join("-")}}},{default:P(()=>[y(w(c.name),1)]),_:2},1032,["to"])])]),h("div",gs,[h("table",null,[ms,h("tr",null,[h("td",null,w(c.ranking),1),h("td",null,w(c.mainCampus),1),h("td",null,w(c.specialization),1),c.bsAdmission==!0?(v(),M("td",vs,"Open")):(v(),M("td",Ms,"Close"))])]),n.readActivated?F("",!0):(v(),M("p",ys,[y(w(c.introduction.slice(0,150)),1),h("span",xs,[U(a,{to:{name:"details",params:{name:c.name.split(" ").join("-")}}},{default:P(()=>[Is]),_:2},1032,["to"])])]))])]))),256))],1024))])])):F("",!0),n.searchIn=="Notes"&&n.searching?(v(),M("div",Ss,[(v(!0),M(ce,null,oe(n.searchNote,c=>(v(),M("div",Es,[h("div",ws,[h("div",null,[h("h2",null,[U(a,{to:{name:"Note",params:{fileName:c.fileName}}},{default:P(()=>[y(w(c.name),1)]),_:2},1032,["to"])])]),h("div",As,[h("table",null,[bs,h("tr",null,[h("td",null,w(c.subjecCode),1),h("td",null,w(c.class),1)])])])])]))),256))])):F("",!0)]),n.searching?F("",!0):(v(),M("section",Ns,[h("div",ks,[h("div",Ls,[h("div",Cs,[Rs,U(a,{to:{name:"Univercities"}},{default:P(()=>[Ds]),_:1})]),js]),h("div",Os,[h("div",$s,[Ts,U(a,{to:{name:"Notes"}},{default:P(()=>[Fs]),_:1})]),Us]),Ps])]))])}var Ws=fe(Nt,[["render",Ks],["__scopeId","data-v-95e3e984"]]);export{Ws as default};
