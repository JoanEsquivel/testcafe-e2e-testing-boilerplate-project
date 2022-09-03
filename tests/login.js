const { Selector } = require("testcafe");

fixture`Group of tests / Test suite - Login Suite`.page`./`;

test("Valid login", async (t) => {
  await t
    .typeText("#user-name", "standard_user")
    .typeText('input[placeholder="Password"]', "secret_sauce")
    .click("#login-button")
    .expect(Selector("span.title").innerText)
    .eql("PRODUCTS");
});

test("Invalid login", async (t) => {
  await t
    .typeText("#user-name", "incorrectUsername")
    .typeText('input[placeholder="Password"]', "incorrectPassword")
    .click("#login-button")
    .expect(Selector(`h3[data-test="error"]`).innerText)
    .eql(
      "Epic sadface: Username and password do not match any user in this service"
    );
});
