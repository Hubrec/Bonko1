import { database } from '../../config/database';
import Comment from '../comment/comment';

export namespace CommentHelpers {
    export const getAllComments = (): Array<Comment> => {
        return database.prepare('SELECT * FROM comment').all();
    };

    export const getCommentById = (id: number): Comment => {
        return database.prepare('SELECT * FROM comment WHERE id = ?').get([id]);
    };

    export const createComment = (comment : Comment): void => {
        database.prepare('INSERT INTO comment (content, authorId, announcementId) VALUES (?, ?, ?)').run([comment.content, comment.authorId, comment.announcementId]);
    }

    export const deleteComment = (id: number): void => {
        database.prepare('DELETE FROM comment WHERE id = ?').run([id]);
    }
}