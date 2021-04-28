import App from './App';
import { shallow } from 'enzyme'


xit("renders without crashing", () => {
  shallow(<App />);
});

xit("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});