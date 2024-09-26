import { Text } from "@mantine/core";
import { JsonExpandable } from "./JsonExpandable";
import styled from "styled-components";
import { showNotification } from '@mantine/notifications';


export function renderNode(
  node: any,
  path: string,
  expandedNodes: { [key: string]: boolean },
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >,
  keyName?: string,
  isLastChild: boolean = false
) {
  const currentPath = (keyName ? `${path}.${keyName}` : path).replace('root.', '');
  const isJSONNode = typeof node === "object" && node !== null;
  const isArray = Array.isArray(node);

  const copyPathToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentPath);
      showNotification({
        title: 'Path Copied',
        message: `The path "${currentPath}" has been copied to your clipboard.`,
        color: 'green',
      });
    } catch (error) {
      showNotification({
        title: 'Error',
        message: 'Failed to copy the path to clipboard.',
        color: 'red',
      });
      console.error('Clipboard copy failed:', error);
    }
  };

  if (!isJSONNode) {
    return (
      <div
        className={`tree-node ${isLastChild ? "last-child" : ""}`}
        style={{ display: "flex", alignItems: "center", margin: "8px 0 8px 30px", position: "relative" }}
      >
        <StyledCopyButton onClick={copyPathToClipboard}>T</StyledCopyButton>
        <Text className="tree-connector">
          {keyName && <strong>{keyName}: </strong>}
          <span style={{ color: "gray" }}>{node && String(node)}</span>
        </Text>
      </div>
    );
  }

  if (isArray) {
    return (
      <JsonExpandable
        type="array"
        node={node}
        path={path}
        keyName={keyName}
        expandedNodes={expandedNodes}
        setExpandedNodes={setExpandedNodes}
        isLastChild={isLastChild}
      />
    );
  }

  if (!isArray) {
    return (
      <JsonExpandable
        type="object"
        node={node}
        path={path}
        keyName={keyName}
        expandedNodes={expandedNodes}
        setExpandedNodes={setExpandedNodes}
        isLastChild={isLastChild}
      />
    );
  }
}

/**
 * Styles
 */

const StyledCopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 3px;
  width: 10px;
  height: 10px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 10px;
  color: #0048c0;
  border: 2px solid #a0bffd;
  border-radius: 5px;

  background-color: #e6f2ff;
`;
