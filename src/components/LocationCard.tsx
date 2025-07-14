// components/LocationCard.tsx
import { Location } from '../types';

type Props = {
  location: Location;
};

export default function LocationCard({ location }: Props) {
  return (
    <div className="card">
      <div className="card-header">Местоположение</div>
      <div className="card-content">
        <p>Страна: {location.country}</p>
        <p>Город: {location.city}</p>
        <p>Адрес: {location.address || 'не указано'}</p>
      </div>
    </div>
  );
}
