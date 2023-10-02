import SuccessModal from"./components/SuccessModal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>Modal Button</button>
      {showModal && <SuccessModal />}
    </div>
  );
};

export default App;