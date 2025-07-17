type Props = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function Card({ title, children }: Props) {
    return (
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-content">{children}</div>
      </div>
    );
  }
  