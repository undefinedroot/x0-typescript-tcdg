import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

// the class that holds everything within the dom (the main container)
export class UserEdit extends View<User, UserProps> {
  // method override from parent class
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }

  // method override from parent class
  // render the two components
  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  // implementation
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
