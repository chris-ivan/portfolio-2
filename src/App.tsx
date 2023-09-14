import "./App.css";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import Layout from "./layout";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <NotificationProvider>
          <Layout />
        </NotificationProvider>
        <Toaster />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
