import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/userService";

const TableUsers = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await fetchAllUser();
    if (res && res.data && res.data.data) {
      setListUsers(res.data.data);
    }
  };

  console.log(listUsers);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <tr key={`user-${index}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TableUsers;
