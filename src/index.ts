import express, { Request, Response } from 'express';
import { PORT } from './settings/settings';
import cors from "cors"
import colors from 'colors' 
import routeLogin from "./routes/login.routes"
import routeCard from "./routes/card.routes"
import { verifyToken } from './middleware/jwt.middleware';

const app = express();

app.use(cors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
}))

app.use(express.json());
 
app.use("/api/card", verifyToken, routeCard);
app.use("/api/auth", routeLogin);

app.get("/", (_req: Request, res: Response) => {
    res.send("API REST")
})

app.listen(PORT, () => {
    console.log(colors.bgGreen(`App corriendo en el puerto ${PORT}`))
    console.log(colors.bgGreen(`http://localhost:${PORT}`))
})
 