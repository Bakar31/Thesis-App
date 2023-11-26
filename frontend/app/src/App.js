import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import UploadImage from "./components/upload_image";
import DataCollectForm from "./components/data_collection";

function App() {
  const docs = [
    // { uri: "../plans/plan-1.docx" },
    { uri: require("./plans/plan-1.pdf") },
  ];

  return (
    <div className="App">
      <div className="flex flex-col space-y-5">
        <h1 className="text-center text-3xl font-bold">
          Treatment Plan Generation
        </h1>

        <div>
          <UploadImage />
        </div>
        <div>
          <DataCollectForm/>
        </div>
      </div>

      {/* <div>
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
      </div> */}
    </div>
  );
}

export default App;
