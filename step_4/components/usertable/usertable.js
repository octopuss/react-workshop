import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onRemove, onRowInputEdit } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { TextField, Button } from '../../components';
import { Link } from 'react-router';
import updeep from 'updeep';

import './usertable.scss';

class UserTable extends React.Component {

    _remove = id => () => this.props.onRemove(id);

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
                <td>
                    <TextField value={user.name}
                               disabled={true}/>
                </td>
                <td>
                    <TextField value={user.email}
                               disabled={true}/>
                </td>
                <td>
                    <Button onClick={this._remove(user.id)} label="✖"/>
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
};

const _mapDispatchToProps = dispatch => ({
    onRemove: bindActionCreators(onRemove, dispatch)
});

const _mapStateToProps = state => ({ users: state.users });

export default connect(_mapStateToProps, _mapDispatchToProps)(UserTable);
