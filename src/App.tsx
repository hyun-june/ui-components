import Button from "./components/Button";
import ToastContainer from "./components/Toast/Toast";
import { toast } from "./utils/toast";

function App() {
  return (
    <div>
      <Button onClick={() => toast("테스트", { variant: "error" })}>
        Button
      </Button>
      <ToastContainer />
    </div>
  );
}

export default App;
