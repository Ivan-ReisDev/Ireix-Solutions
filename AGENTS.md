<!-- BEGIN:irex-project-rules -->
# IREX Site

Este repositório é o site principal da IREX. Toda implementação deve tratar este projeto como a fonte principal de verdade para a presença web da marca.

## Regras de Desenvolvimento

- Sempre aplicar princípios SOLID ao codar.
- Separar componentes de forma clara para favorecer reaproveitamento, manutenção e testes.
- Antes de criar um componente novo, verificar se já existe um componente equivalente ou reutilizável no projeto.
- Reaproveitar componentes existentes sempre que fizer sentido, evitando duplicação de UI, lógica e estilos.
- Segurança é primordial: aplicar boas práticas OWASP em todas as camadas afetadas pela mudança.
- Caso seja necessário implementar backend, usar orientação a objetos para organizar regras de negócio, serviços e entidades.
- Manter as pastas do backend separadas por responsabilidade.
- Endpoints devem ficar enxutos: validar entrada com Zod, delegar regras de negócio para camadas próprias e retornar respostas consistentes.
- Nunca colocar regras de negócio complexas diretamente nos endpoints.

## Design System

O design system oficial do projeto fica em:

`/home/deeivan/Área de trabalho/Developer/Pessoal/irex-site/docs/designer-system.md`

Antes de criar ou alterar interfaces, consultar esse arquivo e seguir os padrões definidos nele.
<!-- END:irex-project-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- SPECKIT START -->
Current feature plan:

`specs/001-home-prototype-page/plan.md`

For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan above.
<!-- SPECKIT END -->
