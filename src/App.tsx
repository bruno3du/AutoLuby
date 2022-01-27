import { GlobalStyle } from "./globalStyle";
import { UserContextProvider } from "./context/UserContext";
import AppRoute from "./Routes/AppRouter";
import TableDataProvider from "./context/TableDataContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <TableDataProvider>
          <AppRoute />
        </TableDataProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
