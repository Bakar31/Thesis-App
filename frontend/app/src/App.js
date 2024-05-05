import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadImage from "./components/upload_image";
import DataCollectForm from "./components/data_collection";
import Plan1 from "./components/plans/plan_1";
import Plan2 from "./components/plans/plan_2";
import Plan3 from "./components/plan_3";
import Plan4 from "./components/plan_4";
import Plan5 from "./components/plan_5";
import Plan6 from "./components/plan_6";
import Navbar from "./components/navbar/navbar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <div className="flex flex-col space-y-5">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-row">
                  <UploadImage />
                  <DataCollectForm />
                </div>
              }
            ></Route>
            <Route path="/plans/1" element={<Plan1 />}></Route>
            <Route path="/plans/2" element={<Plan2 />}></Route>
            <Route path="/plans/3" element={<Plan3 />}></Route>
            <Route path="/plans/4" element={<Plan4 />}></Route>
            <Route path="/plans/5" element={<Plan5 />}></Route>
            <Route path="/plans/6" element={<Plan6 />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
