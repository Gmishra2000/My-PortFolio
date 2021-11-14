import "./toggle.css"
import { ThemeContext } from "../../context"
import { useContext } from "react";
const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src="assets/image/sun.png" alt=""  className="t-icon" />
            <img src="assets/image/moon.png" alt=""  className="t-icon" />
            <div
                className="t-button"
                onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0 : 25}}
            ></div>
        </div>
    )
}

export default Toggle
