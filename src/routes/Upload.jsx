import React, { useRef, useState } from "react";
import "../css/Upload.css";
import { useForm } from "react-hook-form";
import "../css/main/animation.css";
import boardService from "../service/BoardService";
import BoardImageService from "../service/BoardImageService";
import TagService from "../service/TagService";
import { Link } from "react-router-dom";

const Upload = (props) => {
  // 유효성 체크
  const { register, watch, errors, handleSubmit } = useForm();

  const [myId, setMyId] = useState("1");

  const onSubmit = async ({ image, title, text, url, tags }) => {
    let i = await BoardImageService.createBoardImage(image).then(
      (res) => res.data
    );

    let board = {
      board_poster: myId,
      board_image: i,
      board_title: title,
      board_content: text,
      board_url: url,
      board_like_number: 0,
      board_view: 0,
      board_post_date: new Date(),
    };
    let newBoard = await boardService.createBoard(board);

    tags.map(async (tag) => {
      let t = {
        board_id: newBoard.board_id,
        tag_name: tag,
      };
      await TagService.createTag(t);
    });
  };

  // 사진업로더
  const [previewImg, setPreviewImg] = useState(null);
  const [img, setImg] = useState();

  const insertImg = (e) => {
    // console.log(e.target.file[0])
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };
  };

  const deleteImg = () => {
    setPreviewImg(null);
  };

  // 해시태그
  const [tags, setTags] = useState(["데일리코더", "OOTD"]);
  const tagInput = useRef();

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      setTags([...tags, val]);
      tagInput.current.value = "";
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit(onSubmit)} id="upload-form">
        {/* 업로드 */}
        <input
          className="upload-input"
          type="file"
          accept="image/*"
          onChange={(e) => insertImg(e)}
          id="upload-input"
          {...register("image", { required: true })}
        />
        <label for="upload-input">
          <div className="img-box">
            <img
              src={
                previewImg
                  ? previewImg
                  : "https://media.istockphoto.com/vectors/image-upload-icon-vector-id1206577970?k=20&m=1206577970&s=170667a&w=0&h=53at7rxKBtZd8woBU2fXSN9nUygXzabXPN4QPxgdsCA="
              }
              alt="noImg"
              className="aa"
            />
            <button className="aa delete-button" onClick={deleteImg}>
              <i class="fa-solid fa-delete-left"></i>
            </button>
          </div>
        </label>
        {/* {errors.upload && <h4 className="errorMsg">사진을 업로드하세요.</h4>} */}
        {/* 제목 */}
        <div className="aa title-container">
          <input
            name="title"
            className="input"
            type="text"
            placeholder="제목을 입력하세요"
            // {...register("title", { required: true })}
          />
          {/* <label for="title">제목을 입력하세요</label> */}
          {/* {errors.title && (
            <h4 className="errorMsg">제목은 필수입력 항목입니다.</h4>
          )} */}
        </div>
        {/* 내용 */}
        <div className="aa content-container">
          <textarea
            className="textarea"
            placeholder="내용을 입력하세요"
            name="content"
            id="content"
            cols="30"
            rows="5"
            {...register("text")}
          />
        </div>
        {/* url */}
        {/*<div className="aa url-container ">*/}
        {/*  <input*/}
        {/*    className="input"*/}
        {/*    type="url"*/}
        {/*    placeholder="상품 url을 입력해주세요"*/}
        {/*    {...register("url")}*/}
        {/*  />*/}
        {/*</div>*/}
        {/* 해시태그 */}
        <div className="aa hashtag-container">
          <ul className="hashtag-list">
            <li>
              <input
                type="text"
                placeholder="해시태그를 입력해주세요"
                className="input"
                onKeyDown={inputKeyDown}
                ref={tagInput}
                {...register("tags")}
              />
            </li>
            {tags.map((tag, i) => (
              <li className="hashtag" key={tag}>
                {tag}
                <button
                  type="button"
                  className="delete-button"
                  onClick={(i) => removeTag(i)}
                >
                  <i class="fa-solid fa-delete-left"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* 업로드 버튼 */}
        <div className="bb share-box ">
          <button type="submit" className="share-button">
            <Link to="/">공유</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
