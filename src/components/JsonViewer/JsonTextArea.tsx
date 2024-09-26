import { Textarea } from "@mantine/core";
import styled from "styled-components";

export const JsonTextArea: React.FC<JsonTextAreaProps> = ({
  error,
  jsonInput,
  handleJsonChange,
}) => {
  return (
    <StyledJsonTextAreaWrapper>
      <StyledTextArea
        autosize
        radius={10}
        minRows={63}
        value={jsonInput}
        error={error ? "Invalid JSON" : false}
        placeholder="Paste your JSON here"
        onChange={handleJsonChange}
      />
    </StyledJsonTextAreaWrapper>
  );
};

/**
 * Types
 */
interface JsonTextAreaProps {
  error: boolean;
  jsonInput: string;
  handleJsonChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * Styles
 */

const StyledJsonTextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledTextArea = styled(Textarea)`
  height: 100%;
  width: 100%;
`;
