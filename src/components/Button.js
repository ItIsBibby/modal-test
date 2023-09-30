import { styled } from "styled-components";

export const Button = styled.button`
    background: ${props => props.$primary ? ({ theme }) => theme.colours.blue : ({ theme }) => theme.colours.white};
    color: ${props => props.$primary ? ({ theme }) => theme.colours.white : ({ theme }) => theme.colours.blue};
    width: 150px;
    height: 50px;
    margin: 5px;
    border-radius: 5px;
    font-weight: bold;
`