import React, { Component, Children } from 'react'


const Context = React.createContext();

//reducer

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload)
                
            };
            default:
                return state; 
    }
}




class Provider extends Component {

    state = {
        contacts:
        [
            {
                id:1,
                name:'Sichu Neupane', 
                email:'hamal@gmail.com',
                phone:'0499256477'
            },
            {
                id:2,
                name:'Bivek Nepal',
                email:'bivek@gmail.com',
                phone:'0494354477'
            },
            {
                id:3,
                name:'Bhim Neupane',
                email:'npbhim@gmail.com',
                phone:'0424346568'
            }
        ],

        dispatch: action => this.setState(state => reducer(state, action))};

    render() {

        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;
export const Consumer= Context.Consumer;
