import { Router } from "express";
import { methodClientes as clientesController } from "../controllers/clientes.controllers.js";

const router= Router();

router.get("/",clientesController.getClientes)
router.post("/",clientesController.postClientes)

export default router;
