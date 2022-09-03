const { Selector } = require("testcafe");
import LoginPage from "../pageObjects/LoginPage";
fixture`Group of tests / Test suite - Login Suite`.page`./`;

test("Valid login", async (t) => {
  LoginPage.login("standard_user", "secret_sauce");
  await t.expect(Selector("span.title").innerText).eql("PRODUCTS");
});

test("Invalid login", async (t) => {
  LoginPage.login("incorrectUsername", "incorrectPassword");
  await t
    .expect(Selector(`h3[data-test="error"]`).innerText)
    .eql(
      "Epic sadface: Username and password do not match any user in this service"
    );
});
