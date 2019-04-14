import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";

import Answer from "./Answer";

class Home extends Component {
  render() {
    const { unansweredIds, answeredIds } = this.props;

    return (
      <div className="home">
        <Tab
          className="tab"
          panes={[
            {
              menuItem: "Unanswered",
              render: () => (
                <Tab.Pane>
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
  const answeredIds = Object.keys(questions).filter(
    key =>
      questions[key].optionOne.votes.includes(authedUser) ||
      questions[key].optionTwo.votes.includes(authedUser)
  );
  const unansweredIds = Object.keys(questions).filter(
    key => !answeredIds.includes(key)
  );
  return { answeredIds, unansweredIds };
};

export default connect(mapStateToProps)(Home);
