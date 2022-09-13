const express = require('express');
const { verifyJWT } = require('../Utils/functionsJWS');
const ClientController = require('../Controllers/ClientController');

const router = express.Router();

router.post('/clients/create', verifyJWT, ClientController.create);
router.get(
  '/clients/newest-four',
  verifyJWT,
  ClientController.newestFourClientsGet,
);
router.get('/clients/:id', verifyJWT, ClientController.access);
router.put('/clients/update/:id', verifyJWT, ClientController.update);
router.put(
  '/clients/toggleStatus/:id',
  verifyJWT,
  ClientController.toggleStatus,
);
router.get('/clients', verifyJWT, ClientController.accessList);
router.get('/clients/history/:id', verifyJWT, ClientController.history);
router.post(
  '/clients/send-email/:id',
  verifyJWT,
  ClientController.sendEmailToClient,
);

module.exports = router;