import { Route, Routes } from "react-router-dom";
import Homepage from "./routes/homepage";
import Userpage from "./routes/userpage";
import Errorpage from "./routes/errorpage";
import Dataprovider from "./context/datacontext";

function App() {
  return (
    <Dataprovider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Dataprovider>
  );
}

export default App;
