import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Plan2 = () => {
    const docs = [{ uri: require("../plans/plan-2.pdf") }];
  return (
    <div>
      {/* <h1>Plan Detail</h1> */}
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
}
 
export default Plan2;