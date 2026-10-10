'use strict';
document.documentElement.classList.add('js');
document.querySelectorAll('.print-button').forEach(button=>button.addEventListener('click',()=>window.print()));
const controls=document.querySelector('.bank-controls');
if(controls){
 controls.hidden=false;
 const fields={q:document.querySelector('#search'),researcher:document.querySelector('#researcher'),discipline:document.querySelector('#discipline'),kind:document.querySelector('#kind')};
 const entries=[...document.querySelectorAll('.bank-entry')];
 const count=document.querySelector('#result-count');
 function readURL(){const params=new URLSearchParams(location.search);for(const [key,input] of Object.entries(fields))input.value=params.get(key)||'';}
 function filter(updateURL=true){
  const q=fields.q.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);let shown=0;
  for(const entry of entries){const match=q.every(term=>entry.dataset.search.includes(term))&&(!fields.researcher.value||entry.dataset.researcher===fields.researcher.value)&&(!fields.kind.value||entry.dataset.kind===fields.kind.value)&&(!fields.discipline.value||entry.dataset.topics.split('|').includes(fields.discipline.value));entry.hidden=!match;if(match)shown++;}
  count.textContent=`${shown} of ${entries.length} sources`;
  document.querySelector('#empty').hidden=shown!==0;
  if(updateURL){const url=new URL(location.href);for(const [key,input] of Object.entries(fields)){if(input.value)url.searchParams.set(key,input.value);else url.searchParams.delete(key);}history.replaceState(null,'',url);}
 }
 function revealHash(){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}const entry=entries.find(item=>item.id===id);if(!entry)return;if(entry.hidden){for(const input of Object.values(fields))input.value='';filter();}entry.querySelector('details').open=true;requestAnimationFrame(()=>entry.scrollIntoView({block:'start'}));}
 readURL();filter(false);revealHash();
 for(const input of Object.values(fields))input.addEventListener(input.type==='search'?'input':'change',()=>filter());
 document.querySelector('#reset').addEventListener('click',()=>{for(const input of Object.values(fields))input.value='';filter();fields.q.focus();});
 window.addEventListener('hashchange',revealHash);
 window.addEventListener('popstate',()=>{readURL();filter(false);revealHash();});
}
