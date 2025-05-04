import { Router } from "express";
import { handleCreateShortyUrl,handleGetURLS} from '../controllers/url.controllers'


const urlRouter = Router();

urlRouter.get('/',handleGetURLS)

urlRouter.post('/:orignalURL', handleCreateShortyUrl);


export default urlRouter;