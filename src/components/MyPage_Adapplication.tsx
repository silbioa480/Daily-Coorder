import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import AdApplicationCss from '../css/MyPage_AdapplicationCss';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';


function MyPage_Adapplication(){
    return (
        <>
            <AdApplicationCss />
                <div className="AdContainer">
                        <div className="TitleSpace">
                            <Form.Label>광고 제목</Form.Label>
                            <Form.Control type="text" placeholder="제목 입력" />
                        </div>
                        <div className="AdImg">
                            <Image src="" thumbnail style={{height:"100%"}} alt="Ad image"/>
                            <Form.Control type="file" />
                        </div>
                        <div className="Adurl">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="url" placeholder="URL 입력" />
                        </div>
                        <div className="TagSpace">
                                <Form.Label>태그 선택 공간</Form.Label>
                                <Form.Control type="text" placeholder="태그 입력" />
                        </div>

                        <div className="Addescription">
                            <InputGroup>
                                    <InputGroup.Text>광고 내용</InputGroup.Text>
                                    <FormControl as="textarea" aria-label="내용 설명" placeholder="내용을 입력하세요"/>
                            </InputGroup>
                        </div>
                        <div className="buttonspace">
                            <Button>광고 등록 신청</Button>
                        </div>
                </div>
        </>
    );
}

export default MyPage_Adapplication;

