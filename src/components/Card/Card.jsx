export default function Card({ dog }) {
    return (
      <div>
        <h1>{dog.name}</h1>
        <h2>{dog.age}</h2>
      </div>
    );
  }