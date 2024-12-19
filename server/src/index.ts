import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

// Middleware to parse JSON request body
app.use(express.json());

// app.get("/", (req, res) => {
// res.json({ msg: "hello" });
// });

app.post("/create_space", async (req: any, res: any) => {
  const { space_name } = req.body;
  // Check if space_name is provided
  if (!space_name) {
    return res.status(400).json({ msg: "space name not sent correctly" });
  }

  try {
    // Create the space in the database
    const space = await prisma.space.create({
      data: {
        name: space_name,
      },
    });

    console.log(space)
    res.json({ msg: "space created", space });
  } catch (error) {
    console.error("Error creating space:", error);
    res.status(500).json({ msg: "Error creating space" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

