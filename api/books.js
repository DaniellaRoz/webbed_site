import fs from "fs";
import path from "path";

export default function handler(req, res) {
    try {
        const filePath = path.join(process.cwd(), "data", "books.json");
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

        res.status(200).json(data);
    } catch (e) {
        console.error("Error reading JSON:", e);
        res.status(500).json({ error: "Failed to read the book data" });
    }
}