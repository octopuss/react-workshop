import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onRemove, onRowInputEdit } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { TextField, Button } from '../../components';
import { Link } from 'react-router';
import updeep from 'updeep';

import './usertable.scss';

class UserTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { _id: null };
    }

    _remove = id => () => this.props.onRemove(id);

    _editRow = id => () => this.setState({ _id: id });

    _closeRow = () => this.setState({ _id: null });

    _editValue = (user, field) => e => this.props.onRowInputEdit(updeep.updateIn(field, e.target.value, user));

    _editable = id => this.state._id === id;

    render() {
        const { users } = this.props;
        const tableHead = (<thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>&nbsp;</th>
        </tr>
        </thead>);

        const userRows = users.map(user =>
            <tr key={user.id}>
                <td onClick={this._editRow(user.id)}>
                    <TextField value={user.name}
                               disabled={!this._editable(user.id)}
                               onChange={this._editValue(user, 'name')}/>
                </td>
                <td onClick={this._editRow(user.id)}>
                    <TextField value={user.email}
                               disabled={!this._editable(user.id)}
                               onChange={this._editValue(user, 'email')}/>
                </td>
                <td>
                    {this.state._id !== user.id ? <Button onClick={this._remove(user.id)} label="✖"/> :
                        <Button onClick={this._closeRow} label="✔"/>}
                </td>
            </tr>
        );
        return (<div className="UserTable">
            <table className="UserTable-table">
                {tableHead}
                <tbody>
                {userRows}
                </tbody>
            </table>
            <div className="UserTable-link"><Link to="/">⬅ Back</Link></div>
        </div>);
    }
}

UserTable.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string
    })),
    onRemove: PropTypes.func.isRequired,
    onRowInputEdit: PropTypes.func.isRequired
};

const _mapDispatchToProps = dispatch => ({
    onRemove: bindActionCreators(onRemove, dispatch),
    onRowInputEdit: bindActionCreators(onRowInputEdit, dispatch)
});

const _mapStateToProps = state => ({ users: state.users });

export default connect(_mapStateToProps, _mapDispatchToProps)(UserTable);
