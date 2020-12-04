import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import "./App.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';





export default function App () {
  const defaultInput = `
  # Hello World

  ## Hello World
  
  \`<div></div>\`
  
  \`\`\`
  
  function helloWorld(hello, world) {
    if (hello == '\`\`\`' && world == '\`\`\`') {
      return HelloWorld;
    }
  }
  \`\`\`
  
 **bold**
  [CodingIsFun](https://www.freecodecamp.com), 
  > FreeCodeCamp!
  
  - Coding
    - Is
       - Fun
          - FreeCodeCamp.com
  
  
  1. First
  1. Second
  1. Third
  
  ![FreeCodeCamp Logo w/ Text](https://popsql.com/static/external-logos/freecodecamp.png)
  `;


  const [input, setInput] = useState(defaultInput);

  return (
    <div className="App">
        <h1 id="markdown-prev">Markdown Preview</h1>
        <div className="editor">
            <p id="typehere">Type Here</p>
            <textarea id="editor" value={input} onChange={
              e =>  setInput(e.target.value)
            }/>
        </div>
        <div className="preview">
            <p id="prev">Preview</p>
            <div id="preview" >
                <ReactMarkdown source={input} renderers =  {{ code:Component }}   />
          </div>
        </div>
      </div>
  );
}



const Component = ({value,language}) => {
  
  return (
    <SyntaxHighlighter language={language ?? null} style={dark}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};


