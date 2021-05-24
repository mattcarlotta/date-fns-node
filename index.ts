import express from "express";
import middlewares from "~middlewares";
import routes from "~routes";
import { logInfoMessage, logErrorMessage } from "~logger";

const { PORT } = process.env;

(async () => {
  try {
    const server = express();

    middlewares(server);

    server.use("/api", routes);

    server.listen(PORT, (err?: Error) => {
      if (err) throw err;
      logInfoMessage(
        `Listening for requests to: http://localhost:\x1b[1m${PORT}\x1b[0m\n`
      );
    });
  } catch (err) {
    logErrorMessage(err.toString());
    process.exit(1);
  }
})();
