import { hello } from "../hello";

test("hello should greet with the provided name", () => {
  const name = "Bob";
  const greeting = hello(name);
  expect(greeting).toBe(`Hello ${name}!`);
});
