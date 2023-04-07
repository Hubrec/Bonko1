import { AnnouncementHelpers } from "../models/announcement/helpers";
import Announcement from "../models/announcement/announcement";

export namespace AnnouncementService {
    export const getAllAnnouncements = (): Array<Announcement> => {
        return AnnouncementHelpers.getAllAnnouncements();
    }

    export const getAnnouncementById = (id: number): Announcement => {
        return AnnouncementHelpers.getAnnouncementById(id);
    }

    export const getAnnouncementByAuthor = (author: number): Announcement => {
        return AnnouncementHelpers.getAnnouncementByAuthor(author);
    }

    export const createAnnouncement = (announcement: Announcement): void => {
        AnnouncementHelpers.createAnnouncement(announcement);
    }

    export const deleteAnnouncement = (id: number): void => {
        AnnouncementHelpers.deleteAnnouncement(id);
    }
}

export default AnnouncementService;