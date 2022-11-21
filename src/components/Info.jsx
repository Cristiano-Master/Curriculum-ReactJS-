import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../style/components/Info.sass'

const Info = () => {
    return(
        <section id='info'>
            <div className='info-card'>
                <AiFillPhone id='phone-icon'/>
                <div>
                    <h3>Phone</h3>
                    <p>(+244) 942 075 310 & 992 778 630</p>
                </div>
            </div>

            <div className='info-card'>
                <AiOutlineMail id='mail-icon'/>
                <div>
                    <h3>E-mail</h3>
                    <p>cristianofulamariano@gmail.com</p>
                </div>
            </div>

            <div className='info-card'>
                <AiFillEnvironment id='environment-icon'/>
                <div>
                    <h3>Location</h3>
                    <p>Angola, Luanda, Viana - vila</p>
                </div>
            </div>
        </section>
    )
}
export default Info