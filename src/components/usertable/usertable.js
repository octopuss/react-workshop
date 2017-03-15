import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onRemove } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import {TextField} from '../../components';
import { Link } from 'react-router';

class UserTable extends React.Component {

    _remove = id => {
        this.props.onRemove(id);
    };

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
                <td><TextField name={'name-' + user.id} value={user.name} disabled/></td>
                <td><TextField name={'email-' + user.id} value={user.email} disabled/></td>
                <td>
                    <button onClick={this._remove.bind(this, user.id)}>Remove</button>
                </td>
            </tr>
        );
        return (<div><table>
            {tableHead}
            <tbody>
            {userRows}
            </tbody>
        </table>
            <Link to="/" >Back to form</Link>
        </div>);
    }
}

UserTable.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string
    })),
    onRemove: PropTypes.func.isRequired
};

const _mapDispatchToProps = dispatch => ({
    onRemove: bindActionCreators(onRemove, dispatch)
});

const _mapStateToProps = state => ({ users: state.users });

export default connect(_mapStateToProps, _mapDispatchToProps)(UserTable);
