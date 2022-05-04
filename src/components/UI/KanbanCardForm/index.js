import React, {useState, useEffect} from 'react';
import './index.css'
import KanbanInput from '../KanbanInput'
import KanbanButton from '../KanbanButton'
import KanbanSelect from '../KanbanSelect'


const KanbanCardForm = (props) => {

    let emptyCard={
        cardname:'', 
        cardnote:'', 
        cardcolor:'white',
        columnname: props.columnname,
        id: Date.now()
    }
    const [card, setCard] = useState (emptyCard)
    useEffect(() => {setCard({...card, columnname:props.columnname})},[props.columnname]);

    useEffect(() => {chooseCard()},[props.cardtoedit]);

    const chooseCard= () => {
        if (Object.keys(props.cardtoedit).length === 0) {
            setCard(emptyCard)
        } else {
            setCard({...props.cardtoedit})
        }
    }
    const saveCard = (e) => {
        e.preventDefault();
        props.newcard({
            cardname: card.cardname,
            cardnote: card.cardnote,
            cardcolor: card.cardcolor,
            columnname: card.columnname,
            id: card.id,
        });
        setCard(emptyCard)
    }

    const discard = (e) => {
        e.preventDefault();
        setCard(emptyCard)
        props.setvisible(false)
    }

    const colors = [{name: 'White', value:'white'},
        {name: 'Cyan', value:'lightcyan'},
        {name: 'Green', value:'lightgreen'},
        {name: 'Salmon', value:'lightsalmon'},
        {name: 'Lemon', value:'lemonchiffon'},
        {name: 'Blue', value:'lightblue'},
        {name: 'Pink', value:'lightpink'},
    ]

    return (
        <form>
            <KanbanInput 
                placeholder="Title" 
                value={card.cardname}
                onChange={e => setCard({...card, cardname: e.target.value})}
            />

            <KanbanInput 
                placeholder="Note" 
                value={card.cardnote}
                onChange={e => setCard({...card, cardnote: e.target.value})}
            />
<div className='color-select'>
    <label htmlFor="color-select">Color:</label>  
            <KanbanSelect 
                name="color-select"
                options={colors}
                value={card.cardcolor}
                onChange={e => setCard({...card, cardcolor: e.target.value})}
            /> 

</div>
<div className='col-select'>
    <label htmlFor="col-select">Column:</label>  
            <KanbanSelect 
                name="col-select"
                options={props.columns}
                value={card.columnname}
                onChange={e => setCard({...card, columnname: e.target.value})}
            /> 
</div>
<div className='buttons'>
    
            <KanbanButton onClick={saveCard}>Save</KanbanButton>
            <KanbanButton onClick={discard}>Cancel</KanbanButton> 
            
</div>

        </form>
    );
};

export default KanbanCardForm;
