export default function Button({ setCounter, text }) {

    function handleClick() {
      if (text === 'Increment') {
        setCounter((state) => state += 1)
      } else {
        setCounter((state) => state -= 1)
      }
    }
  
    return (
      <button onClick={handleClick}>{text}</button>
    );
  }