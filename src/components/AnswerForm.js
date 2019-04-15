import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleAnwserQuestion } from '../actions/questions'

class AnswerForm extends Component {

    state = { value: '' }

    handleChange = (e, { value }) => this.setState({ value })

    handleSubmit = e => {
        e.preventDefault();
        const { dispatch, id } = this.props;
        const { value } = this.state;
        dispatch(handleAnwserQuestion(id, value))
    }

    render() {
        const { value } = this.state;
        const { textOne, textTwo } = this.props
        return (
            <section>
                <h3 className="center">Would You Rather...</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Radio
                        label={textOne}
                        value="optionOne"
                        checked={value === "optionOne"}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label={textTwo}
                        value="optionTwo"
                        checked={value === "optionTwo"}
                        onChange={this.handleChange}
                    />
                    <div className="center">
                        <Button color="teal" content="Submit" disabled={value === ''} />
                    </div>
                </Form>

            </section>
        )
    }
}

export default connect()(AnswerForm)