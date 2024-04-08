
import './App.css';

function App() {
  // const fruits = [{name: 'Mango', id: 1}, {name: 'Apple', id: 2}, {name: 'Jackfruit', id: 3}];

  const marks = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
  ]
  const imageLinks = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5',
    'https://picsum.photos/300/200?random=6',
    'https://picsum.photos/300/200?random=7',
    'https://picsum.photos/300/200?random=8',
    'https://picsum.photos/300/200?random=9',
  ];

  return (
    <>
      {/* <h1>Favourite Fruits : </h1>
      {
        fruits.map((fruit, index)=> {

          return <ol key={fruit.id}>{fruit.name}</ol>
        

        })
      } */}
      
      {/* <h1>Marks of Students</h1>
      {
        marks.map((mark) => {
          return <div key={mark[0]}>
            {
              mark.map((mar) =>{
              return <span key={mar}>{mar},</span>
        })
            }
          </div>
          })
        
      } */}

     

      <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
        {imageLinks.map((image)=> {

          return <img src={image} alt='img' key={image} />;
        }
        
        )}
      </div>

      

    
    </>
  );
}

export default App;
