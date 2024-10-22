import express from 'express';
import TopProjectController from '../controllers/TopProjectController.js';

const router = express.Router();
const topProjectController = new TopProjectController();

router.get('/', topProjectController.getAllTopProjects);
router.get('/:id', topProjectController.getTopProjectById);
// router.post('/top-project', topProjectController.createTopProject);
// router.put('/:id', topProjectController.updateTopProject);
// router.delete('/:id', topProjectController.deleteTopProject);

export default router;