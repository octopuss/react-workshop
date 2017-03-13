import React, { Component, PropTypes } from 'react';
import { TextField } from '../../components';
import { onChangeInput } from '../../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserForm extends Component {

    constructor(props) {
        super(props);
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const { store } = this.context;
        console.log(store.getState());
        alert (store.getState());
        return false;
    };

    _handleChangeData = (field, e) => {
        const value = e.target.value;
        this.props.onChangeInput(field, value);
    };

    render() {
        const { formData } = this.props;
        return (
            <form onSubmit={this._handleSubmit}>
                <TextField label="Username" name="name" value={formData.name} onChange={this._handleChangeData.bind(this,
                    'name')}/>
                <TextField label="Email" name="email" value={formData.email} onChange={this._handleChangeData.bind(this,
                    'email')}/>
                <button>Submit!</button>
            </form>
        );
    }
}

UserForm.propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    username: PropTypes.string,
};

const _mapStateToProps = (state) => {
    return {
        formData: state.formData,
    };
};

const _mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: bindActionCreators(onChangeInput, dispatch),
    };
};

export default connect(_mapStateToProps, _mapDispatchToProps)(UserForm)
