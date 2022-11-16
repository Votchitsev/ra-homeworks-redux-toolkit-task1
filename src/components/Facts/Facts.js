import { useSelector } from 'react-redux';
import './Facts.css';

function Facts() {

  const facts = useSelector(state => state.factsReducer.facts);

  return (
    <div className='facts-list'>
      { facts.map(fact => <div className='fact'>{ fact }</div>) }
    </div>
  )
}

export default Facts;
