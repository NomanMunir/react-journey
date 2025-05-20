import { render, screen } from "@testing-library/react";
import Greeting from "./components/Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders hello world!", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //..nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'Good to see you' if the button is not clicked!", () => {
    render(<Greeting />);

    const paraGraphWithText = screen.getByText("Good to see you", {
      exact: false,
    });
    expect(paraGraphWithText).toBeInTheDocument();
  });

  test("renders 'Changed!'if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert

    const outputElementForChanged = screen.getByText("Changed!");

    expect(outputElementForChanged).toBeInTheDocument();
  });

  test("renders not 'Good to see you' if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert

    // const outputElementForChanged = screen.getByText("Changed!");
    const paraGraphWithText = screen.queryByText("Good to see you", {
      exact: false,
    });

    expect(paraGraphWithText).toBeNull();
  });
});
