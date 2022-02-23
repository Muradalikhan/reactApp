import "./App.css";

function App() {
  let name: string;
  name = "murad";

  let age: number;
  age = 26;

  let isLoggedIn: boolean;
  isLoggedIn = true;

  let array1: string[];
  array1 = ["a", "b", "c"];

  let array2: number[];
  array2 = [1, 2, 3];

  let mixArr: (string | number)[];
  mixArr = [1, 2, 3, "a", "b", "c"];

  let array3: string[] = [];
  array3.push("a");

  let obj: { name: string; age: number };
  obj = { name: "murad", age: 26 };

  let greet: (name: string) => void;
  greet = (name) => {
    console.log(name);
  };
  greet("murad");

  let add: (a: number, b: number) => number;
  let result;
  add = (a, b) => (result = a + b);
  add(2, 4);
  console.log(result);

  type user = {
    name: string;
    age: number;
  };
  let user = {
    name: "murad",
    age: 26,
  };
  let greetUser = (user: user) => {
    console.log("obj ", user.name);
  };
  greetUser(user);

  return (
    <div className="App">
      <h1>typescript</h1>
    </div>
  );
}

export default App;
