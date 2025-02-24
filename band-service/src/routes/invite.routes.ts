import { Router } from "express";
import { InviteController } from "../controllers/invite.controller";

const InviteRouter = Router()
const controller = new InviteController();

InviteRouter.post('/:id/accept', controller.accept)

export default InviteRouter
