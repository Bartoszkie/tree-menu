import { renderNode } from "./renderNode";

export const JsonTree = ({
  data,
  expandedNodes,
  setExpandedNodes,
}: JsonViewerProps) => {
  return (
    <div
      style={{
        width: "50%",
        paddingLeft: 10,
        borderLeft: "1px solid #ccc",
      }}
    >
      <div>{renderNode(data, "root", expandedNodes, setExpandedNodes)}</div>;
    </div>
  );
};

interface JsonViewerProps {
  data: any;
  expandedNodes: { [key: string]: boolean };
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}
