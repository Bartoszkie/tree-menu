import React from "react";
import { Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import styled from "styled-components";
import { ItemsOfArray } from "./Items/ItemsOfArray";
import { ItemsOfObject } from "./Items/ItemsOfObject";
import { JsonExpandableProps } from "../types";
import { useJsonExpandable } from "../hooks/useJsonExpandable";

export const JsonExpandable = ({
  type,
  node,
  path,
  keyName,
  isLastChild,
  expandedNodes,
  setExpandedNodes,
}: JsonExpandableProps) => {
  const { currentPath, isExpanded, childCount, toggleExpand } =
    useJsonExpandable({
      node,
      path,
      type,
      keyName,
      expandedNodes,
      setExpandedNodes,
    });

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
          {keyName && <StyledKeyName>{keyName}: </StyledKeyName>}
          <Text c="gray" span>
            [{childCount} {childCount === 1 ? "item" : "items"}]
          </Text>
        </Text>
      </ExpandableGroup>

      {isExpanded && type === "array" && (
        <ItemsOfArray
          node={node}
          path={currentPath}
          expandedNodes={expandedNodes}
          setExpandedNodes={setExpandedNodes}
        />
      )}

      {isExpanded && type === "object" && (
        <ItemsOfObject
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
 * Styles
 */
const StyledKeyName = styled.strong`
  margin-left: 10px;
`;

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
