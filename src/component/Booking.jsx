"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const Booking = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    toast.success(`${userData.name} booking successfully`);
  };
  return (
    <div className="flex items-center justify-center my-10 p-10 shadow-2xl">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="name">
          <Label>Name</Label>
          <Input placeholder="Enter Your Name" />
          <FieldError />
        </TextField>
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
          <Input placeholder="abc@gmail.com" />
          <FieldError />
        </TextField>
        <TextField isRequired name="phone" type="number">
          <Label>Phone</Label>
          <Input placeholder="Enter Your Phone Number" />
          <FieldError />
        </TextField>
        <TextField isRequired name="address" type="text">
          <Label>Address</Label>
          <Input placeholder="Enter Your Address" />
          <FieldError />
        </TextField>
      
        <div className="flex flex-col gap-2">
          <Button type="submit">
            <Check />
           Booked
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Booking;
