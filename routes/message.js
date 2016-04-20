import express from 'express';
const router = express.Router();

import * as MessageController from '../controllers/message';
import authenticateToken from '../middlewares/authenticateToken';

router.route('/')
  .all(authenticateToken)
  .get(MessageController.all)
  .post(MessageController.post)

export default router;
