import{d as m,am as f,an as h,s as c,a5 as d,f as g,J as v,K as w,h as _,t as x,o as R}from"./index-f1f1bde1.js";import{t as S}from"./check-44032eaf.js";import{m as b,j as i,u as n,a as y,n as l,q as I,e as U,r as B,b as k}from"./storage-cb76c2d1.js";import{a as q}from"./import-445e9ac4.js";import"./jszip.min-2e2e6be8.js";const D={class:"h-[calc(100%-10px)]",flex:"","gap-5px":"","p-5px":"","flex-col":"","flex-items-center":""},C=m({__name:"ImportPage",setup(J){const u=f(),r=h(),a=String(u.query.url||""),p=c(!0),o=c("加载中...");return d(async()=>{if(!S(a)){b.error("非法URL参数"),await i(1e3),r.replace({path:"/"});return}await i(1e3);const s=n[a];if(s)if(await y.getItem(s)){r.replace({name:"snapshot",params:{snapshotId:s}});return}else delete n[a];l.start();try{const[t]=await q(a)??[];if(t.status=="fulfilled"){l.finish();const e=t.value;e!=null&&e.id?(n[a]=e.id,a.match(I)?U[e.id]=a:a.match(B)&&(k[e.id]=a),p.value=!1,await i(500),r.replace({name:"snapshot",params:{snapshotId:e.id}})):o.value="获取资源失败"}else throw t.reason}catch{l.error(),o.value="加载资源失败"}}),(s,t)=>(R(),g("div",D,[v(_("div",{"mt-40px":""},x(o.value),513),[[w,p.value]])]))}});export{C as default};
//# sourceMappingURL=ImportPage-0a090100.js.map
