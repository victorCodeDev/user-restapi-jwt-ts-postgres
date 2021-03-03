import { Router } from 'express';
import { singUp, singIn } from '../controllers/user.controllers';

const router = Router();

router.post('/registrar', singUp)
router.post('/login', singIn)


export default router;