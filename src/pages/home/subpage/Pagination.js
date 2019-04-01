import React, { Component } from 'react';
import { PaginationWrap } from '../style';

class Pagination extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <PaginationWrap>
                <button type="button"
                    className="page-btn btn-prev"
                    onClick={this.handlePageBtnClick.bind(this, 'prev')}
                    disabled={this.props.currentPage === 1}
                >prev</button>
                <ul className="page-list">
                    <li className="page-number active">{this.props.currentPage}</li>
                </ul>
                <button type="button"
                    className="page-btn btn-next"
                    onClick={this.handlePageBtnClick.bind(this,'next')}
                >next</button>
            </PaginationWrap>
        );
    }
    handlePageBtnClick (val) {
        const flag = val === 'next' ? 1 : -1
        this.props.currentChange(flag)
    }
}


export default Pagination