import logo from '..public';
import './App.css';
import myFirstImage from "../image"
import './styles.css'


function App() {
  return (

    <div className="App">
      <header className="App-header">
      <div style = {{border: "solid 1px black" , maxwidth: "100vw"}}>
      <h1 className='title'>hello</h1>

      <br/>
      <img src={myFirstImage} alt ='myImage' />
      <br/>
      <img src="/imagePublic.jpeg" alt="myImage" />
      
     </div>
  
     <video width="320" height="240" controls>

      <source src="/myVideo.mp4" type="video/mp4" />
      </video>
 
      </header>
      </div>


  );
}
export default App;