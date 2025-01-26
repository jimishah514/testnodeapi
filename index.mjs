import express from "express";

const port = 3000;
const app = express();

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("<h1>Hello, Jamal Here !</h1>");
});

app.get("/sayHello", async (req, res) => {
  return res.json({ hello: "hello" });
});
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
