import React, { useCallback, useState } from "react";
// libs
import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// helpers
import { registerHelper } from "../../../helpers/auth";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const handleChangeInputs = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((actualValue) => ({
      ...actualValue,
      [name]: value,
    }));
  }, []);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    const { error, description } = await registerHelper(inputs);
    renderFetchMessage({ error, description });
    if (!error) {
      setInputs({
        nickname: "",
        email: "",
        password: "",
      });
    }
  };

  const renderFetchMessage = (response) => {
    if (response.error === null) return;
    return Swal.fire({
      title: response.error ? "Ups!" : "Great!",
      text: response.description,
      icon: response.error ? "error" : "success",
      confirmButtonText: response.error ? "Try again" : "Go to log in",
    }).then((res) => (response.error ? null : navigate("/login")));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: 2,
          borderRadius: 4,
          boxShadow: 2,
          width: 300,
          background: "var(--white)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          color="primary"
          gutterBottom
          sx={{ color: "var(--orange)" }}
        >
          Registrarse
        </Typography>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="nickname">Nickname</InputLabel>
          <OutlinedInput
            name="nickname"
            onChange={handleChangeInputs}
            value={inputs.nickname}
            id="nickname"
            type={"text"}
            label="nickname"
          />
        </FormControl>

        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            name="email"
            onChange={handleChangeInputs}
            value={inputs.email}
            id="email"
            type={"email"}
            label="email"
          />
        </FormControl>

        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            name="password"
            onChange={handleChangeInputs}
            value={inputs.password}
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleTogglePasswordVisibility}
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            inputProps={{ style: { out: "var(--orange) !important" } }}
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          style={{ marginTop: 16, background: "var(--orange)" }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
