import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";

import { Cache, QueryInput } from "@urql/exchange-graphcache";

import { getToken } from "./methods";

const USER_TOKEN = getToken();

export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

export const createUrqlClient = (ssrExchange: any) => ({
  url: process.env.NEXT_PUBLIC_BACK_END_URL!,
  fetchOptions: {
    headers: {
      authorization: `bearer ${USER_TOKEN}`,
    },
  },
  exchanges: [dedupExchange, cacheExchange({}), ssrExchange, fetchExchange],
});
