import express from "express";
import { prisma } from "./lib/prisma.js";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/users", async (_, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: 5
            }
        });
        res.json(user);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
