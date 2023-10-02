import SuccessModal from"./components/SuccessModal";
import { useState } from "react";

function App() {
  const [modals, setModals] = useState([]);
  const [modalElements, setModalElements] = useState([]);


  function setModal(id) {
    let currentModals = modals;
    if (modals.includes(id)) {
      currentModals.splice(currentModals.indexOf(id), 1);
      setModals(currentModals);
    }
    else {
      currentModals.push(id);
      setModals(currentModals);
    };

    setModalElements(modals.map(i =>
      <SuccessModal id={i} modals={modals} setModal={setModal}/>
    ));
  };

  return (
    <div>
      <button onClick={() => setModal(1)}>Modal Button 1</button>
      <button onClick={() => setModal(2)}>Modal Button 2</button>
      <button onClick={() => setModal(3)}>Modal Button 3</button>
      <button onClick={() => setModal(4)}>Modal Button 4</button>
      <button onClick={() => setModal(5)}>Modal Button 5</button>
      {modalElements}
    </div>
  );
};

export default App;