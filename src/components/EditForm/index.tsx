import { GrClose } from "react-icons/gr";
import { useState } from "react";
import Input from "../Input";

const classDefault = "w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

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

export default function EditForm(props: any) {
    const [razaoSocial, setRazaoSocial] = useState(props.actualSupplier.razaoSocial);
    const [nomeFantasia, setNomeFantasia] = useState(props.actualSupplier.nomeFantasia);
    const [cpfCnpj, setCpfCnpj] = useState(props.actualSupplier.cpfCnpj);
    const [telefone, setTelefone] = useState(props.actualSupplier.telefone);
    const [endereco, setEndereco] = useState(props.actualSupplier.endereco);
    const [numero, setNumero] = useState(props.actualSupplier.numero);
    const [complemento, setComplemento] = useState(props.actualSupplier.complemento);
    const [bairro, setBairro] = useState(props.actualSupplier.bairro);
    const [cidade, setCidade] = useState(props.actualSupplier.cidade);
    const [estado, setEstado] = useState(props.actualSupplier.estado);
    const [cep, setCep] = useState(props.actualSupplier.cep);
    const [pais, setPais] = useState(props.actualSupplier.pais);
    const [inscricaoEstadual, setInscricaoEstadual] = useState(props.actualSupplier.inscricaoEstadual);
    const [inscricaoMunicipal, setInscricaoMunicipal] = useState(props.actualSupplier.inscricaoMunicipal);
    const [email, setEmail] = useState(props.actualSupplier.email);
    const [contato, setContato] = useState(props.actualSupplier.contato);
    const [editIndex, setEditIndex] = useState(props.editIndex)

    const formList = [
        {
            label: "Razão social",
            type: "text",
            name: "razao-social",
            id: "razao-social",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRazaoSocial(e.target.value),
            required: true,
            value: razaoSocial
        },
        {
            label: "Nome Fantasia",
            type: "text",
            name: "nome-fantasia",
            id: "nome-fantasia",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNomeFantasia(e.target.value),
            required: true,
            value: nomeFantasia
        },
        {
            label: "CPF / CNPJ",
            type: "number",
            name: "cpf-cnpj",
            id: "cpf-cnpj",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCpfCnpj(parseInt(e.target.value)),
            required: true,
            value: cpfCnpj
        },
        {
            label: "Telefone",
            type: "tel",
            name: "telefone",
            id: "telfone",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTelefone(parseInt(e.target.value)),
            required: true,
            value: telefone
        },
        {
            label: "Endereço",
            type: "text",
            name: "endereco",
            id: "endereco",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEndereco(e.target.value),
            required: true,
            value: endereco
        },
        {
            label: "Número",
            type: "number",
            name: "numero",
            id: "numero",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNumero(parseInt(e.target.value)),
            required: true,
            value: numero
        },
        {
            label: "Complemento",
            type: "text",
            name: "complemento",
            id: "complemento",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setComplemento(e.target.value),
            required: true,
            value: complemento
        },
        {
            label: "Bairro",
            type: "text",
            name: "bairro",
            id: "bairro",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setBairro(e.target.value),
            required: true,
            value: bairro
        },
        {
            label: "Cidade",
            type: "text",
            name: "cidade",
            id: "cidade",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCidade(e.target.value),
            required: true,
            value: cidade
        },
        {
            label: "Estado",
            type: "text",
            name: "estado",
            id: "estado",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEstado(e.target.value),
            required: true,
            value: estado
        },
        {
            label: "CEP",
            type: "number",
            name: "cep",
            id: "cep",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCep(parseInt(e.target.value)),
            required: true,
            value: cep
        },
        {
            label: "País",
            type: "text",
            name: "pais",
            id: "pais",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPais(e.target.value),
            required: true,
            value: pais
        },
        {
            label: "Inscrição Estadual",
            type: "number",
            name: "inscricao-estadual",
            id: "inscricao-estadual",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInscricaoEstadual(parseInt(e.target.value)),
            required: false,
            value: inscricaoEstadual
        },
        {
            label: "Inscrição Municipal",
            type: "number",
            name: "inscricao-estadual",
            id: "inscricao-estadual",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInscricaoMunicipal(parseInt(e.target.value)),
            required: false,
            value: inscricaoMunicipal
        },
        {
            label: "E-mail",
            type: "email",
            name: "email",
            id: "email",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            required: true,
            value: email
        },
        {
            label: "Contato",
            type: "text",
            name: "contato",
            id: "contato",
            classname: classDefault,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setContato(e.target.value),
            required: false,
            value: contato
        }
    ]

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const supplier: Supplier = {razaoSocial: razaoSocial, nomeFantasia: nomeFantasia, cpfCnpj: cpfCnpj, telefone: telefone, endereco: endereco, numero: numero, complemento: complemento, bairro: bairro, cidade: cidade, estado: estado, cep: cep, pais: pais, inscricaoEstadual:  inscricaoEstadual, inscricaoMunicipal: inscricaoMunicipal, email: email, contato: contato};
        
        const currentList = JSON.parse(localStorage.getItem("formSupplier") ?? "[]");
        
        currentList[editIndex] = supplier;
        localStorage.setItem("formSupplier", JSON.stringify(currentList));
    }

    return (
        <div className="overflow-y-auto w-2/3 lg:w-1/2 bg-gray-600 absolute inset-0 mx-auto my-5 p-5 rounded-lg shadow-lg">
            <button 
                className="float-right hover:bg-gray-500 active:bg-gray-400 rounded-full p-1"
                onClick={props.handleShowEditForm}
            ><GrClose /></button>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-7" key={"form"} onSubmit={handleSubmit}>
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
                            value={item.value}
                        />
                    )
                })}
                <button type="submit" className="lg:col-start-1 lg:col-end-3 mx-auto font-semibold text-md uppercase shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Atualizar</button>
            </form>
        </div>
    )
}