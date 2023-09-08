import { Form } from "react-bootstrap";
import { sun, moon } from "../../assets/symbols";
import './index.style.scss'

const ThemeSwitch = () => {

  return (
    <Form className="themeSwitch">
      <img src={sun} alt="sun"/>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
      />
      <img src={moon} alt="moon"/>
    </Form>
  );
};

export default ThemeSwitch;
