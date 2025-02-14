import React from "react";
import Badge from "react-bootstrap/Badge";
// let {marked} = require("marked");
import { marked } from "marked";

export default class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown (markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    var outputStyle = {
      width: "400px",
      height: "60vh",
      backgroundColor: "#ffe",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
      overflow: "auto"
    };
  
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
               {" "}
                <Badge className="text-align-center bg-dark">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4> 
                  <Badge className="text-align-center bg-secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
                  <div className="input" style={inputStyle}>
                    <textarea 
                      className="input" 
                      style={inputStyle} 
                      value={this.state.markdown} 
                      onChange= {(e) => {
                      this.updateMarkdown(e.target.value)
                    }}
                    >
                    {" "}
                    {console.log(this.state.markdown)}
                    </textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center bg-secondary" variant="primary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div 
              style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
