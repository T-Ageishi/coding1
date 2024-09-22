import { FC } from "react";
import { Props } from "./types.ts";

/**
 * アイコン
 */
export const Icon: FC<Props> = ({ icon }) => {
  return <span className="material-symbols-outlined">{icon}</span>;
};
