let wizards = [
  { id: 0, name: "Matthew Firebringer", school: "Fire", level: 150 },
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