
import { RouterModule } from '@angular/router'
//@ts-ignore
import { initEnv, mount } from '@cypress/angular'
import { AppRoutingModule } from './app-routing.module'
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component'

describe('DashboardComponent', () => {
  it('should create', () => {
    initEnv(DashboardComponent, {
      declarations: [HeroesComponent],
      imports: [AppRoutingModule],
    })

    mount(DashboardComponent)
    cy.contains('Page 1').click()
    cy.location('pathname').should('eq', '/page1')
    cy.contains('Page 2').click()
    cy.location('pathname').should('eq', '/page2')
  })
})
