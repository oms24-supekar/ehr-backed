const Patient = require("../models/Patient");

exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

exports.addPatient = async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
};

exports.deletePatient = async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: "Patient removed" });
};
