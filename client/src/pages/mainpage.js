import React, { PureComponent } from 'react';
import ListContainer from '../containers/ListContainer'
import SearchContainer from '../containers/SearchContainer'

class Mainpage extends PureComponent {
  render() {
    return (
      <body>
        <h1>Trend_bird Database</h1>
        <SearchContainer/>
        <table>
          <tr>
            <th>PUB_DATE</th>
            <th>CONTENTS</th>
            <th>MORE_INFO</th>
            <th>IMAGE</th>
          </tr>
          <ListContainer/>
        </table>
      </body>
    )
  }
}

export default Mainpage;