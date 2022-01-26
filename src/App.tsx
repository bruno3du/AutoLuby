import { GlobalStyle } from "./globalStyle";
import { UserContextProvider } from "./context/UserContext";
import AppRoute from "./Routes/AppRouter";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <AppRoute />
      </UserContextProvider>
    </>
  );
}

export default App;
