import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = ({ user }) => {
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
                        <div className="loggedUser">
                            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar-menu" />
                            <span>{user.name}</span>
                        </div>
                    )}

                    <NavLink to="/login" activeClassName="active">
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    const user = users[authedUser]
    return { user }
}

export default connect(mapStateToProps)(Nav)