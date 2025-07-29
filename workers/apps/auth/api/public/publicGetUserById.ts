import { OpenAPIRoute } from 'chanfana';
import { z } from 'zod';
import { IRequest } from 'itty-router';
import { handleError } from '@/workers/apps/common/handleError';
import { getUserById } from '@/workers/apps/auth/services/user';
import { UserNotFoundException } from '../../exceptions/user';

// Response schema for public user info (excluding sensitive data)
const PUBLIC_USER_INFO_SCHEMA = z.object({
  id: z.number(),
  full_name: z.string(),
  avatar_url: z.string().nullable(),
  language: z.string(),
  country: z.string().nullable(),
  region: z.string().nullable(),
  user_type: z.string(),
  can_offer_help: z.boolean(),
  help_categories: z.string().nullable(),
  reputation_score: z.number(),
  verified: z.boolean(),
  created_at: z.number(),
});

export class PublicGetUserByIdAPI extends OpenAPIRoute {
  schema = {
    tags: ['Authentication'],
    summary: 'Get public user information by ID',
    description:
      'Retrieves public user information by user ID without requiring authentication',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'User ID',
        required: true,
        schema: {
          type: 'integer',
          format: 'int64',
        },
      },
    ],
    responses: {
      '200': {
        description: 'User information retrieved successfully',
        content: {
          'application/json': {
            schema: PUBLIC_USER_INFO_SCHEMA,
          },
        },
      },
      '404': {
        description: 'User not found',
      },
      '400': {
        description: 'Invalid user ID',
      },
    },
  } as any;

  async handle(request: IRequest, env: Env, _ctx: ExecutionContext) {
    try {
      const userId = Number(request.params?.id);

      if (isNaN(userId) || userId <= 0) {
        return new Response(JSON.stringify({ error: 'Invalid user ID' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const user = await getUserById(env, userId);

      if (!user) {
        throw new UserNotFoundException();
      }

      // Return only public user information
      const publicUserInfo = {
        id: user.id,
        full_name: user.full_name,
        avatar_url: user.avatar_url,
        language: user.language,
        created_at: user.created_at.getTime(),
      };

      return Response.json(publicUserInfo);
    } catch (error) {
      return handleError(error);
    }
  }
}
