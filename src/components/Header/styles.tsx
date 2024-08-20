import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-700"]};
    width: 100%;
    margin: 0;
    padding: 4.5rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;