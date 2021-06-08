//@ts-ignore
import { initEnv, mount } from '@cypress/angular'
import { AppModule } from './app.module'
import { HeroesComponent } from './heroes.component'

describe('HeroesComponent', () => {
  it('should show correct heading', () => {
    initEnv(HeroesComponent)
    mount(HeroesComponent)
    cy.contains('My Heroes')
  })

  // it('should replace default value input', () => {
  //   initEnv({ declarations: [InputComponent] })
  //   mount(InputComponent, { myInput: 9 })
  //   cy.contains('My input value 9')
  // })

  // it('should show default value input with AppModule', () => {
  //   initEnv({ imports: [AppModule] })
  //   mount(InputComponent)
  //   cy.contains('My input value 4')
  // })
})
