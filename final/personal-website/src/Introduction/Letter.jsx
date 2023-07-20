
const Letter = ({title, name}) => {

    return (
        <div className="letter-wrap">
            <div className="letter-header">
                <i>Hi, {title ? title + " " : null} {name ? name+":" : null}</i>
            </div>
            <div className="letter-body">
                <p>
                    Nice to meet you! I am glad to introduce myself here! My name is Liangxi Liu, a Web developer, blockchain maximalist, and machine learning researcher.
                </p>
                <p>
                    Currently, I am a master's student at Information Systems program of Northeastern University. I have a Master of Science in Advance Computer Science from the University of Sheffield (TUoS) and a Bachelor of Engineering in Computer Science and Teleology from the Southern University of Science and Technology (SUSTech). 
                </p>
                <p>
                    Between my previous two education periods, I was a research assistant at SUSTech for one and a half years, improving deep learning algorithms using Bayesian methods. 
                </p>
                <p>
                    However, I found my real interests were web development and blockchain engineering, later at TUoS. 
                    Therefore, I decided to go to the USA and take another master to boost my skills to become an expert in my interests. 
                </p>
                <p>
                    I am finding friends whose believe that <i>Code is Law</i> . If you have the same faith, pleas contact with me!
                </p>
            </div>
            <div className="letter-tail">
                <i>
                    Best regards
                    <br />
                    Liangxi Liu
                </i>

            </div>
        </div>
    );
}

export default Letter;