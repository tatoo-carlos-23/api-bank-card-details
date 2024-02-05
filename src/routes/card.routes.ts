import express from "express";
import { cardDetailService } from "../services/card.service";
const router = express.Router();

router.post("/card-detail", async (req, res) => {
    try {
        const userID = (req as any).getUserAuth.id
        const cardNumber = req.body.cardNumber
        const dataCard = await cardDetailService(cardNumber, userID)
        res.send(dataCard).status(200)
    } catch (error) {
        const err: any = error
        if (err?.code && err?.message) {
            res.send(err).status(400)
        }
        res.sendStatus(400)
    }
})

export default router; 