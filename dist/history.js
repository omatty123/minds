(() => {
  const form = document.querySelector('#history-filters');
  if (!form) return;
  form.hidden = false;
  const cards = [...document.querySelectorAll('.history-entry')];
  const themes = [...document.querySelectorAll('[data-theme]')];
  const eras = [...document.querySelectorAll('.era-rail [data-era]')];
  [...themes,...eras].forEach(b=>b.disabled=false);
  const controls = {q:document.querySelector('#history-search'), region:document.querySelector('#history-region'), tradition:document.querySelector('#history-tradition'), discipline:document.querySelector('#history-discipline')};
  let theme='', era='';
  const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const searchable=new Map(cards.map(c=>[c,norm(c.textContent)]));
  function apply(save=true) {
    let n=0;
    cards.forEach(c=>{
      c.hidden=!( (!theme||c.dataset.themes.split('|').includes(theme)) && (!era||c.dataset.era===era) && (!controls.region.value||c.dataset.region===controls.region.value) && (!controls.tradition.value||c.dataset.tradition===controls.tradition.value) && (!controls.discipline.value||c.dataset.disciplines.split('|').includes(controls.discipline.value)) && searchable.get(c).includes(norm(controls.q.value.trim())) );
      if(!c.hidden)n++;
    });
    themes.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.theme===theme)));
    eras.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.era===era)));
    const topic=themes.find(b=>b.dataset.theme===theme)?.querySelector('strong').textContent;
    document.querySelector('#history-count').textContent=`${n} of ${cards.length} accounts${topic?' · '+topic:''}${era?' · '+era:''}`;
    document.querySelector('#history-empty').hidden=n!==0;
    if(save){const u=new URL(location.href);['q','region','tradition','discipline','theme','era'].forEach(k=>u.searchParams.delete(k));Object.entries(controls).forEach(([k,c])=>{if(c.value)u.searchParams.set(k,c.value)});if(theme)u.searchParams.set('theme',theme);if(era)u.searchParams.set('era',era);history.replaceState(null,'',u);}
  }
  function clear(){theme='';era='';Object.values(controls).forEach(c=>c.value='');}
  function fromURL(){const p=new URLSearchParams(location.search);clear();Object.entries(controls).forEach(([k,c])=>c.value=p.get(k)||'');theme=themes.some(b=>b.dataset.theme===p.get('theme'))?p.get('theme'):'';era=eras.some(b=>b.dataset.era===p.get('era'))?p.get('era'):'';apply(false);}
  function reveal(){let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const c=cards.find(x=>x.id===id);if(c){if(c.hidden){clear();apply()}c.querySelector('details').open=true;requestAnimationFrame(()=>c.scrollIntoView({block:'start'}));}}
  themes.forEach(b=>b.addEventListener('click',()=>{theme=theme===b.dataset.theme?'':b.dataset.theme;apply();document.querySelector('#history-explore').scrollIntoView({block:'start'});}));
  eras.forEach(b=>b.addEventListener('click',()=>{era=era===b.dataset.era?'':b.dataset.era;apply();}));
  form.addEventListener('submit',e=>e.preventDefault());
  Object.values(controls).forEach(c=>c.addEventListener(c.tagName==='INPUT'?'input':'change',()=>apply()));
  document.querySelector('#history-reset').addEventListener('click',()=>{clear();apply();controls.q.focus();});
  addEventListener('hashchange',reveal);addEventListener('popstate',()=>{fromURL();reveal();});
  addEventListener('beforeprint',()=>cards.forEach(c=>{c.dataset.wasOpen=c.querySelector('details').open;c.querySelector('details').open=true;}));
  addEventListener('afterprint',()=>cards.forEach(c=>c.querySelector('details').open=c.dataset.wasOpen==='true'));
  fromURL();reveal();
})();
