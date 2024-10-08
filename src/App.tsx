import React, { useState } from "react";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import { Container, Typography } from "@mui/material";
import { User } from "./types/user-interface";

const App: React.FC = () => {
  const [localUsers, setLocalUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setLocalUsers([...localUsers, user]);
  };

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        User Management Dashboard
      </Typography>
      <AddUserForm addUser={addUser} />
      <UserList users={localUsers} />
    </Container>
  );
};

export default App;
