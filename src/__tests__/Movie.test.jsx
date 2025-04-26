/*import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";

const id = 1
const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`],
    initialIndex: 0
})

test("renders without any errors", () => {
  const errorSpy = vi.spyOn(global.console, "error");

  render(<RouterProvider router={router}/>);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders movie's title in an h1", async () => {
  render(<RouterProvider router={router} />);
  const h1 = await screen.findByText(/Doctor Strange/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders movie's time within a p tag", async () => {
  render(<RouterProvider router={router} />);
  const p = await screen.findByText(/115/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a span for each genre",  () => {
  render(<RouterProvider router={router} />);
  const genres = ["Action", "Adventure", "Fantasy"];
  genres.forEach(async (genre) =>{
    const span = await screen.findByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  })
});

test("renders the <NavBar /> component", async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/1`]
  })
  render(
      <RouterProvider router={router}/>
  );
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
});*/

/*import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Movie } from '../pages/Movie'; // Use the same import style as in your app
import { movies } from '../data';
import NavBar from '../components/NavBar'; // Import NavBar if needed

// Mock the NavBar if it's not relevant for testing
jest.mock('../components/NavBar', () => () => <div>Mocked NavBar</div>);

describe('Movie Component', () => {
  it('renders movie details correctly', () => {
    const testMovie = movies[0];
    
    render(
      <MemoryRouter initialEntries={[`/movie/${testMovie.id}`]}>
        <Routes>
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(testMovie.title)).toBeInTheDocument();
    expect(screen.getByText(`Time: ${testMovie.time}`)).toBeInTheDocument();
    
    testMovie.genres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('shows "Movie not found" for invalid ID', () => {
    render(
      <MemoryRouter initialEntries={['/movie/999']}>
        <Routes>
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Movie not found')).toBeInTheDocument();
  });
});*/
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Movie from '../pages/Movie'; 
import { movies } from '../data';
import NavBar from '../components/NavBar';
import '@testing-library/jest-dom/vitest';

// Mock NavBar
vi.mock('../components/NavBar', () => ({
  default: () => <div>Mocked NavBar</div>
}));

describe('Movie Component', () => {
  it('renders movie details correctly', () => {
    const testMovie = movies[0];
    
    render(
      <MemoryRouter initialEntries={[`/movies/${testMovie.id}`]}>
        <Routes>
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(testMovie.title)).toBeInTheDocument();
    expect(screen.getByText(`Time: ${testMovie.time}`)).toBeInTheDocument();
    
    testMovie.genres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('shows "Movie not found" for invalid ID', () => {
    render(
      <MemoryRouter initialEntries={['/movies/999']}>
        <Routes>
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Movie not found')).toBeInTheDocument();
  });
});