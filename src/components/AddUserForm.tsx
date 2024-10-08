import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { User } from "../types/user-interface";

interface AddUserFormProps {
  addUser: (user: User) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { id: Date.now(), name, email, phone };
    addUser(newUser);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        label="Phone"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ my: 2 }}>
        Add User
      </Button>
    </Box>
  );
};

export default AddUserForm;
