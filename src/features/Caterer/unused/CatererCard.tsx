import React from 'react';
import { Link } from 'react-router-dom';
import type { Caterer } from './catererTypes';

type CatererCardProps = Caterer & { image?: string };

const CatererCard: React.FC<CatererCardProps> = ({ id, name, images, rating, price, amenities, isSponsored, image }) => (
  <article className="caterer_card">
    {isSponsored && (
      <span className="caterer_card__sponsored-badge">Sponsored</span>
    )}
    <img src={image || images[0]?.url} alt={name} className="caterer_card__image" />
    <div className="caterer_card__info">
      <div className="caterer_card__title">{name}</div>
      <div>{amenities?.join(', ')}</div>
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: i < Math.round(rating) ? '#FFD700' : '#eee' }}>
            {'★'}
          </span>
        ))} <span style={{ fontSize: '0.9em', color: '#888' }}>{rating}</span>
      </div>
      <div className="caterer_card__price">PKR {price.starting.toLocaleString()}</div>
      <Link
        to={`/caterers/${id}`}
        className="caterer_card__button"
        onClick={e => { e.preventDefault(); alert('Coming soon'); }}
      >
        View Details
      </Link>
    </div>
  </article>
);

export default CatererCard;
