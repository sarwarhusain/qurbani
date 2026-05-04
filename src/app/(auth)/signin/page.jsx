"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { error } from "better-auth/api";
import Link from "next/link";
import { IoExitOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Signin = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
    });
    if (error) {
      toast.error(`${error.message}`);
    }
    if (data) {
      toast.success(`${userData.email} Added Successfully `);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/30 via-base-200 to-secondary/30 px-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop:backdrop-blur-xl border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-sm opacity-70 mb-6">
          Sign up to get started 🚀
        </p>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description className="text-xs opacity-70">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
            
          </TextField>
          <div className="flex flex-col gap-2 mt-4">
            <Button
              className="bg-linear-to-r from-primary to-secondary text-white font-semibold py-2 rounded-xl hove:scale-[1.02] transition"
              type="submit"
            >
              <IoExitOutline />
              Login
            </Button>
            <Button variant="bordered" type="reset" className="rounded-xl">
              Reset
            </Button>
          </div>
        </Form>
        <p className="text-center text-xs mt-6 opacity-60">
          Do Not have an account? <Link href="/signup">Signin</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
