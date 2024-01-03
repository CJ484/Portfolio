import { Form } from "react-bootstrap";
import { sun, moon } from "../../assets/symbols";
import './index.style.scss'

const ThemeSwitch = ({ setTheme }) => {

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'default-theme' ? 'dark-theme' : 'default-theme');
  }

  return (
    <Form className="themeSwitch">
      <img className="sun" src={sun} alt="sun"/>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        onClick={() => toggleTheme()}
      />
      <img className="moon" src={moon} alt="moon"/>
    </Form>
  );
};

export default ThemeSwitch;
