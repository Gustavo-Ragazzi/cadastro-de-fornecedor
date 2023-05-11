import { useState } from "react";
import Input from "../Input";

const classDefault = "w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

interface Supplier {
    razaoSocial: string,
    nomeFantasia: string,
    cpf: number,
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

export default function SupplierForm() {
    const [razaoSocial, setRazaoSocial] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [cpf, setCpf] = useState(0);
    const [telefone, setTelefone] = useState(0);
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [cep, setCep] = useState(0);
    const [pais, setPais] = useState("");
    const [inscricaoEstadual, setInscricaoEstadual] = useState(0);
    const [inscricaoMunicipal, setInscricaoMunicipal] = useState(0);
    const [email, setEmail] = useState("");
    const [contato, setContato] = useState("");

    const formList = [
        {
            label: "Razão social",
            type: "text",
            name: "razao-social",
            id: "razao-social",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRazaoSocial(e.target.value),
            required: true
        },
        {
            label: "Nome Fantasia",
            type: "text",
            name: "nome-fantasia",
            id: "nome-fantasia",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNomeFantasia(e.target.value),
            required: true
        },
        {
            label: "CPF / CNPJ",
            type: "number",
            name: "cpf-cppj",
            id: "cpf-cnpj",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCpf(parseInt(e.target.value)),
            required: true
        },
        {
            label: "Telefone",
            type: "tel",
            name: "telefone",
            id: "telfone",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTelefone(parseInt(e.target.value)),
            required: true
        },
        {
            label: "Endereço",
            type: "text",
            name: "endereco",
            id: "endereco",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEndereco(e.target.value),
            required: true
        },
        {
            label: "Número",
            type: "number",
            name: "numero",
            id: "numero",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNumero(parseInt(e.target.value)),
            required: true
        },
        {
            label: "Complemento",
            type: "text",
            name: "complemento",
            id: "complemento",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setComplemento(e.target.value),
            required: true
        },
        {
            label: "Bairro",
            type: "text",
            name: "bairro",
            id: "bairro",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setBairro(e.target.value),
            required: true
        },
        {
            label: "Cidade",
            type: "text",
            name: "cidade",
            id: "cidade",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCidade(e.target.value),
            required: true,
        },
        {
            label: "Estado",
            type: "text",
            name: "estado",
            id: "estado",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEstado(e.target.value),
            required: true
        },
        {
            label: "CEP",
            type: "number",
            name: "cep",
            id: "cep",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCep(parseInt(e.target.value)),
            required: true
        },
        {
            label: "País",
            type: "text",
            name: "pais",
            id: "pais",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPais(e.target.value),
            required: true
        },
        {
            label: "Inscrição Estadual",
            type: "number",
            name: "inscricao-estadual",
            id: "inscricao-estadual",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInscricaoEstadual(parseInt(e.target.value)),
            required: false
        },
        {
            label: "Inscrição Municipal",
            type: "number",
            name: "inscricao-estadual",
            id: "inscricao-estadual",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInscricaoMunicipal(parseInt(e.target.value)),
            required: false
        },
        {
            label: "E-mail",
            type: "email",
            name: "email",
            id: "email",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            required: true
        },
        {
            label: "Contato",
            type: "text",
            name: "contato",
            id: "contato",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setContato(e.target.value),
            required: false
        }
    ]

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const supplier: Supplier = {razaoSocial, nomeFantasia, cpf, telefone, endereco, numero, complemento, bairro, cidade, estado, cep, pais, inscricaoEstadual, inscricaoMunicipal, email, contato}

        console.log(supplier)
    }

    return (
        <form className="grid grid-cols-2 gap-3" key={"form"} onSubmit={handleSubmit}>
            {formList.map((item) => {
                return (
                    <Input
                        className={item.classname}
                        label={item.label}
                        type={item.type}
                        name={item.name}
                        id={item.id}
                        required={item.required}
                        onChange={item.onChange}
                    />
                )
            })}
            <button type="submit" className="col-start-1 col-end-3 mx-auto font-semibold text-md uppercase shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Cadastrar</button>
        </form>
    )
}