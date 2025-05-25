import React from 'react';
import { useTranslation } from 'react-i18next';

const FormInput = ({ id, label, value, onChange, error, required }) => {
  const { t } = useTranslation();

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}{required && ' *'}</label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        tabIndex={0}
        aria-label={label}
      />
      {error && (
        <span id={`${id}-error`} role="alert" style={{ color: 'red' }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
