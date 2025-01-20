import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemaContext } from "./context/ThemaContext";
import UserProvider from "./components/provider/UserProvider";
import AgeProvider from "./components/provider/AgeProvider";
function App() {
  return (
    <>
      <ThemaContext.Provider value={"dark"}>
        <Box />
      </ThemaContext.Provider>

      <UserProvider>
        <AgeProvider>
          <Profile />
        </AgeProvider>
      </UserProvider>
    </>
  );
}

export default App;
