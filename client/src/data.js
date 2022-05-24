let wizards = [
  { id: 0, name: "Matthew Firebringer", school: "Fire", level: 150,
    damage: [150, 9, 9, 0, 0, 0, 0, 4],
    damageFlat: [20, 0, 0, 0, 0, 0, 0, 0],
    resist: [23, 23, 23, 23, 23, 23, 23, 23],
    resistFlat: [0, 0, 101, 0, 0, 0, 0, 0],
    accuracy: [40, 6, 6, 0, 0, 0, 0, 0]},
  { id: 1, name: "Artur Lifehaven", school: "Life", level: 150 }
];

export function getWizards() {
  return wizards;
}

export function getWizard(id) {
  return wizards.find(
    (wizard) => wizard.id === id
  );
}

export function getTitle(level) {
  return 'Paragon';
}

export function getHealth(school, level) {
  return 5678;
}

export function getMana(school, level) {
  return 400;
}

export function getEnergy(school, level) {
  return 130;
}

export function getFishingLuck(school, level) {
  return 2;
}

export function getDamage(wizard) {
  return wizard.damage;
}

export function getDamageFlat(wizard) {
  return wizard.damageFlat;
}

export function getResist(wizard) {
  return wizard.resist;
}

export function getResistFlat(wizard) {
  return wizard.resistFlat;
}

export function getAccuracy(wizard) {
  return wizard.accuracy;
}