import React from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'

import './spinner.scss'

const Spinner = () => {
    const state = useSelector(state => state);
    const { todoReducer: { isFetching } } = state;

    return (
        <Modal
            show={true}
            backdrop="static"
            keyboard={false}
            animation={false}
            centered>
            <div className="loadingio-spinner-double-ring-rk2tj0hckpl">
                <div className="ldio-gosbpneztnh">
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div></div>
        </Modal>

    )
}

export default Spinner
