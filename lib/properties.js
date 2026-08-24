import archedBedroomFull from './photos/timberFrameEstate/full/archedBedroom.jpg';
import aerialOverheadFull from './photos/timberFrameEstate/full/aerialOverhead.jpg';
import aerialRearFull from './photos/timberFrameEstate/full/aerialRear.jpg';
import coachHouseFull from './photos/timberFrameEstate/full/coachHouse.jpg';
import coveredTerraceFull from './photos/timberFrameEstate/full/coveredTerrace.jpg';
import deckValleyViewFull from './photos/timberFrameEstate/full/deckValleyView.jpg';
import diningHearthFull from './photos/timberFrameEstate/full/diningHearth.jpg';
import drivewayApproachFull from './photos/timberFrameEstate/full/drivewayApproach.jpg';
import familyRoomFull from './photos/timberFrameEstate/full/familyRoom.jpg';
import foyerFull from './photos/timberFrameEstate/full/foyer.jpg';
import frontElevationFull from './photos/timberFrameEstate/full/frontElevation.jpg';
import frontGoldenHourFull from './photos/timberFrameEstate/full/frontGoldenHour.jpg';
import frontTwilightFull from './photos/timberFrameEstate/full/frontTwilight.jpg';
import gamesRoomFull from './photos/timberFrameEstate/full/gamesRoom.jpg';
import greatRoomGableFull from './photos/timberFrameEstate/full/greatRoomGable.jpg';
import greatRoomWideFull from './photos/timberFrameEstate/full/greatRoomWide.jpg';
import kitchenDetailFull from './photos/timberFrameEstate/full/kitchenDetail.jpg';
import kitchenIslandsFull from './photos/timberFrameEstate/full/kitchenIslands.jpg';
import kitchenViewFull from './photos/timberFrameEstate/full/kitchenView.jpg';
import livingRoomFull from './photos/timberFrameEstate/full/livingRoom.jpg';
import loftBedroomFull from './photos/timberFrameEstate/full/loftBedroom.jpg';
import loftLookdownFull from './photos/timberFrameEstate/full/loftLookdown.jpg';
import loftLookdownAngleFull from './photos/timberFrameEstate/full/loftLookdownAngle.jpg';
import poolDuskFull from './photos/timberFrameEstate/full/poolDusk.jpg';
import poolSunsetFull from './photos/timberFrameEstate/full/poolSunset.jpg';
import primaryBedroomFull from './photos/timberFrameEstate/full/primaryBedroom.jpg';
import primaryEnsuiteFull from './photos/timberFrameEstate/full/primaryEnsuite.jpg';
import rearTerraceFull from './photos/timberFrameEstate/full/rearTerrace.jpg';
import rearTwilightFull from './photos/timberFrameEstate/full/rearTwilight.jpg';
import recreationRoomFull from './photos/timberFrameEstate/full/recreationRoom.jpg';
import saunaFull from './photos/timberFrameEstate/full/sauna.jpg';
import sportCourtFull from './photos/timberFrameEstate/full/sportCourt.jpg';
import stoneEntryFull from './photos/timberFrameEstate/full/stoneEntry.jpg';
import stoneLoggiaFull from './photos/timberFrameEstate/full/stoneLoggia.jpg';

import archedBedroom from './photos/timberFrameEstate/grid/archedBedroom.jpg';
import aerialOverhead from './photos/timberFrameEstate/grid/aerialOverhead.jpg';
import aerialRear from './photos/timberFrameEstate/grid/aerialRear.jpg';
import coachHouse from './photos/timberFrameEstate/grid/coachHouse.jpg';
import coveredTerrace from './photos/timberFrameEstate/grid/coveredTerrace.jpg';
import deckValleyView from './photos/timberFrameEstate/grid/deckValleyView.jpg';
import diningHearth from './photos/timberFrameEstate/grid/diningHearth.jpg';
import drivewayApproach from './photos/timberFrameEstate/grid/drivewayApproach.jpg';
import familyRoom from './photos/timberFrameEstate/grid/familyRoom.jpg';
import foyer from './photos/timberFrameEstate/grid/foyer.jpg';
import frontElevation from './photos/timberFrameEstate/grid/frontElevation.jpg';
import frontGoldenHour from './photos/timberFrameEstate/grid/frontGoldenHour.jpg';
import frontTwilight from './photos/timberFrameEstate/grid/frontTwilight.jpg';
import gamesRoom from './photos/timberFrameEstate/grid/gamesRoom.jpg';
import greatRoomGable from './photos/timberFrameEstate/grid/greatRoomGable.jpg';
import greatRoomWide from './photos/timberFrameEstate/grid/greatRoomWide.jpg';
import kitchenDetail from './photos/timberFrameEstate/grid/kitchenDetail.jpg';
import kitchenIslands from './photos/timberFrameEstate/grid/kitchenIslands.jpg';
import kitchenView from './photos/timberFrameEstate/grid/kitchenView.jpg';
import livingRoom from './photos/timberFrameEstate/grid/livingRoom.jpg';
import loftBedroom from './photos/timberFrameEstate/grid/loftBedroom.jpg';
import loftLookdown from './photos/timberFrameEstate/grid/loftLookdown.jpg';
import loftLookdownAngle from './photos/timberFrameEstate/grid/loftLookdownAngle.jpg';
import poolDusk from './photos/timberFrameEstate/grid/poolDusk.jpg';
import poolSunset from './photos/timberFrameEstate/grid/poolSunset.jpg';
import primaryBedroom from './photos/timberFrameEstate/grid/primaryBedroom.jpg';
import primaryEnsuite from './photos/timberFrameEstate/grid/primaryEnsuite.jpg';
import rearTerrace from './photos/timberFrameEstate/grid/rearTerrace.jpg';
import rearTwilight from './photos/timberFrameEstate/grid/rearTwilight.jpg';
import recreationRoom from './photos/timberFrameEstate/grid/recreationRoom.jpg';
import sauna from './photos/timberFrameEstate/grid/sauna.jpg';
import sportCourt from './photos/timberFrameEstate/grid/sportCourt.jpg';
import stoneEntry from './photos/timberFrameEstate/grid/stoneEntry.jpg';
import stoneLoggia from './photos/timberFrameEstate/grid/stoneLoggia.jpg';

/**
 * Shot properties, newest first. Each entry is self-contained: adding the next
 * shoot means importing its photos and pushing one more object here -- the
 * route, the gallery and the home #work grid all read from this array.
 *
 * Photos are STATIC IMPORTS, not "/photos/x.jpg" strings, for the reason spelt
 * out in components/Logo/Logo.js: under output: 'export' a plain src misses the
 * basePath and 404s on the GitHub Pages subpath. Static imports also hand
 * next/image intrinsic dimensions and a build-time blur placeholder.
 *
 * `grid` is the 900px render used by tiles; `full` is the 2000px render the
 * lightbox loads on demand. See scripts/importPhotos.sh.
 *
 * Captions and alt text describe only what is visible in the frame -- no
 * location, and no listing facts (beds, baths, square footage) we cannot stand
 * behind.
 */
export const PROPERTIES = [
  {
    slug: 'timber-frame-estate',
    title: 'Timber-Frame Estate',
    summary:
      'A post-and-beam country home covered end to end in a single visit: exteriors held until the windows lit at dusk, drone work over the grounds, and interiors built around the two-storey glass gable that anchors the house.',
    tags: ['Twilight', 'Aerial', 'Interior', 'Architectural'],
    /* The frame that carries the landing page behind the nav and the headline. */
    heroPhoto: 'frontTwilight',
    /*
     * The opening sequence that plays when this property page loads, cut as an
     * arrival: up the drive, the house, the aerial that gives it scale, inside
     * for the big rooms, back out for the view, then sunset into full dark.
     * Order is the edit -- keep it a story, not a highlights reel, and keep it
     * around ten frames.
     */
    intro: [
      'drivewayApproach',
      'frontElevation',
      'aerialRear',
      'greatRoomGable',
      'loftLookdown',
      'kitchenView',
      'deckValleyView',
      'poolSunset',
      'frontTwilight',
      'rearTwilight',
    ],
    photos: [
      {
        name: 'rearTwilight',
        grid: rearTwilight,
        full: rearTwilightFull,
        tag: 'Twilight',
        caption: 'Rear elevation at twilight',
        alt: 'Rear elevation of a timber-frame home at twilight, every window glowing warm against a deep blue sky',
      },
      {
        name: 'frontTwilight',
        grid: frontTwilight,
        full: frontTwilightFull,
        tag: 'Twilight',
        caption: 'Front elevation at blue hour',
        alt: 'Front elevation of a gabled country home lit from within at blue hour, framed by tall cedars',
      },
      {
        name: 'frontGoldenHour',
        grid: frontGoldenHour,
        full: frontGoldenHourFull,
        tag: 'Exterior',
        caption: 'Front gardens at golden hour',
        alt: 'Low evening sun across the front gardens and stone courtyard of a shingled country home',
      },
      {
        name: 'frontElevation',
        grid: frontElevation,
        full: frontElevationFull,
        tag: 'Architectural',
        caption: 'Stone courtyard and front elevation',
        alt: 'Wide daylight view of the front elevation above a broad stone paver courtyard',
      },
      {
        name: 'drivewayApproach',
        grid: drivewayApproach,
        full: drivewayApproachFull,
        tag: 'Exterior',
        caption: 'The approach through the pines',
        alt: 'Curving gravel driveway climbing between mature pines and planted borders',
      },
      {
        name: 'aerialRear',
        grid: aerialRear,
        full: aerialRearFull,
        tag: 'Aerial',
        caption: 'Aerial: glass gable and pool',
        alt: 'Drone view of the rear of the property showing the two-storey glass gable, decks and curved pool',
      },
      {
        name: 'aerialOverhead',
        grid: aerialOverhead,
        full: aerialOverheadFull,
        tag: 'Aerial',
        caption: 'Aerial: the full grounds',
        alt: 'High overhead drone view of the house, courtyard and sport court surrounded by dense woodland',
      },
      {
        name: 'rearTerrace',
        grid: rearTerrace,
        full: rearTerraceFull,
        tag: 'Exterior',
        caption: 'Rear deck and flagstone terrace',
        alt: 'Raised timber deck above a flagstone terrace, with lawn running to the tree line',
      },
      {
        name: 'poolSunset',
        grid: poolSunset,
        full: poolSunsetFull,
        tag: 'Twilight',
        caption: 'Infinity edge at sunset',
        alt: 'Negative-edge pool and loungers at sunset, the water meeting an open valley beyond',
      },
      {
        name: 'poolDusk',
        grid: poolDusk,
        full: poolDuskFull,
        tag: 'Twilight',
        caption: 'Poolside at dusk',
        alt: 'Pool at dusk reflecting the lit stone chimney and covered outdoor kitchen behind it',
      },
      {
        name: 'stoneLoggia',
        grid: stoneLoggia,
        full: stoneLoggiaFull,
        tag: 'Architectural',
        caption: 'Covered stone loggia',
        alt: 'Long covered loggia with a plank ceiling, stone walls and flagstone floor running the length of the house',
      },
      {
        name: 'coveredTerrace',
        grid: coveredTerrace,
        full: coveredTerraceFull,
        tag: 'Exterior',
        caption: 'Covered terrace off the kitchen',
        alt: 'Covered terrace with a dining table, opening through sliding glass into the kitchen',
      },
      {
        name: 'deckValleyView',
        grid: deckValleyView,
        full: deckValleyViewFull,
        tag: 'Exterior',
        caption: 'Deck over the valley',
        alt: 'Upper deck with timber railings looking out over treetops and rolling countryside',
      },
      {
        name: 'sportCourt',
        grid: sportCourt,
        full: sportCourtFull,
        tag: 'Exterior',
        caption: 'Private sport court',
        alt: 'Fenced and floodlit blue sport court marked for tennis and basketball, ringed by evergreens',
      },
      {
        name: 'coachHouse',
        grid: coachHouse,
        full: coachHouseFull,
        tag: 'Architectural',
        caption: 'Coach house and garage',
        alt: 'Detached three-bay garage with a loft above and an exterior stair to the upper level',
      },
      {
        name: 'stoneEntry',
        grid: stoneEntry,
        full: stoneEntryFull,
        tag: 'Detail',
        caption: 'Stone entry surround',
        alt: 'Open front door set into a cut-stone surround, looking through to the timber-framed interior',
      },
      {
        name: 'foyer',
        grid: foyer,
        full: foyerFull,
        tag: 'Interior',
        caption: 'Foyer with sliding barn doors',
        alt: 'Bright travertine foyer with white sliding barn doors, a hide rug and an oversized leaning mirror',
      },
      {
        name: 'greatRoomGable',
        grid: greatRoomGable,
        full: greatRoomGableFull,
        tag: 'Interior',
        caption: 'Great room beneath the glass gable',
        alt: 'Great room under a two-storey glazed gable, exposed timber trusses overhead and open country beyond',
      },
      {
        name: 'diningHearth',
        grid: diningHearth,
        full: diningHearthFull,
        tag: 'Interior',
        caption: 'Dining beside the stone hearth',
        alt: 'Long dining table beneath twin chandeliers, beside a floor-to-ceiling stone fireplace',
      },
      {
        name: 'greatRoomWide',
        grid: greatRoomWide,
        full: greatRoomWideFull,
        tag: 'Interior',
        caption: 'Great room and loft',
        alt: 'Wide view of the great room showing the timber posts, the open loft above and the wall of glass',
      },
      {
        name: 'loftLookdown',
        grid: loftLookdown,
        full: loftLookdownFull,
        tag: 'Architectural',
        caption: 'Down through the trusses',
        alt: 'View from the loft down through exposed timber trusses to the cathedral window and fields beyond',
      },
      {
        name: 'loftLookdownAngle',
        grid: loftLookdownAngle,
        full: loftLookdownAngleFull,
        tag: 'Interior',
        caption: 'The great room from the loft',
        alt: 'Elevated view from the loft over the dining table, seating area and stone fireplace below',
      },
      {
        name: 'kitchenView',
        grid: kitchenView,
        full: kitchenViewFull,
        tag: 'Interior',
        caption: 'Kitchen framed against the valley',
        alt: 'Kitchen with a granite island and stainless hood, opening to the great room and the view beyond',
      },
      {
        name: 'kitchenIslands',
        grid: kitchenIslands,
        full: kitchenIslandsFull,
        tag: 'Interior',
        caption: 'Twin islands',
        alt: 'Kitchen with two islands, pale blue cabinetry, pendant lighting and a run of white perimeter units',
      },
      {
        name: 'kitchenDetail',
        grid: kitchenDetail,
        full: kitchenDetailFull,
        tag: 'Detail',
        caption: 'Range and hood detail',
        alt: 'Close view of the granite island cooktop beneath a suspended stainless hood',
      },
      {
        name: 'livingRoom',
        grid: livingRoom,
        full: livingRoomFull,
        tag: 'Interior',
        caption: 'Living room',
        alt: 'Living room with exposed beams, a stone fireplace and a patterned rug on travertine floors',
      },
      {
        name: 'familyRoom',
        grid: familyRoom,
        full: familyRoomFull,
        tag: 'Interior',
        caption: 'Beamed family room',
        alt: 'Family room with a close-beamed ceiling, whitewashed brick wall and a pale sofa under a picture window',
      },
      {
        name: 'primaryBedroom',
        grid: primaryBedroom,
        full: primaryBedroomFull,
        tag: 'Interior',
        caption: 'Primary bedroom',
        alt: 'Primary bedroom with a reclaimed timber headboard, pendant bedside lights and a garden window',
      },
      {
        name: 'primaryEnsuite',
        grid: primaryEnsuite,
        full: primaryEnsuiteFull,
        tag: 'Interior',
        caption: 'Primary ensuite',
        alt: 'Ensuite with a freestanding tub at the window, a walk-in stone shower and a double vanity',
      },
      {
        name: 'loftBedroom',
        grid: loftBedroom,
        full: loftBedroomFull,
        tag: 'Architectural',
        caption: 'Loft bedroom under exposed trusses',
        alt: 'Loft bedroom framed by dark exposed trusses, with windows on two sides over open countryside',
      },
      {
        name: 'archedBedroom',
        grid: archedBedroom,
        full: archedBedroomFull,
        tag: 'Interior',
        caption: 'Bedroom with arched window',
        alt: 'Upper bedroom under a vaulted ceiling with an arched Palladian window and a crystal chandelier',
      },
      {
        name: 'gamesRoom',
        grid: gamesRoom,
        full: gamesRoomFull,
        tag: 'Interior',
        caption: 'Games room',
        alt: 'Games room with a full-size pool table, sliding barn doors and a timber staircase',
      },
      {
        name: 'recreationRoom',
        grid: recreationRoom,
        full: recreationRoomFull,
        tag: 'Interior',
        caption: 'Lower-level recreation room',
        alt: 'Lower-level recreation room with a linear fireplace set in stacked stone and a wall of windows',
      },
      {
        name: 'sauna',
        grid: sauna,
        full: saunaFull,
        tag: 'Detail',
        caption: 'Cedar sauna',
        alt: 'Cedar sauna with tiered benches and a slatted ceiling',
      },
    ],
  },
];

export const getProperty = (slug) => PROPERTIES.find((p) => p.slug === slug);

/** Photos pulled by name, in the order given -- used to compose the home grid. */
export function pickPhotos(property, names) {
  return names.map((name) => property.photos.find((p) => p.name === name));
}
