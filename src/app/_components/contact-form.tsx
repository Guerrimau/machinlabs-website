"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { saveContactForm } from "../actions";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitButtonRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: {
    email: string;
    name: string;
    message: string;
  }) => {
    setLoading(true);
    await saveContactForm(data);
    localStorage.setItem("formSubmitted", "true");
    setIsSubmitted(true);
    setLoading(false);
  };

  useEffect(() => {
    const submitted = localStorage.getItem("formSubmitted");
    if (submitted) {
      setIsSubmitted(true);
    }
  }, []);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {isSubmitted && (
        <div
          className="p-4 text-center text-sm text-green-700 bg-green-100 rounded-lg"
          role="alert"
        >
          ¡Tu información ha sido enviada exitosamente! Nos estaremos
          contactando lo antes posible.
        </div>
      )}
      {!isSubmitted && (
        <>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Ej. María González"
              className="w-full border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              {...register("name", {
                required: "Por favor, ingresa tu nombre",
              })}
              disabled={isSubmitted}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo electrónico
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Ej. maria@empresa.com"
              className="w-full border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              {...register("email", {
                required: "Por favor, ingresa tu correo electrónico",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Por favor, ingresa un correo electrónico válido",
                },
              })}
              disabled={isSubmitted}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensaje
            </label>
            <Textarea
              id="message"
              placeholder="Ej. Necesito una aplicación web para gestionar mi inventario..."
              className="w-full border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[120px]"
              {...register("message", {
                required: "Por favor, ingresa un mensaje",
              })}
              disabled={isSubmitted}
            ></Textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <input type="submit" hidden ref={submitButtonRef} />
          <Button
            type="submit"
            className="w-full  bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              submitButtonRef.current?.click();
            }}
            disabled={isSubmitted || loading}
          >
            {loading ? "Enviando..." : "Solicitar consulta gratuita"}
          </Button>
        </>
      )}
    </form>
  );
};
