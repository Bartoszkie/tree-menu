import { useState } from "react";

export function useJsonViewer() {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonData, setJsonData] = useState<any>(null);
  const [error, setError] = useState("");
  const [expandedNodes, setExpandedNodes] = useState<{
    [key: string]: boolean;
  }>({});

  const handleJsonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setJsonInput(value);

    try {
      const parsedJson = JSON.parse(value);
      setJsonData(parsedJson);
      setError("");
    } catch (e) {
      setError("Invalid JSON");
      setJsonData(null);
    }
  };

  return {
    jsonInput,
    jsonData,
    error,
    expandedNodes,
    setExpandedNodes,
    handleJsonChange,
  };
}
