import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach((route) => {
      const { serviceName, routes } = route;
      routes.forEach((r) => {
        app[r.method](
          `/api/${serviceName + r.path}`, // exposes as /api/serviceName/pathName...
          (request: Request, response: Response, next: Function) => {
            r.action(request, response)
              .then(() => next)
              .catch((err) => next(err));
          }
        );
      });
    });

    // run app
    app.listen(4000);

    console.log("Express application is up and running on port 4000");
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
