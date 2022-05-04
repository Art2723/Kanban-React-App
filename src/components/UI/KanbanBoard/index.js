import React, {useState} from 'react';
import './index.css'

import KanbanColumn from '../KanbanColumn'
import KanbanModal from '../KanbanModal'
import KanbanCardForm from '../KanbanCardForm'

const KanbanBoard = () => {


    const [colName, setColName] = useState('To-do');
    const [modal, setModal] = useState(false);
    const [cardToEdit, setCardToEdit] = useState({});

    const addCardBtn = (name) => {
        setCardToEdit({})
        setColName(name);
        setModal(true);
    }

    const columns = [
        {name:'To-do', value:'To-do'},
        {name:'Do today', value:'Do today'},
        {name:'In progress', value:'In progress'},
        {name:'Done', value:'Done'},
    ];
    const [cards, setCards] = useState([
        {'cardname':'First card',
            'id': 1,
            'cardnote':'Do the homework',
            'cardcolor':'lightgreen',
            'columnname':'To-do'},
        {'cardname':'Second card',
            'id': 2,
            'cardnote':'Make first React app',
            'cardcolor':'lightcyan',
            'columnname':'In progress'},
        {'cardname':'third card',
            'id': 3,
            'cardnote':'Walk with my dog',
            'cardcolor':'lightsalmon',
            'columnname':'Done'},

        {'cardname':'Forth card',
            'id': 4,
            'cardnote':'Make a dinner',
            'cardcolor':'lemonchiffon',
            'columnname':'In progress'},

        {'cardname':'Fifth card',
            'id': 5,
            'cardnote':'Improve skills in Vim, Tmux',
            'cardcolor':'lightblue',
            'columnname':'Done'},

        {'cardname':'Sixth card',
            'id': 6,
            'cardnote':'Save the World',
            'cardcolor':'lightpink',
            'columnname':'In progress'},
    ]);

    function cardsByColname (cards, colName) {
        return cards.filter((card) =>
            card['columnname']===colName
        )
    }

    const editCard = (id) => {
        setCardToEdit(cards.filter((c)=>c.id===id)[0])
        setModal(true)
    }

    const newCard = (card) => {
        let temp=cards.slice()
        if (temp.filter((c)=>c.id===card.id).length>0) {
            temp=temp.filter((c)=>c.id!==card.id)
        }
        setCards([...temp, card])
        setCardToEdit({})
        setModal(false)
    }
    const removeCard = (id) =>{
        setCards(cards.filter((c)=>c.id!==id))
    }

// drag and drop
    const initialDnDState = {
      draggedId: null,
      draggedTo: null,
      isDragging: false,
    }
    

  const [dragAndDrop, setDragAndDrop] = useState( initialDnDState );
    
    const onDragStart = (event) => {
          setDragAndDrop({
            ...dragAndDrop, 
            draggedId: event.currentTarget.getAttribute('cardid'), // set the draggedId 
            isDragging: true, 
      });

      }

    const onDragOver = (event) => {

        event.preventDefault();
        const draggedTo = event.currentTarget.getAttribute('name'); 
        setDragAndDrop({
            ...dragAndDrop,
            draggedTo: draggedTo
        })
    }

    const onDrop = () => {
        let temp=cards.slice()
        temp[getIndex(dragAndDrop.draggedId)].columnname=dragAndDrop.draggedTo
  setCards(temp);
        setDragAndDrop({
            ...dragAndDrop,
            draggedId: null,
            draggedTo: null,
            isDragging: false
        });
    }

    const getIndex = (id) => cards.findIndex(x => x.id ===Number(id));
    


    return (
        <div className="kanban-board">
            {columns.map((column, _) =>
            <KanbanColumn key = {column.name} name = {column.name} cards = {cardsByColname(cards,column.name)}  removecard = {removeCard}  addcardbtn = {addCardBtn} editcard = {editCard} draggable = 'true' onDragStart = {onDragStart} onDragOver = {onDragOver} onDrop = {onDrop} /> 
            )}
            <KanbanModal visible={modal} setvisible={setModal} >
                <KanbanCardForm newcard={newCard} columns={columns} columnname={colName} setvisible={setModal} cardtoedit={cardToEdit}/>
            </KanbanModal>
        </div>
    );
};

export default KanbanBoard
