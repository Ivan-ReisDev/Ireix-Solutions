import type { ProposalActionState, ProposalPayload } from "@/lib/schemas/proposal";

type ProposalServiceResponse = Pick<ProposalActionState, "status" | "message">;

export async function submitProposalRequest(
  payload: ProposalPayload
): Promise<ProposalServiceResponse> {
  try {
    const safePayload = {
      ...payload,
      message: payload.message.slice(0, 2000),
    };

    console.info("proposal-request", {
      email: safePayload.email,
      name: safePayload.name,
      phoneDigits: safePayload.phoneDigits,
      projectType: safePayload.projectType,
    });

    return {
      status: "success",
      message: "Mensagem enviada. A IREX retornará em até 24h úteis.",
    };
  } catch {
    return {
      status: "error",
      message: "Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.",
    };
  }
}
