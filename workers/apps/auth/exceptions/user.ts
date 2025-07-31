import { ServiceException } from '@/workers/apps/common/exceptions';

export class UserAlreadyExistsException extends ServiceException {
  constructor(message: string = 'User already exists') {
    super(message, 404);
    this.name = 'UserAlreadyExistException';
  }
}

export class InvalidCredentialsException extends ServiceException {
  constructor(message: string = 'Invalid credentials') {
    super(message, 401);
    this.name = 'InvalidCredentialsException';
  }
}

export class UserNotFoundException extends ServiceException {
  constructor(message: string = 'User not found') {
    super(message, 404);
    this.name = 'UserNotFoundException';
  }
}
