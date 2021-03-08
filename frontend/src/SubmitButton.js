import React from 'react';


class SubmitButton extends React.Component {
  render() {
    return (
      <div className="submitButton">

        <button
          className='btn'
          diasabled={this.props.diasabled}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}


export default SubmitButton;
 