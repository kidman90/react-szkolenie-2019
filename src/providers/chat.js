import { Component } from 'react';

import { api } from "../api";

const messageFormatter = ({ text, date, user }) => ({
  message: text,
  time: new Date(date).getTime(),
  userName: user.userName
});

export class ChatProvider extends Component {
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

  onMessage = (login, message) => {
    api.create(login, message);
    this.setState(prevState => ({
      data: [
        {
          userName: login,
          message,
          time: Date.now()
        }
      ].concat(prevState.data)
    }));
  };

  render() {
    return this.props.children({
      data: this.state.data,
      isLoading: this.state.data === undefined,
      create: this.onMessage
    });
  }
}

