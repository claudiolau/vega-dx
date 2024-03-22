module.exports = function (plop) {
  plop.setGenerator("function", {
    description: "Create a utilty function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this utils function's name?",
      },
      {
        type: "input",
        name: "utils function",
        message: "Writing default function",
        default: "string",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/utils/{{lowerCase name}}.ts",
        templateFile: "templates/utils.ts.hbs",
      },
    ],
  });
};
