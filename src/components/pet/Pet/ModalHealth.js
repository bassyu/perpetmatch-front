import React, { Component, Fragment } from 'react';
import './ModalHealth.css';

class ModalHealth extends Component {
    state = {
        text: "첨부하기",
        names: "add"
    }

    addChange = () => {
        this.setState({
            text: "첨부완료/수정",
            names: "add_after"
        });
    }

    render() {
        const { isOpen2, close } = this.props;
        const {text, names} = this.state;
    return (
        <Fragment>
            {
            isOpen2 ?
            <Fragment>
                <div className="modalHealth-overlay" />
                <div className="modalHealth">
                    <div id="btnClose" onClick={close}>
                        ×
                    </div>
                    <div className="contentHealth">
                    <input type="file" name={names} id="add" onChange={this.addChange} required multiple />
                        <label for="add">&#43;&nbsp; {text}</label>
                    <div id="later" onClick={close}>
                        나중에 하기
                    </div>
                    </div>
                </div>
            </Fragment>
            :
            null
            }
        </Fragment>
    );
  }
}

export default ModalHealth;