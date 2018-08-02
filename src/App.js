import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'react-marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Heading\n=======\r\n\r\nSub-heading\r\n-----------\r\n\r\n### Another deeper heading\r\n\r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a\r\nline break\r\n\r\nText attributes *italic*, **bold**,\r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n *[Henry Cooksley](https:\/\/freecodecamp.org\/hnryjmes)*"
    };
    this.handleChange = this.handleChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  handleChange() {
    this.setState({
      value: this.refs.textarea.value
    });
  }

  createMarkup() {
    let markdown = marked(this.state.value, {sanitize: true});
    return {__html: markdown};
  }

  render() {
    var { value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title">Markdown Previewer</p>
        </header>
        <div id="markdown-previewer">
          <textarea
            className="box"
            id="editor"
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={value}></textarea>
          <div className="box" id="preview" dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>
      </div>
    );
  }
}

export default App;
