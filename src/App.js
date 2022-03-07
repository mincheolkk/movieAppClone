import React from "react";

const foodList = [
  {
    name : "kimchi",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMjZfMjY4%2FMDAxNjQzMTczNjIyMDcx.rmnlGq-Uta7VR7wFuVFom3bCtVi9eKawHt1pGLI1PjIg.aUX1g3lg8xCE9Yqbn3jC-YlsM14opEJ_mPvaTxD97j4g.JPEG.minamkkjs%2F%25BA%25ED%25B7%25CE%25B1%25D71.jpg&type=sc960_832",
  },
  {
    name : "pizza",
    image : "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-p%2F14%2Ff8%2Fc2%2F9d%2Fpizza.jpg&type=sc960_832"
  }
]


function App() {
  console.log(foodList.map(renderFood))

  return (
    <div> 
      <h1>h1</h1>
      hello
      <Food fav="22" some="44"/>
      <Food fav="33"/>
      {foodList.map(renderFood)}
    </div>
  );
}

function Food({name, pic}){
  return (
        <div><h1>{name}</h1>
        <img src={pic} /></div>);
}

function renderFood(d) {
  return <Food name={d.name} pic={d.image} />;
}

export default App;
