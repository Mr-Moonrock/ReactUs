import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Card from "./Card";

it('renders without crashing', () => {
  render(<Card />)
});

it('should match snapshot', () => {
  const { asFragment } = render(<Card caption='Test-Caption' src='test.jpg' currNum={1} totalNum={3} />);
  expect(asFragment).toMatchSnapshot();
})

it('should display img', () => {
  const {getByText} = render(
  <Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />
  );
  expect(getByText('Test Caption')).toBeInTheDocument();
  expect(getByText('Image 1 of 3.')).toBeInTheDocument();

  
})