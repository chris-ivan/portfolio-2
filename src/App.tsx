import ReactGA from "react-ga4";
import { Toaster } from "react-hot-toast";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./layout";
import { GlobalProvider } from "./context/GlobalContext";
import "./App.css";

ReactGA.initialize(import.meta.env.VITE_GA_ID);

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <NotificationProvider>
          <Layout />
        </NotificationProvider>
        <Toaster />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
