"use client";
import { Button as FlowbiteButton, ButtonProps } from "flowbite-react";
import { PropsWithChildren } from "react";

interface ButtonProp extends ButtonProps {}

export const Button = (props: PropsWithChildren<ButtonProp>) => {
  return <FlowbiteButton {...props}>{props.children}</FlowbiteButton>;
};
