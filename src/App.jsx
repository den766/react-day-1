// import { useState } from "react";
import Day1Counter from "./experiments/week1/day1-counter/Day1Counter";
import Footer from "./experiments/week1/day2-components/Footer";
import Header from "./experiments/week1/day2-components/Header";
import NoteList from "./experiments/week1/day2-components/noteList";
import Demojsx from "./experiments/week1/day3-jsx/Tutorial";
import Name from "./experiments/week1/day3-jsx/Practice";
import RenderNames from "./experiments/week1/day3-jsx/render";
import DebugExercise from "./experiments/week1/day3-jsx/DebuggingExercise";
import Notecard2 from "./experiments/week1/day4-props/notecardprops";
import ProductCard from "./experiments/week1/day4-props/productCard";
import NoteList2 from "./experiments/week1/day4-props/noteList2";
import Counter from "./experiments/week1/day5-state/counter";
import ClickEvent from "./experiments/week1/day6-events/events";
import CountEvent from "./experiments/week1/day6-events/eventCount";
import ToggleMsg from "./experiments/week1/day6-events/toggle";
import RandomNumber from "./experiments/week1/day6-events/random";
import CounterRevise from "./experiments/week1/day7-revision/revision";
import NoteListRevise from "./experiments/week1/day7-revision/noteListRevise";
import TogglemsgRevise from "./experiments/week1/day7-revision/togglemesage";
import TaskInputForm from "./experiments/week1/week2/day1comparchitecture/TaskInput";
import TaskList from "./experiments/week1/week2/day1comparchitecture/taskLists";
import PlayerCard from "./experiments/week1/week2/day2compcommunication/propsnew";
import CounterControls from "./experiments/week1/week2/day3-liftingstateup/counterControls";
import CounterDisplay from "./experiments/week1/week2/day3-liftingstateup/counterDisplay";
import SubApp from "./experiments/week1/week2/day3-liftingstateup/stateup";
import NoteApp from "./experiments/week1/week2/day3-liftingstateup/mininoteAppSearch/noteApp";
import ControlledInput from "./experiments/week1/week2/day4-statedrivenInputs/controlledInput";
import FormHandling from "./experiments/week1/week2/day4-statedrivenInputs/formhandling";

function App() {


  // const [tasks, setTasks] = useState([]);

  // function addTask(newTask) {
  //   setTasks([...tasks, newTask]);
  // }

  // function deleteTask(indexToDelete) {
  //   setTasks((prev) => prev.filter((_, index) => index !== indexToDelete));
  // }

  return (
    <div>
      {/* <Day1Counter /> */}
      {/* <Header />
      <NoteList /> */}
      {/* <Demojsx />
      <Name /> */}
      {/* <RenderNames />
      <DebugExercise/> */}
      {/* <Notecard2 title="Learn React" category="Programming"/>
      <Notecard2 title="Learn Nodejs"/>
      <Notecard2 title="Learn Arrays"/>

      <ProductCard title="Laptop" price="100000" rating="4.5"/>
      <ProductCard title="Iphone 17" price="80000" rating="4.7"/>
      <ProductCard title="bag" price="1000" rating="4"/> */}
      {/* <NoteList2/> */}
      {/* <Counter/> */}
      {/* <ClickEvent/>
      <CountEvent/>
      <ToggleMsg/>
      <RandomNumber/> */}
      {/* <CounterRevise/>
      <NoteListRevise/>
      <TogglemsgRevise/> */}
      {/* <TaskInputForm/> */}
      {/* <Footer /> */}
      {/* <h1>Task Manager</h1> */}

      {/* <TaskInputForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
      <PlayerCard/> */}
      

       {/* <SubApp/> */}
       {/* <NoteApp/> */}
       {/* <ControlledInput/> */}
       <FormHandling/>
    </div>
  );
}

export default App;
