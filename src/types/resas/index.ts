/**
 * RESAS API レスポンスの共通部分の型
 */
export type ResasApiResponse<T> = {
  message: string | null;
  result: T;
};
