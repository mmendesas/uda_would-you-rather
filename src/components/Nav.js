import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'

const Nav = ({ user, handleSetAuthedUser }) => {

    const handleLogout = () => {
        handleSetAuthedUser('')
    }

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add" activeClassName="active">
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" activeClassName="active">
                        Leader Board
                    </NavLink>
                </li>
                <li className="right">
                    {user && (
                        <Fragment>
                            <div className="loggedUser">
                                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar-menu" />
                                <span>{user.name}</span>
                            </div>
                            <NavLink to="/login" activeClassName="active" onClick={handleLogout}>
                                Logout
                            </NavLink>
                        </Fragment>
                    )}
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    const user = users[authedUser]
    return { user }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSetAuthedUser: (user) => dispatch(handleSetAuthedUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)