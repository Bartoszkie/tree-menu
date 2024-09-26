export interface JsonExpandableProps {
  isLastChild?: boolean;
  type: "object" | "array";
  node: any;
  keyName?: string;
  path: string;
  expandedNodes: { [key: string]: boolean };
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

export interface ItemsOfObjectOrArrayProps {
  node: any | any[];
  path: string;
  expandedNodes: { [key: string]: boolean };
  setExpandedNodes: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}
