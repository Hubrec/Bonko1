import { Request, Response } from 'express';
import UserService from '../services/user';
import User from '../models/user/user';

const route = require('express').Router();

route.get('/', (req: Request, res: Response) => {
    const users = UserService.getAllUsers();
    res.status(200).send(users);
})

route.get('/all', (req: Request, res: Response) => {
    const users = UserService.getAllUsers();
    res.status(200).send(users);
})

route.get('/find/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = UserService.getUserById(id);
    if (!user) res.status(404).send('User ' + id + ' not found!');
    res.status(200).send(user);
})

route.post('/create', (req: Request, res: Response) => {
    const user = req.body as User;
    if (user.username === "" || user.username === " ") res.status(400).send('Username is required!');
    UserService.createUser(user);
    res.status(200).send('User created!');
})

route.get('/delete/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = UserService.getUserById(id);
    if (!user) res.status(404).send('User ' + id + ' not found!');
    UserService.deleteUser(id);
    res.status(200).send('User deleted!');
})

export default route;