import React, { PureComponent, Fragment } from 'react';
import Modal from 'react-modal'

class List extends PureComponent {

    openModal(){
        this.modalIsOpen = true
    }

    render() {
        // let term = this.props.term
        let data = this.props.data
        let list = [];

        const modalIsOpen = false

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
                    <td><img src={i.image} alt="" width='200' onClick={this.openModal}/></td>
                    <Modal isOpen={modalIsOpen}>
                        <img src={i.image} alt="" width='100%' />
                    </Modal>

                </tr>)
            });
        }

        return (
            <Fragment>
                {list}
            </Fragment>
        )
    }
}

export default List;