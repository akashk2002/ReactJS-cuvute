import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const fruits = [{name: 'Mango' id: 1}, {name: 'Apple' id: 2}, {name: 'Jackfruit' id: 3}];

  return (
    <>
      <h1>Favourite Fruits : </h1>
      {
        fruits.map((fruit, index)=> {

          return <ol key={fruit.id}>{fruit.name}</ol>
        

        })
      }

    
    </>
  );
}

export default App;
