import { IoMdAdd, IoMdCreate , IoMdTrash, IoMdSearch } from "react-icons/io";
import SupplierForm from "../SupplierForm";
import { useState } from "react";

interface Supplier {
    razaoSocial: string,
    nomeFantasia: string,
    cpfCnpj: number,
    telefone: number,
    endereco: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: number,
    pais: string,
    inscricaoEstadual?: number,
    inscricaoMunicipal?: number,
    email: string,
    contato?: string
}


export default function Main() {
    const [showForm, setShowForm] = useState(false);
    const [storageList, setStoragelist] = useState<Supplier[]>(JSON.parse(localStorage.getItem("formSupplier") ?? "[]"));


    function handleShowForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        showForm ? setShowForm(false) : setShowForm(true);
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
                    {storageList.map((item, index) => (
                        <tr className={`${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}`}>
                            <td className="text-left px-4 py-2">{item.razaoSocial}</td>
                            <td className="text-left px-4 py-2">{item.nomeFantasia}</td>
                            <td className="text-left px-4 py-2">{item.cpfCnpj}</td>
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
            {showForm && <SupplierForm handleShowForm={handleShowForm}/>}
        </>
    )
}
