import React, { PureComponent, Fragment } from 'react';

class List extends PureComponent {
  render() {
    let term = this.props.data.term
    let data = this.props.data.data
    let list = [];

    if (term === ''){
      data.map(i => {
        let datearray = i.pub_date.split('-');  
        list.push(<tr>
          <td>{datearray[0]}-{datearray[1]}</td>
          <td>{i.contents}</td>
          <td>{i.more_info}</td>
          <td><img src={i.image} alt="IMAGE" width='200'/></td>
        </tr>)
      })
    }
    else {
      console.log(term)
      // data = data.filter((term))
    }
    
    
    return (
      <Fragment>
        {list}
      </Fragment>
    )
  }
}
 
export default List;