const Skill = require('../models/skill');



module.exports = {
  index,
  show,
  new: skillNew,
  create,
  delete: deleteSkill,
  edit,
  update
}

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`)
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'edit skill',
    skill
  })
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function skillNew(req, res) {
  res.render('skills/new', {
    title: 'New skill'
  })
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skills Details'
  })
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'All skills'
  })
}