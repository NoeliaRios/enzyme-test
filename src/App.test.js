import { shallow } from "enzyme";
import App from "./App";

it("test sum with correct values", () => {
  const component = shallow(<App />);
  console.log(component.debug());

  component
    .find("#first")
    .simulate("change", { name: "first", target: { value: 20 } });
  component
    .find("#second")
    .simulate("change", { name: "second", target: { value: 3 } });

  component.find("#sum-button").simulate("click");

  expect(component.find("#sum").text()).toBe("23");
});
