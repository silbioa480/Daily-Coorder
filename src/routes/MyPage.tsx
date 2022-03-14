import { Route, Switch } from "react-router-dom";
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
import MyPage_detailChartPage from "../components/MyPage_detailChartPage";

function MyPage() {
  return (
    <>
      <MyPage_SideMenubar />

      <MyPage_Body>
        <Switch>

          <Route exact path="/member/MyPage_MemberModify">
            <MyPage_MemberModify />
          </Route>
          <Route exact path="/member/MyPage_MemberUnregister">
            <MyPage_MemberUnregister />
          </Route>
          <Route exact path="/member/MyPage_SizeRegister">
            <MyPage_SizeRegister />
          </Route>
          <Route exact path="/member/MyPage_Adapplication">
            <MyPage_Adapplication />
          </Route>
          <Route exact path="/member/MyPage_ChartPage">
            <MyPage_ChartPage />
          </Route>
          <Route exact path="/member/MyPage_AdProvePage">
            <MyPage_AdProvePage />
          </Route>
          <Route path="/member/MyPage_AdManagerPage">
            <MyPage_AdManagerPage />
          </Route>
          <Route path="/member/MyPage_ChartPage/MyPage_detailChartPage">
            <MyPage_detailChartPage />
          </Route>

          <Route path="/member/" >
            <MyPage_MemberInformation />
          </Route>


        </Switch>

      </MyPage_Body>
    </>
  );
}

export default MyPage;
