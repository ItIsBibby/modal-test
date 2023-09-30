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
  margin-top: 10px;
  margin-right: 10px;
`;

const Header = styled.div`
    display: flex;
    align-content: flex-start;
    font-size: large;
    font-weight: bold;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const Breaker = styled.div`
    width: 100vw;
    margin: 0 -20px;
    border-top: 2px solid ${({ theme }) => theme.colours.lightGrey};
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