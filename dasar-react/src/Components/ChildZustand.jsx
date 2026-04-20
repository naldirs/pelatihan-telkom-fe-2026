import { useCounterStore } from '../stores/useCounterStore';

function ChildZustand() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div style={{display :'flex',gap:'10px'}}>
      <button onClick={increment}>
        Tambah
      </button>
      <button onClick={decrement}>
        Kurang
      </button>
    </div>
  );
}

export default ChildZustand;