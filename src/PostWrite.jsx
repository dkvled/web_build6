import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

export default function PostWrite() {
  const [title, setTitle] = useState('');
  const [data, setData] = useState('');
  const [day1, setDay1] = useState('');
  const [day2, setDay2] = useState('');
  const [image, setImage] = useState(null);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDataChange(value) {
    setData(value);
  }

  function handleDay1Change(e) {
    setDay1(e.target.value);
  }

  function handleDay2Change(e) {
    setDay2(e.target.value);
  }

  function handleImageChange(e) {
    const image = e.target.files[0]; // 변경: e.target.image[0] -> e.target.files[0]
    const allowedExtensions = /(\.png|\.jpg)$/i; // 허용되는 확장자 목록

    setImage(image);
     if (allowedExtensions.exec(image.name)) {
       setImage(image);
     } else {
       // 허용되지 않는 파일 형식일 경우 처리할 로직
       console.log('허용되지 않는 파일 형식입니다.');
    }
  }

  function handleSubmit(e) {
    e.preventDefault(); // 기본 form 제출 동작 막기

    // FormData 객체 생성
    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('day1', e.target.day1.value);
    formData.append('day2', e.target.day2.value);
    formData.append('data', e.target.data.value);
    // formData.append('image', image);
    // formData.append('title', title);
    // formData.append('day1', day1);
    // formData.append('day2', day2);
    // formData.append('data', data);
    // formData.append('image', image);
    // console.log(formData)
    // axios.post('/add', formData)
   // POST 요청 보내기
    // axios({
    //   url: "/add",
    //   method: "POST",
    //   data: formData
    // })
  }

  return (
    <div className="page2">
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="titleWrap2" style={{ marginTop: '20px' }}>
          게시글 작성
        </div>
        <input
          className="titleWrap3"
          type="text"
          placeholder="제목을 입력해 주세요"
          value={title}
          onChange={handleTitleChange}
          name="title"
        />

        <div className='dateWrap2'>
          <input
            className="dateWrap"
            type="date"
            name="day1"
            value={day1}
            onChange={handleDay1Change}/>~
          <input
            className="dateWrap"
            type="date"
            value={day2}
            onChange={handleDay2Change}
            name="day2"/>
        </div>

        <ReactQuill
          value={data}
          onChange={handleDataChange}
          className='reactQuill'
          name="data" />
        <div className='asd'>
          <input
            className='imagefile'
            type="file"
            accept=".png, .jpg"
            label = 'image'
            onChange={handleImageChange}
            name="image" />

          <button className="buttonPostWrite" type="submit" onClick={()=>{
            // axios.post('/add', {title : title, data: data, day1 : day1, day2:day2, image:image})
            const formData = new FormData();
            formData.append('title', title);
            formData.append('day1', day1);
            formData.append('day2', day2);
            formData.append('data', data);
            formData.append('image', image);
            axios.post('/add', formData)

          }} >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
}