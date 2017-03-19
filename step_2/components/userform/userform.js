import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { TextField, Button } from '../../components';
import { onChangeInput, onSubmit } from '../../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "./userform.scss";

class UserForm extends React.Component {

    _handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.formData);
    };

    _handleChangeData = field => e => this.props.onChangeInput(field, e.target.value);

    render() {
        const { formData } = this.props;
        return (
            <div className="UserForm">
                <form className="UserForm-form" onSubmit={this._handleSubmit}>
                    <TextField label="Username" value={formData.name}
                               onChange={this._handleChangeData('name')}/>
                    <TextField label="Email" value={formData.email}
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
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string
    })
};

const _mapStateToProps = state => ({ formData: state.formData });

const _mapDispatchToProps = dispatch => ({
    onChangeInput: bindActionCreators(onChangeInput, dispatch),
});

export default connect(_mapStateToProps, _mapDispatchToProps)(UserForm);
