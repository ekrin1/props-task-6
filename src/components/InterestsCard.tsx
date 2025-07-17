import Card from './Card';

export default function InterestsCard({ interests = [] }: { interests?: string[] }) {
  if (interests.length === 0) return null;

  return (
    <Card title="Интересы">
      <ul>
        {interests.map((interest) => (
          <li key={interest}>{interest}</li> 
        ))}
      </ul>
    </Card>
  );
}
