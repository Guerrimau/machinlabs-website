"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { saveContactForm } from "./actions";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const submitButtonRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: { email: string; name: string }) => {
    const res = await saveContactForm(data);
    console.log(res);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <Input
          type="text"
          placeholder="Javier Pérez"
          {...register("name", { required: "Por favor, ingresa tu nombre" })}
          className="bg-white border-gray-300 focus:border-[#1A120B] focus:ring-[#1A120B]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <Input
          type="email"
          placeholder="javierperez@coffeshop.com"
          {...register("email", {
            required: "Por favor, ingresa tu correo electrónico",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Por favor, ingresa un correo electrónico válido",
            },
          })}
          className="bg-white border-gray-300 focus:border-[#1A120B] focus:ring-[#1A120B]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <input type="submit" hidden ref={submitButtonRef} />
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitButtonRef.current?.click();
          }}
          className="w-full bg-[#1A120B] hover:bg-[#2D1F15] text-white text-lg py-5"
        >
          <span className="block sm:hidden">
            ¡Quiero mejorar la lealtad ahora!
          </span>
          <span className="hidden sm:block">
            ¡Sí, quiero mejorar la lealtad de mis clientes ahora!
          </span>
          <ArrowRight className="ml-2 h-5 w-5 md:block sm:hidden" />
        </Button>
        <Button
          variant="outline"
          className="w-full bg-white border-[#1A120B] text-[#1A120B] hover:bg-[#F3E9DD] text-lg py-5"
          asChild
        >
          <Link
            href="https://w.app/YbP0So"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhoneCall className="mr-2 h-5 w-5" />
            <span className="block sm:hidden">Hablar con un experto</span>
            <span className="hidden sm:block">
              Quiero hablar con un experto ahora
            </span>
          </Link>
        </Button>
      </div>
    </form>
  );
};
