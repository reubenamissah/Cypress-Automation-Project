// API Testing Examples: api-tests.cy.js
// Learn how to test APIs with Cypress

describe('API Testing Basics', () => {
  
  // Base URL for our API (free fake API for testing)
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  describe('Lesson 1: GET Requests (Retrieve Data)', () => {
    
//     it('Example 1: Get all users', () => {
//       cy.request('GET', `${baseUrl}/users`)
//         .then((response) => {
//           // Check if request was successful (200 = OK)
//           expect(response.status).to.eq(200)
          
//           // Check if we got 10 users
//           expect(response.body).to.have.length(10)
          
//           // Check if first user has expected properties
//           expect(response.body[0]).to.have.property('id')
//           expect(response.body[0]).to.have.property('name')
//           expect(response.body[0]).to.have.property('email')
          
//           // Log the first user for learning
//           cy.log('First user:', JSON.stringify(response.body[0]))
//         })
    })

//     it('Example 2: Get a specific user by ID', () => {
//       cy.request('GET', `${baseUrl}/users/1`)
//         .then((response) => {
//           expect(response.status).to.eq(200)
          
//           // Verify specific user data
//           expect(response.body.id).to.eq(1)
//           expect(response.body.name).to.eq('Leanne Graham')
//           expect(response.body.email).to.eq('Sincere@april.biz')
          
//           // Verify nested object (address)
//           expect(response.body.address).to.have.property('city')
//           expect(response.body.address.city).to.eq('Gwenborough')
//         })
//     })

//     it('Example 3: Get user posts', () => {
//       cy.request('GET', `${baseUrl}/users/1/posts`)
//         .then((response) => {
//           expect(response.status).to.eq(200)
          
//           // Check that user has posts
//           expect(response.body.length).to.be.greaterThan(0)
          
//           // Check post structure
//           expect(response.body[0]).to.have.property('userId')
//           expect(response.body[0]).to.have.property('title')
//           expect(response.body[0]).to.have.property('body')
//         })
//     })

//     it('Example 4: Test 404 error (user not found)', () => {
//       cy.request({
//         method: 'GET',
//         url: `${baseUrl}/users/999999`,
//         failOnStatusCode: false // Don't fail the test on error status
//       }).then((response) => {
//         // Verify we get 404 error
//         expect(response.status).to.eq(404)
//       })
//     })
//   })

  describe('Lesson 2: POST Requests (Create Data)', () => {
    
    it('Example 1: Create a new user', () => {
      const newUser = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
      }

      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        body: newUser
      }).then((response) => {
        // 201 = Created (successful creation)
        expect(response.status).to.eq(201)
        
        // Verify the response contains our data
        expect(response.body.name).to.eq(newUser.name)
        expect(response.body.email).to.eq(newUser.email)
        
        // Server assigns an ID
        expect(response.body).to.have.property('id')
        
        // Log the created user
        cy.log('Created user ID:', response.body.id)
      })
    })
    })
    })