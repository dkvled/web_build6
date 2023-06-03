import React from 'react';
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostFilter = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts') //실제 백엔드 서버의 URL에 맞게 수정해야 함
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='page3'>
      <div className="post-filter">
        <button>
          <Link to="/PostWrite">게시글 쓰기</Link>
        </button>
        <select>
          <option>최신순</option>
          <option>조회순</option>
        </select>
        <input type="text" placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>

      <div className="post-list">
        <ul>
          <div className='post-setting'>
            <li>
              <h3 style={{ marginLeft: "30px" }}>제목</h3>
              <h3 style={{ marginRight: "500px" }}>활동 기간</h3>
            </li>
          </div>

          {posts.map((post, index) => (
            <li key={index}>
              <div className="post-details">
                <Link to="/post" style={{ marginLeft: "30px" }}>{post.제목}</Link>
              </div>
              <p style={{ marginRight: "400px" }}>{post.날짜1}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostFilter;
