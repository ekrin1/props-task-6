import Card from './Card';
import { Location } from '../types';

export default function LocationCard({ location }: { location: Location }) {
  return (
    <Card title="Местоположение">
      <p>Страна: {location.country}</p>
      <p>Город: {location.city}</p>
      <p>Адрес: {location.address || 'не указано'}</p>
    </Card>
  );
}
