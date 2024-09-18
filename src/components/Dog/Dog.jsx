import Card from "../Card/Card"

export default function Dog() {
  // An array of dogs.
  const dogs = [
    { name: "Sparky", age: 5 },
    { name: "Spot", age: 5 },
    { name: "Ralph", age: 5 },
    { name: "Fido", age: 5 },
  ]

  // Map over the dogs array and create an array of JSX for each dog.
  const dogJSX = dogs.map((dog, idx) => {
    // We return JSX for each dog in the array, which we store in the dog variable. Essentially, we are looping over dog of dogs.
    return (
      <Card key={idx} dog={dog} />
    )
  })

  // The component returns JSX that uses the dogJSX array.
  return <div>{dogJSX}</div>
}