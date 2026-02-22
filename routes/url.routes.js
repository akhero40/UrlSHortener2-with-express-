import path from 'path'
import {readFile} from 'fs/promises'
import { writeFile } from 'fs/promises';
import express from 'express'
import { gettinData } from '../controllers/gettinData.controller.js';
import { loadlinks } from '../models/savers.model.js';
import { redirect } from '../controllers/redirecting.controllers.js';
import { showuptheLINK } from '../controllers/puttingTheLinkOnPage.controller.js';
import { savingthedetail } from '../controllers/savingtheDetails.controller.js';

const routes=express.Router();
routes.get('/',gettinData)
routes.get('/:shorten',redirect)
routes.post('/',savingthedetail)
routes.get('/parcel/:shorten',showuptheLINK)
export default routes;