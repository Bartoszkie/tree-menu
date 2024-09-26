import { Fragment } from "react";
import { renderNode } from "../renderNode";
import { RenderNodeWrapper } from "../../styles";
import { ItemsOfObjectOrArrayProps } from "../../types";

export const ItemsOfObject: React.FC<ItemsOfObjectOrArrayProps> = ({
  node,
  path,
  expandedNodes,
  setExpandedNodes,
}) => {
  return (
    <Fragment>
      {Object.keys(node).map((key, index, array) => (
        <RenderNodeWrapper key={key}>
          {renderNode(
            node[key],
            `${path}.${key}`,
            expandedNodes,
            setExpandedNodes,
            key,
            index === array.length - 1
          )}
        </RenderNodeWrapper>
      ))}
    </Fragment>
  );
};
