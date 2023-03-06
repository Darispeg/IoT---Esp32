const express = require("express");
const sensorsSchema = require('../models/sensor')
const router = express.Router();

//Esp32
router.post('/esp32/sensors', (req, res) => {
    const sensor = sensorsSchema(req.body);
    sensor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

// get all sensors
router.get("/esp32/sensors", (req, res) => {
    sensorsSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

// get sensor by key
router.get("/esp32/sensors/:id", (req, res) => {
    const { id } = req.params;
    sensorsSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

// update sensor by key
router.put("/esp32/sensors/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    sensorsSchema
        .updateOne({_id: id}, { $set : {status} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

// delete sensor by key
router.get("/esp32/sensors/:id", (req, res) => {
    const { id } = req.params;
    sensorsSchema
        .remove({_id : id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

module.exports = router;