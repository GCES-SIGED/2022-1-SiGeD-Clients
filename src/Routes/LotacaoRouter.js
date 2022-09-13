const express = require('express');
const { verifyJWT } = require('../Utils/functionsJWS');
const LotacaoController = require('../Controllers/LotacaoController');

const router = express.Router();

router.post('/lotacao/create', verifyJWT, LotacaoController.create);
router.get('/lotacao', verifyJWT, LotacaoController.allLotacao);
router.put('/lotacao/update/:id', verifyJWT, LotacaoController.update);
router.delete(
  '/lotacao/delete/:id',
  verifyJWT,
  LotacaoController.deleteLotacao,
);
router.get('/lotacao/actives', verifyJWT, LotacaoController.getLotacaoByActivate);
router.put('/lotacao/deactivate/:id', verifyJWT, LotacaoController.lotacaoDeactivate);

module.exports = router;