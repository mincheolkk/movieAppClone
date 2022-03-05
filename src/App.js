import React from "react";



function App() {

  return (
    <div> 
      <h1>h1</h1>
      hello
      <Food fav="kimchi" something={true} papa={['hello',1,2,3, true]} />
      <Food fav="깍뚜기" />

    </div>
  );
}

function Food(props){
  console.log(props);
  return <h1>Potato Love2 {props.fav} </h1>;
}
export default App;
