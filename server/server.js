import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import DogRoutes from "./routes/dogs.routes.js";
import UserRoutes from "./routes/users.routes.js";
import { dirname } from "./lib/pathHelpers.js";
dotenv.config();

const serverPort = process.env.PORT || 4000;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString);

const __dirname = process.cwd();
console.log(__dirname);
const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", [DogRoutes, UserRoutes]);
server.use(express.static(path.join(__dirname, "./client/dist")));

server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

server.listen(serverPort, () =>
  console.log(`Server Obelix is up and running on ${serverPort}`)
);
