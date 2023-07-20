import './style.css'
import Sign from './Sign';
import Letter from './Letter';

const Introduction = ({setPage, isSign, setSign, setTitle, setName, title, name}) => { 

    return (
        <div className='introduction-wrap'>
            {!isSign ? <Sign setPage={setPage} setSign={setSign} setTitle={setTitle} setName={setName} /> : <Letter title={title} name={name}/>}
        </div>
    );
}

export default Introduction;