// QA #18003 test app - not for production
const express = require("express");
const app = express();
app.get("/", (_req, res) => res.send("qa-18003"));
app.listen(3000);
