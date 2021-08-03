describe('start app', () => {
  it('sdfdfgdfs', () => {
    cy.visit('/')


    cy.get('input[name="email"]').type('gaga@mail.ru')
    cy.get('button.subscribe__btn').click()
    cy.waitFor('modal__close')
    cy.get('.modal__close').click()
  })

})
