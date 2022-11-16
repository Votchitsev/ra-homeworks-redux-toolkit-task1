import './Form.css';

function Form() {
  return (
    <form className="count-of-facts-form">
      <input className="count-of-facts-form--input" 
        type='number'
        min={0} 
        max={5} 
        placeholder='count of facts'>
      </input>
    </form>
  )
}

export default Form;
