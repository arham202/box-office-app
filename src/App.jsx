import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/home";
import Starred from "./pages/starred";
import Show from "./pages/show";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "./theme";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <GlobalTheme>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/box-office-app/" element={<Home />} />
          <Route path="/box-office-app/starred" element={<Starred />} />
        </Route>

        <Route path="*" element={<div>Not found</div>} />

        <Route path="/box-office-app/show/:showid" element = {<Show />} ></Route>
      </Routes>
    </BrowserRouter>
    </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
