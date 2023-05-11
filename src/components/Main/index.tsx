import { IoMdAdd, IoMdCreate , IoMdTrash } from "react-icons/io";
import example from "../example.json"

export default function Main() {
    return (
        <>
            <h1 className="text-white text-3xl p-5">Fornecedores</h1>
            <table className="text-white w-full">
                <thead>
                    <tr>
                        <th className="text-left px-4">Razão social</th>
                        <th className="text-left px-4">Nome fantasia</th>
                        <th className="text-left px-4">CNPJ / CPF</th>
                        <th className="text-left px-4">Telefone</th>
                        <th className="text-left px-4">E-mail</th>
                        <th className="text-left px-4">
                            <button className="rounded-full bg-green-500 hover:bg-green-400 active:bg-green-300">
                                <IoMdAdd className="m-1 text-lg"/>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {example.map((item, index) => (
                        <tr className={`${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}`}>
                            <td className="text-left px-4 py-2">{item.razao_social}</td>
                            <td className="text-left px-4 py-2">{item.nome_fantasia}</td>
                            <td className="text-left px-4 py-2">{item.cnpj_cpf}</td>
                            <td className="text-left px-4 py-2">{item.telefone}</td>
                            <td className="text-left px-4 py-2">{item.email}</td>
                            <td>
                                <div className="flex gap-2 items-center justify-center">
                                    <button className="">Ver Mais</button>
                                    <button className="hover:text-green-500 active:text-green-300"><IoMdCreate className="text-lg "/></button>
                                    <button className="hover:text-red-500 active:text-red-300"><IoMdTrash className="text-lg"/></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}