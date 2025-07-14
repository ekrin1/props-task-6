// components/InterestsCard.tsx

type Props = {
    interests?: string[];
  };
  
  export default function InterestsCard({ interests }: Props) {
    if (!interests || interests.length === 0) return null;
  
    return (
      <div className="card">
        <div className="card-header">Интересы</div>
        <div className="card-content">
          <ul>
            {interests.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  