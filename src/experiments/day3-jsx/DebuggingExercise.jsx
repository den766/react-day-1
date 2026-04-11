// function DebugExercise() {

//   const users = ["Ali","Sara","John"]

//   return (
//     <h1>User List</h1>

//     <ul>
//       {users.map(user => {
//         <li>{user}</li>
//       })}
//     </ul>

//   )
// }

function DebugExercise() {
  const users = ["Ali", "Sara", "John"];

  return (
    <>
      <h1>User List</h1>
      <ul>
      {users.map(user => {
       return <li key={user}>{user}</li>
      })}
    </ul>
    </>
  );
}

export default DebugExercise;