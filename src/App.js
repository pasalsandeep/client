import React, { useEffect, useState } from 'react'
 const App = () => {

  const url = "https://jsonplaceholder.typicode.com/posts"
  
  const [showData, setShowData] = useState([]);

  const loadData = () =>{
    fetch(url, {
      method: "GET",
    })
    .then((res) => res.json())
    .then((result) => {
      if (result) {
        setShowData((result));
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() =>{
    loadData();
  }, []);

  return (
    <div className='container'>
     <h5>React Accordion</h5> 
    
    <div className='row'>

        {showData.map((item,index))}

    </div>

    </div>
  )
}

export default App