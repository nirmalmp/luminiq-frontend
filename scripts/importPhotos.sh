#!/bin/bash
#
# Import a shoot into lib/photos/<shootName>/ at web sizes.
#
#   ./scripts/importPhotos.sh <sourceDir> <shootName>
#
# Source frames are 6000x4000 (~5 MB each) and can never be committed as-is.
# Each selected frame is emitted twice:
#
#   grid/  900px  q62  (~124 KB) -- gallery tiles + home #work
#   full/ 2000px  q68  (~590 KB) -- lightbox only, fetched on demand
#
# Two sizes rather than one because next.config.mjs sets images.unoptimized
# (mandatory under output: 'export'), so next/image ships whatever byte count
# we emit. A single 2000px file per photo would push ~20 MB through the grid.
#
# The source directory is an ARGUMENT, never hardcoded: the originals live in a
# folder named after the property's civic address, and no part of that address
# may reach this repo. Output filenames below are deliberately descriptive and
# location-free for the same reason.
#
# macOS `sips` only -- ImageMagick is not a dependency of this project, and a
# 100% crop of the q68 render of the hardest frame (twilight sky gradient)
# showed no banding, so `sharp` would buy nothing.

set -euo pipefail

SRC="${1:-}"
SHOOT="${2:-timberFrameEstate}"

if [ -z "$SRC" ] || [ ! -d "$SRC" ]; then
  echo "usage: $0 <sourceDir> [shootName]" >&2
  exit 1
fi

DEST="$(dirname "$0")/../lib/photos/$SHOOT"

# sourceFrame:outputName -- the curated edit, in walkthrough order.
# Approach -> exterior -> aerial -> outdoor living -> entry -> great room ->
# kitchen -> living -> primary -> bedrooms -> amenity -> coach house.
PHOTOS=(
  "IMG_014:rearTwilight"
  "IMG_004:frontTwilight"
  "IMG_005:frontGoldenHour"
  "IMG_002:frontElevation"
  "IMG_001:drivewayApproach"
  "IMG_083:aerialRear"
  "IMG_080:aerialOverhead"
  "IMG_012:rearTerrace"
  "IMG_017:poolSunset"
  "IMG_018:poolDusk"
  "IMG_019:stoneLoggia"
  "IMG_020:coveredTerrace"
  "IMG_016:deckValleyView"
  "IMG_007:sportCourt"
  "IMG_010:coachHouse"
  "IMG_022:stoneEntry"
  "IMG_023:foyer"
  "IMG_025:greatRoomGable"
  "IMG_026:diningHearth"
  "IMG_027:greatRoomWide"
  "IMG_068:loftLookdown"
  "IMG_070:loftLookdownAngle"
  "IMG_036:kitchenView"
  "IMG_032:kitchenIslands"
  "IMG_035:kitchenDetail"
  "IMG_040:livingRoom"
  "IMG_030:familyRoom"
  "IMG_041:primaryBedroom"
  "IMG_045:primaryEnsuite"
  "IMG_060:loftBedroom"
  "IMG_071:archedBedroom"
  "IMG_049:gamesRoom"
  "IMG_053:recreationRoom"
  "IMG_056:sauna"
)

mkdir -p "$DEST/grid" "$DEST/full"

count=0
for entry in "${PHOTOS[@]}"; do
  frame="${entry%%:*}"
  name="${entry##*:}"
  src="$SRC/$frame.jpg"

  if [ ! -f "$src" ]; then
    echo "MISSING: $frame.jpg" >&2
    exit 1
  fi

  sips -Z 900  -s format jpeg -s formatOptions 62 "$src" --out "$DEST/grid/$name.jpg" >/dev/null
  sips -Z 2000 -s format jpeg -s formatOptions 68 "$src" --out "$DEST/full/$name.jpg" >/dev/null

  count=$((count + 1))
  printf '  %2d/%d  %s -> %s\n' "$count" "${#PHOTOS[@]}" "$frame" "$name"
done

echo
echo "$count photos -> $DEST"
du -sh "$DEST/grid" "$DEST/full"
