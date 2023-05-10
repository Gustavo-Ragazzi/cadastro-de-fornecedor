import Input from "../Input";

const classDefault = "w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

const formList = [
    {
        label: "Razão social",
        type: "text",
        name: "razao-social",
        id: "razao-social",
        classname: classDefault,
        required: true
    },
    {
        label: "Nome Fantasia",
        type: "text",
        name: "nome-fantasia",
        id: "nome-fantasia",
        classname: classDefault,
        required: true
    },
    {
        label: "CPF / CNPJ",
        type: "number",
        name: "cpf-cppj",
        id: "cpf-cnpj",
        classname: classDefault,
        required: true
    },
    {
        label: "Telefone",
        type: "tel",
        name: "telefone",
        id: "telfone",
        classname: classDefault,
        required: true
    },
    {
        label: "Endereço",
        type: "text",
        name: "endereco",
        id: "endereco",
        classname: classDefault,
        required: true
    },
    {
        label: "Número",
        type: "number",
        name: "numero",
        id: "numero",
        classname: classDefault,
        required: true
    },
    {
        label: "Complemento",
        type: "text",
        name: "complemento",
        id: "complemento",
        classname: classDefault,
        required: true
    },
    {
        label: "Bairro",
        type: "text",
        name: "bairro",
        id: "bairro",
        classname: classDefault,
        required: true
    },
    {
        label: "Cidade",
        type: "text",
        name: "cidade",
        id: "cidade",
        classname: classDefault,
        required: true,
    },
    {
        label: "Estado",
        type: "text",
        name: "estado",
        id: "estado",
        classname: classDefault,
        required: true
    },
    {
        label: "CEP",
        type: "number",
        name: "cep",
        id: "cep",
        classname: classDefault,
        required: true
    },
    {
        label: "País",
        type: "text",
        name: "pais",
        id: "pais",
        classname: classDefault,
        required: true
    },
    {
        label: "Inscrição Estadual",
        type: "number",
        name: "inscricao-estadual",
        id: "inscricao-estadual",
        classname: classDefault,
        required: false
    },
    {
        label: "Inscrição Municipal",
        type: "number",
        name: "inscricao-estadual",
        id: "inscricao-estadual",
        classname: classDefault,
        required: false
    },
    {
        label: "E-mail",
        type: "email",
        name: "email",
        id: "email",
        classname: classDefault,
        required: true
    },
    {
        label: "Contato",
        type: "text",
        name: "contato",
        id: "contato",
        classname: classDefault,
        required: false
    }
]

export default function SupplierForm() {
    return (
        <form className="grid grid-cols-2 gap-3" >
            {formList.map((item) => {
                return (
                    <Input
                        className={item.classname}
                        label={item.label}
                        type={item.type}
                        name={item.name}
                        id={item.id}
                        required={item.required}
                    />
                )
            })}
            <button className="col-span-2-auto font-semibold text-md uppercase mx-auto shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Cadastrar</button>
        </form>
    )
}