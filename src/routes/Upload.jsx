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
        <div>
          <label className="file-uploader">
            <input
              type="file"
              mutiple
              onChange={this.onChange}
            />사진 올리기
          </label>
          {
            this.state.files.map(x => <div className="file-name" onClick={this.removeFile.bind(this, x)} >{x.name}</div>)
          }
        </div>
        {/* 사진 */}
        <img src={imgA} />
        {/* 제목 */}
        <div>
          <input type="text" id="title" placeholder='제목을 입력하세요.' />
        </div>
        {/* 내용 */}
        <div>
          <input type="text" placeholder="내용을 입력해주세요." />
        </div>
        {/* url */}
        <div>
          <input type="url" placeholder='상품 url을 입력해주세요.' />
        </div>
        {/* 해시태그 */}
        <div>
          <input
            type="text"
            placeholder="해시태그 입력(최대 10개)"
          />
        </div>
        {/* 업로드 버튼 */}
        <div>
          <a href="#">전송</a>
        </div>
      </form>
    );
  }
}

export default FileUpload;