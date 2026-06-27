import express from 'express';
import { deleteThumbnail, generateThumbnail } from '../controllers/ThumbnailController.js';
import protect from '../middlewares/auth.js';

const ThumbnailRouter = express.Router();

ThumbnailRouter.post('/generate' ,protect, generateThumbnail)
// Add this temporary console.log right in the middle!
ThumbnailRouter.delete('/delete/:id', protect, deleteThumbnail);

export default ThumbnailRouter;