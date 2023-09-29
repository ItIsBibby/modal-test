import SuccessModal from"./components/SuccessModal";
import { styled } from "styled-components";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <OuterWrapper>
      <button onClick={() => setShowModal(!showModal)}>Modal Button</button>
      {showModal && <SuccessModal />}
    </OuterWrapper>
  );
};

export default App;

const OuterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colours.grey};
  position: relative;
`;