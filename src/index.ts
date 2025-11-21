import operationRoutes from "./routes/operation.route";

import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/", operationRoutes);

app.listen(PORT, () =>
  console.log(`Aplicación alojada en http://localhost:${PORT}`)
);
