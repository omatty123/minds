import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const data=JSON.parse(readFileSync(resolve(root,'bank.json'),'utf8'));
assert.equal(new Set(data.map(x=>x.id)).size,data.length,'Unique stable source IDs');
const slate=JSON.parse(readFileSync(resolve(root,'slate.json'),'utf8'));
assert.equal(slate.length,6,'Six sustained works');
const coreIds=new Set(slate.flatMap(x=>x.sources));
assert.deepEqual(new Set(data.filter(x=>x.core).map(x=>x.id)),coreIds,'Slate and bank labels agree');
for(const id of coreIds)assert.ok(data.some(x=>x.id===id),`Slate source ${id} exists`);
for(const name of ['Michael Levin','Mark Solms','Cameron Berg'])assert.ok(data.filter(x=>x.focus===name).length>=3,`Research coverage: ${name}`);
for(const topic of ['Neuroscience','Philosophy','Asian Studies','Music','Poetry','Art','Psychology','Sport'])assert.ok(data.some(x=>x.topics.includes(topic)),`Discipline coverage: ${topic}`);
for(const entry of data){for(const key of ['title','author','date','kind','url','claim','limit','use','access','review','checked'])assert.ok(entry[key],`${entry.id}: ${key}`);assert.equal(new URL(entry.url).protocol,'https:');}
const pages=['index.html','syllabus.html','bank.html','participate.html'];
for(const name of pages){const content=readFileSync(resolve(root,'dist',name),'utf8');const ids=[...content.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,`${name}: no duplicate DOM IDs`);for(const [,href]of content.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|mailto:|data:)/.test(href))continue;const [path,hash]=href.split('#');const target=path.split('?')[0]||name;assert.ok(existsSync(resolve(root,'dist',target)),`${name}: ${target} exists`);if(hash){const other=readFileSync(resolve(root,'dist',target),'utf8');assert.ok(other.includes(`id="${hash}"`),`${name}: fragment ${href} resolves`);}}assert.ok(content.includes('Not an adopted curriculum'),'Proposal status visible');}
assert.deepEqual(JSON.parse(readFileSync(resolve(root,'dist/bank.json'),'utf8')),data,'Published source data matches source');
console.log(`PASS: ${pages.length} pages, ${data.length} sources, 6 sustained works, 8 requested disciplines, local links and source schema.`);
