import {
  Text,
  Group,
  Stack,
} from "@mantine/core";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { renderNode } from "./renderNode";

export function JsonArray({
    node,
    keyName,
    path,
    expandedNodes,
    setExpandedNodes,
  }: {
    node: any[];
    keyName?: string;
    path: string;
    expandedNodes: { [key: string]: boolean };
    setExpandedNodes: React.Dispatch<
      React.SetStateAction<{ [key: string]: boolean }>
    >;
  }) {
    const currentPath = keyName ? `${path}.${keyName}` : path;
    const isExpanded = expandedNodes[currentPath] || false;
  
    const toggleExpand = () => {
      setExpandedNodes((prev) => ({
        ...prev,
        [currentPath]: !isExpanded,
      }));
    };
  
    return (
      <Stack gap={0} ml="md">
        <Group gap="xs" onClick={toggleExpand} style={{ cursor: "pointer" }}>
          {isExpanded ? (
            <IconChevronDown size={14} />
          ) : (
            <IconChevronRight size={14} />
          )}
          <Text>
            {keyName && <strong>{keyName}: </strong>}
            {"[ ]"}
          </Text>
        </Group>
        {isExpanded &&
          node.map((item, index) => (
            <div key={index} style={{ marginLeft: 20 }}>
              {renderNode(
                item,
                `${currentPath}[${index}]`,
                expandedNodes,
                setExpandedNodes,
                String(index)
              )}
            </div>
          ))}
      </Stack>
    );
  }