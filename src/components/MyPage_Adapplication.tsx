import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import AdApplicationCss from '../css/MyPage_AdapplicationCss';
import {Button, Form, FormControl} from 'react-bootstrap';
import {useCallback, useState} from 'react';
import "../css/main/animation.css";


function MyPage_Adapplication() {
    const [imgfiles, setImgFiles] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [hasharr, setHasharr] = useState<String[]>([]);

    const onloadfile = (event: any) => {
        const file = event.target.files;
        setImgFiles(URL.createObjectURL(file[0]));
    }

    const onChangeHashtag = (event: any) => {
        setHashtag(event.target.value);
    }

    const onKeyUp = useCallback((event: any) => {
        const domtag = document.querySelector('.tagbox');
        const innertag = document.createElement('div');
        innertag.className = 'innertag';
        innertag.addEventListener('click', () => {
            domtag?.removeChild(innertag);
            setHasharr(hasharr.filter((hashtag) => hashtag));
        });

        if (event.keyCode === 13 && event.target.value.trim() !== '') {
            innertag.innerHTML = '#' + event.target.value;
            domtag?.appendChild(innertag);
            setHasharr((hasharr) => ([...hasharr, hashtag]));
            setHashtag('');
        }
    }, [hashtag, hasharr]);
    return (
        <>
            <AdApplicationCss/>
            <div style={{textAlign: 'center'}}>
                <div className="aa AdContainer" style={{width: "70%", display: "inline-block"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <p style={{fontWeight: "bold", fontSize: "2vw"}}>광고 신청란</p>
                    </div>
                    <div className="TitleSpace">
                        <Form.Label
                            style={{textAlign: "center", marginTop: "1vw", fontWeight: "bold", fontSize: "1.5vw"}}>광고
                            제목</Form.Label>
                        <Form.Control type="text" placeholder="제목 입력" style={{marginTop: "1vw"}}/>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className="AdImg">
                            <Image src={imgfiles} thumbnail style={{height: "100%"}} alt="Ad image"/>
                            <label className="btn btn-white bg-white" htmlFor="adimage"
                                   style={{color: "black", fontWeight: "bold", fontSize: "1vw", borderRadius: "20px"}}>
                                광고 이미지 선택<Form.Control type="file" style={{display: "none"}} onChange={onloadfile}
                                                       id="adimage" accept="image/*"/>
                            </label>
                        </div>
                        <div style={{
                            marginLeft: "1vw",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                            <div className="Adurl">
                                <Form.Label style={{fontWeight: "bold", fontSize: "1.3vw"}}>URL</Form.Label>
                                <Form.Control type="url" placeholder="URL 입력"
                                              style={{width: "300px", marginTop: "1vw"}}/>
                            </div>
                            <div className="TagSpace" style={{marginBottom: "2vw"}}>

                                <Form.Label style={{fontWeight: "bold", fontSize: "1.3vw"}}>태그 선택 공간</Form.Label>
                                <div className="tagbox" style={{marginBottom: "1vh"}}></div>
                                <Form.Control type="text" placeholder="태그 입력" value={hashtag} onChange={onChangeHashtag}
                                              onKeyUp={onKeyUp}/>
                            </div>
                        </div>
                    </div>

                    <div className="Addescription">
                        <Form.Label style={{textAlign: "center", fontWeight: "bold", fontSize: "1.5vw"}}>광고 내용
                            설명</Form.Label>
                        <FormControl as="textarea" aria-label="내용 설명" placeholder="내용을 입력하세요"
                                     style={{marginTop: "1vw"}}/>
                    </div>
                    <div className="buttonspace">
                        <Button>광고 등록 신청</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyPage_Adapplication;

