import { useState } from 'react';
import data from '../data/index';
import Questions from './questions';

function App() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(1)

  const toggleQuestion=(id)=>{
    const newActiveId = id === activeId ? null : id

    console.log(id)
  setActiveId(newActiveId)

  }
  return (
    <main>
      <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
    </main>
  );
}

export default App;