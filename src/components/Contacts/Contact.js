import React, { Component } from 'react'
import {Consumer} from '../Context'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showContactInfo:false,
            showItem:true,
        }
    };

onShowClick() {
    this.setState({showContactInfo:!this.state.showContactInfo})
}


onDeleteClick=(id, dispatch)=>{
    dispatch({type:'DELETE_CONTACT', payload : id});
}

render() {


    const {id, name, email, phone } = this.props;

      
    
    return (         
        <Consumer>
           
        {
            value => {

                const {dispatch}=value;
            console.log(dispatch)
                return(

                <div className="card card-body mb-3">
                <h2>{name}</h2>
                   <h4>
                   <i className="fas fa-caret-down"
                   onClick={this.onShowClick.bind(this)} style={{cursor:"pointer"}}/>
                   <i className="fas fa-backspace"  
                   style={{cursor:"pointer", float:"right", color:'red'}}
                   onClick={() => this.onDeleteClick(id, dispatch)}
                   />
                   </h4>
                       
                       {this.state.showContactInfo ? (
                       <ul className="list-group">
                           <li className="list-group-item">Email: {email} </li>
                           <li className="list-group-item">Phone: {phone}</li>
                       </ul>    
                      ): null}          
                    </div>
               
                    )
                       
                   }
                  

                
            }
         </Consumer>
      )
    }    
    }    
        
       
        export default Contact