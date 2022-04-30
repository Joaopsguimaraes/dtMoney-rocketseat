import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/header";
import { GlobalStyle } from "./style/global";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}
