import Block from "../components/block";

export default function Home() {
  const employees = [
    { id: 1, name: "Alice", country: "Canada" },
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 3, name: "Carl", country: "Canada" },
    { id: 4, name: "Dean", country: "Germany" },
  ];

  // // 👇️ filter with 1 condition
  // const filtered = employees.filter((employee) => {
  //   return employee.country === "Canada";
  // });
  // // 👇️ [{id: 1, name: 'Alice', country: 'Canada'},
  // //     {id: 3, name: 'Carl', 'country: 'Canada'}]
  // console.log(filtered);

  // 👇️ filter with 2 conditions
  const filtered2 = employees.filter((employee) => {
    return (
      employee.name === "Bob" ||
      employee.name === "Carl" ||
      employee.name === "Alice" ||
      employee.name === "Dean"
    );
  });

  // 👇️ [{id: 3, name: 'Carl', country: 'Canada'}]
  console.log("filtered2: ", filtered2);

  return (
    <>
      <h1>Home</h1>
      <Block />

      <div>
        {filtered2.map((employee) => {
          return (
            <div key={employee.id}>
              <h2>name: {employee.id}</h2>
              <h3>name: {employee.name}</h3>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}
