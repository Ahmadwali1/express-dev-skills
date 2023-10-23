const Skill = require('../models/skill');



module.exports = {
  index,
  show,
  new: skillNew,
  create
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