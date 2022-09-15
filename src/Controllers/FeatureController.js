const Feature = require('../Models/FeatureSchema');
const { validateFeatures } = require('../Utils/validate');
const DateHelpers = require('../Utils/dateHelpers');


const getFeaturesList = async (req, res) => {
  const featuresList = await Feature.find({
    active: true
  });

  return res.json(featuresList);
};

const getFeaturesByID = async (req, res) => {
  const { featuresList } = req.body;
  try {
    const features = await Feature.find({ _id: { $in: featuresList }, active: true });
    return res.status(200).json(features);
  } catch (err) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
};

const createFeature = async (req, res) => {
  const {
    name,
    description,
    color,
  } = req.body;

  const errorList = validateFeatures(name, description, color);

  if (errorList.length) {
    return res.status(400).json({ message: errorList });
  }

  const newFeature = await Feature.create({
    name,
    description,
    color,
    createdAt: DateHelpers.dateNow(),
    updatedAt: DateHelpers.dateNow(),
  });

  return res.status(200).json(newFeature);
};

const updateFeature = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    color,
  } = req.body;

  const errorList = validateFeatures(name, description, color);

  if (errorList.length) {
    return res.status(400).json({ message: errorList });
  }

  try {
    const updateResponse = await Feature.findOneAndUpdate({ _id: id }, {
      name,
      description,
      color,
      updatedAt: DateHelpers.dateNow(),
    }, { new: true }, (feature) => feature);
    return res.status(200).json(updateResponse);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
};

const deactiveFeature = async (req, res) => {
  const { id } = req.params;

  try {
    const updateResponse = await Feature.findOneAndUpdate({ _id: id }, {
      active: false,
      updatedAt: DateHelpers.dateNow(),
    }, { new: true }, (feature) => feature);
    return res.status(200).json(updateResponse);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
};

const deleteFeature = async (req, res) => {
  const { id } = req.params;

  try {
    await Feature.deleteOne({ _id: id });
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
};

module.exports = {
  getFeaturesList, getFeaturesByID, createFeature, updateFeature, deleteFeature, deactiveFeature
};
