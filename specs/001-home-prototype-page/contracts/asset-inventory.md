# Asset Inventory Contract

## Destination

All homepage visual assets must live under:

```text
public/images/home/
```

## Required Assets

| Local File | Pencil Source | Role | Alt Text |
|------------|---------------|------|----------|
| `hero-visual.jpg` | `https://images.unsplash.com/photo-1681949103006-70066fb25dfe?...` | Hero right visual | "Equipe trabalhando em solução digital para crescimento." |
| `whatsapp-spotlight.png` | `/home/deeivan/Área de trabalho/Developer/Pessoal/portfolio/design/images/generated-1780680807795.png` | Spotlight background | Empty alt if rendered as decorative background |
| `testimonial-mariana.jpg` | `https://images.unsplash.com/photo-1758599543111-36ce5c34fceb?...` | Mariana Costa avatar | "Mariana Costa" |
| `testimonial-rafael.jpg` | `https://images.unsplash.com/photo-1636990165439-ad91410514e9?...` | Rafael Mendes avatar | "Rafael Mendes" |
| `testimonial-juliana.jpg` | `https://images.unsplash.com/photo-1741784425025-0456099eadfd?...` | Juliana Alves avatar | "Juliana Alves" |
| `og-home.png` | Derived from hero or Pencil export | Social sharing image | "Ireix Solution - soluções digitais para crescimento" |

## Rules

- Preserve the Pencil crop and perceived brightness/contrast.
- Prefer local files over remote URLs for production stability.
- Use stable dimensions or aspect-ratio wrappers to avoid layout shift.
- Keep image filenames semantic and lowercase.
- If an asset cannot be extracted locally, document the fallback and keep the visual as close as possible to Pencil.
