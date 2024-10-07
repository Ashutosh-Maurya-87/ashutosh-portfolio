import { useContext } from "react";
import Header from "../components/header/Header";
import { ThemeContext } from "../context/themeContext";
import { mount } from "enzyme";

// const theme = useContext(ThemeContext);
describe('testing header component', () => {
    it('should render the expected colour while entering the mouse on the Navbar buttons', () => {
        const wrapper = mount(<Header />);
        const hoverMouse = wrapper.find(NavLink);
        hoverMouse.simulate('onMouseEnter');
        expect(hoverMouse.prop('style').backgroundColor).toBe(ThemeContext.text);

    });
});