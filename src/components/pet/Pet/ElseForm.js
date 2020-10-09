import React from 'react';
import './PetForm.css';

const ElseForm = ({value, onChange, onCreate, onKeyPress}) => {
    return (
    <div className="elseForm">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="직접 입력"/>
        <div className="elseAdd-button" onClick={onCreate}>
            추가
        </div>
    </div>
    );
};

export default ElseForm;