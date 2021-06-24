import Articles from "./component/Articles";
import Users from "./component/Users";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <Articles />
        <Users />
      </div>
    </div>
  );
}

export default App;
