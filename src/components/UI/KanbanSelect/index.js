import React from 'react';
import './index.css'
const KanbanSelect = ({options, ...props}) => {
    return (
        <select
            {...props} className="kanban-select"
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default KanbanSelect;
