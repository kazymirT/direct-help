import { FC } from "react"
import ClipboardButton from "../ClipboardButton/ClipboardButton"
import { CryptocurrencyProps } from "./types";
import clsx from "clsx";

const Cryptocurrency: FC<CryptocurrencyProps> = ({ score, title, ...props }) => {
  const articleCN = clsx("flex justify-between w-full items-center pl-5 pr-3 py-2 border border-[#525455] rounded-md text-[#262222] text-xl font-light hover:bg-[#eae8e8] transition-all duration-300", {
    ['pl-9']: !title,
  });
  return (
    <article className={articleCN}>
      {title && 
      <h3>{title}</h3>
      }
      <p>{score}</p>
      <ClipboardButton {...props} />
    </article>
  )
}

export default Cryptocurrency;
