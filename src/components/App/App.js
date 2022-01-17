import { GlobalStyle } from "../../GlobalStyled/GlobalStyled.styled";
import { Container } from "./App.styled";
import { Component } from "react";
import Section from "../Section";
import ContactForm from "../ContactForm";

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = ({ name, number, id }) => {
    const contact = {
      id,
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   this.setState({ [name]: value });
  // };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Container>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.addContact} />
          </Section>

          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                {contact.name}
                {contact.number}
              </li>
            ))}
          </ul>
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
