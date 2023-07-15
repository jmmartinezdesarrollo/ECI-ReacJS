import * as React from "react";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme/index"
import ECILayout from "./components/ECILayout";
import ECIFillText from "./components/ECIFillText";


function App() {
  const [items, setItems] = React.useState([
    {
      id: Math.floor(Math.random() * 1000),
      value: "Item 1",
    },
    {
      id: Math.floor(Math.random() * 1000),
      value: "Item 2",
    },
    {
      id: Math.floor(Math.random() * 1000),
      value: "Item 3",
    },
  ]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ECILayout >
        <ECIFillText items={items} setItems={setItems}></ECIFillText>
      </ECILayout>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
