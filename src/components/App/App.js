import { GlobalStyle } from "../../GlobalStyled/GlobalStyled.styled";
import { Container } from "./App.styled";
import { Component } from "react";
import Section from "../Section";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
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

  onDeleteHandler = (id) => {
    const filtredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState((prevState) => {
      return { ...prevState, contacts: [...filtredContacts] };
    });
  };

  onChangeHandler = (filter) => {
    this.setState((prevState) => {
      return { ...prevState, filter: filter };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Container>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.addContact} contacts={contacts} />
          </Section>
          <Section title="Contacts">
            <Filter onChange={this.onChangeHandler} />
            <ContactList
              contacts={contacts}
              filter={filter}
              onDelete={this.onDeleteHandler}
            />
          </Section>
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
