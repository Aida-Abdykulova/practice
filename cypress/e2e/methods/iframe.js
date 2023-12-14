// /// <reference types="cypress" />


// describe('', () => {
//     it('', () => {

//         cy.visit('https://the-internet.herokuapp.com/iframe')

//         cy.get('#mce_0_ifr').then((iframe) => {

//             const iframeDocument = iframe.contents().find('body')

//             cy.wrap(iframeDocument).clear().type('test')




//         })

//     });
// });

// /// <reference types="cypress" />


// describe('', () => {
//     it('', () => {

        // cy.visit('https://the-internet.herokuapp.com/iframe')

        // cy.get('#mce_0_ifr').then((iframe) => {

        //     const iframeDocument = iframe.contents().find('body')

        //     cy.wrap(iframeDocument).clear().type('test')

        // })

        describe('', () => {
            it('', () => {
                cy.visit('https://nxtgenaiacademy.com/iframe/')
                cy.get('[src="https://nxtgenaiacademy.com/demo-site/"]').then((iframe) => {
                    const iframeDocument = iframe.contents().find('body')
                    cy.wrap(iframeDocument)
                        .find('[id="vfb-5"]')
                        .click()
                        .type("Aida")
                })
            });
        });
        
        
        
        
        
        
        
        