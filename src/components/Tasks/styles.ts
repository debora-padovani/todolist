import styled from "styled-components";

export const TasksContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const NewTaskForm = styled.form`
    width: 90%;
    max-width: 735px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    margin-top: -1.5rem;

    input {
        flex: 1;
        background-color: ${props => props.theme['gray-500']};
        color: ${props => props.theme.white};
        border: 1px solid ${props => props.theme['gray-700']};
        border-radius: 8px;
        outline: 0;
        
        font-size: 1rem;
        padding: 1rem;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        background-color: ${props => props.theme['blue-dark']};
        color: ${props => props.theme.white};
        border: 1px solid ${props => props.theme['gray-700']};
        border-radius: 8px;

        font-size: 1rem;
        font-weight: bold;
        padding: 1rem;

        cursor: pointer;
    }
`;