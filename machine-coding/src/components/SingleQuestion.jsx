
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const SingleQuestion = ({ title, info, id ,activeId, toggleQuestion }) => {


const isActive = id === activeId
console.log('active', activeId)
  
  return (
    <article>
      <header className='flex justify-between mb-4'>
        <h5>{title}</h5>
        <button className='bg-blue-600 rounded-full px-2 py-2' onClick={()=>toggleQuestion(id)}>
          {isActive? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;