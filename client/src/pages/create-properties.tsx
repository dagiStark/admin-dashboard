import React, { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { Form } from "../components";

export const CreateProperties = () => {
  const { data: user } = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({
    name: "",
    url: "",
  });
  const {refineCore: {onFinish, formLoading}, register, handleSubmit} = useForm();
  const handleImageChange = () =>{}


  return(
    <Form 
    type="Create"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    handleImageChange={handleImageChange}
    onFinishHandler={onFinish}
    propertyImage={propertyImage}
    />
  )
  ;
};
