import { render, screen } from "@testing-library/react";
import Greeting from "./components/Greeting";

test("renders hello world!", () => {
  //Arrange
  render(<Greeting />);
  //Act
  //..nothing

  //Assert
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});
