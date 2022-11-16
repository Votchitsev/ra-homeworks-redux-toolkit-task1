import './Form.css';
import { useDispatch } from 'react-redux';
import { get } from '../../redux/factsSlice';

function Form() {

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const count = e.target.querySelector('.count-of-facts-form--input').value;
    dispatch(get(count));
  }

  return (
    <form className="count-of-facts-form" onSubmit={ onSubmitHandler }>
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
