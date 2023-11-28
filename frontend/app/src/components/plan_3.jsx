import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Plan3 = () => {
    const docs = [{ uri: require("../plans/plan-3.pdf") }];
  return (
    <div>
      {/* <h1>Plan Detail</h1> */}
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
}
 
export default Plan3;