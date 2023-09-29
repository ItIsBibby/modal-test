import { styled } from "styled-components";

export const OuterModalWrapper = styled.div`
    background: ${({ theme }) => theme.colours.white};
    transition: ease-in-out;
    z-index: 999;
    width: 100%;
    height: 60%;
    position: fixed;
    opacity: 1;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;