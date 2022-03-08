import React, { useState, useRef } from 'react';
import '../css/Upload.css';
import { useForm } from 'react-hook-form';


const Upload = (props) => {
  // 유효성 체크
  const { register, watch, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
  };

  // 사진업로더
  const [previewImg, setPreviewImg] = useState(null);
  const [img, setImg] = useState();

  const insertImg = (e) => {
    // console.log(e.target.file[0])
    let reader = new FileReader()

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result

      if (previewImgUrl) {
        setPreviewImg(previewImgUrl)
      }
    }
  };

  const deleteImg = () => {
    setPreviewImg(null)
  }

  // 해시태그
  const [tags, setTags] = useState(["데일리코더", "OOTD"]);
  const tagInput = useRef();

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      setTags([...tags, val]);
      tagInput.current.value = "";
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  };

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };


  return (
    <>
      <img src={previewImg ? previewImg : "https://previews.123rf.com/images/sulikns/sulikns1707/sulikns170700286/82176269-%EC%B9%B4%EB%A9%94%EB%9D%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%A7%84-%EC%82%AC%EC%A7%84-%EC%82%AC%EC%A7%84-%EC%95%84%EC%9D%B4%EC%BD%98.jpg"} alt="" />
      <button onClick={deleteImg}>❌</button>
      <form onSubmit={handleSubmit(onSubmit)} id="upload-form">
        <input
          type="file"
          accept="image/*"
          onChange={e => insertImg(e)}
          ref={register({ required: true })}
        />
        {errors.upload && <h4>사진을 업로드하세요.</h4>}

        {/* 이전 사진 업로드
        <div div className="upload-box" >
          <input
            name='upload'
            className="input input-file"
          /><i
            className="file-icon fa-solid fa-image"
          ></i>
        </div > */}

        {/* 제목 */}
        <div className="title-container">
          <input
            name="title"
            className="input"
            type="text"
            placeholder='제목을 입력하세요'
            ref={register({ required: true })}
          />
          {errors.title && <h4>제목을 입력하세요.</h4>}
        </div>
        {/* 내용 */}
        <div className="content-container">
          <textarea className="textarea" placeholder="내용을 입력하세요" name="content" id="content" cols="30" rows="5">
          </textarea>
        </div>
        {/* url */}
        <div className='url-container '>
          <input className="input" type="url" placeholder='상품 url을 입력해주세요' />
        </div>
        {/* 해시태그 */}
        <div className="hashtag-container">
          <ul className="hashtag-list">
            <li>
              <input
                type="text"
                placeholder="해시태그를 입력해주세요"
                className="input"
                onKeyDown={inputKeyDown}
                ref={tagInput}
              />
            </li>
            {tags.map((tag, i) => (
              <li className='hashtag' key={tag}>
                {tag}
                <button
                  type="button"
                  onClick={(i) => removeTag(i)}
                >Remove</button>
              </li>
            ))}
          </ul>
        </div>
        {/* 업로드 버튼 */}
        <div className="share-box ">
          <button className="share-button">
            <a href="#">공유</a>
          </button>
        </div>
      </form >
    </>

  );
};

export default Upload;