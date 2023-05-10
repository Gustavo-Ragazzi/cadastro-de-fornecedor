import Input from "../Input";

const formList = [
    {
        label: "Razão social",
        type: "text",
        name: "razao-social",
        id: "razao-social",
        required: true
    },
    {
        label: "Nome Fantasia",
        type: "text",
        name: "nome-fantasia",
        id: "nome-fantasia",
        required: true
    },
    {
        label: "CNPJ",
        type: "radio",
        name: "pf-pj",
        id: "cnpj",
        required: false
    },
    {
        label: "CPF",
        type: "radio",
        name: "pf-pj",
        id: "cpf",
        required: false
    },
    {
        label: "Telefone",
        type: "tel",
        name: "telefone",
        id: "telfone",
        required: true
    },
    {
        label: "Endereço",
        type: "text",
        name: "endereco",
        id: "endereco",
        required: true
    },
    {
        label: "Número",
        type: "number",
        name: "numero",
        id: "numero",
        required: true
    },
    {
        label: "Complemento",
        type: "text",
        name: "complemento",
        id: "complemento",
        required: true
    },
    {
        label: "Bairro",
        type: "text",
        name: "bairro",
        id: "bairro",
        required: true
    },
    {
        label: "Cidade",
        type: "text",
        name: "cidade",
        id: "cidade",
        required: true,
    },
    {
        label: "Estado",
        type: "text",
        name: "estado",
        id: "estado",
        required: true
    },
    {
        label: "CEP",
        type: "number",
        name: "cep",
        id: "cep",
        required: true
    },
    {
        label: "País",
        type: "text",
        name: "pais",
        id: "pais",
        required: true
    },
    {
        label: "Inscrição Estadual",
        type: "number",
        name: "inscricao-estadual",
        id: "inscricao-estadual",
        required: false
    },
    {
        label: "Inscrição Municipal",
        type: "number",
        name: "inscricao-estadual",
        id: "inscricao-estadual",
        required: false
    },
    {
        label: "E-mail",
        type: "email",
        name: "email",
        id: "email",
        required: true
    },
    {
        label: "Contato",
        type: "text",
        name: "contato",
        id: "contato",
        required: false
    }
]

export default function SupplierForm() {
    return (
        <>
            {formList.map((item) => {
                return (
                    <Input
                        label={item.label}
                        type={item.type}
                        name={item.name}
                        id={item.id}
                        required={item.required}
                    />
                )
            })}
        </>
    )
}