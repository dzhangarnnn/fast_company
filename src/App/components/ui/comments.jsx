import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import api from "../../api";
import { useParams } from "react-router-dom";
=======
import { useParams } from "react-router-dom";
import api from "../../../api";
>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
import CommentsList, { AddCommentForm } from "../common/comments";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
<<<<<<< HEAD
            .then((data) => setComments(data));
    }, []);
    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, pageId: userId })
            .then((data) => setComments([...comments, data]));
    };
    const handleRemoveComment = (id) => {
        api.comments.remove(id).then((id) => {
            setComments(comments.filter((x) => x._id !== id));
=======
            .then(data => setComments(data));
    }, []);
    const handleSubmit = data => {
        api.comments
            .add({ ...data, pageId: userId })
            .then(data => setComments([...comments, data]));
    };
    const handleRemoveComment = id => {
        api.comments.remove(id).then(id => {
            setComments(comments.filter(x => x._id !== id));
>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
        });
    };
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        <CommentsList
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
