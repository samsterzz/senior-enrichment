'use strict'

const router = require('express').Router();
const { Student } = require('../../db/models');

router.get('/:id', (req, res, next) => {
    Student.findById(req.params.id)
    .then((student) => {
        res.status(200).json(student);
    })
});

router.get('/', (req, res, next) => {
    Student.findAll()
    .then((students) => {
        res.status(200).json(students);
    })
    .catch(next);
});

router.post('/add', (req, res, next) => {
    Student.create(req.body)
    .then((student) => {
        res.status(201).json(student);
    })
    .catch(next);
});

router.put('/:id/edit', (req, res, next) => {
    Student.findById(req.params.id)
    .then((student) => {
        return student.update(req.body);
    })
    .then((student) => {
        res.status(200).json(student);
    })
    .catch(next);
});

router.delete('/:id/remove', (req, res, next) => {
    Student.findById(req.params.id)
    .then((student) => {
        return student.destroy();
    })
    .then(() => {
        res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;