import React from 'react';
import '../../styles/components/ToggleGroup.css';

const ToggleGroup = ({ options, selected, onChange }) => (
  <div className="toggle-group">
    {options.map(opt => (
      <button
        key={opt.value}
        className={
          'toggle-group__btn' +
          (selected.includes(opt.value)
            ? ' toggle-group__btn--selected'
            : '')
        }
        onClick={() => onChange(opt.value)}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

export default ToggleGroup;
