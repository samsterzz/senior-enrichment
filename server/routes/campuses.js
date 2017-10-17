'use strict'

const router = require('express').Router();
const { Campus } = require('../../db/models');

router.get('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
    .then((campus) => {
        res.status(200).json(campus);
    })
});

router.get('/', (req, res, next) => {
    Campus.findAll()
    .then((campuses) => {
        res.status(200).json(campuses);
    })
    .catch(next);
});

router.post('/add', (req, res, next) => {
    Campus.create(req.body)
    .then((campus) => {
        res.status(201).json(campus);
    })
    .catch(next);
});

router.put('/:id/edit', (req, res, next) => {
    Campus.findById(req.params.id)
    .then((campus) => {
        return campus.update(req.body);
    })
    .then((campus) => {
        res.status(200).json(campus);
    })
    .catch(next);
});

router.delete('/:id/remove', (req, res, next) => {
    Campus.findById(req.params.id)
    .then((campus) => {
        return campus.destroy();
    })
    .then(() => {
        res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;