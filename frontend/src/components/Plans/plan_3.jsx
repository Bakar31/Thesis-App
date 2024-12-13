import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Plan3 = () => {
  const docs = [{ uri: require("../../plans/plan-3.pdf") }];
  return (
    <div>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
};

export default Plan3;
