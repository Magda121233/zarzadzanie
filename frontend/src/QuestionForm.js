import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UseStore from './stores/UseStore';


class QuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Question: '',
      buttonDisabled: false
    }
  }

  setInputValue(property, val) {
    val = val.trim();
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      Question: '',
      buttonDisabled: false
    })
  }

  async doQuestion() {

    if (!this.state.question) {
      return;
    
    this.setState({
      buttonDisabled: true
    })


   
  }}
   

  render() {
    return (
      <div className="QuestionForm">
        Dodaj pytanie kontrolne :
        <InputField
          type='text'
          placeholder='Question'
          value={this.state.question ? this.state.question : ''}
          onChange={(val) => this.setInputValue('question', val)}
        />
        <SubmitButton
          text='Dodaj'
          disabled={this.state.buttonDisabled}
          onClick={ () => this.doQuestion}
          />
      </div>
      


      
    );
  }
}


export default QuestionForm;
