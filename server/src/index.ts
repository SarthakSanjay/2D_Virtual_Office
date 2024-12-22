import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors"
const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

// Middleware to parse JSON request body
app.use(express.json());
// app.use(cors())
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))
// app.get("/", (req, res) => {
// res.json({ msg: "hello" });
// });


app.post("/create_space", async (req: any, res: any) => {
  try {
    const { space_name, username, email, image } = req.body;

    if (!space_name || !username || !email) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          username,
          email,
          image,
        },
      });
    }

    const space = await prisma.space.create({
      data: {
        name: space_name,
        adminId: user.id,
      },
    });

    res.json({ msg: "Space created successfully", space });
  } catch (error: any) {
    console.error("Error creating space:", error);
    res.status(500).json({ msg: "Error creating space", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

