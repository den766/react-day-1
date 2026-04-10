import Day1Counter from "./experiments/Day1Counter";
import Footer from "./experiments/noteAppComponents/Footer";
import Header from "./experiments/noteAppComponents/Header";
import NoteList from "./experiments/noteAppComponents/noteList";

function App() {
  return (
    <div>
      {/* <Day1Counter /> */}
      <Header />
      <NoteList />
      <Footer/>
    </div>
  );
}

export default App;
