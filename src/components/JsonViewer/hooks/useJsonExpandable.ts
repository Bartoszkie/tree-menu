import { JsonExpandableProps } from "../types";

export const useJsonExpandable = ({
  node,
  path,
  expandedNodes,
  setExpandedNodes,
  keyName,
  type,
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

  return { currentPath, isExpanded, childCount, toggleExpand };
};
