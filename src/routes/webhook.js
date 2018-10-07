import express from 'express';
import asyncFuncExpress from '../helpers/AsyncFuncExpress';
import WebHookControler from '../controllers/WebHookControler';

const { webhook } = WebHookControler();

const router = express.Router();

router
  .post('/', asyncFuncExpress(webhook));

export default router;
