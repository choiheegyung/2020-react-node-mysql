import React, {Component} from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Text></Text>
      <ButtonComp initNumber={0}></ButtonComp>
    </div>
  );
}

class Text extends Component {
  state={
    message:''
  }
  handleChange(e){
    this.setState({
      message:e.target.value
    });
  }

  handleClick(){
    alert(this.state.message+"님 안녕하세요");
    this.setState({
      message:""
    });
  }

  render(){
    return(
      <div>
        <input 
          type="text" 
          name="message" 
          placeholder="입력하세요"
          value = {this.state.message}
          onChange = {this.handleChange.bind(this)}
          />
          <button onClick={this.handleClick.bind(this)}>확인</button>
      </div>
    );
  }
}


function ButtonComp(iProps) {
  let [funcState, funcSetstate] = React.useState(iProps.initNumber);
  
  return (
    <div>
        <p>Number : {funcState}</p>
        <input type="button" value="+" onClick={
          function(){
            funcSetstate(funcState+1)
          }
        }/>
        <input type="button" value="-" onClick={
          function(){
            funcSetstate(funcState-1)
          }
        }/>
    </div>
  );
}



export default App;