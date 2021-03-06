import React, { PureComponent } from 'react';

import { Button, Input } from '../../components';


export default class NewsletterSignup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { emailValue: '' };
  }

  render() {
    return (
      <form
        action="https://lightninginabot.us13.list-manage.com/subscribe/post"
        method="post"
        noValidate
      >
        <Input
          autoCapitalize="off"
          autoCorrect="off"
          name="EMAIL"
          onChange={e => this.setState({ emailValue: e.target.value })}
          placeholder="your@email.com"
          tabIndex="-1"
          type="email"
          value={this.state.emailValue}
        />
        <input type="hidden" name="u" value="e8bd66c72845625333eb08424" />
        <input type="hidden" name="id" value="90ce27d211" />
        <Button type="submit">Sign Up For Newsletter</Button>
      </form>
    );
  }
}
