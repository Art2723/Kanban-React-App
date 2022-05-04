import React from 'react';
import './index.css'

const MyModal = ({children, visible, setvisible}) => {

    const rootClasses = ['kanban-modal']

    if (visible) {
        rootClasses.push('active');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setvisible(false)}>
            <div className='kanban-modal-content' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
