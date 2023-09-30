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
  width: 25px;
  min-width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 10px;
`;

const Header = styled.div`
    display: flex;
    align-items: start;
    font-weight: bold;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const Breaker = styled.div`
    width: 100vw;
    margin: 0 -20px;
    border-top: 2px solid ${({ theme }) => theme.colours.grey};
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
                <LoremIpsum random={false} avgSentencesPerParagraph={4}/>
                <Breaker/>
            <ButtonContainer>
                <Button>Cancel</Button>
                <Button $primary>Continue</Button>
            </ButtonContainer>
        </OuterModalWrapper>
    );
};