"use client";

import { useActionState } from "react";

import { submitProposalAction } from "@/app/actions/proposal";
import {
  homePageContent,
  proposalProjectTypes,
} from "@/app/(pages)/(home)/_components/home-content";
import { initialProposalState } from "@/lib/schemas/proposal";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitProposalAction,
    initialProposalState,
  );
  const { contact } = homePageContent;
  const formKey = `${state.status}-${JSON.stringify(state.values)}`;
  const formStatusClass =
    state.status === "success"
      ? "text-[var(--irex-success)]"
      : state.status === "invalid" || state.status === "error"
        ? "text-[var(--irex-danger)]"
        : "text-[var(--irex-muted)]";

  return (
    <div className="rounded-3xl border border-[var(--irex-border)] bg-white p-7 shadow-[0_1px_4px_rgba(20,22,26,0.2)]">
      <h3 className="text-2xl font-bold text-[var(--irex-ink)]">
        {contact.formTitle}
      </h3>

      <form
        key={formKey}
        action={formAction}
        className="mt-4 space-y-3.5"
        noValidate
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Nome"
            name="name"
            defaultValue={state.values.name}
            error={state.fieldErrors?.name?.[0]}
          />
          <Field
            label="E-mail"
            name="email"
            type="email"
            defaultValue={state.values.email}
            error={state.fieldErrors?.email?.[0]}
          />
        </div>

        <Field
          label="Telefone / WhatsApp"
          name="phone"
          defaultValue={state.values.phone}
          error={state.fieldErrors?.phone?.[0]}
        />

        <div className="space-y-1.5">
          <label htmlFor="projectType" className="irex-form-label">
            Tipo de projeto
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue={state.values.projectType}
            className={`irex-input ${state.fieldErrors?.projectType ? "irex-input--error" : ""}`}
            aria-invalid={Boolean(state.fieldErrors?.projectType)}
            aria-describedby={
              state.fieldErrors?.projectType ? "projectType-error" : undefined
            }
          >
            <option value="">Selecione</option>
            {proposalProjectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {state.fieldErrors?.projectType?.[0] ? (
            <p id="projectType-error" className="irex-field-error">
              {state.fieldErrors.projectType[0]}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="irex-form-label">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            defaultValue={state.values.message}
            rows={5}
            className={`irex-input min-h-[120px] resize-y py-3 ${state.fieldErrors?.message ? "irex-input--error" : ""}`}
            aria-invalid={Boolean(state.fieldErrors?.message)}
            aria-describedby={
              state.fieldErrors?.message ? "message-error" : undefined
            }
          />
          {state.fieldErrors?.message?.[0] ? (
            <p id="message-error" className="irex-field-error">
              {state.fieldErrors.message[0]}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base leading-7 text-[var(--irex-muted)]">
            {contact.formNote}
          </p>
          <button
            type="submit"
            className="irex-button irex-button--primary justify-center disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isPending}
          >
            {isPending ? "Enviando..." : "Enviar mensagem"}
          </button>
        </div>

        <p aria-live="polite" className={`text-sm ${formStatusClass}`}>
          {state.message}
        </p>
      </form>
    </div>
  );
}

type FieldProps = {
  defaultValue: string;
  error?: string;
  label: string;
  name: "name" | "email" | "phone";
  type?: "email" | "text";
};

function Field({
  defaultValue,
  error,
  label,
  name,
  type = "text",
}: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="irex-form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`irex-input ${error ? "irex-input--error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <p id={errorId} className="irex-field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
