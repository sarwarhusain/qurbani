"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { IoExitOutline } from "react-icons/io5";
import { toast } from "react-toastify";
const Signin = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    
    const { data, error } = await authClient.updateUser({
      name: userData.name, // required
      image: userData.photo, // required
    });
    if (error) {
      toast.error(`${error.message}`);
    }
    if (data) {
      toast.success(`${userData.name} Update Successfully `);
      setTimeout(() => {
        window.location.href = "/profile";
      }, 1500);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/30 via-base-200 to-secondary/30 px-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop:backdrop-blur-xl border border-white/20 shadow-2xl">
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="name">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="photo" type="photo">
            <Label>Photo</Label>
            <Input placeholder="https//:example.com" />
            <FieldError />
          </TextField>
          <div className="flex flex-col gap-2 mt-4">
            <Button
              className="bg-linear-to-r from-primary to-secondary text-white font-semibold py-2 rounded-xl hove:scale-[1.02] transition"
              type="submit"
            >
              <IoExitOutline />
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
