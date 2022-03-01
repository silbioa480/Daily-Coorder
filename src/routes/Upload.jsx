import React, { Component } from 'react';
import imgA from '../imgs/1.png';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
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
  }

  render() {
    return (
      <form>
        {/* 사진 업로드 */}
        <div className="upload-box">
          <label className="file-uploader">
            <input
              type="file"
              mutiple
              onChange={this.onChange}
            /><i className="fa-solid fa-image"></i>
          </label>
          {
            this.state.files.map(x => <div className="file-name" onClick={this.removeFile.bind(this, x)} >{x.name}</div>)
          }
          {/* 사진 */}
          <img src={imgA} />
        </div>
        {/* 제목 */}
        <div>
          <input type="text" id="title" placeholder='제목을 입력하세요' />
        </div>
        {/* 내용 */}
        <div>
          <textarea placeholder="내용을 입력하세요" name="content" id="content" cols="30" rows="5"></textarea>
        </div>
        {/* url */}
        <div>
          <input type="url" placeholder='상품 url을 입력해주세요' />
        </div>
        {/* 해시태그 */}
        <div>
          <input
            type="text"
            placeholder="해시태그 입력(최대 10개)"
          />
        </div>
        {/* 업로드 버튼 */}
        <div className="share-box">
          <a href="#" className="share">공유</a>
        </div>
      </form>
    );
  }
}

export default FileUpload;