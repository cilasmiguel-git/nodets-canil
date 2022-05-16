import { Router } from "express";
import * as PageComtroller from '../controllers/pageController';
import * as SearchComtroller from '../controllers/searchController';

const router = Router();

router.get('/',PageComtroller.home);
router.get('/cats',PageComtroller.cats);
router.get('/dogs',PageComtroller.dogs);
router.get('/fishs',PageComtroller.fishs);
router.get('/search',SearchComtroller.search);

export default router;