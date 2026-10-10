import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const rows=JSON.parse(readFileSync(resolve(root,'mind-words.json'),'utf8'));
assert.ok(rows.length>=50,'At least 50 languages');
assert.equal(new Set(rows.map(w=>w.id)).size,rows.length,'Languages must not be duplicated');
assert.equal(new Set(rows.map(w=>w.audio)).size,rows.length,'Do not reuse one voice file as different languages');
for(const w of rows){
 if(w.recordingContext==='phrase'){assert.ok(w.recordedText);assert.ok(w.note.includes(w.recordedText));}
 assert.equal(w.audioType,'recording',`${w.id}: human recordings only`);
 for(const key of ['language','word','meaning','dictionary','source','credit','license','licenseUrl','audio','originalAudio','checked'])assert.ok(w[key],`${w.id}: ${key}`);
 assert.ok(existsSync(resolve(root,'dist',w.audio)),`${w.id}: audio is available locally`);
 for(const key of ['dictionary','source','originalAudio'])assert.equal(new URL(w[key]).protocol,'https:');
}
assert.deepEqual(rows,JSON.parse(readFileSync(resolve(root,'dist/mind-words.json'),'utf8')));
const page=readFileSync(resolve(root,'dist/mind-words.html'),'utf8');
assert.equal((page.match(/class="spoken-row"/g)||[]).length,rows.length);
assert.ok(page.includes(`${rows.length} languages`),'Published count matches recordings');
assert.ok(!readFileSync(resolve(root,'dist/mind-words.js'),'utf8').includes('speechSynthesis'),'No synthetic voice fallback');
console.log(`PASS: ${rows.length} distinct human recordings with credits, word sources and accurate count.`);
