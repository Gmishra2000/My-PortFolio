import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import "./topbar.scss"
export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            
            <div className="wrapper">
                <div className="left">
                    <a href="#works" className="logo">genius.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>+91 83692 91890</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>mantumisara485@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick= {() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
