import educations from "./contents"
import EduSection from "./EducationSection";

const Education = () => { 

    return (
        <div>
            <p>Hi~ here is my education experience. Are you my alumni?</p>
            <div className="education-list">
                {educations.map((item) => <EduSection content={item} key={item.id } /> )}
            </div>
        </div>

    );
}

export default Education;