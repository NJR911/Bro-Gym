import Sidebar from "../../components/Layouts/sidebar";
import './dashboard.css';
import { blogPosts,  comments as initialComments } from './Blog';
import { useState } from "react";


export default function Blog() {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState({ name: '', text: '' });
    const [activePostId, setActivePostId] = useState(null);

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    };

    const handleCommentSubmit = (postId) => {
        if (newComment.name && newComment.text) {
            const newCommentObj = {
                id: comments[postId].length + 1,
                ...newComment
            };
            setComments({
                ...comments,
                [postId]: [...comments[postId], newCommentObj]
            });
            setNewComment({ name: '', text: '' });
            setActivePostId(null);
        }
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h2 className="blog-header">Bro-Gym Blog</h2>
                {blogPosts.map(post => (
                    <div key={post.id} className="blog-post">
                        <h3 className="blog-post-title">{post.title}</h3>
                        <p className="blog-post-date">{post.date}</p>
                        <p className="blog-post-content">{post.content}</p>
                        <div className="comments-section">
                            <h4>Comments</h4>
                            {comments[post.id] && comments[post.id].map(comment => (
                                <div key={comment.id} className="comment">
                                    <p><strong>{comment.name}</strong>: {comment.text}</p>
                                </div>
                            ))}
                            {activePostId === post.id ? (
                                <div className="comment-form">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={newComment.name}
                                        onChange={handleCommentChange}
                                    />
                                    <textarea
                                        name="text"
                                        placeholder="Your comment"
                                        value={newComment.text}
                                        onChange={handleCommentChange}
                                    />
                                    <button onClick={() => handleCommentSubmit(post.id)}>Submit</button>
                                </div>
                            ) : (
                                <button className="blog-button" onClick={() => setActivePostId(post.id)}>Add Comment</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
