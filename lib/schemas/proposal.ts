import { z } from "zod";

import {
  proposalProjectTypes,
  type ProposalProjectType,
} from "@/app/(pages)/(home)/_components/home-content";

export type ProposalFormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

export type ProposalFieldErrors = Partial<
  Record<keyof ProposalFormValues, string[]>
>;

export type ProposalActionState = {
  status: "idle" | "invalid" | "success" | "error";
  message: string;
  fieldErrors?: ProposalFieldErrors;
  values: ProposalFormValues;
};

export type ProposalPayload = {
  name: string;
  email: string;
  phone: string;
  phoneDigits: string;
  projectType: ProposalProjectType;
  message: string;
};

export const initialProposalValues: ProposalFormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export const initialProposalState: ProposalActionState = {
  status: "idle",
  message: "",
  values: initialProposalValues,
};

const projectTypeEnum = z.enum(proposalProjectTypes);

export const proposalSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Informe seu nome.")
      .max(120, "Informe seu nome."),
    email: z.email("Informe um e-mail válido."),
    phone: z.string().trim().min(1, "Informe um telefone ou WhatsApp válido."),
    projectType: projectTypeEnum,
    message: z
      .string()
      .trim()
      .min(20, "Conte um pouco mais sobre o projeto.")
      .max(2000, "Conte um pouco mais sobre o projeto."),
  })
  .superRefine((data, ctx) => {
    const digits = normalizePhone(data.phone);

    if (digits.length < 8 || digits.length > 20) {
      ctx.addIssue({
        code: "custom",
        message: "Informe um telefone ou WhatsApp válido.",
        path: ["phone"],
      });
    }
  })
  .transform((data) => ({
    ...data,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    phoneDigits: normalizePhone(data.phone),
    message: data.message.trim(),
  }));

export const parseProposalFormData = (
  formData: FormData,
): ProposalFormValues => ({
  name: String(formData.get("name") ?? ""),
  email: String(formData.get("email") ?? ""),
  phone: String(formData.get("phone") ?? ""),
  projectType: String(formData.get("projectType") ?? ""),
  message: String(formData.get("message") ?? ""),
});

export const normalizePhone = (value: string) => value.replace(/\D/g, "");
