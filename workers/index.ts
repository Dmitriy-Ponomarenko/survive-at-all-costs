// workers/index.ts

import apiRouter from './apps/apiRouter';
import { composeMiddlewares, Middleware } from './middlewareComposer';
import { optionsMiddleware } from './middlewares/options';
import { IRequest } from 'itty-router';
import { serveAssetsMiddleware } from './middlewares/serveAssets';
import docsRouter from './apps/docsRouter';

const middlewares: Middleware[] = [optionsMiddleware, serveAssetsMiddleware];

function applyCors(response: Response, request: Request): Response {
  if (request.headers.has('Origin')) {
    const newResponse = new Response(response.body, response);
    newResponse.headers.set(
      'Access-Control-Allow-Origin',
      request.headers.get('Origin') || '*'
    );

    return newResponse;
  }

  return response;
}

async function serveApi(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response | null> {
  const url = new URL(request.url);
  if (url.pathname.startsWith('/docs')) {
    return await docsRouter.fetch(request, env, ctx);
  }

  const response = await apiRouter.fetch(request, env, ctx);
  if (!response) {
    return null;
  }

  return response;
}

export default {
  async fetch(
    request: IRequest,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    try {
      const handler = await composeMiddlewares(middlewares, serveApi);

      const response = await handler(request, env, ctx);

      return applyCors(
        response || new Response('Not found', { status: 404 }),
        request
      );
    } catch (error) {
      console.error(error);

      return new Response('Server error', { status: 500 });
    }
  },
};
