import React from "react";
import ContactCard from "./ContactCard";

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactCard
          name="meow1"
          imageUrl="http://placekitten.com/300/200"
          phone="1234"
          email="meow@gmail.com"
        />
        <ContactCard
          name="meow2"
          imageUrl="http://placekitten.com/300/200"
          phone="5678"
          email="meow2@gmail.com"
        />
        <ContactCard
          name="meow3"
          imageUrl="http://placekitten.com/300/200"
          phone="91011"
          email="meow3@gmail.com"
        />
        <ContactCard
          name="meow4"
          imageUrl="http://placekitten.com/300/200"
          phone="121314"
          email="meow4@gmail.com"
        />
      </div>
    );
  }
}
export default App;
