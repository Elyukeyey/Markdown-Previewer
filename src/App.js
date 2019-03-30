import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

// GIT markdown https://cdnjs.cloudflare.com/ajax/libs/marked/0.6.1/marked.js

const renderMarked = new marked.Renderer();
renderMarked.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
}
marked.setOptions({
  breaks: true
})

export class Textarea extends Component {
  
  render() {
    return (
      <div>
        <div>
        <div className="editor-title"><h3 className="text-white"><i className="fas fa-code"></i> Editor</h3></div>
        <textarea 
          className="textarea form-control"
          rows="10" 
          id="editor" 
          name="textarea" 
          onChange={this.props.handleInput} 
          defaultValue={this.props.markdown}></textarea>
        </div>    
      </div>
    )
  }
}

 function Previewer(props) {
  return (
    <div className="preview">
      <div className="previewer-title"><h3 className="text-white"><i className="far fa-eye"></i> Previewer</h3></div>
      <div id="preview" className="previewer text-left" dangerouslySetInnerHTML={{__html: marked(props.preview, { renderer: renderMarked })}} />
    </div>
  );
}

class App extends Component {
  state = {
    // eslint-disable-next-line
    markdown: presup,
    preview: `e?`
  } 
  handleInput = (e) => {
    this.setState({
      markdown: e.target.value,
      preview: e.target.value
    })

  }
  render() {    
    return (
      <div className="App wrapper text-center">
        <Textarea handleInput={this.handleInput} markdown={this.state.markdown}/>
        <Previewer preview={this.state.markdown}/>
        <a href="mailto:lukam@nym.hush.com" className="text-white text-center infolink"><i className="fas fa-at"></i></a>
      </div>
    );
  }
}

const presup = 
`Markdown previewer
===================
Made with react app
-------------------

[Marked] lets you **convert** [Markdown] into HTML.

> It can easily style text
>
> into a blockquote
>
> for instance ... or:

Heres some code, \`<div></div>\`, between 2 backticks.

    // this is multi-line code:

    const addNumbers = (a, b) => { a + b }

    console.log(addNumbers(1,2));

- You can
- also easily
- add list items

Make sure to visit **FreeCodeCamp** to learn how to build one, just click on the image below:

[![alt text](https://d29fhpw069ctt2.cloudfront.net/icon/image/38701/preview.svg "FreeCodeCamp Logo")](https://freecodecamp.org/)

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
[freeCodeCamp]: https://freecodecamp.org/
`


export default App;
