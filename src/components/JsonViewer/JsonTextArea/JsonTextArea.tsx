import { Text, Textarea } from "@mantine/core";
import styled from "styled-components";

export const JsonTextArea: React.FC<JsonTextAreaProps> = ({
  error,
  jsonInput,
  handleJsonChange,
}) => {
  console.log(error);

  return (
    <StyledJsonTextAreaWrapper>
      <StyledTextArea
        autosize
        radius={10}
        minRows={50}
        value={jsonInput}
        placeholder="Paste your JSON here"
        onChange={handleJsonChange}
      />
      {error && <StyledErrorText>Invalid JSON</StyledErrorText>}
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTextArea = styled(Textarea)`
  height: 100%;
`;

const StyledErrorText = styled(Text)`
  color: red;
`;
