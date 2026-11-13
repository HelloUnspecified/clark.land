#!/bin/sh
# Renders /og (src/pages/og.astro) into public/og.png at 1200x630.
# Needs the dev server running (npm run dev) and Google Chrome installed.
set -e
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
URL="${1:-http://localhost:4321/og}"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --virtual-time-budget=4000 --screenshot="$(pwd)/public/og.png" "$URL"
echo "wrote public/og.png"
