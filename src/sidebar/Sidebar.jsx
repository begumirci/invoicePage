import './sidebar.css'
import backGround from './sidebar-img/background.svg'
import shaped from './sidebar-img/shaped.svg'
import path from './sidebar-img/Path.svg'
import oval from './sidebar-img/Oval.svg'

export default function Sidebar() {
    return (
        <div>
            <div className='logos'>
                <img className='logo' src={backGround} />
                <img className='logo-shaped' src={shaped} alt="" />
            </div>
            <div className='rectangle'>
                <div className='img-flex'>
                    <img className='moon' src={path} alt="" />
                    <img className='profile' src={oval} alt="" />
                </div>
            </div>
        </div>
    )
}
