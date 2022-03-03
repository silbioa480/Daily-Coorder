import React, { Component } from 'react';
import imgA from '../img/임시사진.png';
import '../css/Upload.css';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      tags: ["데일리코더", "OOTD"],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let files = e.target.files;
    let filesArr = Array.prototype.slice.call(files);
    this.setState({ files: [...this.state.files, ...filesArr] })
  };

  removeFile(f) {
    this.setState({ files: this.state.files.filter(x => x !== f) })
  };

  // 해시태그
  removeTag = (i) => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  }

  inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  };

  render() {
    const { tags } = this.state;
    return (
      <form id="upload-form">
        {/* 사진 업로드 */}
        <div className="upload-box">
          <label className="file-uploader">
            <input
              className="input input-file"
              type="file"
              mutiple
              onChange={this.onChange}
            /><i className="file-icon fa-solid fa-image"></i>
          </label>
          {
            this.state.files.map(x => <div className="file-name" onClick={this.removeFile.bind(this, x)} >{x.name}</div>)
          }
          {/* 사진 */}
          <img className="uploaded-image" src={imgA} />
        </div>
        {/* 제목 */}
        <div className="title-container">
          <input className="input" type="text" placeholder='제목을 입력하세요' />
        </div>
        {/* 내용 */}
        <div className="content-container">
          <textarea className="textarea" placeholder="내용을 입력하세요" name="content" id="content" cols="30" rows="5"></textarea>
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
                onKeyDown={this.inputKeyDown}
                ref={c => { this.tagInput = c; }}
                placeholder="해시태그를 입력해주세요"
                className="input"
              />
            </li>
            {tags.map((tag, i) => (
              <li className='hashtag' key={tag}>
                {tag}
                <button
                  type="button"
                  onClick={() => {
                    this.removeTag(i);
                  }}
                  className="button"
                >
                  <i className="fa-solid fa-delete-left"></i>
                </button>
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
      </form>
    );
  }
}

export default FileUpload;