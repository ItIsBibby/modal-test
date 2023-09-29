import { styled } from "styled-components";
import { OuterModalWrapper } from "./Modals";
import { Button } from "./Button";
import { TiTick } from "react-icons/ti";
import { LoremIpsum } from "react-lorem-ipsum";

const TickWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colours.green};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

export default function SuccessModal() {
    return (
        <OuterModalWrapper>
            <Header>
                <TickWrapper>
                    <TiTick color={"white"} />
                </TickWrapper>
                <p>Congratulations your jet2 holiday booking has been confirmed</p>
            </Header>
            <div id="modalBody">
                <LoremIpsum/>
            </div>
            <Button>Cancel</Button>
            <Button $primary>Continue</Button>

        </OuterModalWrapper>
    );
};