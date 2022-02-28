import {  BrowserRouter,Route,Switch} from "react-router-dom";
import MyPage_SideMenubar from "../components/MyPage_SideMenubar";
import MyPage_Body from "../components/MyPage_Body";
import MyPage_SizeRegister from "../components/MyPage_SizeRegister";
import MyPage_MemberUnregister from "../components/MyPage_MemberUnregister";
import MyPage_MemberModify from "../components/MyPage_MemberModify";
import MyPage_MemberInformation from "../components/MyPage_MemberInformation";
import MyPage_AdProvePage from "../components/MyPage_AdProvePage";
import MyPage_ChartPage from "../components/MyPage_ChartPage";
import MyPage_AdManagerPage from "../components/MyPage_AdManagerPage";
import MyPage_Adapplication from "../components/MyPage_Adapplication";

function MyPage() {
  return (
    <>
      <MyPage_SideMenubar />
      <BrowserRouter>
        <MyPage_Body>
                <Switch>
                
                  <Route exact path="/MyPage_MemberModify">
                    <MyPage_MemberModify />
                  </Route>
                  <Route exact path="/MyPage_MemberUnregister">
                    <MyPage_MemberUnregister />
                  </Route>
                  <Route exact path="/MyPage_SizeRegister">
                    <MyPage_SizeRegister />
                  </Route>  
                  <Route exact path="/MyPage_Adapplication">
                    <MyPage_Adapplication />
                  </Route>
                  <Route exact path="/MyPage_ChartPage">
                      <MyPage_ChartPage />
                  </Route>
                  <Route exact path="/MyPage_AdProvePage">
                      <MyPage_AdProvePage />
                  </Route>
                  <Route path="/MyPage_AdManagerPage">
                      <MyPage_AdManagerPage />
                  </Route>
                  <Route path="/" >
                    <MyPage_MemberInformation />
                  </Route>

                  
              </Switch>
            
        </MyPage_Body>
      </BrowserRouter>
    </>
  );
}

export default MyPage;
