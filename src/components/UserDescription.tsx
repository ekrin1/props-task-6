import defaultUserPhoto from '../assets/photo-default.svg';

type Props = {
  name: string;
  description: string;
  protoUrl: string | null;
  openForWork: boolean;
};

export default function UserDescription({ name, description, protoUrl, openForWork }: Props) {
  return (
    <div className="description">
      <img
        className="photo--default"
        src={protoUrl || defaultUserPhoto}
        alt={`Фото ${name}`}
      />
      <h4>{name}</h4>
      <p>{description}</p>
      {openForWork && <p>В поиске работы</p>}
    </div>
  );
}