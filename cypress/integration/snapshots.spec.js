/// <reference types="cypress" />

describe('Snapshots', () => {

  it('works', () => {
    cy.visit('https://www.zumper.com/apartment-buildings/p71295/1320-1380-lombard-russian-hill-san-francisco-ca')

    // load all lazy sections by scrolling to the bottom:
    cy.scrollTo('bottom', {duration: 3000})

    // scroll back up
    cy.scrollTo('top')

    cy.matchImageSnapshot()
  })

})
