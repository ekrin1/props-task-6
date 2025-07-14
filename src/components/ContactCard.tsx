// components/ContactCard.tsx
import { ContactInfo } from '../types';

type Props = {
  contactInfo: ContactInfo;
};

export default function ContactCard({ contactInfo }: Props) {
  return (
    <div className="card">
      <div className="card-header">Контактная информация</div>
      <div className="card-content">
        <p>Email: {contactInfo.email}</p>
        <p>Телефон: {contactInfo.phone || 'не указано'}</p>
      </div>
    </div>
  );
}
