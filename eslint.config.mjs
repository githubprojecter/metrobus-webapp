import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1) Ignorar archivos generados y la carpeta .next
  {
    ignores: [
      "lib/generated/prisma/**",
      ".next/**"
    ]
  },

  // 2) Extender la configuración recomendada de Next.js
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),

  // 3) Desactivar reglas globales que estás sufriendo
  {
    rules: {
      // Apaga la regla que prohíbe imports con require()
      "@typescript-eslint/no-require-imports": "off",
      // Apaga el explicit-any
      "@typescript-eslint/no-explicit-any": "off",
      // Baja el nivel de no-unused-vars a warning
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      // Por si quieres menos estricto en catch de errores
      "@typescript-eslint/no-implicit-any-catch": "off",
    }
  },

  // 4) Overrides específicos (ej. solo para pages/api)
  {
    files: ["pages/api/**/*.ts"],
    rules: {
      // Desactiva boundary-types si así lo prefieres
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  }
];

export default eslintConfig;
