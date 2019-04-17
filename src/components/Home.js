import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import { Redirect } from 'react-router-dom'

import Answer from "./Answer";

const NoItems = () => <div className="center">No items to show!</div>
class Home extends Component {
  render() {
    const { unansweredIds, answeredIds, authedUser } = this.props;

    if (authedUser === '') {
      return <Redirect to='/login' />
    }

    return (
      <div className="home">
        <Tab
          className="tab"
          panes={[
            {
              menuItem: "Unanswered",
              render: () => (
                <Tab.Pane>
                  {unansweredIds.length === 0 && <NoItems />}
                  <ul>
                    {unansweredIds.map(id => (
                      <li key={id}>
                        <Answer id={id} />
                      </li>
                    ))}
                  </ul>
                </Tab.Pane>
              )
            },
            {
              menuItem: "Answered",
              render: () => (
                <Tab.Pane>
                  <ul>
                    {answeredIds.map(id => (
                      <li key={id}>
                        <Answer id={id} />
                      </li>
                    ))}
                  </ul>
                </Tab.Pane>
              )
            }
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  const answeredIds = Object.keys(questions)
    .filter(
      key =>
        questions[key].optionOne.votes.includes(authedUser) ||
        questions[key].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const unansweredIds = Object.keys(questions)
    .filter(
      key => !answeredIds.includes(key)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return { answeredIds, unansweredIds, authedUser };
};

export default connect(mapStateToProps)(Home);
