const express = require('express');
const { verifyJWT } = require('../Utils/functionsJWS');
const FeatureController = require('../Controllers/FeatureController');

const router = express.Router();

router.get('/features/', verifyJWT, FeatureController.getFeaturesList);
router.post('/featuresbyid/', verifyJWT, FeatureController.getFeaturesByID);
router.post('/feature/create', verifyJWT, FeatureController.createFeature);
router.patch('/feature/desactive/:id', verifyJWT, FeatureController.desactiveFeature);
router.delete(
  '/feature/delete/:id',
  verifyJWT,
  FeatureController.deleteFeature,
);
router.put('/feature/update/:id', verifyJWT, FeatureController.updateFeature);

module.exports = router;