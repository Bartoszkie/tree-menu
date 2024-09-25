import {
  Text,
} from "@mantine/core";
import { JsonObject } from "./JsonObject";
import { JsonArray } from "./JsonArray";

export function renderNode(
  node: any,
  path: string,
  expandedNodes: { [key: string]: boolean },
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >,
  keyName?: string
) {
  if (typeof node === "object" && node !== null) {
    if (Array.isArray(node)) {
      return (
        <JsonArray
          node={node}
          keyName={keyName}
          path={path}
          expandedNodes={expandedNodes}
          setExpandedNodes={setExpandedNodes}
        />
      );
    } else {
      return (
        <JsonObject
          node={node}
          keyName={keyName}
          path={path}
          expandedNodes={expandedNodes}
          setExpandedNodes={setExpandedNodes}
        />
      );
    }
  } else {
    return (
      <Text>
        {keyName && <strong>{keyName}: </strong>}
        {String(node)}
      </Text>
    );
  }
}
