import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "./routes/Detail";

import Home from "./routes/home";

function App() {
  // router: URL을 보고있는 component

  return (
    // <Router> 컴포넌트 안에 있는 서브 컴포넌트들은 유저들에게 보여주고 싶은 것
    // Route를 찾는 일 
    // 웹페이지 URL를 찾는 것  
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> : 한 번에 하나의 Route만 렌더링 하기 위해서 */}
      <Routes> 

        {/* url 주소, 주소에 해당하는 route 컴포넌트   */}
        {/* 영화 상세 페이지  */}
        {/* :id 값에 따른 route 이동 movie/id를 하게 되면 텍스트 그래도 "movie/id"로 이동하게 됨*/}
        <Route path={`/movie/:id`} element={<Detail/>}></Route>


        {/* url 주소, 주소에 해당하는 route 컴포넌트  */}
        <Route path={`/`} element={<Home/>}></Route> 

      </Routes>
    </Router>
  );
}

export default App;
