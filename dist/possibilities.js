(()=>{
 const form=document.querySelector('#possibilities-filters');if(!form)return;
 const cards=[...document.querySelectorAll('.possibility')],picks=[...document.querySelectorAll('[data-pick]')],routes=JSON.parse(document.querySelector('#possibility-routes').textContent);
 const controls={q:document.querySelector('#possibilities-search'),area:document.querySelector('#possibilities-area'),mode:document.querySelector('#possibilities-mode'),time:document.querySelector('#possibilities-time')};
 const names={memory:'Memory in practice',collective:'A room acting together',objects:'Mind through objects',worlds:'Mind across languages and lives'};
 let chosen=new Set(),route='',only=false;
 form.hidden=false;document.querySelector('#shortlist-bar').hidden=false;picks.forEach(b=>b.hidden=false);
 const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();const texts=new Map(cards.map(c=>[c,norm(c.textContent)]));
 function render(save=true){let n=0;cards.forEach(c=>{c.classList.toggle('picked',chosen.has(c.id));c.hidden=only?!chosen.has(c.id):!((!route||routes[route].includes(c.id))&&(!controls.area.value||c.dataset.areas.split('|').includes(controls.area.value))&&(!controls.mode.value||c.dataset.mode===controls.mode.value)&&(!controls.time.value||Number(c.dataset.minutes)<=Number(controls.time.value))&&texts.get(c).includes(norm(controls.q.value.trim())));if(!c.hidden)n++;});
 picks.forEach(b=>{const selected=chosen.has(b.dataset.pick);b.setAttribute('aria-pressed',String(selected));b.firstChild.textContent=selected?'Remove from shortlist':'Add to shortlist';});
 document.querySelector('#possibilities-count').textContent=`${n} of ${cards.length} candidates${only?' · Your shortlist':route?' · '+names[route]:''}`;
 document.querySelector('#shortlist-status').textContent=`${chosen.size} ${chosen.size===1?'candidate':'candidates'} selected · selection is saved in this link`;
 document.querySelector('#possibilities-empty').hidden=n!==0;document.querySelector('#show-shortlist').setAttribute('aria-pressed',String(only));document.querySelector('#show-shortlist').textContent=only?'Show collection':'Show shortlist';['print-shortlist','clear-shortlist'].forEach(id=>document.getElementById(id).disabled=!chosen.size);
 Object.values(controls).forEach(c=>c.disabled=only);
 document.querySelectorAll('a[href^="?"]').forEach(a=>{const target=new URL(a.href);target.searchParams.delete('pick');if(chosen.size)target.searchParams.set('pick',[...chosen].join(','));a.href=target.search+target.hash;});
 if(save){const u=new URL(location.href);['q','area','mode','time','route','pick','shortlist'].forEach(k=>u.searchParams.delete(k));Object.entries(controls).forEach(([k,c])=>{if(c.value)u.searchParams.set(k,c.value)});if(route)u.searchParams.set('route',route);if(chosen.size)u.searchParams.set('pick',[...chosen].join(','));if(only)u.searchParams.set('shortlist','1');history.replaceState(null,'',u);}}
 function reset(){route='';only=false;Object.values(controls).forEach(c=>c.value='');}
 function read(){const p=new URLSearchParams(location.search);reset();Object.entries(controls).forEach(([k,c])=>c.value=p.get(k)||'');route=Object.hasOwn(routes,p.get('route'))?p.get('route'):'';chosen=new Set((p.get('pick')||'').split(',').filter(id=>cards.some(c=>c.id===id)));only=p.get('shortlist')==='1';render(false);}
 function reveal(){let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const card=cards.find(c=>c.id===id);if(card){if(card.hidden){reset();render()}card.querySelector('details').open=true;requestAnimationFrame(()=>card.scrollIntoView({block:'start'}));}}
 picks.forEach(b=>b.addEventListener('click',()=>{chosen.has(b.dataset.pick)?chosen.delete(b.dataset.pick):chosen.add(b.dataset.pick);render();}));
 Object.values(controls).forEach(c=>c.addEventListener(c.tagName==='INPUT'?'input':'change',()=>render()));form.addEventListener('submit',e=>e.preventDefault());document.querySelector('#possibilities-reset').addEventListener('click',()=>{reset();render();controls.q.focus()});
 document.querySelector('#show-shortlist').addEventListener('click',()=>{only=!only;render()});document.querySelector('#clear-shortlist').addEventListener('click',()=>{chosen.clear();only=false;render()});
 document.querySelector('#print-shortlist').addEventListener('click',()=>{if(chosen.size){document.body.classList.add('printing-shortlist');window.print();}});
 addEventListener('beforeprint',()=>cards.forEach(c=>{c.dataset.wasOpen=c.querySelector('details').open;c.querySelector('details').open=true;}));addEventListener('afterprint',()=>{document.body.classList.remove('printing-shortlist');cards.forEach(c=>c.querySelector('details').open=c.dataset.wasOpen==='true')});addEventListener('hashchange',reveal);addEventListener('popstate',()=>{read();reveal()});read();reveal();
})();
