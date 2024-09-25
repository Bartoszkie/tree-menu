import { Text, Textarea } from "@mantine/core";

export const JsonTextArea: React.FC<JsonTextAreaProps> = ({
  jsonInput,
  handleJsonChange,
  error,
}) => {
  return (
    <div style={{ width: "50%", paddingRight: 10 }}>
      <Textarea
        placeholder="Paste your JSON here"
        value={jsonInput}
        onChange={handleJsonChange}
        minRows={20}
        autosize
      />
      {error && <Text color="red">{error}</Text>}
    </div>
  );
};

interface JsonTextAreaProps {
  jsonInput: string;
  handleJsonChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
}
