export const setting = `{
  "deno.enable": true,
  "deno.codeLens.implementations":true,
  "deno.codeLens.references":true,
  "deno.codeLens.referencesAllFunctions":true,
  "deno.config": null,
  "deno.importMap": null,
  "deno.lint": true,
  "deno.unstable": true,
  "files.trimTrailingWhitespace": true,
  "[javascript]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  },
  "[typescript]": {
    "editor.defaultFormatter": "denoland.vscode-deno",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": true,
    }
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "denoland.vscode-deno",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": true,
    }
  },
  "editor.tabSize": 2,
  "files.eol": "\\n"
}
`;
