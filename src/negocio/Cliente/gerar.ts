import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Gerar from "../gerar"
import RandGenerator from "./randGenerator";

export default class GeracaoDeCliente extends Gerar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public geracao(): void {

        const nomesSociais: string[] = [
            'Alexandre',
            'Beatriz',
            'César',
            'Daniela',
            'Eduarda',
            'Fernando',
            'Gabriela',
            'Henrique',
            'Isabela',
            'João',
            'Larissa',
            'Miguel',
            'Natália',
            'Otávio',
            'Patrícia',
            'Rafael',
            'Sofia',
            'Thiago',
            'Valentina',
            'Xavier'
        ];

        const genero: string[] = [
            "Masculino",
            "Feminino",
            "Outro"
        ]

        const nomesProdutos: string[] = [
            'Camiseta',
            'Celular',
            'Tênis',
            'Monitor',
            'Notebook',
            'Fones de ouvido',
            'Mochila',
            'Cadeira',
            'Relógio',
            'Bolsa',
            'Óculos de sol',
            'Livro',
            'Cafeteira',
            'Televisão',
            'Guitarra',
            'Bicicleta',
            'Ventilador',
            'Colchão',
            'Panela elétrica',
            'Máquina de lavar'
        ];

        const nomesServicos: string[] = [
            'Limpeza residencial',
            'Design gráfico',
            'Desenvolvimento web',
            'Consultoria financeira',
            'Aulas de idiomas',
            'Manutenção de computadores',
            'Serviço de pintura',
            'Instalação elétrica',
            'Personal training',
            'Serviço de jardinagem',
            'Assistência técnica',
            'Reparos hidráulicos',
            'Serviço de tradução',
            'Fotografia profissional',
            'Serviço de buffet',
            'Reforma residencial',
            'Consultoria em marketing',
            'Assessoria jurídica',
            'Serviço de massagem',
            'Serviço de limpeza comercial'
        ];

        for (let index = 0; index < 30; index++) {

            let gen: RandGenerator = new RandGenerator();
            //gerar cliente
            let nome = gen.gerarNomeAleatorio()
            let nomeSocial = gen.obterNomeAleatorio(nomesSociais)
            let date = new Date()
            date.getDate()

            let cpf = new CPF(gen.gerarCPFAleatorio(), date);
            let client = new Cliente(nome, nomeSocial, cpf, gen.obterNomeAleatorio(genero))

            let rg = new RG(gen.gerarRGAleatorio(), date)

            let ddd = "12"
            let numero = gen.gerarNumerosAleatorios()
            let telefone = new Telefone(ddd, numero)
            //produtos do cliente
            let productsQuantity = 3
            const products: string[] = [
                gen.obterNomeAleatorio(nomesProdutos),
                gen.obterNomeAleatorio(nomesProdutos),
                gen.obterNomeAleatorio(nomesProdutos),
                gen.obterNomeAleatorio(nomesProdutos)
            ]

            let sliceProdutos = products.slice();
            for (let index = 0; index < sliceProdutos.length; index++) {
                let nomes = this.produtos.map(i => (i.nome))
                let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
                if (nomes.includes(sliceProdutos[index])) {
                    let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                    client.getProdutosConsumidos.push(produtoNovo)
                }
            }
            //serviços do cliente
            let serviceQuantity = 4
            const services: string[] = [
                gen.obterNomeAleatorio(nomesServicos),
                gen.obterNomeAleatorio(nomesServicos),
                gen.obterNomeAleatorio(nomesServicos),
                gen.obterNomeAleatorio(nomesServicos)
            ]
            let sliceServico = services.slice();
            for (let index = 0; index < sliceServico.length; index++) {
                let nomes = this.servicos.map(i => (i.nome))
                let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
                if (nomes.includes(sliceServico[index])) {
                    let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                    client.getServicosConsumidos.push(adicionandoServico)
                }

            };

            client.getRgs.push(rg)
            client.getTelefones.push(telefone);
            this.clientes.push(client);
        }

    }
}