import { useState } from 'react';
import './App.css';
export const App = ()=> {
  const [id,setId] = useState([])
  const [numbers, setNumbers] = useState([
    {
      id: 1,
      num: "1",
      status: false,
    },
    {
      id: 2,
      num: "2",
      status: false,
    },
    {
      id: 3,
      num: "3",
      status: false,
    },
    {
      id: 4,
      num: "4",
      status: false,
    },
  ]);
  
const handlecheckone = (e,id)=>{
   
     console.log(id);
     if (e.target.checked) {
    
       
       setId((prev)=>{
        return [
          ...prev,
           id
        ]
       }) 
     }
   
}
const todivtwo = ()=>{
    let arr= numbers.map((number)=>{
      console.log(id);
      id.filter((ids)=>{

        if (number.id === ids) {
          number.status = true
        }
        return null
      })
      return number
     })
  setNumbers(arr)

}
const handlecheckthree =(e,id)=>{
  setId([])
  if (e.target.value) {
    
    setId((prev)=>{
     return [
       ...prev,
       id
    ]
   }
    )
  }

 
}

const todivone = ()=>{
 const array = numbers.map((num)=>{
    id.filter((ids)=>{
      if (num.id === ids) {

        num.status = false
      } 
      return null
    })
    return num
  })
  setNumbers(array)

}
  return (
    <div className="App">
        <div className="main-div">
          <div className="div-one">
            {
              numbers.map((number)=>{
                if (number.status !== true) {
                  
                  return(
                    <div className="check" key={number.id}>
                    <input type="checkbox"  onChange={(e)=>handlecheckone(e,number.id)}/>
                    <h3>{number.num}</h3>
                    </div>
                  )
                }
                return null
              })
            }
          </div>
          <div className="div-two">
            <button onClick={todivtwo}> {">"} </button>
            <button onClick={todivone}> {"<"} </button>
          </div>
          <div className="div-three">
            {
              numbers.map((number)=>{
                if(number.status === true){

                  return(
                    <div className="check" key={number.id}>
                  <input type="checkbox" onChange={(e)=>handlecheckthree(e,number.id)}/>
                  <h3>{number.num}</h3>
                  </div>
                )
              }
              return null
              })
            }
          </div>
        </div>
    </div>
  );
}


