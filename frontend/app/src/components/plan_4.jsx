import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Plan4 = () => {
    const docs = [{ uri: require("../plans/plan-4.pdf") }];
  return (
    <div>
      {/* <h1>Plan Detail</h1> */}
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
}
 
export default Plan4;