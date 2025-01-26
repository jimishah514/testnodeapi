import express from "express";

const port = 3000;
const app = express();

app.get("/sayHello", async (req, res) => {
  return res.json({ hello: "hello" });
});
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
