/// <reference types="cypress" />

const urls = ['https://www.w3.org/standards/badpage', 'https://www.w3.org/standards/webofdevices/multimodal', 'https://www.w3.org/standards/webdesign/htmlcss']

describe('console error does not appear', () => {
  urls.forEach((url) => {
    it(`Should load page with no error message for url: ${url}`, () => {
      cy.visit(url)
      cy.request({
        url: url,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    })
  })
})
