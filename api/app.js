import express from "express";
import authRoutes from "./routes/auth.js"
import homeRoutes from "./routes/home.js"
import reservationRoutes from "./routes/reservations.js";
import cors from "cors";
const app = express();


//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/", homeRoutes);
app.use("/api/reservations", reservationRoutes);

app.listen(8800, () => {
    console.log("Api is working");
})
