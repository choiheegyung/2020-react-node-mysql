import React, { PureComponent, Fragment, useState } from 'react';
//import List from '../components/List'
import { connect } from 'react-redux'
import { fetchTrends } from '../actions'
import Modal from 'react-modal'

class ListContainer extends PureComponent {
    componentDidMount() {
        this.props.fetchTrends();
    }

    renderTrends() {
        let data = this.props.trends;
        let list = [];

        if (data) {
            for (var value of data) {
                list.push(<tr key={value.id}>
                    <td>{value.pub_date.split('-')[0]}-{value.pub_date.split('-')[1]}</td>
                    <td>{value.contents}</td>
                    <td>{value.more_info}</td>
                    <td><img src={value.image} alt="IMG" width='200' /></td>
                </tr>)
            }
        }

        return list;
    }

    render() {
        return (
            <Fragment>
                {this.renderTrends()}
            </Fragment>
        );
    }
}

//function mapStateToProps({ trends }) {
//    return { trends };
//}

export default connect(({ trends }) => ({ trends }), { fetchTrends })(ListContainer);