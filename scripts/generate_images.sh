#!/bin/bash
# Generate original images for the site — sizes must be multiples of 32
OUT=/home/z/my-project/public/assets
mkdir -p $OUT/hero $OUT/about $OUT/sections

gen() {
  local prompt="$1"; local out="$2"; local size="$3"
  for attempt in 1 2 3; do
    echo ">>> generating $(basename $out) (attempt $attempt)"
    if z-ai image -p "$prompt" -o "$out" -s "$size" 2>&1 | tail -1 | grep -q "✅\|saved"; then
      echo "OK: $out"
      sleep 4
      return 0
    fi
    z-ai image -p "$prompt" -o "$out" -s "$size" > /dev/null 2>&1
    if [ -f "$out" ]; then echo "OK: $out"; sleep 4; return 0; fi
    echo "retry after delay..."; sleep 15
  done
  echo "FAILED: $out"
  return 1
}

gen "Editorial lifestyle photograph, young woman entrepreneur seated confidently on a burnt-orange velvet sofa, dramatic mountain landscape backdrop at golden hour, warm red-orange cinematic tones, cream knit outfit, professional photography, magazine quality, full body, wide composition" "$OUT/hero/hero-desktop.png" "1344x768"
gen "Editorial lifestyle photograph, young woman entrepreneur seated on burnt-orange velvet sofa, mountain backdrop at golden hour, warm red-orange cinematic tones, vertical composition, professional photography, magazine quality" "$OUT/hero/hero-mobile.png" "768x1344"
gen "Warm editorial photograph, woman working at wooden desk with laptop showing AI chat interface, cozy creative home office, plants, warm orange lamp light, red and cream color palette, candid working moment, vertical composition, professional photography" "$OUT/sections/challenge-desk.png" "864x1152"
gen "Editorial portrait photograph, confident young woman founder in cream blazer, arms crossed, warm studio backdrop in terracotta and cream tones, soft golden lighting, professional magazine photography, vertical portrait" "$OUT/sections/paths-portrait.png" "768x1344"
gen "Photograph of a young professional woman in modern tech company office, glass meeting rooms, monitors with analytics dashboards, candid corporate moment, warm tones, editorial style" "$OUT/about/journey-2017.png" "1024x1024"
gen "Photograph of a woman e-commerce founder in bright warehouse surrounded by shipping boxes and clothing racks, packing orders, entrepreneurial energy, warm natural light, editorial style" "$OUT/about/journey-2020.png" "1024x1024"
gen "Photograph of a woman at dusk working late with laptop glowing, multiple screens with AI assistant interfaces, warm desk lamp, focused expression, cinematic warm red-orange tones, editorial style" "$OUT/about/journey-2025.png" "1024x1024"
gen "Photograph of a woman creator filming educational content, ring light and camera on tripod in warm cream studio, recording AI tutorial, smiling, editorial style, warm tones" "$OUT/about/journey-now.png" "1024x1024"
gen "Editorial photograph, woman content creator filming vertical video with smartphone on tripod, warm creative studio with terracotta walls, plants, warm light, candid moment, vertical composition" "$OUT/sections/social-studio.png" "864x1152"

echo "=== SUMMARY ==="
ls -la $OUT/hero $OUT/sections $OUT/about
echo "ALL DONE"