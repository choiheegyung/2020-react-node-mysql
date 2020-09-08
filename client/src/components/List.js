import React, { PureComponent, Fragment } from 'react';

class List extends PureComponent {
  render() {
    let term = this.props.term
    let data = this.props.data
    let list = [];

    // if (term !== ''){
    //   data = data.filter((c) => {
    //     return c.contents.indexOf(term) > -1;
    //   });
    //   return data
    // }

    data.map(i => {
      let datearray = i.pub_date.split('-');  
      list.push(<tr>
        <td>{datearray[0]}-{datearray[1]}</td>
        <td>{i.contents}</td>
        <td>{i.more_info}</td>
        <td><img src={i.image} alt={i.id} width='200'/></td>
      </tr>)
    })

    return (
      <Fragment>
        {list}
      </Fragment>
    )
  }
}
 
export default List;