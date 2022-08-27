import React from "react";

//documentacion
class EmailImput extends React.Component {
  constructor(props) {
    super(props);

    this.OnChance = this.OnChance.bind(this);
    this.OnSubmiteo = this.OnSubmiteo.bind(this);
    this.state = { value: "" };
  }

  OnChance(e) {
    this.setState({
      value: e.target.value,
    });
  }

  //Con ES7
  OnSubmiteo(e) {
    alert("Escribio: " + e.target[0].value);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.OnSubmiteo}>
          <label>
            Email
            <input type="email" onChange={this.OnChance} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>El valor es: {this.state.value}</p>
      </>
    );
  }
}

//multiples inputs
class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input name="isGoing" type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input name="numberOfGuests" type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export { EmailImput, ReservationForm };
