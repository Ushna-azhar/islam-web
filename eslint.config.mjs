import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of FlatCompat to work with the config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration array
const eslintConfig = [
  // Extend the basic Next.js and TypeScript ESLint configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rules to allow unused variables with specific patterns
  {
    rules: {
      // Allow unused variables if they start with an underscore (_), or disable the rule completely
      "@typescript-eslint/no-unused-vars": [
        "warn", 
        { 
          argsIgnorePattern: "^_", 
          varsIgnorePattern: "^_" // Ignore unused vars that start with "_"
        }
      ],
    },
  },
];

export default eslintConfig;
