import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth.routes.js";
import { ordersRouter } from "./routes/orders.routes.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:8080","http://localhost:4321"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", authRouter);
app.use("/orders", ordersRouter);

// error handler
app.use((err, _req, res, _next) => {
  console.error(err);

  res.status(500).json({ message: "Internal server ayudaa" });
});

// NO SE DEBE CAMBIAR EL PUERTO
app.listen(4321, () => {
  console.log("Server is running on http://localhost:4321");
});
