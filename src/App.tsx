import { createTheme, MantineProvider } from "@mantine/core";
import { JsonViewer } from "./components/JsonViewer/JsonViewer";
import styled from "styled-components";

const theme = createTheme({});
function App() {
  return (
    <MantineProvider theme={theme}>
      <AppWrapper>
        <JsonViewer />
      </AppWrapper>
    </MantineProvider>
  );
}

export default App;

/**
 * Styles
 */

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;
