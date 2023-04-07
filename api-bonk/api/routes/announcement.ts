import AnnouncementService from "../services/announcement";
import { Request, Response } from "express";
import Announcement from "../models/announcement/announcement";
import UserService from "../services/user";

const route = require('express').Router();

route.get('/', (req: Request, res: Response) => {
    const announcements = AnnouncementService.getAllAnnouncements();
    res.status(200).send(announcements);
})

route.get('/all', (req: Request, res: Response) => {
    const announcements = AnnouncementService.getAllAnnouncements();
    res.status(200).send(announcements);
})

route.get('/find/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const announcement = AnnouncementService.getAnnouncementById(id);
    if (!announcement) res.status(404).send('Announcement ' + id + ' not found!');
    res.status(200).send(announcement);
})

route.get('/find/author/:author', (req: Request, res: Response) => {
    const author = parseInt(req.params.author);
    const announcement = AnnouncementService.getAnnouncementByAuthor(author);
    if (!announcement) res.status(404).send('Announcement ' + author + ' not found!');
    res.status(200).send(announcement);
})

route.post('/create', (req: Request, res: Response) => {
    const announcement = req.body as Announcement;
    if (announcement.title === "" || announcement.title === " ") res.status(400).send('Title is required!');
    // var usersIds: Array<number> = [];
    // UserService.getAllUsers().forEach(user => {
    //     usersIds.push(user.id);
    // });
    // if (! (announcement.authorId in usersIds)) res.status(400).send('Author not found!');
    AnnouncementService.createAnnouncement(announcement);
    res.status(200).send('Announcement created!');
})

route.get('/delete/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const announcement = AnnouncementService.getAnnouncementById(id);
    if (!announcement) res.status(404).send('Announcement ' + id + ' not found!');
    AnnouncementService.deleteAnnouncement(id);
    res.status(200).send('Announcement deleted!');
})

export default route;