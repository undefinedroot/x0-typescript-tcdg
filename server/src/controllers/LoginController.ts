import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password') // this decorator already handles if 'email' and 'password' fields are not null
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    // Type Guard, should all exist
    if (email === 'hi@hi.com' && password === 'password') {
      // mark this person as logged in
      req.session = { loggedIn: true };
      //redirect them to the root route
      res.redirect('/');
    } else {
      res.status(422).send('You must provide valid fields');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
