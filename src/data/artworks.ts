export type Vibe =
  | "the-hope"
  | "the-chaos"
  | "the-foundation"
  | "the-silence"
  | "the-spark"
  | "the-joy";

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  medium: string;
  vibe: Vibe[];
  image: string;
  discord: {
    user: string;
    channel: string;
    date: string;
    messageId?: string;
  };
  coordinates: string;
  exhibitNumber: string;
}

export const vibeLabels: Record<string, string> = {
  "the-hope": "The Hope",
  "the-chaos": "The Chaos",
  "the-foundation": "The Foundation",
  "the-silence": "The Silence",
  "the-spark": "The Spark",
  "the-joy": "The Joy",
};

export const artworks: Artwork[] = [
  {
    id: "001-dawn-of-borders",
    title: "Dawn of Borders",
    artist: "Anonymous Delegate",
    description:
      "A sweeping oil painting capturing the moment a line is drawn on untouched land — the first border of a nation that exists only in the minds of its founders. The warm reds bleed into cold blues, symbolizing the tension between ambition and uncertainty.",
    medium: "Oil on Canvas",
    vibe: ["the-hope"],
    image: "/artworks/sample_1.jpg",
    discord: {
      user: "@delegate_alpha",
      channel: "#oil-paintings",
      date: "2026-03-15",
    },
    coordinates: "47°12'N 8°33'E — Sector I",
    exhibitNumber: "EXHIBIT NO. 001",
  },
  {
    id: "002-the-manifesto-draft",
    title: "The Manifesto Draft",
    artist: "Citizen X",
    description:
      "A raw pencil sketch of scattered words and crossed-out paragraphs — the first attempt at writing a founding document. The chaos of creation is preserved in every smudge and erasure mark.",
    medium: "Pencil on Paper",
    vibe: ["the-chaos", "the-spark"],
    image: "/artworks/sample_2.jpg",
    discord: {
      user: "@citizen_x",
      channel: "#sketches",
      date: "2026-03-18",
    },
    coordinates: "47°14'N 8°31'E — Sector III",
    exhibitNumber: "EXHIBIT NO. 002",
  },
  {
    id: "003-silent-parliament",
    title: "Silent Parliament",
    artist: "The Archivist",
    description:
      "A cinematic photograph of an empty room with a single chair and a microphone — waiting for the first speech that will never be forgotten. The silence is deafening, the potential infinite.",
    medium: "Digital Photography",
    vibe: ["the-silence"],
    image: "/artworks/sample_3.jpg",
    discord: {
      user: "@archivist",
      channel: "#photography",
      date: "2026-03-22",
    },
    coordinates: "47°11'N 8°35'E — Sector VII",
    exhibitNumber: "EXHIBIT NO. 003",
  },
  {
    id: "004-flag-study-no-1",
    title: "Flag Study No. 1",
    artist: "Vex Bureau",
    description:
      "A digital illustration exploring color theory and symbolism for a nation's first flag. Dozens of variations overlap, each one a different possible future for a country that hasn't yet decided what it stands for.",
    medium: "Digital Illustration",
    vibe: ["the-foundation", "the-hope"],
    image: "/artworks/sample_4.jpg",
    discord: {
      user: "@vex_bureau",
      channel: "#digital-art",
      date: "2026-03-25",
    },
    coordinates: "47°13'N 8°32'E — Sector II",
    exhibitNumber: "EXHIBIT NO. 004",
  },
  {
    id: "005-ignition",
    title: "Ignition",
    artist: "Pyra",
    description:
      "An abstract expressionist piece in violent reds and blacks — the raw energy of an idea exploding into existence. No form, no plan, just pure creative ignition. The paint was reportedly thrown at the canvas.",
    medium: "Acrylic on Canvas",
    vibe: ["the-spark", "the-chaos"],
    image: "/artworks/sample_5.jpg",
    discord: {
      user: "@pyra_art",
      channel: "#abstract",
      date: "2026-03-28",
    },
    coordinates: "47°15'N 8°30'E — Sector IX",
    exhibitNumber: "EXHIBIT NO. 005",
  },
  {
    id: "006-cartographers-dream",
    title: "Cartographer's Dream",
    artist: "Meridian",
    description:
      "A meticulous ink drawing of an imaginary topographical map — mountains, rivers, and cities that exist only in the cartographer's mind. Every contour line is a promise of what could be.",
    medium: "Ink on Parchment",
    vibe: ["the-foundation"],
    image: "/artworks/sample_6.jpg",
    discord: {
      user: "@meridian_maps",
      channel: "#sketches",
      date: "2026-04-01",
    },
    coordinates: "47°10'N 8°36'E — Sector V",
    exhibitNumber: "EXHIBIT NO. 006",
  },
];

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((a) => a.id === id);
}

export function getArtworksByVibe(vibe: string): Artwork[] {
  if (vibe === "all") return artworks;
  return artworks.filter((a) => a.vibe.includes(vibe as Vibe));
}
