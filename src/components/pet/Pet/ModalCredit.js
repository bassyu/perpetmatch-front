import React, {Fragment} from 'react';
import './ModalCredit.css';
import magnifier from './magnifier.png'

const ModalCredit = ({isOpen1, close}) => {
  return (
    <Fragment>
        {
        isOpen1 ?
        <Fragment>
            <div className="modalCredit-overlay" />
            <div className="modalCredit">
                <div className="contentCredit">
                    <div id="search-text" style={{display: "inline-flex" }}>
                        <img src={magnifier} id="icon"width="40px" height="40px" />
                        <input type="text" name="search" id="search" placeholder="검색"/>
                    </div>
                    <div id="result"></div>
                    <div id="sum"></div>
                    <div id="total"></div>
                    <div id="reg" onClick={close}>
                        등록
                    </div>
                </div>
            </div>
        </Fragment>
        :
        null
        }
    </Fragment>
  )
}
export default ModalCredit;