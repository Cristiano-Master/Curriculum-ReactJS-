import '../style/components/social.sass'

import {FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaYoutubeSquare, FaLinkedin} from 'react-icons/fa'

const Social = [
    {name: 'Facebook', link: "https://www.facebook.com/profile.php?id=100087108375016", icon: <FaFacebookSquare />},
    /* {name: 'Instagram', link: '#', icon: <FaInstagramSquare />}, */
    {name: 'Github', link: "https://github.com/Cristiano-Master", icon: <FaGithubSquare />},
    {name: 'Youtube', link: "https://www.youtube.com/channel/UCm32QcVuCtHLqj-PF5RsuIw", icon: <FaYoutubeSquare />},
    {name: 'Linkedin', link: "https://www.linkedin.com/in/cristiano-mariano-96387a207/", icon: <FaLinkedin />},
]
const MainContent = () => {
    return(
        <section id="Social">
            {Social.map((Redes) => (
                <a href={Redes.link} className='social-btn' id={Redes.name} key={Redes.name} target="_blank">
                    {Redes.icon}
                </a>
            ))}
        </section>
    )
}
export default MainContent