import { database } from '../../config/database';
import Announcement from '../announcement/announcement';

export namespace AnnouncementHelpers {
    export const getAllAnnouncements = (): Array<Announcement> => {
        return database.prepare('SELECT * FROM announcement').all();
    };

    export const getAnnouncementById = (id: number): Announcement => {
        return database.prepare('SELECT * FROM announcement WHERE id = ?').get([id]);
    };

    export const getAnnouncementByAuthor = (author: number): Announcement => {
        return database.prepare('SELECT * FROM announcement WHERE author = ?').get([author]);
    };

    export const createAnnouncement = (announcement : Announcement): void => {
        database.prepare('INSERT INTO announcement (title, description, authorId) VALUES (?, ?, ?)').run([announcement.title, announcement.description, announcement.authorId]);
    }

    export const deleteAnnouncement = (id: number): void => {
        database.prepare('DELETE FROM announcement WHERE id = ?').run([id]);
    }
}