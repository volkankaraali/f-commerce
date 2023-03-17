import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import localstoragepolyfill from "localstorage-polyfill";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import { Provider } from 'react-redux';
import { store } from "../src/redux/store";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

const app = express();



app.use("^/$", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.err(err);
      return res.status(500).send("Some error happened");
    }

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </StaticRouter>
    );

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(process.env.PORT || 8000, () => {
  console.log(`App is launched on ${PORT}`);
});