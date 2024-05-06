import "./App.css";
import ClockHeading from "./components/clockHeading";
import ClockSlogan from "./components/clockSlogan";
import CurrentTime from "./components/currentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
