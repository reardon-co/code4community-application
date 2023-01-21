import { Request, Response } from "express";
import db from "../../database"


export const getPosts = async (req: Request, res: Response) => {
    const sql = "SELECT * FROM post"
    const params: string[] = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({
            "message": "success",
            "data": rows
        })
    })
}

export const addPost = async (req: Request, res: Response) => {
    const { content, date } = req.body
    const sql = `INSERT INTO post (content, date) VALUES(?, ?)`
    db.run(sql, [content, date], (err) => {
        if (err) {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({
            "message": "success",
            "data": {
                "content": content,
                "date": date
            }
        })
    })
}