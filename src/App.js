
import './App.css';
import myFirstImage from "./image/skye.jpg"
import './styles.css'
import  myvideo from "./myvideo.mp4";

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <div style = {{border: "solid 1px black" , maxwidth: "100vw"}}>
      <h1 className='title'>hello</h1>

      <br/>
      <img src={myFirstImage} alt ='myImage' />
      <br/>
      <img src="logo192.png" alt="myImage" />
      
     </div>
  

     <video width="320" height="240" controls>

      <source src={myvideo} type="video/mp4" />
      </video>
 
      </header>
      </div>


  );
}
export default App;