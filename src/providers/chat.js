import React, { Component } from 'react';

import { api } from "../api";

const messageFormatter = ({ text, date, user }) => ({
  message: text,
  time: new Date(date).getTime(),
  userName: user.userName
});

export const withChat = Chat => (
  class extends Component {
    state = {
      data: undefined
    };

    componentDidMount() {
      this.interval = setInterval(this.poll, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    poll = () => {
      api.get().then(data =>
        this.setState({
          data: data.items.map(messageFormatter)
        })
      );
    };

    onMessage = message => {
      api.create(this.props.login, message);
      this.setState(prevState => ({
        data: [
          {
            userName: this.props.login,
            message,
            time: Date.now()
          }
        ].concat(prevState.data)
      }));
    };

    render() {
      return (
        <Chat
          data={this.state.data}
          isLoading={this.state.data === undefined}
          create={this.onMessage}
          {...this.props}
        />
      );
    }
  }
);
