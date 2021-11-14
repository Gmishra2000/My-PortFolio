import "./contact.css";
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { useState, useContext } from "react";
import { ThemeContext } from "../../context";


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_twc6t9r',
            'template_v2f6hqe',
            formRef.current,
            'user_RQEnHa8WcicbGha7Ho5na'
        )
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="assets/image/phone.png" alt="" className="c-icon" />
                            +91 83692 91890
                        </div>
                        <div className="c-info-item">
                            <img src="assets/image/email.png" alt="" className="c-icon" />
                            mantumisara485@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src="assets/image/address.png" alt="" className="c-icon" />
                            India Mumbai, Virar East - 401305
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={ handleSubmit}>

                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} placeholder="message" name="message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
