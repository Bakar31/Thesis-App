import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Plan6 = () => {
    const docs = [{ uri: require("../plans/plan-1.pdf") }];
  return (
    <div>
      {/* <h1>Plan Detail</h1> */}
      <h1>No Plan Available</h1>
      {/* <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} /> */}
    </div>
  );
}
 
export default Plan6;