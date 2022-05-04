import React from 'react';
import './index.css'

const KanbanCard = ({card, removecard, editcard, ...props}) => {
    return (
        <div className="kanban-card" style={{backgroundColor:card.cardcolor}} {...props}>
            <div className="kanban-card-name" onClick={()=>editcard(card.id)}>
                {card.cardname}
            </div>
<button className='remove-card-btn' onClick={()=> removecard(card.id)}> x </button>
            <div className="kanban-card-note" onClick={()=>editcard(card.id)}>
                {card.cardnote}
                <br/>
                <span>
                Column: {card.columnname}
                </span>
            </div>
        </div>
    );
};

export default KanbanCard;
