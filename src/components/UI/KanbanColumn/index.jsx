import React  from 'react';
import './index.css'
import KanbanCard from '../KanbanCard'

const KanbanColumn = ({name, cards, removecard, addcardbtn, editcard, onDragOver, onDrop, ...props}) => {

    return (
        <div className="kanban-column" >
                <div className="kanban-column-name">
                    {name}
                    <button className='new-card-btn' onClick={()=>addcardbtn(name)}> + </button>
                </div>


                <div className="kanban-column-area" onDragOver={onDragOver} onDrop={onDrop} name={name}>
                    {cards.map((card, _)=>
                    <KanbanCard key = {card.id} card={card} removecard={removecard} editcard={editcard} cardid={card.id} {...props}/>
                    )}   
                </div>
                <div>
            </div>
        </div>
    );
};

export default KanbanColumn
