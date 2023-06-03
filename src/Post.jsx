import React, { useState } from 'react';

export default function Post() {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const author = 'John Doe';
  const title = '게시글 제목';
  const day1 = '2023-05-25';
  const day2 = '2023-05-27';
  const data = '게시글 내용입니다.';
  const image = null; // 이미지 데이터를 넣어주세요.

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handleSubmitComment(e) {
    e.preventDefault();

    if (comment.trim() !== '') {
      const newComment = {
        id: comments.length + 1,
        text: comment,
      };

      setComments([...comments, newComment]);
      setComment('');
    }
  }

  return (
    <div className="post">
      <div className="postHeader">
        <div className="author">{author}</div>
        <div className="title">{title}</div>
        <div className="dateRange">
          <p>{day1}</p>~<p>{day2}</p>
        </div>
      </div>

      <div className="content">{data}</div>

      {image && (
        <div className="image">
          <img src={URL.createObjectURL(image)} alt="Post" />
        </div>
      )}

      <div className="interactions">
        <button className="likeButton" onClick={handleLike}>
          좋아요 ({likes})
        </button>

        <div className="comments">
          <form onSubmit={handleSubmitComment}>
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="댓글을 남겨주세요."
            />
            <button type="submit">제출</button>
          </form>

          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
