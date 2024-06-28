"use strict";

import dotenv from "dotenv";
import express from "express";
import next from "next";
import cookieParser from "cookie-parser";
import { resolve } from "path";
import { parse } from "url";
import updatePostViews from "./utils/update-post-views.js";

dotenv.config();

const dev = process.env.NODE_ENV === "development";
const hostname = "localhost";
const port = dev ? 3000 : process.env.PORT;
const server = express();
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    server.use(cookieParser());
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());
    server.use(express.static(resolve(process.cwd(), "public")));

    server.get("/blog/:slug", async (req, res) => {
      await app.render(req, res, re.url, query);
      try {
        await updatePostViews(req.params.slug);
      } catch (error) {
        console.error(error);
      }
    });
    server.all("*", (req, res) => {
      const parsedUrl = parse(req.url, true);

      handle(req, res, parsedUrl);
    });

    server.disable("x-powered-by");

    server.listen(port, () =>
      console.log(`Express server running on port ${port}`)
    );
  })
  .catch((error) => {
    console.error("Startup Error!", error);
  });
