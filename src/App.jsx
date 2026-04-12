import Day1Counter from "./experiments/day1-counter/Day1Counter";
import Footer from "./experiments/day2-components/Footer";
import Header from "./experiments/day2-components/Header";
import NoteList from "./experiments/day2-components/noteList";
import Demojsx from "./experiments/day3-jsx/Tutorial";
import Name from "./experiments/day3-jsx/Practice";
import RenderNames from "./experiments/day3-jsx/render";
import DebugExercise from "./experiments/day3-jsx/DebuggingExercise";
import Notecard2 from "./experiments/day4-props/notecardprops";
import ProductCard from "./experiments/day4-props/productCard";


function App() {
  return (
    <div>
      {/* <Day1Counter /> */}
      {/* <Header />
      <NoteList /> */}
      {/* <Demojsx />
      <Name /> */}
      {/* <RenderNames />
      <DebugExercise/> */}
      <Notecard2 title="Learn React" category="Programming"/>
      <Notecard2 title="Learn Nodejs"/>
      <Notecard2 title="Learn Arrays"/>

      <ProductCard title="Laptop" price="100000" rating="4.5"/>
      <ProductCard title="Iphone 17" price="80000" rating="4.7"/>
      <ProductCard title="bag" price="1000" rating="4"/>
      <Footer />
    </div>
  );
}

export default App;
