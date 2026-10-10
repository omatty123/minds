'use strict';
(()=>{
const root=document.querySelector('#body');if(!root)return;
const layers=[...root.querySelectorAll('[data-body-layer]')],cases=[...root.querySelectorAll('[data-body-case]')],panels=[...root.querySelectorAll('.body-evidence')];
function select(id){
 const panel=panels.find(p=>p.id==='body-'+id);if(!panel)return;
 const layer=panel.dataset.layer,regions=panel.dataset.regions.split(' ');
 for(const b of layers)b.setAttribute('aria-pressed',String(b.dataset.bodyLayer===layer));
 for(const b of cases){b.hidden=b.dataset.layer!==layer;b.setAttribute('aria-pressed',String(b.dataset.bodyCase===id));}
 for(const p of panels)p.hidden=p!==panel;
 for(const z of root.querySelectorAll('[data-zone]'))z.classList.toggle('is-active',regions.includes(z.dataset.zone));
 const label=regions.map(x=>x==='head'?'Head':'Chest / heart area').join(' and ');
 root.querySelector('#body-map-caption').textContent=label+' highlighted. Schematic locations; markers do not show anatomical boundaries or response percentages.';
 root.querySelector('#body-svg-desc').textContent=panel.querySelector('h3').textContent+'. '+label+' highlighted. '+panel.querySelector('.body-finding').textContent;
 root.querySelector('#body-status').textContent=panel.querySelector('.body-kind').textContent;
}
for(const b of layers)b.addEventListener('click',()=>select(cases.find(c=>c.dataset.layer===b.dataset.bodyLayer).dataset.bodyCase));
for(const b of cases)b.addEventListener('click',()=>select(b.dataset.bodyCase));
select('mind');
})();
