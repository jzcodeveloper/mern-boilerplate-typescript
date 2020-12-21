import http from "http";
import app from "./express";
import * as env from "./utils/constants";
import * as database from "./config/database";

export const server = http.createServer(app);

server.listen(env.PORT, async () => {
  await database.connect();

  console.log(`Server running in ${env.NODE_ENV} on port ${env.PORT}`);
});
