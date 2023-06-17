export default class RandGenerator {
    public gerarCPFAleatorio(): string {
        const parte1: number = Math.floor(Math.random() * 1000);
        const parte2: number = Math.floor(Math.random() * 1000);
        const parte3: number = Math.floor(Math.random() * 1000);
        const parte4: number = Math.floor(Math.random() * 100);

        const numeroFormatado: string = `${parte1.toString().padStart(3, '0')}.${parte2.toString().padStart(3, '0')}.${parte3.toString().padStart(3, '0')}-${parte4.toString().padStart(2, '0')}`;

        return numeroFormatado;
    }

    public gerarRGAleatorio(): string {
        const parte1: number = Math.floor(Math.random() * 100);
        const parte2: number = Math.floor(Math.random() * 1000);
        const parte3: number = Math.floor(Math.random() * 1000);
        const parte4: number = Math.floor(Math.random() * 100);

        const numeroFormatado: string = `${parte1.toString().padStart(2, '0')}.${parte2.toString().padStart(3, '0')}.${parte3.toString().padStart(3, '0')}-${parte4.toString().padStart(2, '0')}`;

        return numeroFormatado;
    }

    public gerarNomeAleatorio(): string{
        const nomesCompletos: string[] = [
            'João da Silva',
            'Maria Santos',
            'Pedro Oliveira',
            'Ana Costa',
            'Lucas Almeida',
            'Juliana Pereira',
            'Gustavo Rodrigues',
            'Carolina Souza',
            'Rafael Fernandes',
            'Fernanda Xavier',
            'Bruno Carvalho',
            'Amanda Gomes',
            'Diego Mendes',
            'Laura Ribeiro',
            'Márcio Lima',
            'Cristina Santos',
            'Felipe Pereira',
            'Larissa Martins',
            'Rodrigo Oliveira',
            'Camila Barbosa'
        ];

        const indiceAleatorio: number = Math.floor(Math.random() * nomesCompletos.length);
        const nomeAleatorio: string = nomesCompletos[indiceAleatorio];

        return nomeAleatorio;
    }

    public obterNomeAleatorio(nomes: string[]): string {
      
        const indiceAleatorio: number = Math.floor(Math.random() * nomes.length);
        const nomeAleatorio: string = nomes[indiceAleatorio];
      
        return nomeAleatorio;
    }

    public gerarNumerosAleatorios(): string {
        const numeroAleatorio: number = Math.floor(Math.random() * 1000000000);
        const numeroFormatado: string = numeroAleatorio.toString().padStart(9, '0');
        return numeroFormatado;
      }

}