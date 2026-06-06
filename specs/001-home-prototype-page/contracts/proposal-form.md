# Proposal Form Contract

## Purpose

Collect a commercial proposal request from the homepage contact section with server-side validation and safe user feedback.

## Fields

| Field | Required | Validation | Error Message |
|-------|----------|------------|---------------|
| `name` | Yes | 2-120 characters after trim | Informe seu nome. |
| `email` | Yes | Valid email address | Informe um e-mail válido. |
| `phone` | Yes | 8-20 digits after normalization | Informe um telefone ou WhatsApp válido. |
| `projectType` | Yes | One approved project type | Selecione o tipo de projeto. |
| `message` | Yes | 20-2000 characters after trim | Conte um pouco mais sobre o projeto. |

## Approved Project Types

- Site profissional
- Sistema web
- Automação
- WhatsApp Business API
- IA para empresas
- SEO e performance
- MVP ou consultoria
- Outro

## Action Result

### Success

```json
{
  "status": "success",
  "message": "Mensagem enviada. A IREX retornará em até 24h úteis."
}
```

### Validation Error

```json
{
  "status": "invalid",
  "message": "Revise os campos destacados.",
  "fieldErrors": {
    "email": ["Informe um e-mail válido."]
  },
  "values": {
    "name": "Maria",
    "email": "maria@",
    "phone": "21999990000",
    "projectType": "Site profissional",
    "message": "Preciso de uma landing page para captar leads."
  }
}
```

### Unexpected Error

```json
{
  "status": "error",
  "message": "Não foi possível enviar agora. Tente novamente ou chame no WhatsApp."
}
```

## Security Rules

- Validate on the server with Zod before accepting the request.
- Never trust client-side validation.
- Do not expose private environment variables to the client.
- Do not include stack traces or internal errors in the response.
- Normalize phone to digits for validation, but preserve user-entered value for form re-rendering.
- Keep the action thin: parse input, call schema, delegate accepted request to a service, return consistent state.
