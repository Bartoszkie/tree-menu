import { useJsonViewer } from "./hooks/useJsonViewer";
import { JsonTextArea } from "./JsonTextArea/JsonTextArea";
import { JsonTree } from "./JsonTree/JsonTree";

export const JsonViewer = () => {
  const {
    error,
    jsonInput,
    jsonData,
    expandedNodes,
    setExpandedNodes,
    handleJsonChange,
  } = useJsonViewer();

  return (
    <div style={{ display: "flex" }}>
      <JsonTextArea
        error={error}
        jsonInput={jsonInput}
        handleJsonChange={handleJsonChange}
      />
      <JsonTree
        data={jsonData}
        expandedNodes={expandedNodes}
        setExpandedNodes={setExpandedNodes}
      />
    </div>
  );
};
