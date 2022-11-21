import '../style/components/Jobs.sass'
import {
    DiCodeigniter,
    DiCss3,
    DiHtml5,
    DiJavascript,
    DiMysql,
    DiSass,
    DiPhp,
    DiReact} from 'react-icons/di';


const technology = [
    {id: "Codeigniter4", text: "I have advanced skills with this tool and I have work done with this tool.", name: "Codeigniter4", icon: <DiCodeigniter/>},
    {id: "Php", text: "I have advanced skills with this tool and I have work done with this tool.", name: "Php", icon: <DiPhp/>},

    {id: "React", text: "I have advanced skills with this tool and I have work done with this tool.", name: "React", icon: <DiReact/>},
    {id: "Javascript", text: "I have advanced skills with this tool and I have work done with this tool.", name: "Javascript", icon: <DiJavascript/>},
    
    {id: "Mysql", text: "I have advanced skills with this tool and I have work done with this tool.", name: "Mysql", icon: <DiMysql/>},
    {id: "Sass", text: "I have advanced skills with this tool and I have work done with this tool.", name: "Sass", icon: <DiSass/>},

    {id: "Css3", text: "I have advanced skills with this tool and I have work done with this tool.", name: "Css3", icon: <DiCss3/>},
    {id: "Html5", text: "I have advanced skills with this tool and I have work done with this tool.", name: "Html5", icon: <DiHtml5/>},

];

const Jobs = () => {
    return(
        <section id="technology-content">
            <h2>DOMAIN TOOLS</h2>
            <div className='technology-grid'>
                {technology.map((tech) => (
                    <div className='technology-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className='technology-info'>
                            <h3>{tech.name}</h3>
                            <p>{tech.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Jobs