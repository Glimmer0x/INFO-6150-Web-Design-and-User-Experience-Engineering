import "./style.css"


const Card = ({ projectItem }) => { 
    return (
        <div className="card">
            <img className="card-image" src={projectItem.imgURL} alt={ projectItem.imgAlt} />
            <h2>{projectItem.name}</h2>
            <ul>
                {projectItem.description.map(
                    (item, idx) => (
                        <li key={idx}>
                            { item }
                        </li>
                    )
                )}
            </ul>
        </div>
    )

}

export default Card;