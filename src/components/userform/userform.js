import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import updeep from 'updeep';
import { TextField, Button } from '../../components';
import { onChangeInput, onSubmit } from '../../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "./userform.scss";

class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };
    }

    _handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    _handleChangeData = field => e => this.setState(updeep.updateIn(field, e.target.value, this.state));

    render() {
        const { formData } = this.props;
        return (
            <div className="UserForm">
                <form className="UserForm-form" onSubmit={this._handleSubmit}>
                    <TextField label="Username" value={this.state.name}
                               onChange={this._handleChangeData('name')}/>
                    <TextField label="Email" value={this.state.email}
                               onChange={this._handleChangeData('email')}/>
                    <Button label="✔ Submit"/>
                </form>
            </div>
        );
    }
}

UserForm.propTypes = {
    onChangeInput: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default UserForm;
