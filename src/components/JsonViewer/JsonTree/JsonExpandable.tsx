import React from "react";
import { Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { renderNode } from "./renderNode";
import styled from "styled-components";

export const JsonExpandable = ({
  type,
  node,
  keyName,
  path,
  expandedNodes,
  setExpandedNodes,
  isLastChild,
}: JsonExpandableProps) => {
  const currentPath = keyName ? `${path}.${keyName}` : path;
  const isExpanded = expandedNodes[currentPath] || false;
  const childCount = type === "array" ? node.length : Object.keys(node).length;

  const toggleExpand = () => {
    setExpandedNodes((prev) => ({
      ...prev,
      [currentPath]: !isExpanded,
    }));
  };

  return (
    <Stack
      ml="md"
      gap={0}
      style={{ position: "relative", marginLeft: "30px", marginTop: "15px" }}
      className={`tree-node ${isLastChild ? "last-child" : ""}`}
    >
      <ExpandableGroup className="tree-connector" onClick={toggleExpand}>
        <StyledIcon size={18} $isExpanded={isExpanded} />
        <Text>
          {keyName && (
            <strong style={{ marginLeft: "10px" }}>{keyName}: </strong>
          )}
          <Text style={{ color: "gray" }} component="span">
            [{childCount} {childCount === 1 ? "item" : "items"}]
          </Text>
        </Text>
      </ExpandableGroup>

      {isExpanded && type === "array" && (
        <KeysOfArray
          node={node}
          path={currentPath}
          expandedNodes={expandedNodes}
          setExpandedNodes={setExpandedNodes}
        />
      )}

      {isExpanded && type === "object" && (
        <KeysOfObject
          node={node}
          path={currentPath}
          expandedNodes={expandedNodes}
          setExpandedNodes={setExpandedNodes}
        />
      )}
    </Stack>
  );
};

/**
 * Components
 */
const KeysOfObject: React.FC<KeysOfObjectOrArrayProps> = ({
  node,
  path,
  expandedNodes,
  setExpandedNodes,
}) => {
  return (
    <>
      {Object.keys(node).map((key, index, array) => (
        <div key={key} style={{ marginLeft: 20 }}>
          {renderNode(
            node[key],
            `${path}.${key}`,
            expandedNodes,
            setExpandedNodes,
            key,
            index === array.length - 1
          )}
        </div>
      ))}
    </>
  );
};

const KeysOfArray: React.FC<KeysOfObjectOrArrayProps> = ({
  node,
  path,
  expandedNodes,
  setExpandedNodes,
}) => {
  return (
    <>
      {(node as []).map((item, index, array) => (
        <div key={index} style={{ marginLeft: 20 }}>
          {renderNode(
            item,
            `${path}[${index}]`,
            expandedNodes,
            setExpandedNodes,
            String(index),
            index === array.length - 1
          )}
        </div>
      ))}
    </>
  );
};

/**
 * Types
 */

interface KeysOfObjectOrArrayProps {
  node: any | any[];
  path: string;
  expandedNodes: { [key: string]: boolean };
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

interface JsonExpandableProps {
  isLastChild: boolean;
  type: "object" | "array";
  node: any;
  keyName?: string;
  path: string;
  expandedNodes: { [key: string]: boolean };
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

/**
 * Styles
 */
const ExpandableGroup = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledIcon = styled(IconChevronRight)<{ $isExpanded: boolean }>`
  transform: ${({ $isExpanded }) =>
    $isExpanded ? "rotate(90deg)" : "rotate(0deg)"};
  transition: transform 0.1s;
`;
