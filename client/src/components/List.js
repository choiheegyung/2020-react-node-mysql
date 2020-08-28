import React, { PureComponent, Fragment } from 'react';

class List extends PureComponent {
  render() {
    let data = this.props.data
    let list = [];
    data.map(i => {
      let datearray = i.pub_date.split('-');  
      list.push(<tr>
        <td>{datearray[0]}-{datearray[1]}</td>
        <td>{i.contents}</td>
        <td>{i.more_info}</td>
        {/* <td>{i.image}</td> */}
      </tr>)})
    return (
      <Fragment>
        {list}
      </Fragment>
    )
  }
}
 
export default List;