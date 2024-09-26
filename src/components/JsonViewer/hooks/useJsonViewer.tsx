import { useState } from "react";

export function useJsonViewer() {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonData, setJsonData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<{
    [key: string]: boolean;
  }>({});

  const handleJsonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setJsonInput(value);

    try {
      const parsedJson = JSON.parse(value);
      setJsonData(parsedJson);
      setError(false);
    } catch (e) {
      setError(true);
      setJsonData(null);
    }
  };

  return {
    error,
    jsonInput,
    jsonData,
    expandedNodes,
    setExpandedNodes,
    handleJsonChange,
  };
}
