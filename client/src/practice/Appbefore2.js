import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        mode:'read',
        user:'guest',
        contents:[
          {id:1, title:'Amazon', desc:'review'},
          {id:2, title:'Flipkart', desc:'qna'},
          {id:3, title:'Instagram', desc:'image'}
        ]
      }
  }

  onAppSubmit(_title,_desc){
    let list = this.state.contents
    list.push(list.id=list.length+1, list.title=_title, list.desc=_desc)
  }

  onChangeUser(user){
    if(user==='guest'){
      this.setState({user:'admin'})
    } else if(user==='admin'){
      this.setState({user:'guest'})
    }
  }

  render(){
    let _createcontents = null;        
    if(this.state.user ==='admin'){
      _createcontents = <CreateContents 
        onSubmit={this.onAppSubmit(this.state.title, this.state.desc)}/>
    }
    if(this.state.mode === 'create'){
      
    }

    return (
      <div>
        <h1>Hello World</h1>

        {/* 유저관리 */}
        <Subject 
          user={this.state.user}
          onChangeUser={this.onChangeUser(this.state.user)}>
        </Subject>
        
        {/* 리스트항목 생성 */}
        {/* <Contents data={this.state.contents}></Contents> */}

        {/* 모드변경 : 생성 수정 삭제 */}
        <Control onChangeMode = {function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>

        {/* create contents 생성 */}
        {_createcontents}
        {/* <ReadContents title={_title} desc={_desc}></ReadContents> */}
      </div>
    );
  }
}

class CreateContents extends Component{ 
  
  render(){
    return(
      <form onsubmit={function(e){
        this.props.onSubmit(
        e.target.title.value,
        e.target.desc.value
        );}.bind(this)}>
      </form>
    )
  }
}


{/* 리스트항목 생성 */}
class Contents extends Component{
  render(){
    let lists = [];
    let data = this.props.data
    let i = 0;
    while(i<data.length){
      lists.push(
        <li key={data[i].id}>{data[i].title} ({data[i].desc})</li>);
      i = i+1
    }
    return(
      <div>
        <ol>
          {lists}
        </ol>
      </div>
    )
  }
}

{/* 생성 수정 삭제 */}
class Control extends Component{

  // onControlClick = (e) => 

  render(){
    return(
      <table>
        <th>
          <input type="button" value="create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }}/>
        </th>
        <th><input type="text" name='title' placeholder='Title'></input></th>
        <th><input type="text" name='desc' placeholder='Description'></input></th>
        <tr>
        <input type="button" value="update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}></input>
        {/* <th><input type="text" name='title' placeholder='Title'></input></th>
        <th><input type="text" name='desc' placeholder='Description'></input></th> */}
        </tr>
        <tr>
        <input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input>
        </tr>
      </table>
    )
  }
}

{/* 유저관리 */}
class Subject extends Component{
  onSubjectClick(e){
    e.preventDefault();
    this.props.onChangeUser();
  }.bind(this)
  }

  render(){
    // console.log('subject render')
    return(
      <div>
        <p>user : {this.props.user}</p>
        <input type="button" value="Login" onClick={onSubjectClick(e)}/>
      </div>
    )
  }
}



export default App;
