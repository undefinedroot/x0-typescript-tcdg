import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

// if user has session, proceed, if not then error
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  // typeguard
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  // no session, or not logged in
  res.status(403);
  res.send('Not Permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    // left to right check
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  }
}
