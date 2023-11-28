import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Plan5 = () => {
    const docs = [{ uri: require("../plans/plan-5.pdf") }];
  return (
    <div>
      {/* <h1>Plan Detail</h1> */}
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
}
 
export default Plan5;