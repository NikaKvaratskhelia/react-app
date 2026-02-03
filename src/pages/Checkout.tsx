import { useState } from "react";
import Form from "../components/Checkout/Form";
import Hero from "../components/shared/Hero";
import { z } from "zod";
import Aside from "../components/Checkout/aside";

const FormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  companyName: z.string().optional(),
  country: z.string().min(2, "Country must be at least 2 characters"),
  streetAddress: z
    .string()
    .min(5, "Street address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  province: z.string().min(2, "Province must be at least 2 characters"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  phone: z.string().min(7, "Phone number must be at least 7 characters"),
  email: z.string().email("Invalid email address"),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function Checkout() {
  const [formData, setFormData] = useState<Partial<FormData>>({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [id]: value,
    }));

    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

    const result = FormSchema.safeParse(formData);
    if (!result.success) {
      if (result.error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        result.error.issues.forEach((err) => {
          const path = err.path[0] as keyof FormData;
          newErrors[path] = err.message;
        });
        console.log(result.error);
        setErrors(newErrors);
      }
    }

    if (result.success) {
      console.log("Form submitted successfully:", formData);

      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: "",
        city: "",
        province: "",
        postalCode: "",
        phone: "",
        email: "",
        additionalInfo: "",
      });
      setErrors({});
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <Hero text="Checkout" />
      <main className="flex gap-10 justify-center my-25 flex-wrap max-w-300 mx-auto px-4">
        <Form
          handleChange={handleChange}
          errors={errors}
          formData={formData}
        />
        <Aside handleSubmit={handleSubmit} isSubmitted={isSubmitted} />
      </main>
    </div>
  );
}
