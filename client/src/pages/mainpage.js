import React, { PureComponent } from 'react';
import ListContainer from '../containers/ListContainer'
import Search from '../components/Search'

class Mainpage extends PureComponent {
  render() {
    return (
      <body>
        <h1>Trend_bird Database</h1>
        <Search/>
        <table>
          <thead>
          <tr>
            <th>PUB_DATE</th>
            <th>CONTENTS</th>
            <th>MORE_INFO</th>
            <th>IMAGE</th>
          </tr>
          </thead>
          <tbody>
            <ListContainer/>
          </tbody>
        </table>
      </body>
    )
  }
}

export default Mainpage;