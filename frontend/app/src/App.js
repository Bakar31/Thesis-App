import UploadImage from "./components/upload_image";
import DataCollectForm from "./components/data_collection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex flex-col space-y-5">
          <h1 className="text-center text-3xl font-bold">
            Treatment Plan Generation
          </h1>
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
