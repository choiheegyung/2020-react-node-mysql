import React from 'react';
import ListContainer from '../containers/ListContainer';
import SearchContainer from '../containers/SearchContainer';

const Mainpage = () => {
    return (
        <div>
            <h1>Trend_bird Database</h1>
            <SearchContainer />
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
                    <ListContainer />
                </tbody>
            </table>
        </div>
    )
}

export default Mainpage;