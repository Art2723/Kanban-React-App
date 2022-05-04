import React from 'react';
import './index.css'

const KanbanButton = ({children, ...props}) => {
    return (
        <button {...props} className="kanban-button">
            {children}            
        </button>
    );
};

export default KanbanButton;
