function Name() {
  const name = "Ashu";
  const age = 23;

  return (
    <>
      <h1>My name is {name}</h1>
      <p>next year my age will be {age + 1}</p>
      <p>my name contains {name.length} letters</p>
    </>
  );
}

export default Name;
