"""Build public gallery handout and reusable QR assets. Requires reportlab, qrcode, Pillow."""
from pathlib import Path
from xml.sax.saxutils import escape
import qrcode
import qrcode.image.svg
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'dist/downloads';OUT.mkdir(exist_ok=True)
URL='https://omatty123.github.io/minds/'
for n,w in [('Public',400),('Bold',700)]:pdfmetrics.registerFont(TTFont(n,str(ROOT/f'dist/fonts/public-sans-{w}.ttf')))
pdfmetrics.registerFontFamily('Public',normal='Public',bold='Bold',italic='Public',boldItalic='Bold')
INK=HexColor('#151515');RED=HexColor('#b71926');GRAY=HexColor('#555555')
qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M,box_size=18,border=4);qr.add_data(URL);qr.make(fit=True)
qr.make_image(fill_color='black',back_color='white').save(OUT/'mind-qr.png')
qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(OUT/'mind-qr.svg')
WORKS=[
('01','Zhuangzi · The Inner Chapters','Dreaming, identity and practiced skill become unforgettable scenes: a butterfly, a butcher and the cultivation of heart-mind.','Chinese philosophy / literature / movement','https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/5dc89a23-c6bf-4190-a1e4-6762dc5359cc/content'),
('02','Jikji · Pointing Directly to Mind','The oldest surviving book printed with movable metal type is a Korean Buddhist work on mind and awakening. Cheongju, 1377.','Buddhism / print / art / history of technology','https://www.bnf.fr/fr/le-jikji-un-tresor-de-limprimerie'),
('03','Jorge Luis Borges · Funes, His Memory','A person who cannot forget makes perfect memory intellectually unsettling. Pair the fiction with research on memory and abstraction.','Latin American literature / psychology / philosophy','https://thereader.mitpress.mit.edu/borges-memory-funes-the-memorious/'),
('04','W. E. B. Du Bois · The Souls of Black Folk','Double-consciousness makes the social world part of inward life. The Sorrow Songs make listening part of reading.','History / literature / music / social thought','https://www.gutenberg.org/files/408/408-h/408-h.htm'),
('05','Pauline Oliveros · Sonic Meditations','Text scores make attention and collective listening material for musical practice. A work that a class can study and perform.','Music / attention / performance / community','https://www.deeplistening.rpi.edu/deep-listening/'),
('06','Oliver Sacks · The Man Who Mistook His Wife for a Hat','Narrative accounts of perception and identity connect brain science with individual lives, music and the ethics of representation.','Neuroscience / narrative / music / disability studies','https://www.oliversacks.com/oliver-sacks-books/the-man-who-mistook-his-wife-for-a-hat/')]
def para(c,text,x,y,w,size=11.2,leading=14.5,color=INK,bold=False):
 st=ParagraphStyle('p',fontName='Bold' if bold else 'Public',fontSize=size,leading=leading,textColor=color)
 p=Paragraph(text,st);_,h=p.wrap(w,900);p.drawOn(c,x,y-h);return y-h
c=canvas.Canvas(str(OUT/'mind-gallery-handout.pdf'),pagesize=(612,792));c.setTitle('MIND — Six encounters for First-Year Studies');c.setAuthor('Matty Wegehaupt · MIND(s) proposal')
c.setFillColor(RED);c.rect(36,747,540,5,fill=1,stroke=0)
para(c,'MIND',36,734,270,58,62,bold=True)
para(c,'A possible theme for<br/>First-Year Studies',350,726,226,13,18)
y=para(c,'Six encounters. Many ways of knowing.',36,661,540,19,24,bold=True)
para(c,'Proposed works and objects for a shared first-year experience.',36,y-5,540,11,14,color=GRAY)
y=613
for num,title,desc,areas,url in WORKS:
 c.setStrokeColor(HexColor('#d4d4d4'));c.line(36,y+5,576,y+5)
 para(c,num,36,y-4,27,11,14,color=RED,bold=True)
 bottom=para(c,f'<link href="{escape(url)}">{escape(title)}</link>',76,y-2,500,12.2,15,bold=True)
 bottom=para(c,escape(desc),76,bottom-4,500,11,14)
 bottom=para(c,escape(areas),76,bottom-3,500,11,13,color=GRAY)
 y=bottom-13
# Fixed footer: ample QR quiet zone and a human-readable fallback.
c.setStrokeColor(INK);c.line(36,128,576,128)
c.drawImage(str(OUT/'mind-qr.png'),36,29,width=91,height=91)
para(c,'Explore MIND(s)',144,113,420,16,20,bold=True)
para(c,'Works, activities, global histories and 50 spoken languages.',144,88,420,11,14)
para(c,f'<link href="{URL}">omatty123.github.io/minds/</link>',144,68,420,11,14,color=RED)
para(c,'Independent faculty proposal · Matty Wegehaupt · 13 October 2026',144,47,420,11,13,color=GRAY)
assert y>=128, y
c.save()
print(OUT/'mind-gallery-handout.pdf')
