import { P_FEB, P_TAT, P_NIGHT } from "../assets.js";

export const MAIL = "event-breizhcarsclub@outlook.fr";

export const mailto = (e) =>
  `mailto:${MAIL}?subject=${encodeURIComponent(
    "Inscription exposant — " + e.t + (e.sub ? " " + e.sub : "")
  )}`;

export const ACTS = [
  ["Tombola", "ticket"],
  ["Foodtruck", "truck"],
  ["Buvette", "cup"],
  ["DJ", "disc"],
  ["Stands", "tent"],
  ["Pitstop Challenge", "wrench"],
  ["Lancé de pneus", "tire"],
];

export const EVENTS = [
  {
    img: P_FEB,
    t: "Transports Frereux Event",
    sub: "",
    d: "08",
    m: "Fév",
    j: "Dimanche",
    h: "10h – 17h",
    ville: "Servon-sur-Vilaine",
    lieu: "ZA d'Olivet · 35530 Servon-sur-Vilaine",
    prix: "Exposants 2€",
  },
  {
    img: P_TAT,
    t: "BCC × Gone Tattoo",
    sub: "",
    d: "11",
    m: "Avr",
    j: "Samedi",
    h: "19h – 00h",
    ville: "Saint-Malo",
    lieu: "Gone Tattoo · 13 rue Claude Bernard · 35400 Saint-Malo",
    prix: "Exposants 2€",
  },
  {
    img: P_NIGHT,
    t: "Transports Frereux Event",
    sub: "By Night",
    d: "27",
    m: "Juin",
    j: "Samedi",
    h: "19h – 00h",
    ville: "Servon-sur-Vilaine",
    lieu: "ZA d'Olivet · 35530 Servon-sur-Vilaine",
    prix: "Exposants 2€",
  },
];

export const STATS = [
  ["+250", "véhicules / event"],
  ["3", "auto · moto · camion"],
  ["2€", "tarif exposant"],
  ["35", "Ille-et-Vilaine"],
];
