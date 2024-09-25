import { createTheme, MantineProvider } from "@mantine/core";
import { JsonViewer } from "./components/JsonViewer/JsonViewer";

const theme = createTheme({});
function App() {
  return (
    <MantineProvider theme={theme}>
      <JsonViewer />
    </MantineProvider>
  );
}

export default App;
