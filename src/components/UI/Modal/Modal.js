import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

class Modal extends Component {

   shouldComponentUpdate (nextProps, nextState) {
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
   }

   render() {
      return (
         <Aux>
         <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <div
         className="modal"
         style={{
            transform: this.props.show ? 'translateY(0)': 'translateY(100vh)',
            opacity: this.props.show ? '1': '0'
         }}
         >
         {this.props.children}
      </div>
      </Aux>
      )
   }
}

export default Modal;