import { createTheme, MantineProvider } from "@mantine/core";
import { JsonViewer } from "./components/JsonViewer/JsonViewer";
import styled from "styled-components";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({});
function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
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
