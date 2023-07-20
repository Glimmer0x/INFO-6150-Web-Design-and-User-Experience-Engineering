import { useState } from "react"
import "./style.css"

const EduSection = ({ content }) => { 
    
    const [isClick, setIsClick] = useState(false);

    return (
        <section>
            <button
                onClick={() => setIsClick(!isClick)}
                className="accordion">
                <h2>{content.name}</h2>
                <div className="button-open">
                    {isClick? "-" : "+" }
                </div>
            </button>
            <div className={ isClick ? "panel panel-display" : "panel panel-hidden" }>
                <div className="panel-header">
                    <div className="panel-item-left"><i>{content.degree}</i></div> <div className="panel-item-right">{content.time}</div>
                </div>
                <div className="panel-item-bottom">
                    Core Modules:
                    <ul>
                        {content.class.map((item, idx) => (
                            <li key={ idx }>
                                {item}
                            </li>
                        ) )}
                        </ul>

                </div>
            </div>
        </section>
    )
}

export default EduSection;