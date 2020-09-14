import React from "react";
// function ContactCard({ name, imageUrl, phone, email }) {
//   return (
//     <div className="contact-card">
//       <img src={imageUrl} alt="meowmeow" />
//       <h3>Mr. {name}</h3>
//       <p>Phone : {phone}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

class ContactCard extends React.Component {
  constructor() {
    super();
    this.state = {
      catness: 5,
      isLoggedIn: true,
    };
  }
  render() {
    const { name, imageUrl, phone, email } = this.props;
    let display = this.state.isLoggedIn ? "Yes" : "No";
    return (
      <div className="contact-card">
        <img src={imageUrl} alt="meowmeow" />
        <h3>Mr. {name}</h3>
        <p>Phone : {phone}</p>
        <p>Email: {email}</p>
        <p>Catness value : {this.state.catness}</p>
        <p>Is logged : {display}</p>
      </div>
    );
  }
}
export default ContactCard;
