import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MemInfoCss from '../css/MyPage_MemInfoCss';
import { Figure } from 'react-bootstrap';




function MyPage_MemberInformation(){
    const [member,setMember]=useState([]);

    return (
            <>
                <MemInfoCss />
                <div className="memberContainer">
                        <div>
                            <Figure>
                                <Figure.Image
                                    width={140}
                                    height={160}
                                    alt="140 x 300"
                                    src="holder.js/140x160"
                                    className="bg-primary"
                                />
                            </Figure>
                            <input type="file" />
                        </div>
                    
                            <div>
                                 <span>아이디:</span>
                                  <span>{member}</span>
                            </div>
                           
                     
                            <div>
                                    <span>비밀번호:</span>
                                  <span></span>
                            </div>
                           
                       
                            <div>
                                  <span>이메일:</span>
                                  <span></span>
                            </div>
                      
                            <div>
                                 체형
                            </div>
                            <div>
                                <span>키:</span><span></span>
                                <span>몸무게:</span><span></span>
                            </div>
                           
                       

                </div>
            </>

    );
}

export default MyPage_MemberInformation;