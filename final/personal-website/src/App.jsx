import './App.css';
import { useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Education from './education/Education';
import Project from './projects/Project';
import Contact from './contact/Contact';
import Introduction from './Introduction/Introduction';

function App() {
  const [page, setPage] = useState(0);
  const [isSign, setSign] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  
  return (
    <div className='App'>
      <Header setPage={setPage}/>
      <main id="main">
        { (page===0 || !isSign) ? <Introduction setPage={setPage} isSign={isSign} setSign={setSign} setTitle={setTitle} setName={ setName } title={title} name={name} /> : null}
        { page === 1 ? <Education title={title} name={name} /> : null}
        { page === 2 ? <Project title={title} name={name} />: null}
        { page===3 ? <Contact title={title} name={name} />: null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
