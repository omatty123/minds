'use strict';
(()=>{
const nodes=[...document.querySelectorAll('.semantic-node')];
const panels=[...document.querySelectorAll('.semantic-panel')];
if(!nodes.length)return;
function choose(id){
 for(const n of nodes)n.setAttribute('aria-pressed',String(n.dataset.cluster===id));
 for(const p of panels)p.hidden=p.id!=='cluster-'+id;
}
for(const n of nodes)n.addEventListener('click',()=>choose(n.dataset.cluster));
choose('heart');
for(const b of document.querySelectorAll('[data-hear]'))b.addEventListener('click',()=>{
 document.querySelectorAll('#signs video').forEach(v=>v.pause());
 document.dispatchEvent(new CustomEvent('mind:hear',{detail:b.dataset.hear}));
 document.querySelector('#semantic-status').textContent='Selected '+b.closest('article').querySelector('.semantic-language').textContent+'. Playback controls are in the listening circle above.';
});
const load=document.querySelector('#load-asl');
load.addEventListener('click',()=>{
 document.dispatchEvent(new Event('mind:pause'));
 const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/NdTKb3Kig88?rel=0';frame.title='Bill Vicars demonstrates THINK in American Sign Language';frame.allow='encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;
 document.querySelector('#asl-film').replaceChildren(frame);
});
for(const v of document.querySelectorAll('#signs video')){
 v.addEventListener('play',()=>document.dispatchEvent(new Event('mind:pause')));
 v.addEventListener('error',()=>{v.closest('article').querySelector('.sign-error').hidden=false;});
}
})();
