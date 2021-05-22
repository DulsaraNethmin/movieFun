import React from 'react';
import axios from "axios";

const App=()=>
{
    const sendData=(e)=>
    {
        e.preventDefault();
      let data=
      {
        name:document.getElementById("moviename").value,
        year:document.getElementById("year").value,
        genre:document.getElementById("genre").value
    
      }
      console.log(data);
      axios.post("http://localhost:9000/",data)
            .then((res)=>
            {
                console.log("data sent");
            })
            .catch(e=>
                {
                    console.log("error");
                })
    }
    
    
      return (
        <div className="App">
              <form style={{marginTop:"30px"}}>
                <input type="text" placeholder="movie name" id="moviename"/>
                <input type="text"placeholder="year" id="year"/>
                <input type="text" placeholder="genre" id="genre"/>
                <button type="submit" id="submit" onClick={(e)=>sendData(e)}>submit</button>
              </form> 
        </div>
      );
}



export default App;