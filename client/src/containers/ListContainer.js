import React, { Component, Fragment } from 'react';
//import List from '../components/List'
import { connect } from 'react-redux'
import { fetchTrends } from '../store/trendsAction'

class ListContainer extends Component {
    componentDidMount() {
        this.props.fetchTrends();
    }

    renderTrends() {
        // let term = this.props.term
        console.log(this.props.trends);
        let data = this.props.trends;
        let list = [];

        // if (term !== ''){
        //   data = data.filter(c => {
        //     return c.contents.indexOf(term) > -1;
        //   });
        // }
        if (data) {
            data.map(i => {
                let datearray = i.pub_date.split('-');
                list.push(<tr>
                    <td>{datearray[0]}-{datearray[1]}</td>
                    <td>{i.contents}</td>
                    <td>{i.more_info}</td>
                    <td><img src={i.image} alt="" width='200' /></td>
                </tr>)
            });
        }

        return (
            { list }
        )
    }

    render() {
        return (
            <Fragment>
                {this.renderTrends()}
            </Fragment>
        );
    }
}

function mapStateToProps({ trends }) {
    return { trends };
}

export default connect(mapStateToProps, { fetchTrends })(ListContainer)