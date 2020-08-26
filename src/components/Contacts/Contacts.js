import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../Context'

class Contacts extends Component {

    

deleteContact = (id) => {

   const {contacts} = this.state;
   const newContacts= contacts.filter(contact=> contact.id !==id);
   this.setState({contacts: newContacts})

};


render() {
    return (

        <Consumer>
            {value=> {
                    const {contacts}= value;

                    return (

                        <React.Fragment>
                        {contacts.map(contact=>(
                            <Contact id={contact.id} key={contact.id} name={contact.name} phone={contact.phone}
                        email={contact.email}/>
                        ))}
                    </React.Fragment>
                   );

                }}
            </Consumer>
    )           
        
    }
}

export default Contacts;