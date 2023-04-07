import { createAction, createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        commentRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
    commentsRequested,
    commentsReceived,
    commentsRequestFailed,
    commentCreated,
    commentRemoved
} = actions;
const commentCreateRequested = createAction("comments/commentCreateRequested");
const commentCreateRequestFailed = createAction(
    "comment/commentCreateRequestFailed"
);
const commentRemoveRequest = createAction("comment/commentRemoveRequest");
const commentRemoveRequestFailed = createAction(
    "comment/commentRemoveRequestFailed"
);

export const loadCommentsList = (userId) => async (dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.getComments(userId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export const createComment = (data) => async (dispatch) => {
    dispatch(commentCreateRequested());
    try {
        const { content } = await commentService.createComment(data);
        dispatch(commentCreated(content));
    } catch (error) {
        dispatch(commentCreateRequestFailed(error.message));
    }
};

export const removeComment = (id) => async (dispatch) => {
    dispatch(commentRemoveRequest());
    try {
        const { content } = await commentService.removeComment(id);
        if (content === null) {
            dispatch(commentRemoved(id));
        }
    } catch (error) {
        dispatch(commentRemoveRequestFailed(error.message));
    }
};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading;

export default commentsReducer;
