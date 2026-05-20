import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayouts from "./layouts/AppLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./ui/ThankYou";
import Work from "./pages/Work";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /* staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1, */
    },
  },
});


export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && (<ReactQueryDevtools initialIsOpen={false} />)}
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayouts />}>
              {/* Main pages */}
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<Work />} />
              <Route path="/thankYou" element={<ThankYou />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 8000 },
          error: { duration: 10000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "",
          },
        }}
      />
    </>
  )
}
