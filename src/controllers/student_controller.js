const Student = require('../models/estudiante_schema');
const router = require('express').Router();

router.route('/').get((req, res) => {
    // using .find() without a paramter will match on all user instances
    Student.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router