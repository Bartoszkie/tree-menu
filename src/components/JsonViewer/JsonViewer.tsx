import { useJsonViewer } from "./hooks/useJsonViewer";
import { JsonTextArea } from "./JsonTextArea/JsonTextArea";
import { JsonTree } from "./JsonTree/JsonTree";

import styled from "styled-components";

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
    <JsonViewerWrapper>
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
    </JsonViewerWrapper>
  );
};

/**
 * Styles
 */

const JsonViewerWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ccc;
`;
