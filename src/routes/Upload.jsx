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
      <form onSubmit={handleSubmit(onSubmit)} id="upload-form">
        {/* 업로드 */}
        <input
          className='upload-input'
          type="file"
          accept="image/*"
          onChange={e => insertImg(e)}
          id='upload-input'
          ref={register({ required: true })}
        />
        <label for="upload-input">
          <div className='img-box'>
            <img src={previewImg ? previewImg : "https://media.istockphoto.com/vectors/image-upload-icon-vector-id1206577970?k=20&m=1206577970&s=170667a&w=0&h=53at7rxKBtZd8woBU2fXSN9nUygXzabXPN4QPxgdsCA="} alt="noImg" />
            <button className='delete-button' onClick={deleteImg}><i class="fa-solid fa-delete-left"></i></button>
          </div>
        </label>
        {errors.upload && <h4 className="errorMsg">사진을 업로드하세요.</h4>}
        {/* 제목 */}
        <div className="title-container">
          <input
            name="title"
            className="input"
            type="text"
            placeholder='제목을 입력하세요'
            ref={register({ required: true })}
          />
          {/* <label for="title">제목을 입력하세요</label> */}
          {errors.title && <h4 className='errorMsg'>제목은 필수입력 항목입니다.</h4>}
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
                  className='delete-button'
                  onClick={(i) => removeTag(i)}
                ><i class="fa-solid fa-delete-left"></i></button>
              </li>
            ))}
          </ul>
        </div>
        {/* 업로드 버튼 */}
        <div className="share-box ">
          <button className="share-button">
            <a href="/src/routes/Main.tsx">공유</a>
          </button>
        </div>
      </form >
    </>
  );
};

export default Upload;