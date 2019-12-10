import React from 'react';
import { handleChange } from '../../../utilities/fieldUtils';
import './SelectField.css';

function generateOptions(options) {
  if (!Array.isArray(options) || !(options.length > 0)) {
    return null
  }

  return options.map(option => {
    return <option key={option.value} value={option.value}>{option.name}</option>
  })
}

function SelectField(props) {
  const { id, label, selectClassName, options, changeCallback } = props;

  return (
    <div className="select-field-wrapper">
      <label htmlFor={ id } className='select-field-label'>{ label }</label>
      <select id={ id }
        className={`select-field ${selectClassName}`}
        onChange={(e) => { handleChange(e, changeCallback) }}>
        { generateOptions(options) }
      </select>
    </div>
  );
}

export default SelectField;
