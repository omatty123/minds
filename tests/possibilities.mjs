import fs from 'node:fs';
import assert from 'node:assert/strict';
const data=JSON.parse(fs.readFileSync('possibilities.json'));
assert.equal(data.length,28);assert.equal(new Set(data.map(d=>d.id)).size,data.length);
assert.deepEqual(JSON.parse(fs.readFileSync('dist/possibilities.json')),data);
const page=fs.readFileSync('dist/possibilities.html','utf8');
for(const d of data){for(const k of ['id','title','object','mode','materials','idea','output','note','status','checked'])assert.ok(d[k],`${d.id}: ${k}`);assert.equal(d.steps.length,3);assert.ok(d.areas.length);assert.ok(d.minutes>0);assert.ok(d.source.url.startsWith('https://'));assert.ok(page.includes(`id="${d.id}"`));}
const routes=JSON.parse(page.match(/id="possibility-routes">([^<]+)/)[1]);for(const ids of Object.values(routes))for(const id of ids)assert.ok(data.some(d=>d.id===id));
console.log('PASS: 28 sourced candidates, teaching fields, routes and published data');
