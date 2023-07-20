import projects from "./contents";
import Card from "./ProjectCard";

const Project = () => { 

    return (
        <div className="cards">
            {projects.map((item) => <Card key={item.id} projectItem={item} />)}
        </div>
    );
}

export default Project;