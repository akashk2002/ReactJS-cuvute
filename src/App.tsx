import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const fruits = ['Mango', 'Apple', 'Jackfruit', 'Guava', 'Cherry'];

  return (
    <>
      <h1>Favourite Fruits : </h1>
      {
        fruits.map((fruit, index)=> {

          return <ol key={fruit}>{fruit}</ol>
        

        })
      }

    
    </>
  );
}

export default App;
