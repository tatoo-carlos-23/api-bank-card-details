import express from "express";
import { loginService } from "../services/auth.service";
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const email: string = req.body.email;
        const password: string = req.body.password;
        const token = await loginService(email, password)
        res.send(token).status(200)
    } catch (error) { 
        const err: any = error
        if (err?.code && err?.message) {
            res.send(err).status(400)
        }
        res.sendStatus(400)
    }
})

export default router; 