from pathlib import Path
import subprocess,json
from PIL import Image
ff=Path('work/ffmpeg-path').read_text().strip(); rows=json.loads(Path('work/redesign/media-index.json').read_text()); idx={r.get('index'):r for r in rows}
# Deliberate, subject-led films; image directions reviewed from source frames.
selected={'strategy':4,'search':44,'measurement':11,'conversion':9,'audit':2,'build':5}
public=Path('outputs/cult/public/media')
for name,i in selected.items():
 source=idx[i]['file']
 for suffix,width,crf in [('',1440,'25'),('-mobile',640,'28')]:
  subprocess.run([ff,'-loglevel','error','-i',source,'-t','10','-an','-vf',f'scale={width}:-2','-c:v','libx264','-preset','fast','-crf',crf,'-movflags','+faststart','-y',str(public/f'{name}{suffix}.mp4')],check=True)
  subprocess.run([ff,'-loglevel','error','-ss','2','-i',source,'-frames:v','1','-vf',f'scale={width}:-2','-y',f'work/redesign/{name}{suffix}.png'],check=True)
  im=Image.open(f'work/redesign/{name}{suffix}.png'); im.save(public/f'{name}{suffix}.webp',quality=86)
 print(name,flush=True)
Path('outputs/cult/docs/redesign/media-selection.json').write_text(json.dumps({n:Path(idx[i]['file']).name for n,i in selected.items()},indent=2))
