import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
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
        const { dispatch } = this.props;

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))
    }

    render() {
        const { optionOne, optionTwo } = this.state;

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

export default connect()(NewQuestion)