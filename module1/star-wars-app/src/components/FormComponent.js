import React from "react";
function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firstName"
          value={props.firstName}
          type="text"
          placeholder="first name"
          onChange={props.handleChange}
        />
        <hr />
        <input
          name="lastName"
          value={props.lastName}
          type="text"
          placeholder="last name"
          onChange={props.handleChange}
        />
        <hr />
        <input
          name="age"
          value={props.age}
          type="text"
          placeholder="age"
          onChange={props.handleChange}
        />
        <hr />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <hr />
        <select
          value={props.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">---please-Choose-Destination---</option>
          <option value="india">India</option>
          <option value="norway">Norway</option>
          <option value="germany">Germany</option>
          <option value="wuhan">Wuhan</option>
        </select>
        <hr />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.isVegan}
          />
          Vegan?
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.isKosher}
          />
          Kosher?
          <input
            type="checkbox"
            name="isTrapped"
            onChange={props.handleChange}
            checked={props.isTrapped}
          />
          Trapped?
        </label>
        <hr />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information : </h2>
      <p>
        Your Name : {props.firstName} {props.lastName}
      </p>
      <p>Your Age : {props.age}</p>
      <p>Your Gender : {props.gender}</p>
      <p>Your Destination : {props.destination}</p>
      <p>
        Your dietary restrictions :
        <br />
        Vegan: {props.isVegan ? "Yes" : "No"}
        <br />
        Kosher: {props.isKosher ? "Yes" : "No"}
        <br />
        Trapped: {props.isTrapped ? "Yes" : "No"}
      </p>
      <hr />
    </main>
  );
}
export default FormComponent;
