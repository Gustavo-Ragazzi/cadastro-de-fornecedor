import { IoMdAdd, IoMdCreate , IoMdTrash, IoMdSearch } from "react-icons/io";
import example from "../example.json"

function handleShowForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert("show form")
}

function handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert("edit")
}

function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert("delete")
}

function handleShowMore(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert("show more")
}

export default function Main() {
    return (
        <>  
            <div className="flex items-center justify-between px-6">
                <h1 className="text-white text-3xl p-5">Fornecedores</h1>
                <button 
                    className="rounded-full bg-green-500 hover:bg-green-400 active:bg-green-300"
                    onClick={handleShowForm}
                    ><IoMdAdd className="m-1 text-lg"/>
                </button>
            </div>
            <table className="text-white w-full">
                <thead>
                    <tr>
                        <th className="text-left px-4">Razão social</th>
                        <th className="text-left px-4">Nome fantasia</th>
                        <th className="text-left px-4">CNPJ / CPF</th>
                        <th className="text-left px-4">Telefone</th>
                        <th className="text-left px-4">E-mail</th>
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
                                    <button className="hover:text-green-500 active:text-green-300" onClick={handleShowMore}><IoMdSearch className="text-lg"/></button>
                                    <button className="hover:text-green-500 active:text-green-300" onClick={handleEdit}><IoMdCreate className="text-lg"/></button>
                                    <button className="hover:text-red-500 active:text-red-300" onClick={handleDelete}><IoMdTrash className="text-lg"/></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}