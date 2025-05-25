import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import RecommendationCard from '../components/RecommendationCard';
import { useTranslation } from 'react-i18next';
import '../i18n';

const NA_BEVERAGE_TYPES = [
  { label: 'NA Beer', value: 'na_beer' },
  { label: 'NA Wine', value: 'na_wine' },
  { label: 'Ready-to-Drink Mocktails', value: 'ready_mocktail' },
  { label: 'Homemade Mocktails', value: 'homemade_mocktail' },
];

const RecommendationPage = () => {
  const { t } = useTranslation();
  const [alcoholicFavorites, setAlcoholicFavorites] = useState('');
  const [beverageTypes, setBeverageTypes] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [apiError, setApiError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setApiError(null);
    setRecommendations(null);
    try {
      const res = await fetch('/api/recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ alcoholicFavorites, beverageTypes }),
      });
      if (!res.ok) throw new Error('Failed to get recommendations');
      const data = await res.json();
      setRecommendations(data.recommendations);
    } catch (err) {
      setApiError('Sorry, there was a problem getting recommendations.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>{t('form.title')}</h1>
      <form onSubmit={handleSubmit} aria-label="Beverage Preferences Form" role="form">
        <FormInput
          id="alcoholicFavorites"
          label={t('form.alcoholicFavorites')}
          value={alcoholicFavorites}
          onChange={e => setAlcoholicFavorites(e.target.value)}
          error={errors.alcoholicFavorites && t('form.required')}
          required
        />
        <fieldset>
          <legend>{t('form.naBeverageTypes')}</legend>
          {NA_BEVERAGE_TYPES.map(type => (
            <label key={type.value}>
              <input
                type="checkbox"
                value={type.value}
                checked={beverageTypes.includes(type.value)}
                onChange={() => handleTypeChange(type.value)}
                aria-checked={beverageTypes.includes(type.value)}
                tabIndex={0}
              />
              {type.label}
            </label>
          ))}
          {errors.beverageTypes && <div role="alert" style={{color:'red'}}>{t('form.selectAtLeastOne')}</div>}
        </fieldset>
        <button type="submit" disabled={loading} tabIndex={0}>
          {loading ? t('form.loading') : t('form.submit')}
        </button>
        {apiError && <div role="alert" style={{color:'red'}}>{t('form.error')}</div>}
      </form>
      {recommendations && (
        <section aria-live="polite" style={{marginTop: '2rem'}}>
          <h2>{t('recommendations.title')}</h2>
          {Array.isArray(recommendations)
            ? recommendations.map((rec, idx) => <RecommendationCard key={idx} recommendation={rec} />)
            : <pre>{recommendations}</pre>}
        </section>
      )}
    </main>
  );
};

export default RecommendationPage;
