import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from './Message';
import { MessageForm } from './MessageForm';

export class App extends Component {
  state = {
    data: this.props.data
  };

  onMessage = message => this.setState(prevState => ({
    data: prevState.data.concat({
      userName: 'BTM',
      message,
      time: Date.now()
    })
  }));

  render() {
    if (!this.state.data || !this.state.data.constructor === Array) {
      return 'Trwa pobieranie danych';
    }

    return (
      <React.Fragment>
        {!this.state.data.length
          ? (
            <p>Brak danych</p>
          ) : (
            this.state.data.map((elem, index) => <Message key={index} {...elem} />)
          )
        }
        <MessageForm onMessage={this.onMessage} />
      </React.Fragment>
    );
  }
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ ...Message.propTypes }))
};
