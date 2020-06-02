import React, { Component } from "react";

import "./index.css";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div className="ant-modal-root">
          <div className="ant-modal-mask"></div>
          <div className="ant-modal-wrap">
            <div className="ant-modal">
              <div className="ant-modal-content">
                <button type="button" aria-label="Close" className="ant-modal-close">
                  X
                </button>
                <div className="ant-modal-header">
                  <div className="ant-modal-title" id="rcDialogTitle0">
                    Basic Modal
                  </div>
                </div>
                <div className="ant-modal-body">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </div>
                <div className="ant-modal-footer">
                  <button type="button" className="ant-btn">
                    <span>取 消</span>
                  </button>
                  <button type="button" className="ant-btn ant-btn-primary">
                    <span>确 定</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
