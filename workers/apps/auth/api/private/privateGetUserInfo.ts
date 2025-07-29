import { handleError } from '@/workers/apps/common/handleError';
import { OpenAPIRoute } from 'chanfana';
import { z } from 'zod';
import { IRequest } from 'itty-router';
import { getUserById } from '@/workers/apps/auth/services/user';
import { UserInfo } from '@/shared/types/user';
import { UserNotFoundException } from '../../exceptions/user';

const RESPONSE_SCHEMA = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  avatar_url: z.string().nullable(),
  language: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
}) satisfies z.ZodType<UserInfo>;

export class PrivateGetUserInfoAPI extends OpenAPIRoute {
  schema = {
    security: [{ BearerAuth: [] }],
    response: {
      content: {
        'application/json': { schema: RESPONSE_SCHEMA },
      },
    },
  };

  async handle(request: IRequest, env: Env, _ctx: ExecutionContext) {
    try {
      const userId = Number(request.user?.user_id);
      const user = await getUserById(env, userId);

      if (!user) {
        throw new UserNotFoundException();
      }

      const userInfo: UserInfo = {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        avatar_url: user.avatar_url,
        language: user.language,
        created_at: user.created_at.getTime(),
        updated_at: user.updated_at.getTime(),
      };

      return Response.json(userInfo);
    } catch (error) {
      return handleError(error);
    }
  }
}
