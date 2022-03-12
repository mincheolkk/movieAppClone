import React from "react";
import axios from "axios";

class App extends React.Component {
  
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount(){
    this.getMovies();
  }

  getMovies = async () => {;
    const {
            data : {
              data : {movies},
             },
          } = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    this.setState({ movies, isLoading:false });
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading ~ ' : "done"}</div>;
  }
}

export default App;
