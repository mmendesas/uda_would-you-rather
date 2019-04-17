import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(() => ({
            [name]: value
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        const { optionOne, optionTwo } = this.state
        const { handleAddQuestion } = this.props;

        handleAddQuestion(optionOne, optionTwo)

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))
    }

    render() {
        const { authedUser } = this.props
        const { optionOne, optionTwo, toHome } = this.state;

        if (authedUser === '') {
            return <Redirect to='/login' />
        }

        if (toHome) {
            return <Redirect to="/" />
        }

        return (
            <div className="new-question">
                <Form className="center" onSubmit={this.handleSubmit}>
                    <h1>Create a New Question</h1>
                    <h4>Complete the Question</h4>
                    <h2>Would you rather ...</h2>
                    <Form.Field>
                        <input
                            placeholder="Enter Option One"
                            name="optionOne"
                            onChange={this.handleChange}
                            value={optionOne} />
                    </Form.Field>
                    <p>OR</p>
                    <Form.Field>
                        <input
                            placeholder="Enter Option One"
                            name="optionTwo"
                            onChange={this.handleChange}
                            value={optionTwo} />
                    </Form.Field>
                    <Button
                        color='teal'
                        content='Create New Question'
                        icon='add'
                        labelPosition='left'
                        type="submit"
                        disabled={optionOne === '' || optionTwo === ''}
                    />
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddQuestion: (one, two) => dispatch(handleAddQuestion(one, two))
    }
}

const mapStateToProps = ({ authedUser }) => {
    return { authedUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)