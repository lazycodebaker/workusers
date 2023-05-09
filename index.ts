
import express, { Express } from "express";
import { User } from "./User";
import { v4 } from "uuid";

const db: User[] = [];

const app: Express = express();

app.use(express.json());

const validateUuid = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-5][0-9a-fA-F]{3}-[089abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    const userId = req.params.userId;
    if (!uuidRegex.test(userId)) {
        res.status(400).json({ error: "Invalid UUID" });
    } else {
        next();
    };
};

app.get("/api/users", (req, res) => {
    res.status(200).json(db);
});

app.get("/api/users/:userId", validateUuid, (req, res) => {
    const userId = req.params.userId;
    const user = db.find((u) => u.id === userId);
    if (!user) {
        res.status(404).json({ error: "User not found" });
    } else {
        res.status(200).json(user);
    }
});

app.post("/api/users", (req, res) => {
    const { username, age, hobbies } = req.body;
    if (!username || !age || !hobbies) {
        res.status(400).json({ error: "Missing required fields" });
    } else {
        const user: User = { id: v4(), username, age, hobbies };
        db.push(user);
        res.status(201).json(user);
    }
});

app.put("/api/users/:userId", validateUuid, (req, res) => {
    const userId = req.params.userId;
    const userIndex = db.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
        res.status(404).json({ error: "User not found" });
    } else {
        const { username, age, hobbies } = req.body;
        if (!username || !age || !hobbies) {
            res.status(400).json({ error: "Missing required fields" });
        } else {
            const user: User = { id: userId, username, age, hobbies };
            db[userIndex] = user;
            res.status(200).json(user);
        }
    }
});

app.delete("/api/users/:userId", validateUuid, (req, res) => {
    const userId = req.params.userId;
    const userIndex = db.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
        res.status(404).json({ error: "User not found" });
    } else {
        db.splice(userIndex, 1);
        res.status(204).end();
    }
});

// Handle non-existing endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

// Handle errors
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) =>{
    console.error(err.stack);
});
    
app.listen(4000,()=>{
    console.log("Server Running on PORT : ",4000);    
});