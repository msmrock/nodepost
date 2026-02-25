import { Router } from "express";

const router = Router();

router.post("/singup", (req, res) => {
  res.send("SINGUP /");
});

router.post("/login", (req, res) => {
  res.send("LOGIN /");
});

export default router;
