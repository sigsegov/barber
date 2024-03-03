import { format } from "date-fns"
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_component/search";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Marcio!</h2>
        <p className="text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM 'de' yyyy", {
            locale:ptBR,
          })}
        </p>
      </div>
      <div className="div px-5 mt-6">
        <Search />
      </div>

    </div>
  )
}