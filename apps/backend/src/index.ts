import express, { Request, Response } from "express";
import { myname } from "@repo/common/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({ message: `Hi my name is ${myname}` });
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});