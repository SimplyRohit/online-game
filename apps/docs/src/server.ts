import express from "express";
import { TeamSocket } from "./Socket/teamSocket";
import http from "http";
const app = express();

app.get("/health", (req, res) => {
  res.send("workingg");
});

const httpServer = http.createServer(app);
TeamSocket(httpServer);

app.listen(9000, () => {
  console.log(`Server is running on http://localhost:9000`);
});
