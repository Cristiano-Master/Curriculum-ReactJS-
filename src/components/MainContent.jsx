import About from "./About";
import Projects from "./Projects";
import Jobs from "./Jobs";


import "../style/components/maincontent.sass";

function MainContent(){
    return(
        <main id="main-content">
            <About />
            <Jobs />
            <Projects />
        </main>
    )
}
export default MainContent