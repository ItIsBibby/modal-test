import { styled } from "styled-components";

export const Button = styled.button`
    background: ${props => props.$primary ? ({ theme }) => theme.colours.blue : ({ theme }) => theme.colours.white};
    color: ${props => props.$primary ? ({ theme }) => theme.colours.white : ({ theme }) => theme.colours.blue};
    width: 100%;
    max-width: 300px;
    height: 50px;
    margin: 5px;
    border-radius: 5px;
    font-size: large;
    font-weight: bold;
`