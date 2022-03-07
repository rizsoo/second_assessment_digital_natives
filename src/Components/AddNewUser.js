import React from 'react';
import './../Home.css'

class AddUserComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          user: {
              first_name: props.first_name,
              last_name: props.last_name
          }
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
//F.name FUNC.
    handleFirstNameChange(event) {
      const user = this.state.user;
      user.first_name = event.target.value;
      this.setState({
        user: user
      });
    }

//L.name FUNC.
    handleLastNameChange(event) {
        const user = this.state.user;
        user.last_name = event.target.value;
        this.setState({
            user: user
        });
    }

//SUBMIT HANDLER
    handleSubmit(event) {
        event.preventDefault();
        this.props.setInputFirstName(this.state.user.first_name);
        this.props.setInputLastName(this.state.user.last_name);
    }

//RENDER
    render() {
      return (
        <form onSubmit={this.handleSubmit} className='add-user'>
          <h3>Add User</h3>
            <p>Users first name </p>
            <input name="first_name" type="text" value={this.props.first_name} 
              onChange={this.handleFirstNameChange.bind(this)}/>
            <p>Users last name </p>
            <input name="last_name" type="text" value={this.props.last_name} 
              onChange={this.handleLastNameChange.bind(this)}/>
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default AddUserComponent;
