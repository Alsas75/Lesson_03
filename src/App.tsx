import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./providers/AuthProvider";
import { CounterProvider } from "./providers/CounterProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CounterProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </CounterProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
