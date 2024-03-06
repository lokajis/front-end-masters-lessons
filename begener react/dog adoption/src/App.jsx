import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Detales";

//creatin client
//query is to avoid use effect so debuging is easyer

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // how long do i want to cash things
      //infinity is as long as a session
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    // browser router and query provider are what people
    //call higer order component
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
