import { FC, useEffect } from "react";
import { MainTemplate } from "../../templates/main_template/main_template.tsx";

export const Home: FC = () => {
  useEffect(() => {
    //todo 「都道府県一覧」APIからデータを取得する
  }, []);

  useEffect(() => {}, []);

  return <MainTemplate />;
};
