import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | number | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx
      .switchToHttp()
      .getRequest();
      if (data) {
        return request.user[data];
      }
    return request.user;
  },
);

/* used to retrieve the authenticated user object from the request during the handling of an HTTP request */
/* designed to be used on a parameter of a controller method, and when the method is called, the decorator will extract the user information from the incoming HTTP request and provide it as the value of the decorated parameter. */