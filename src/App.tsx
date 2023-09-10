import "./App.css";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import Layout from "./layout";

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Layout />
      </NotificationProvider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
