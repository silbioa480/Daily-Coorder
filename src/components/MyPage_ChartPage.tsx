import Pie_chart from '../components/Pie_chart';
import { Button } from 'react-bootstrap';
import { useState } from 'react';



function MyPage_ChartPage(){
    const [show,setShow]=useState(false);
    const [hide,setHide]=useState(true);

    const HandleClick=()=>{
        setShow(true);
        setHide(false);
    }
    return (
        <>
               {hide && <Button onClick={HandleClick}>상세 차트 표시</Button>}
               {show && <Pie_chart />}
        </>
    );
}

export default MyPage_ChartPage;