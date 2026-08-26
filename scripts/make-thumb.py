from PIL import Image
from pathlib import Path

SRC = Path('public/art/images/self-portrait.jpg')
OUT_DIR = Path('public/art/images')
OUT = OUT_DIR / 'self-portrait_400.jpg'

OUT_DIR.mkdir(parents=True, exist_ok=True)
with Image.open(SRC) as im:
    w, h = im.size
    crop_x = w // 2
    crop_y = h // 2
    # crop box: (left, upper, right, lower)
    box = (crop_x, 0, w, h)
    # box  = (0, crop_y, w, h)
    cropped = im.crop(box)
    resized = cropped.resize((400, 400), resample=Image.LANCZOS)
    # ensure RGB for JPG
    if resized.mode in ('RGBA', 'LA'):
        background = Image.new('RGB', resized.size, (255,255,255))
        background.paste(resized, mask=resized.split()[-1])
        resized = background
    else:
        resized = resized.convert('RGB')
    resized.save(OUT, format='JPEG', quality=85)
print('CREATED:' + str(OUT))
