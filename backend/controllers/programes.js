const program = require('../database/models/programes');
module.exports = {
  getAllPrograms: function(req, res) {
    program.getAll(function(err, results) {
      if (err) res.status(500).send(err);
      else res.json(results)
    })
  },
  getOneProgram: function(req, res) {
    const programId = req.params.id;
    program.getOne(programId, function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else if (!results) {
        res.status(404).send('Program not found');
      } else {
        res.json(results);
      }
    });
  },
  createProgram: function(req, res) {
    const programData = req.body;
    program.add(programData, function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  updateProgram: function(req, res) {
    const programId = req.params.id;
    const programData = req.body;
    program.update(programId, programData, function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else if (results.affectedRows === 0) {
        res.status(404).send('Program not found');
      } else {
        res.json(results);
      }
    });
  },
  deleteProgram: function(req, res) {
    const programId = req.params.id;
    program.delete(programId, function(err, results) {
      if (err) {
        res.status(500).send(err);
      } else if (results.affectedRows === 0) {
        res.status(404).send('Program not found');
      } else {
        res.json(results);
      }
    });
  }
};