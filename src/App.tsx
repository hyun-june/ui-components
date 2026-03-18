import React from "react";
import Button from "./components/Button";
import ToastDemo from "./components/Radix/RadixToast";
import ToastContainer from "./components/Toast/Toast";
import { toast } from "./utils/toast";

function App() {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      toast("테스트 메시지", { variant: "success" });
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []); // 빈 deps → 한 번만 실행

  return (
    <div>
      <Button onClick={() => toast("테스트", { variant: "error" })}>
        Button
      </Button>
      {/* <ToastContainer /> */}

      <ToastDemo />
    </div>
  );
}

export default App;
