import express from "express";

const port = 4000;
const app = express();

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("<h1>Helloo, Jamal Here from dev!!</h1>");
});

app.get("/sayHello", async (req, res) => {
  return res.json({ hello: "hello" });
});
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
