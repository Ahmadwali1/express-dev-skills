const skills = [
  {skill: 'understand css and html', correctAnswer: true},
  {skill: 'know how to use javascript', correctAnswer: true},
  {skill: 'know to play good game', correctAnswer: false},
  {skill: 'know how to work with node', correctAnswer: true},
  {skill: 'understand his own code', correctAnswer: true},
]

function getAll() {
  return skills;
}

module.exports = {
  getAll
}