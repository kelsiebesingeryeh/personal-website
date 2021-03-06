const baseURL = 'http://localhost:3000';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should have a title and description on the homepage', () => {
      cy.get('.h1Animation').should('contain', "Hey, I'm Kelsie")
      .get('.aboutMe').should('be.visible')
  })

    it("Should have a navigation menu", () => {
      cy.get("svg").should('be.visible')
    });

    it("Should have a list of navigation items", () => {
      cy.get(".hamburgerContainer").children().first().click();
      cy.get('ul li').should('be.visible')
    });
})

describe("Projects", () => {
  beforeEach(() => {
    cy.visit(`${baseURL}/projects`);
  });

  it("Should have a title", () => {
    cy.get(".projectTitlePage")
      .should("contain", "Projects")
  });

  it("Should display a project card", () => {
    cy.get(".projectTitle").first().should("contain", "CryptoWatch");
    cy.get('.projectImage').first().should('be.visible');
    cy.get('.projectDetails').first().should('be.visible');
    cy.get(".projectDetails").children().first().should("be.visible");
    cy.get(".projectDetails").children().first().should("be.visible");
  });

  it.skip("Should have a button for live deployment", () => {
    cy.get(".projectLinks").first().should("contain", "Live Deployment").click();
  });

  it.skip("Should have a button for github repository", () => {
    cy.get(".projectLinks")
      .last().first()
      .should("contain", "Git Repository")
      .click();
  });
});

describe("Contact", () => {
  beforeEach(() => {
    cy.visit(`${baseURL}/contact`);
  });

  it('Should have a title on the contact page', () => {
      cy.get('.contactTitle').should('contain', "Let's Work Together")
  })

  it("Should have a contact button", () => {
    cy.get(".emailContact").should("contain", "SAY HELLO");
  });
})