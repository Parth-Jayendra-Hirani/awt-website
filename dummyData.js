import mongoose from "mongoose";
import Skill from "../models/Skill.js";

mongoose.connect("mongodb://127.0.0.1:27017/skillswap");

const data = [
  {
    title: "React Development",
    description: "Learn React basics",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    title: "Photography",
    description: "Master camera skills",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
  },
  {
    title: "Guitar",
    description: "Learn chords and songs",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  }
];

async function seed() {
  await Skill.deleteMany();
  await Skill.insertMany(data);
  console.log("Dummy data inserted");
  process.exit();
}

seed();