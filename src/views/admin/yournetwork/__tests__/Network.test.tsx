import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Network from "../index";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

describe("Network Component", () => {
  it("renders all the tabs correctly", () => {
    render(
      <Provider store={store}>
        <ChakraProvider>
          <MemoryRouter>
            {" "}
            {/* Wrap with MemoryRouter */}
            <Network />
          </MemoryRouter>
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByText("All Posts")).toBeInTheDocument();
    expect(screen.getByText("Business Promotion")).toBeInTheDocument();
    expect(
      screen.getByText("Opportunities and Partnerships")
    ).toBeInTheDocument();
    expect(screen.getByText("Products and Resources")).toBeInTheDocument();
    expect(screen.getByText("My Posts")).toBeInTheDocument();
  });

  it("displays AllPosts component when All Posts tab is selected", async () => {
    render(
      <Provider store={store}>
        <ChakraProvider>
          <MemoryRouter>
            {" "}
            {/* Wrap with MemoryRouter */}
            <Network />
          </MemoryRouter>
        </ChakraProvider>
      </Provider>
    );

    fireEvent.click(screen.getByText("All Posts"));

    await waitFor(() =>
      expect(screen.getByText("All Posts")).toBeInTheDocument()
    );
  });

  it("displays MyPosts component when My Posts tab is selected", async () => {
    render(
      <Provider store={store}>
        <ChakraProvider>
          <MemoryRouter>
            {" "}
            {/* Wrap with MemoryRouter */}
            <Network />
          </MemoryRouter>
        </ChakraProvider>
      </Provider>
    );

    fireEvent.click(screen.getByText("My Posts"));

    await waitFor(() =>
      expect(screen.getByText("+ Add New Post")).toBeInTheDocument()
    );
  });
});
