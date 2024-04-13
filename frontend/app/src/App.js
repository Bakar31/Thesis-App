import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UploadImage from "./components/upload_image";
import DataCollectForm from "./components/data_collection";
import Plan1 from "./components/plans/plan_1";
import Plan2 from "./components/plan_2";
import Plan3 from "./components/plan_3";
import Plan4 from "./components/plan_4";
import Plan5 from "./components/plan_5";
import Plan6 from "./components/plan_6";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex flex-col space-y-5">
          <Link to={"/"} className="text-center text-3xl font-bold">
            Treatment Plan Generation
          </Link>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <UploadImage />
                  <DataCollectForm />
                </>
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
