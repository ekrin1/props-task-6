import Card from './Card';
import { ContactInfo } from '../types';

export default function ContactCard({ contactInfo }: { contactInfo: ContactInfo }) {
  return (
    <Card title="Контактная информация">
      <p>Email: {contactInfo.email}</p>
      <p>Телефон: {contactInfo.phone || 'не указано'}</p>
    </Card>
  );
}
