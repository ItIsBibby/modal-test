import { styled } from "styled-components";
import { OuterModalWrapper } from "./Modals";
import { TiTick } from "react-icons/ti";

const TickWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colours.green};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export default function SuccessModal() {
    return (
        <OuterModalWrapper>
            <TickWrapper>
                <TiTick color={"white"} />
            </TickWrapper>
            <p>Text.</p>
        </OuterModalWrapper>
    );
};