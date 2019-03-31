import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../styles/reactmodal.css";

class ReactModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        size="lg"
        fade={false}
        toggle={() => this.props.onToggle()}
      >
        <ModalHeader toggle={() => this.props.onToggle()}>
          {this.props.image.name}
        </ModalHeader>
        <ModalBody>
          <img
            src={this.props.image.url}
            alt={this.props.image.name}
            style={{ width: "100%" }}
          />
        </ModalBody>
        <ModalFooter>{this.props.image.description}</ModalFooter>
      </Modal>
    );
  }
}

export default ReactModal;
