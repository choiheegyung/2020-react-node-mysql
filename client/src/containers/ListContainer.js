import React, { PureComponent, Fragment } from 'react';
//import List from '../components/List'
import { connect } from 'react-redux'
import { fetchTrends } from '../actions'

class ListContainer extends PureComponent {
    componentDidMount() {
        this.props.fetchTrends();
    }

    renderTrends() {
        // let term = this.props.term
        let data = this.props.trends;
        let list = [];

        // if (term !== ''){
        //   data = data.filter(c => {
        //     return c.contents.indexOf(term) > -1;
        //   });
        // }
        if (data) {
            for (var value of data) {
                list.push(<tr key={value.id}>
                    <td>{value.pub_date.split('-')[0]}-{value.pub_date.split('-')[1]}</td>
                    <td>{value.contents}</td>
                    <td>{value.moreinfo}</td>
                    <td><img src={value.image_path} alt="" width='200' /></td>
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

function mapStateToProps({ trends }) {
    return { trends };
}

export default connect(mapStateToProps, { fetchTrends })(ListContainer);