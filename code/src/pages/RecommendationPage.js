import React, { useState } from 'react';
import FormInput from '../components/FormInput';

const NA_BEVERAGE_TYPES = [
  { label: 'NA Beer', value: 'na_beer' },
  { label: 'NA Wine', value: 'na_wine' },
  { label: 'Ready-to-Drink Mocktails', value: 'ready_mocktail' },
  { label: 'Homemade Mocktails', value: 'homemade_mocktail' },
];

const RecommendationPage = () => {
  const [alcoholicFavorites, setAlcoholicFavorites] = useState('');
  const [beverageTypes, setBeverageTypes] = useState([]);
  const [errors, setErrors] = useState({});

  const handleTypeChange = (type) => {
    setBeverageTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const validate = () => {
    const newErrors = {};
    if (!alcoholicFavorites.trim()) newErrors.alcoholicFavorites = 'Required';
    if (beverageTypes.length === 0) newErrors.beverageTypes = 'Select at least one type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // ...submit logic will go here...
  };

  return (
    <main>
      <h1>Find Your Non-Alcoholic Drink Match</h1>
      <form onSubmit={handleSubmit} aria-label="Beverage Preferences Form">
        <FormInput
          id="alcoholicFavorites"
          label="Your Favorite Alcoholic Beverages"
          value={alcoholicFavorites}
          onChange={e => setAlcoholicFavorites(e.target.value)}
          error={errors.alcoholicFavorites}
          required
        />
        <fieldset>
          <legend>Preferred NA Beverage Types</legend>
          {NA_BEVERAGE_TYPES.map(type => (
            <label key={type.value}>
              <input
                type="checkbox"
                value={type.value}
                checked={beverageTypes.includes(type.value)}
                onChange={() => handleTypeChange(type.value)}
                aria-checked={beverageTypes.includes(type.value)}
              />
              {type.label}
            </label>
          ))}
          {errors.beverageTypes && <div role="alert" style={{color:'red'}}>{errors.beverageTypes}</div>}
        </fieldset>
        <button type="submit">Get Recommendations</button>
      </form>
    </main>
  );
};

export default RecommendationPage;
