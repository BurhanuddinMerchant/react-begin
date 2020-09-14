import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: {},
      isLoading: false,
    };
  }
  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   fetch("https://swapi.dev/api/people/1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         character: data,
  //         isLoading: false,
  //       });
  //     })
  //     .catch();
  // }
  //{this.state.isLoading ? "Loading....." : this.state.character.name}
  componentDidMount() {
    fetch("https://burhanuddin-hex-nuts-api.herokuapp.com/hexnuts/AMS")
      .then((res) => {
        return res.json();
      })
      .then((json) => console.log(json[0]));
  }
  render() {
    return (
      <div>
        <h2>hwllo</h2>
      </div>
    );
  }
}
export default App;
