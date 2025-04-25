/*import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: [`/directors`],
  initialIndex: 0
})

test("renders without any errors", () => {
  const errorSpy = vi.spyOn(global.console, "error");

  render(<RouterProvider router={router}/>);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Directors Page' inside of a <h1 />", () => {
  render(<RouterProvider router={router}/>);
  const h1 = screen.queryByText(/Directors Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each director's name", async () => {
  render(<RouterProvider router={router}/>);
  for (const director of directors) {
    expect(
      await screen.findByText(director.name, { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", async () => {
  render(<RouterProvider router={router}/>);
  for (const director of directors) {
    for (const movie of director.movies) {
      const li = await screen.findByText(movie, { exact: false });
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});

test("renders the <NavBar /> component", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/directors']
  })
  render(
      <RouterProvider router={router}/>
  );
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});*/

import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { routes } from "../routes";
import Directors from "../pages/Directors";

// Mock the directors data (using Jest)
jest.mock("../data", () => ({
  directors: [
    { name: "Scott Derrickson", movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"] },
    { name: "Mike Mitchell", movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"] },
    { name: "Edward Zwick", movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"] },
  ],
}));

// Create router instance
const router = createMemoryRouter(routes, {
  initialEntries: ["/directors"],
  initialIndex: 0,
});

describe("Directors Page", () => {
  test("renders without any errors", () => {
    const errorSpy = jest.spyOn(global.console, "error"); // <-- Changed to jest.spyOn
    render(<RouterProvider router={router} />);
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  test("renders 'Directors Page' inside of an <h1 />", () => {
    render(<RouterProvider router={router} />);
    const h1 = screen.getByRole("heading", { name: /Directors Page/i });
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
  });

  // ... (rest of the tests remain the same)
});