"use server";

import {
  initialProposalValues,
  parseProposalFormData,
  proposalSchema,
  type ProposalActionState,
} from "@/lib/schemas/proposal";
import { submitProposalRequest } from "@/lib/services/proposal-service";

export async function submitProposalAction(
  _previousState: ProposalActionState,
  formData: FormData
): Promise<ProposalActionState> {
  const values = parseProposalFormData(formData);
  const parsed = proposalSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "invalid",
      message: "Revise os campos destacados.",
      fieldErrors: parsed.error.flatten().fieldErrors,
      values,
    };
  }

  const response = await submitProposalRequest(parsed.data);

  if (response.status === "success") {
    return {
      status: "success",
      message: response.message,
      values: initialProposalValues,
    };
  }

  return {
    status: "error",
    message: response.message,
    values,
  };
}
