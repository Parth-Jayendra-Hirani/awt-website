import express from "express";
import Skill from "../models/Skill.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// GET ALL SKILLS
router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// CREATE SKILL
router.post("/", auth, async (req, res) => {
  const skill = new Skill({
    ...req.body,
    userId: req.user.id
  });

  await skill.save();
  res.json(skill);
});

// DELETE SKILL
router.delete("/:id", auth, async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;