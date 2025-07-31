// workers/apps/types.ts

import { RouterOpenApiType } from '../types';

export type RegisterAppRoutes = (
  router: RouterOpenApiType,
  urlPrefix?: string | null
) => void;
