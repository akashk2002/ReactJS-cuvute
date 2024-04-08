
import './App.css';

function App() {
  // const fruits = [{name: 'Mango', id: 1}, {name: 'Apple', id: 2}, {name: 'Jackfruit', id: 3}];

  const marks = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
  ]

  return (
    <>
      {/* <h1>Favourite Fruits : </h1>
      {
        fruits.map((fruit, index)=> {

          return <ol key={fruit.id}>{fruit.name}</ol>
        

        })
      } */}
      
      <h1>Marks of Students</h1>
      {
        marks.map((mark) => {
          return mark.map((item)=>{
            return <p>{item}</p>
          })
        })
      }

      

    
    </>
  );
}

export default App;
