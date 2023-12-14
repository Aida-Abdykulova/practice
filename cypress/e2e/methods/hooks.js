// describe('practicing hooks', () => {

//     beforeEach(() => {
//         cy.login('Admin', 'admin123')
    
//     });


//     it('Test 1', () => {


//         cy.contains("Admin").click()
//     });

//     it('Test 2', () => {


//         cy.contains("PIM").click()
//     });
// });


import { admin } from '../pages/admin'

describe('practicing hooks', () => {

    before(() => {
        cy.fixture('users').then((data) => {
            globalThis.data = data
        })

    })

    beforeEach(() => {
        cy.login(data.username, data.password)
    });


    it('Test 1', () => {

        cy.visit('/')
        cy.contains('Admin').click()
        cy.get(admin.addButton).click()


    });

    it.skip('Test 2', () => {
        cy.visit('/')
        cy.contains("Claim").click()
    });

    it.skip('Test 2', () => {
        cy.visit('/')
        cy.contains("Directory").click()
    });
});











