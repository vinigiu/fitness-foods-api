/**
 * Module dependencies.
 */
import * as bodyParser from "body-parser";
import * as compression from "compression";  // compresses requests
import * as mongo from "connect-mongo"; // (session)
import * as dotenv from "dotenv";
import * as errorHandler from "errorhandler";
import * as express from "express";
import * as flash from "express-flash";
import * as session from "express-session";
import * as lusca from "lusca";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import * as passport from "passport";
import * as path from "path";
import expressValidator = require("express-validator");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env.example" });

/**
 * Routes
 */
import apiRouter from "./routes/api";

/**
 * API keys and Passport configuration.
 */
class App {

  // ref to Express instance
  public express: express.Application;
  // private readonly MongoStore = mongo(session);

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.launchConf();

  }
  private middleware(): void {
    this.express.set("port", process.env.PORT || 3003);
    this.express.use(compression());
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(expressValidator());
    // this.express.use(session({
    //   resave: true,
    //   saveUninitialized: true,
    //   secret: process.env.SESSION_SECRET,
    //   store: new this.MongoStore({
    //     autoReconnect: true,
    //     url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    //   }),
    // }));
  }
  /**
   * Primary app routes.
   */
  private routes(): void {
    this.express.use("/api", apiRouter);
  }

  private launchConf() {
    this.express.use(errorHandler());
    /**
     * Start Express server.
     */
    this.express.listen(this.express.get("port"), () => {
      // tslint:disable-next-line:no-console
      console.log(("Server is running at http://localhost:%d \
      in %s mode"), this.express.get("port"), this.express.get("env"));
      // tslint:disable-next-line:no-console
      console.log("  Press CTRL-C to stop\n");
    });
  }
}

export default new App().express;
