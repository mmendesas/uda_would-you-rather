import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const NoMatch = ({ location }) => (
    <div className="center">
        <h3>No match for path: <code>{location.pathname}</code></h3>
        <Link to="/login">
            <Button
                color='teal'
                content='Go To Login Page' />
        </Link>
    </div>
)

export default NoMatch