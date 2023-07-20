import { useRef } from "react";

const Sign = ({setPage, setSign, setTitle, setName}) => { 
    const options = [
        {label: '--Your title--', value: null},
        {label: 'Mr.', value: 'Mr.'},
        {label: 'Mrs.', value: 'Mrs.'},
        {label: 'Miss.', value: 'Mir.' },
        {label: 'Dr.', value: 'Dr.'},
    ];

    const titleRef = useRef(null);
    const nameRef = useRef(null);

    const handleSign = () => { 
        setSign(true);
        const title = titleRef.current.value;
        const name = nameRef.current.value;
        if (title !== options[0].label) {
            setTitle(title);
        }
        if (name) {
            setName(name);
        }

        setPage(0);
    }

    return (
        <div className="sign-wrap">
            <div>
                <h3>Hi ~ I have a letter for you, please sign your name for it:</h3>
            </div>
            <div className="sign-input-wrap">
                <select ref={titleRef} className="sign-select" >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <input ref={nameRef} type="text" className="sign-input" placeholder="Your name"/>
            </div>
            <div className="sign-button-wrap">
                <div className="button-line-wrap">
                    <span className="button-line button-line-left"></span>
                    <span className="button-line-indent"></span>
                </div>
                <button className="sign-button" onClick={handleSign}>
                        <i><h3>Sign</h3></i>
                </button>
                 <div className="button-line-wrap">
                    <span className="button-line button-line-right"></span>
                    <span className="button-line-indent"></span>
                </div>
            </div>

            
        </div>

    );

}

export default Sign;