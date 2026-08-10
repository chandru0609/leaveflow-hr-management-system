function EmployeeTable() {
  const employees = [
    {
      id: 1,
      name: "Arun",
      department: "HR",
      leaveBalance: 12,
    },
    {
      id: 2,
      name: "Kumar",
      department: "IT",
      leaveBalance: 8,
    },
    {
      id: 3,
      name: "Ravi",
      department: "Finance",
      leaveBalance: 15,
    },
  ];

  return (
    <div>
      <h2>Employee Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Leave Balance</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.leaveBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;