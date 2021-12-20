/// <reference types="cypress" />

const urls = ['https://www.w3.org/standards/badpage', 'https://www.w3.org/standards/webofdevices/multimodal', 'https://www.w3.org/standards/webdesign/htmlcss']

describe('page links', () => {
  urls.forEach((url) => {
    it(`Links should not return errors for url: ${url}`, () => {
      cy.visit(url)
      cy.wrap('passed').as('ctrl')
      cy.get("a:not([href*='mailto:]']").each($el => {
        if ($el.prop('href').length > 0) {
          const message = $el.text()
          expect($el, message).to.have.attr("href").not.contain("undefined")
          cy.log($el.attr('href'))                       
        }
      })
    })
  })
})
