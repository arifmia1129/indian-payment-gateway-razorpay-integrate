import { Toaster } from "react-hot-toast";
import PlaceOrder from "./Pages/PlaceOrder";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <PlaceOrder />
      {/* react hot toast */}
      <Toaster />
    </div>
  );
}

export default App;
