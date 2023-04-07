import CommentService from "../services/comment";
import { Request, Response } from "express";
import Comment from "../models/comment/comment";

const route = require('express').Router();

route.get('/', (req: Request, res: Response) => {
    const comments = CommentService.getAllComments();
    res.send(comments);
})

route.get('/all', (req: Request, res: Response) => {
    const comments = CommentService.getAllComments();
    res.status(200).send(comments);
})

route.get('/find/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const comment = CommentService.getCommentById(id);
    if (!comment) res.status(404).send('Comment ' + id + ' not found!');
    res.status(200).send(comment);
})

route.post('/create', (req: Request, res: Response) => {
    const comment = req.body as Comment;
    if (comment.content === "" || comment.content === " ") res.status(400).send('Content is required!');
    CommentService.createComment(comment);
    res.status(200).send('Comment created!');
})

route.get('/delete/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const comment = CommentService.getCommentById(id);
    if (!comment) res.status(404).send('Comment ' + id + ' not found!');
    CommentService.deleteComment(id);
    res.status(200).send('Comment deleted!');
})

export default route;