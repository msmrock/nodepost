import * as express from "express";

const app = express();

import userController from "./controller/userController";
import postController from "./controller/postController";

app.use("/user", userController);
app.use("/post", postController);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
