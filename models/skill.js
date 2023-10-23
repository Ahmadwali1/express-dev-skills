const skills = [
  { id: 456739, skill: "understand css and html", correctAnswer: true },
  { id: 487654, skill: "know how to use javascript", correctAnswer: true },
  { id: 434567, skill: "know to play good game", correctAnswer: false },
  { id: 479123, skill: "know how to work with node", correctAnswer: true },
  { id: 487223, skill: "understand his own code", correctAnswer: true },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill,updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.correctAnswer = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
