import styled from "styled-components";
import { renderNode } from "./renderNode";
import { Text, Paper } from "@mantine/core";
import { JsonIcon } from "../../../assets/icons/JsonIcon";
import { CloseButton } from "@mantine/core";
import { onCloseButton } from "../utils";

export const JsonTree = ({
  data,
  expandedNodes,
  setExpandedNodes,
}: JsonViewerProps) => {
  return (
    <Paper
      shadow="xs"
      w={"100%"}
      h={"100%"}
      radius={"md"}
      style={{
        backgroundColor: "white",
      }}
    >
      <CellDetailsHeader>
        <JsonIcon />
        <Text
          style={{
            marginLeft: "10px",
            marginRight: "auto",
            fontWeight: "500",
            fontSize: "1.5rem",
          }}
          size="xl"
        >
          Cell Details
        </Text>
        <CloseButton onClick={() => onCloseButton()} />
      </CellDetailsHeader>
      <div style={{ padding: "0 15px" }}>
        {renderNode(data, "root", expandedNodes, setExpandedNodes)}
      </div>
    </Paper>
  );
};

/**
 * Types
 */
interface JsonViewerProps {
  data: any;
  expandedNodes: { [key: string]: boolean };
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

/**
 * Styles
 */
const CellDetailsHeader = styled.div`
  padding: 20px 30px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid #3333;
`;
