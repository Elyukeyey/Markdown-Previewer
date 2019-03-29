import React, { Component } from 'react';
import './App.css';

// insta update iz Textarea v Previewer: handleInput -> state.input: e.target.input
// GIT markdown https://cdnjs.cloudflare.com/ajax/libs/marked/0.6.1/marked.js
// on load componentDidMount(): a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
// on load render v HTML

// opcijski bonus:
// opcijski bonus: odpira linke v preview-u
// carriage returns?? render as <br>


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
    <div className="previewer container" id="preview">
      <div className="previewer-title"><h3 className="text-white"><i className="far fa-eye"></i> Previewer</h3></div>
      <div>
      {props.preview}
      {console.log(props.preview)}
      {console.log('wtf!?')}
      </div>
    </div>
  );
}

class App extends Component {
    state = {
      markdown: `e?`,
      preview: `e?`
        } 
handleInput = (e) => {
  console.log('handle input...');
  this.setState({
    markdown: e.target.value,
    preview: e.target.value
  })
  console.log(this.state.preview);

}
componentDidMount() {
  this.setState({
    markdown: `e?`,
    preview: `e?`
  })
}
  
  render() {    
    return (
      <div className="App wrapper">
        <Textarea handleInput={this.handleInput} markdown={this.state.markdown}/>
        <Previewer preview={this.state.preview}/>
      </div>
    );
  }
}

export default App;
