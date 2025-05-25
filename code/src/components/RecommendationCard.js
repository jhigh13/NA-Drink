import React from 'react';
import { useTranslation } from 'react-i18next';

const RecommendationCard = ({ recommendation }) => {
  const { t } = useTranslation();

  // Expecting recommendation to be an object with name, type, image, ingredients, calories, healthInfo, buyLink
  return (
    <article
      className="recommendation-card"
      tabIndex={0}
      aria-label={`${t('recommendations.title')}: ${recommendation.name}`}
      style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginBottom:16}}
      role="region"
    >
      <header>
        <h3 tabIndex={-1}>{recommendation.name}</h3>
        <p><strong>{t('recommendation.type')}:</strong> {recommendation.type}</p>
      </header>
      {recommendation.image && (
        <img src={recommendation.image} alt={recommendation.name} style={{maxWidth:'100%',height:'auto'}} />
      )}
      <ul>
        <li><strong>{t('recommendation.ingredients')}:</strong> {recommendation.ingredients}</li>
        <li><strong>{t('recommendation.calories')}:</strong> {recommendation.calories}</li>
        {recommendation.healthInfo && <li><strong>{t('recommendation.healthInfo')}:</strong> {recommendation.healthInfo}</li>}
      </ul>
      {recommendation.buyLink && (
        <a href={recommendation.buyLink} target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label={`${t('recommendation.buyLink')} - ${recommendation.name}`}>{t('recommendation.buyLink')}</a>
      )}
    </article>
  );
};

export default RecommendationCard;
