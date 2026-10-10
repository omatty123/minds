import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync(new URL('../history.json',import.meta.url)));
const html=readFileSync(new URL('../dist/history.html',import.meta.url),'utf8');
assert.equal(new Set(data.map(x=>x.id)).size,data.length);
for(const x of data){for(const k of ['id','date','era','region','tradition','title','answer','depth','work','limit','checked'])assert.ok(x[k],`${x.id}: ${k}`);for(const k of ['disciplines','themes','sources'])assert.ok(x[k].length);for(const s of x.sources){assert.equal(new URL(s.url).protocol,'https:');assert.ok(s.review&&s.label);}assert.ok(html.includes(`id="${x.id}"`));}
for(const id of ['jikji','akan','maori','dine','sikh','judaism','buddhism','jainism','ghazali','augustine','elisabeth','levin','solms','berg'])assert.ok(data.some(x=>x.id===id));
assert.equal(new Set(data.map(x=>x.era)).size,6);
assert.ok(html.includes('Priority gaps'));
assert.ok(html.includes('not yet represent every culture'));
assert.deepEqual(JSON.parse(readFileSync(new URL('../dist/history.json',import.meta.url))),data);
console.log(`PASS: ${data.length} history accounts, 6 periods, sources, limits and generated data`);
