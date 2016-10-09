import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  submitForm(e){
    e.preventDefault();
    var newUser = {};
    newUser.Name = this.refs.name.value;
    newUser.Location = this.refs.location.value;
    newUser.Description = this.refs.additionalInfo.value;
    newUser.Since = this.refs.since.value;
    newUser.Role = this.refs.role.value;
    newUser.Company = this.refs.company.value;
    newUser.IsSeeker = this.refs.isSeeker.value;
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" ref="isSeeker"/>
            <label>I am seeking job opportunities</label>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input type="text" ref="name"/>
          </div>
        </div>
        <div className="field">
          <label>Company</label>
          <input type="text" name="company" ref="company"/>
        </div>
        <div className="field">
          <label>Role</label>
          <input type="text" name="role" ref="role"/>
        </div>
        <div className="field">
          <label>@ Current Role Since</label>
          <input type="text" name="since" ref="since"/>
        </div>
        <div className="field">
          <label>Location</label>
          <input type="text" name="location" ref="location"/>
        </div>
        <div className="field">
          <label>Tell us a little bit about yourself!</label>
          <textarea ref="additionalInfo"></textarea>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;
