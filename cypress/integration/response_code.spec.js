/// <reference types="cypress" />

const urls = ['https://www.w3.org/standards/badpage']


//other response codes tested in console_error test
describe('response code', () => {
  urls.forEach((url) => {
  it(`Should load page with response code 404 for badrequest`, () => {
    cy.visit(url, {failOnStatusCode: false})
    cy.request({
      url: url,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(404);
    });
  })
})
})