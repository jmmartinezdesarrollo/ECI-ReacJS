import * as React from "react";
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
      <ECILayout>
        <ECIFillText items={items} setItems={setItems}></ECIFillText>
      </ECILayout>
    </div>
  );
}

export default App;
