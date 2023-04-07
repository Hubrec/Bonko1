import { CommentHelpers } from "../models/comment/helpers";
import Comment from "../models/comment/comment";

export namespace CommentService {
    export const getAllComments = (): Array<Comment> => {
        return CommentHelpers.getAllComments();
    }

    export const getCommentById = (id: number): Comment => {
        return CommentHelpers.getCommentById(id);
    }

    export const createComment = (comment: Comment): void => {
        CommentHelpers.createComment(comment);
    }

    export const deleteComment = (id: number): void => {
        CommentHelpers.deleteComment(id);
    }
}

export default CommentService;