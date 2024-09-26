import { Fragment } from "react";
import { renderNode } from "../renderNode";
import { RenderNodeWrapper } from "../../styles";
import { ItemsOfObjectOrArrayProps } from "../../types";

export const ItemsOfArray: React.FC<ItemsOfObjectOrArrayProps> = ({
  node,
  path,
  expandedNodes,
  setExpandedNodes,
}) => {
  return (
    <Fragment>
      {(node as []).map((item, index, array) => (
        <RenderNodeWrapper key={index}>
          {renderNode(
            item,
            `${path}[${index}]`,
            expandedNodes,
            setExpandedNodes,
            String(index),
            index === array.length - 1
          )}
        </RenderNodeWrapper>
      ))}
    </Fragment>
  );
};

