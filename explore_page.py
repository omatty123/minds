import html,json
from pathlib import Path
E=html.escape
LABELS={'works':'WORKS','thinkers':'THINKERS','concepts':'CONCEPTS','faculty':'LU FACULTY'}
PREFIX={'works':'work','thinkers':'thinker','concepts':'concept','faculty':'faculty'}
INTRO={
'works':('Read. Look. Listen.','Poems, books, diagrams, music and art that make mind their subject. A growing collection of possibilities for sustained encounter.'),
'thinkers':('People who change the account.','Writers, artists, philosophers and researchers who offer distinct ways to understand mind. Begin with a work, then follow its argument.'),
'concepts':('Keep the ideas distinct.','A clear vocabulary for comparing traditions and methods. These short definitions lead to works, histories and research.'),
'faculty':('The conversation is already on campus.','Selected Lawrence expertise, grounded in public faculty profiles. The suggested connections are editorial possibilities, not commitments or endorsements.')}
ART=[
('goya-reason','Francisco Goya','The Sleep of Reason Produces Monsters','1799','A sleeping figure surrounded by owls and bats in Goya’s etching.','Reason, imagination and the creatures of the night.','338473'),
('hakuin-bodhidharma','Hakuin Ekaku','Portrait of Bodhidharma','Mid-18th century','Hakuin’s ink portrait of Bodhidharma with wide eyes beneath a calligraphic inscription.','A Zen teacher rendered as an arresting presence.','78145'),
('buddha-meditation','Sri Lanka','Buddha Seated in Meditation','16th century','A gilded Buddha seated with hands together in a meditation posture.','Mental cultivation given a bodily form.','72301'),
('thinker','Auguste Rodin','The Thinker','Modeled c. 1880; cast c. 1910','Rodin’s seated bronze figure leans forward in thought.','Thinking represented through the tension of a whole body.','191811'),
('heart-amulet','Ancient Egypt','Heart amulet with human head','c. 1550–721 BCE','An ancient Egyptian heart amulet with a human head.','A heart-shaped object beside a tradition that connects heart, memory and moral life.','547782')]
def artfigure(a,lead=False):
 id,artist,title,date,alt,desc,met=a
 return f'''<figure class="mind-art"><a href="images/{id}.jpg" class="art-open" data-art-title="{E(title)}" aria-label="Enlarge {E(title)}"><img src="images/{id}.jpg" alt="{E(alt)}" {'fetchpriority="high"' if lead else 'loading="lazy"'} width="700" height="950"></a><figcaption><strong>{E(title)}</strong><span>{E(artist)} · {E(date)}</span><p>{E(desc)}</p><a href="https://www.metmuseum.org/art/collection/search/{met}">The Met · Public Domain</a></figcaption></figure>'''
def render(root):
 data=json.loads((root/'explore.json').read_text())
 nav=''.join(f'<a href="#{k}" data-section="{k}"><strong>{v}</strong><span>{len(data[k])} '+('connections' if k=='faculty' else 'entries')+'</span></a>' for k,v in LABELS.items())
 sections=[]
 for k,rows in data.items():
  cards=[]
  for d in rows:
   related=''.join(f'<a href="{E(url)}">{E(label)}</a>' for label,url in d.get('related',[]))
   connection=f'<p class="faculty-connection"><strong>Possible connection:</strong> {E(d["connection"])}</p>' if d.get('connection') else ''
   copy=f'{d["title"]} — {d["body"]}'+(' Possible connection: '+d['connection'] if d.get('connection') else '')
   cards.append(f'''<article class="explore-entry" id="{PREFIX[k]}-{d['id']}" data-search="{E(' '.join([d['title'],d['meta'],d['body'],d.get('connection','')]).lower())}"><h3>{E(d['title'])}</h3><p class="entry-field">{E(d['meta'])}</p><p class="entry-description">{E(d['body'])}</p>{connection}<div class="entry-links"><a href="{E(d['url'])}">{E(d['link'])}</a>{related}<button type="button" class="copy-idea" data-copy="{E(copy)}" hidden>Copy for Post-it</button></div></article>''')
  subtitle,intro=INTRO[k]
  arts=f'<div class="art-pair">{artfigure(ART[3])}{artfigure(ART[4])}</div>' if k=='works' else ''
  sections.append(f'''<section id="{k}" class="explore-section" aria-labelledby="heading-{k}"><div class="explore-heading"><div><h2 id="heading-{k}">{LABELS[k]}</h2><p class="section-line">{subtitle}</p></div><p>{intro}</p></div><div class="explore-list {k}-list">{''.join(cards)}</div>{arts}</section>''')
 return f'''<link rel="stylesheet" href="explore.css"><script src="explore.js" defer></script>
<section class="mind-opening"><div class="mind-intro"><h1>What is a mind?</h1><p class="mind-deck">A lifetime of possibilities for a shared first-year experience.</p><p>Begin with a poem, a painted face, a voice, a scientific claim. Follow the connections across cultures, centuries and the Lawrence campus.</p><div class="home-actions"><a href="gallery.html">Make Post-it notes</a><a href="proposal.html">The proposal</a><a href="downloads/mind-qr.png">QR code</a></div></div><div class="opening-art">{''.join(artfigure(a,True) for a in ART[:3])}</div></section>
<nav class="explore-nav" aria-label="Explore MIND">{nav}</nav>
<div class="explore-tools" hidden><label for="explore-search">Find in this section</label><input id="explore-search" type="search" placeholder="Name, work or idea" autocomplete="off"><button id="clear-search" type="button">Clear</button><span id="explore-count" role="status" aria-live="polite"></span></div><p id="copy-status" class="copy-status" role="status" aria-live="polite"></p><p id="explore-empty" hidden>No matching entries. Clear the search to see this section.</p>
{''.join(sections)}
<section class="continue-mind"><div class="heart-signature"><span class="heart-type" lang="ko">심 心</span><div><h2>Keep exploring MIND.</h2><p>심 (sim), the Sino-Korean reading of 心. Heart and mind, in conversation.</p></div></div><div><a href="history.html">Across human history</a><a href="mind-words.html">50 languages &amp; human voices</a><a href="mind-words.html#body">Mind, self &amp; soul in the body</a><a href="possibilities.html">Activities across disciplines</a><a href="bank.html">Research &amp; source bank</a><a href="syllabus.html">The model syllabus</a></div><p>This is a selected, growing collection. The research bank preserves fuller source notes and limits. Faculty profiles checked 19 October 2026; participation has not been implied.</p></section>
<dialog id="art-view"><div><h2 id="art-view-title">Artwork</h2><button type="button" id="close-art">Close</button></div><img id="art-view-image" alt=""></dialog>'''
