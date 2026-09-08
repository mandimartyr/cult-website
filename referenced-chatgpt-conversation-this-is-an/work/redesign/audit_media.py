from pathlib import Path
import subprocess,hashlib,json
from PIL import Image,ImageDraw
root=Path('/Users/mandijordan/Downloads/4cUkfstpxfTGUACc-grok-workspace')
ff=Path('work/ffmpeg-path').read_text().strip()
files=sorted((root/'public/sakura').glob('*.mp4'))+sorted((root/'artifacts/imagine_videos').glob('*.mp4'))
seen={}; rows=[]
for p in files:
 h=hashlib.sha256(p.read_bytes()).hexdigest()
 if h in seen: rows.append({'file':str(p),'duplicate':seen[h]});continue
 seen[h]=str(p); idx=len(seen); out=Path(f'work/redesign/film-{idx}.jpg')
 subprocess.run([ff,'-loglevel','error','-ss','2','-i',str(p),'-frames:v','1','-vf','scale=400:-1','-y',str(out)],check=True)
 rows.append({'file':str(p),'frame':str(out),'index':idx})
unique=[r for r in rows if 'frame'in r]
for start in range(0,len(unique),12):
 block=unique[start:start+12]; sheet=Image.new('RGB',(1200,280*((len(block)+2)//3)), '#111');d=ImageDraw.Draw(sheet)
 for n,r in enumerate(block):
  im=Image.open(r['frame']); x=(n%3)*400;y=(n//3)*280;sheet.paste(im,(x,y));d.text((x+8,y+230),f"{r['index']}  {Path(r['file']).name[:36]}",fill='white')
 sheet.save(f'work/redesign/contact-{start//12}.jpg')
Path('work/redesign/media-index.json').write_text(json.dumps(rows,indent=2))
print(len(files),'films;',len(unique),'unique files')
