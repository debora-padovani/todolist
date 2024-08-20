import styled from "styled-components";

export const TaskListSection = styled.section`
    width: 90%;
    max-width: 735px;

    margin-top: 1.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

interface TaskListHeaderItemProps {
    isCompleted: boolean;
}

export const TaskListHeaderItem = styled.div<TaskListHeaderItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    margin-bottom: 1.5rem;

    p {
        font-size: 0.875rem;
        font-weight: bold;
        color: ${props => props.isCompleted ? props.theme.purple : props.theme.blue};
    }

    span {
        background: ${props => props.theme['gray-400']};
        border-radius: 8px;
        padding: 0.125rem 0.625rem;

        font-size: 0.75rem;
        font-weight: bold;
        color: ${props => props.theme['gray-200']};
    }
`;

export const TaskListTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
`;

interface TaskListItemProps {
    isCompleted: boolean;
}

export const TaskListItem = styled.tr<TaskListItemProps>`
    td {
        padding: 1.25rem 2rem;
        background: ${(props) => props.theme["gray-500"]};

        font-size: 0.875rem;
        line-height: 1.4;
        color: ${(props) => props.isCompleted ? props.theme["gray-300"] : props.theme["gray-100"]};
        text-decoration:${(props) => props.isCompleted ?  "line-through" : "none"};
    }
`;