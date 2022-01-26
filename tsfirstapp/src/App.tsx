
import './App.css';

function App() {


  const name: string = 'Murad'

  const arr: string[] = ['red', 'blue', 'green']

  const add = (num1: number, num2: number) => {
    const result = num1 + num2
    console.log(result * 5)
  }

  add(2, 3)





  return (
    <div className="App">
      <div>hello {name}</div>
      <br/>
      {arr.map((item, index) => {

        return (
          <div key={index}>{item}</div>
        )
      })}
    </div>
  );
}

export default App;
