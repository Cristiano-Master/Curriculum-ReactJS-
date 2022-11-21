import MyImage from '../image/Snapchat-174096035.jpg'

import '../style/components/sidebar.sass'
import Info from './Info'

import Social from './Social'

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={MyImage} alt="Cristiano Fula Mariano" />
            <p className='title'>Developer</p>

            <Social />

            <Info />
            
            <a href="#" className="btn">Download Curriculum</a>
        </aside>
    )
}
export default Sidebar