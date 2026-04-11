function RenderNames() {
  //   const students = ["Leo","Sara","Ali","Maya","John"];

  //   return (
  //     <>
  //       <h1>Student Lists</h1>

  //       <ul>
  //         {students.map((student) => {
  //           return <li> 👩‍🎓{student}</li>;
  //         })}
  //       </ul>

  //       <p>Total studens available is {students.length}</p>
  //     </>
  //   );

  // Rendering Products

  const products = ["Laptop", "Phone", "Headphones"];

  return (
    <>
      <h1>Products</h1>

      <ul>
        {products.map((product) => {
          return <li>{product}</li>;
        })}
      </ul>

      <p>Total products Available {products.length}</p>
    </>
  );
}

export default RenderNames;
