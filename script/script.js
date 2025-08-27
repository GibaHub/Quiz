document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // --- MATEMÁTICA - Capítulo 10: Quadriláteros (40 Questões) ---
        {
            question: "O que define um polígono como um quadrilátero?",
            options: ["Ter 3 lados e 3 vértices", "Ter 4 lados, 4 vértices e 4 ângulos", "Ter lados curvos", "Possuir apenas ângulos retos"],
            answer: "Ter 4 lados, 4 vértices e 4 ângulos",
            solution: "A definição fundamental de um quadrilátero é ser um polígono que possui exatamente quatro lados, quatro vértices e quatro ângulos internos."
        },
        {
            question: "Qual é a soma das medidas dos ângulos internos de qualquer quadrilátero convexo?",
            options: ["180°", "270°", "360°", "540°"],
            answer: "360°",
            solution: "É possível decompor qualquer quadrilátero convexo em dois triângulos traçando uma diagonal. Como a soma dos ângulos internos de cada triângulo é 180°, a soma total para o quadrilátero é 2 * 180° = 360°."
        },
        {
            question: "Três ângulos de um quadrilátero medem 70°, 100° e 120°. Qual é a medida do quarto ângulo?",
            options: ["50°", "60°", "70°", "80°"],
            answer: "70°",
            solution: "A soma dos ângulos internos de um quadrilátero é 360°. Somando os ângulos conhecidos: 70° + 100° + 120° = 290°. O quarto ângulo será a diferença: 360° - 290° = 70°."
        },
        {
            question: "Como se chama um quadrilátero que possui pelo menos um ângulo interno maior que 180°?",
            options: ["Convexo", "Côncavo", "Complexo", "Regular"],
            answer: "Côncavo",
            solution: "Um quadrilátero é côncavo (ou não convexo) se uma de suas diagonais fica parcialmente ou totalmente fora da figura, o que ocorre quando ele possui um ângulo interno com medida superior a 180°."
        },
        {
            question: "O que define um quadrilátero como um paralelogramo?",
            options: ["Ter apenas um par de lados paralelos", "Ter os lados opostos paralelos", "Ter todos os lados com a mesma medida", "Ter todos os ângulos retos"],
            answer: "Ter os lados opostos paralelos",
            solution: "A definição estrita de um paralelogramo é ser um quadrilátero que possui dois pares de lados opostos paralelos."
        },
        {
            question: "Qual das seguintes afirmações sobre paralelogramos é SEMPRE verdadeira?",
            options: ["As diagonais são iguais", "As diagonais são perpendiculares", "Os ângulos opostos são congruentes", "Todos os ângulos são agudos"],
            answer: "Os ângulos opostos são congruentes",
            solution: "Uma das propriedades fundamentais de todo paralelogramo é que seus ângulos opostos (não consecutivos) possuem sempre a mesma medida."
        },
        {
            question: "Em um paralelogramo, as diagonais se cruzam de que maneira?",
            options: ["Formando um ângulo de 90°", "Em seus respectivos pontos médios", "Em um ponto que divide uma na razão 2:1", "Fora da figura"],
            answer: "Em seus respectivos pontos médios",
            solution: "Outra propriedade essencial dos paralelogramos é que suas diagonais se interceptam exatamente no ponto médio de cada uma delas."
        },
        {
            question: "Se um ângulo de um paralelogramo mede 65°, quais são as medidas dos outros três?",
            options: ["65°, 65°, 65°", "115°, 115°, 65°", "65°, 115°, 115°", "115°, 125°, 65°"],
            answer: "65°, 115°, 115°",
            solution: "O ângulo oposto também medirá 65°. Os ângulos consecutivos são suplementares (somam 180°), então os outros dois medirão 180° - 65° = 115° cada. Os ângulos são 65°, 115°, 65°, 115°."
        },
        {
            question: "O que é um retângulo?",
            options: ["Um paralelogramo com quatro lados iguais", "Um quadrilátero com diagonais perpendiculares", "Um paralelogramo com quatro ângulos retos", "Um quadrilátero com apenas um par de lados paralelos"],
            answer: "Um paralelogramo com quatro ângulos retos",
            solution: "Um retângulo é um tipo especial de paralelogramo cuja característica distintiva é possuir todos os quatro ângulos internos medindo 90°."
        },
        {
            question: "Qual propriedade das diagonais é específica de um retângulo (e não de todos os paralelogramos)?",
            options: ["Elas se cruzam no ponto médio", "Elas são perpendiculares", "Elas são congruentes (têm o mesmo comprimento)", "Uma é o dobro da outra"],
            answer: "Elas são congruentes (têm o mesmo comprimento)",
            solution: "Enquanto em todo paralelogramo as diagonais se cruzam no ponto médio, apenas nos retângulos (e quadrados) elas possuem, adicionalmente, o mesmo comprimento."
        },
        {
            question: "O que é um losango?",
            options: ["Um paralelogramo com quatro ângulos retos", "Um paralelogramo com quatro lados congruentes", "Um quadrilátero com diagonais iguais", "Um quadrilátero com dois ângulos agudos e dois obtusos"],
            answer: "Um paralelogramo com quatro lados congruentes",
            solution: "Um losango é um tipo especial de paralelogramo cuja característica principal é possuir todos os quatro lados com a mesma medida."
        },
        {
            question: "Qual propriedade das diagonais é específica de um losango?",
            options: ["São congruentes", "São perpendiculares entre si", "São paralelas aos lados", "Não se cruzam"],
            answer: "São perpendiculares entre si",
            solution: "Uma propriedade exclusiva dos losangos (e quadrados) é que suas diagonais se interceptam formando um ângulo reto (90°), ou seja, são perpendiculares."
        },
        {
            question: "Em um losango, as diagonais também atuam como:",
            options: ["Medianas dos lados", "Alturas do losango", "Bissetrizes dos ângulos internos", "Lados da figura"],
            answer: "Bissetrizes dos ângulos internos",
            solution: "Além de serem perpendiculares, as diagonais de um losango dividem os ângulos internos de seus vértices ao meio, funcionando como bissetrizes."
        },
        {
            question: "O que é um quadrado?",
            options: ["É um losango, mas não um retângulo", "É um retângulo, mas não um losango", "É simultaneamente um retângulo e um losango", "Não é considerado um paralelogramo"],
            answer: "É simultaneamente um retângulo e um losango",
            solution: "Um quadrado possui as propriedades do retângulo (4 ângulos retos) e as do losango (4 lados iguais), sendo a intersecção desses dois conjuntos de figuras."
        },
        {
            question: "Qual das seguintes afirmações sobre um quadrado é FALSA?",
            options: ["Suas diagonais são iguais", "Suas diagonais são perpendiculares", "Seus lados são iguais", "Seus ângulos internos somam 180°"],
            answer: "Seus ângulos internos somam 180°",
            solution: "Como todo quadrilátero, a soma dos ângulos internos de um quadrado é 360°. As outras três afirmações são propriedades verdadeiras do quadrado."
        },
        {
            question: "O que define um quadrilátero como um trapézio?",
            options: ["Ter exatamente um par de lados paralelos", "Ter exatamente dois pares de lados paralelos", "Não ter nenhum lado paralelo", "Ter lados opostos congruentes"],
            answer: "Ter exatamente um par de lados paralelos",
            solution: "A definição de trapézio é ser um quadrilátero que possui apenas um par de lados opostos paralelos. Estes lados são chamados de bases."
        },
        {
            question: "Como se chama um trapézio cujos lados não paralelos são congruentes?",
            options: ["Trapézio retângulo", "Trapézio escaleno", "Trapézio isósceles", "Trapézio regular"],
            answer: "Trapézio isósceles",
            solution: "Um trapézio é classificado como isósceles quando seus lados não paralelos (oblíquos) têm a mesma medida. Isso resulta em outras propriedades, como ângulos da base e diagonais congruentes."
        },
        {
            question: "Em um trapézio isósceles, qual outra propriedade é sempre verdadeira?",
            options: ["As diagonais são perpendiculares", "Os ângulos de cada base são congruentes", "Um dos lados não paralelos é perpendicular às bases", "As bases têm o mesmo comprimento"],
            answer: "Os ângulos de cada base são congruentes",
            solution: "Uma consequência de ter os lados não paralelos iguais é que os dois ângulos adjacentes a cada base são congruentes entre si."
        },
        {
            question: "O que caracteriza um trapézio retângulo?",
            options: ["Possuir diagonais do mesmo tamanho", "Possuir dois ângulos de 90°", "Possuir todos os lados diferentes", "Possuir lados não paralelos congruentes"],
            answer: "Possuir dois ângulos de 90°",
            solution: "Um trapézio é retângulo quando um de seus lados não paralelos forma um ângulo de 90° com as bases, resultando em dois ângulos retos na figura."
        },
        {
            question: "O que é um trapézio escaleno?",
            options: ["Aquele com lados não paralelos de medidas diferentes", "Aquele com ângulos da base iguais", "Aquele com um ângulo reto", "Aquele com diagonais iguais"],
            answer: "Aquele com lados não paralelos de medidas diferentes",
            solution: "Um trapézio é dito escaleno quando seus lados não paralelos possuem comprimentos diferentes e ele não possui nenhum ângulo reto."
        },
        {
            question: "Todo quadrado é um paralelogramo?",
            options: ["Não, pois tem ângulos retos", "Sim, pois tem lados opostos paralelos", "Não, pois tem lados iguais", "Apenas se a diagonal for par"],
            answer: "Sim, pois tem lados opostos paralelos",
            solution: "Sim. Como o quadrado tem dois pares de lados opostos paralelos, ele atende à definição de paralelogramo. É um caso especial de paralelogramo."
        },
        {
            question: "Todo paralelogramo é um retângulo?",
            options: ["Sim, sempre", "Não, um paralelogramo pode não ter ângulos de 90°", "Sim, se suas diagonais forem perpendiculares", "Não, pois retângulos não têm lados paralelos"],
            answer: "Não, um paralelogramo pode não ter ângulos de 90°",
            solution: "Para ser um retângulo, o paralelogramo precisa ter todos os ângulos internos iguais a 90°. Um losango com ângulos de 60° e 120°, por exemplo, é um paralelogramo mas não é um retângulo."
        },
        {
            question: "Qual figura é um quadrilátero equilátero (lados iguais) mas não equiângulo (ângulos iguais)?",
            options: ["Quadrado", "Retângulo não quadrado", "Losango não quadrado", "Trapézio isósceles"],
            answer: "Losango não quadrado",
            solution: "Um losango, por definição, tem os quatro lados iguais. No entanto, a menos que seja um quadrado, seus ângulos não são todos iguais (terá dois ângulos agudos e dois obtusos)."
        },
        {
            question: "Qual figura é um quadrilátero equiângulo (ângulos iguais) mas não equilátero (lados iguais)?",
            options: ["Quadrado", "Retângulo não quadrado", "Losango não quadrado", "Trapézio retângulo"],
            answer: "Retângulo não quadrado",
            solution: "Um retângulo, por definição, tem os quatro ângulos iguais a 90°. No entanto, a menos que seja um quadrado, seus lados adjacentes têm comprimentos diferentes."
        },
        {
            question: "Em um trapézio, os ângulos adjacentes a um mesmo lado não paralelo são:",
            options: ["Congruentes", "Complementares (somam 90°)", "Suplementares (somam 180°)", "Opostos pelo vértice"],
            answer: "Suplementares (somam 180°)",
            solution: "Como as bases são paralelas, os lados não paralelos funcionam como transversais. Os ângulos internos de um mesmo lado (colaterais internos) são suplementares."
        },
        {
            question: "A base maior de um trapézio mede 15 cm e a base menor mede 9 cm. Quanto mede a base média desse trapézio?",
            options: ["6 cm", "12 cm", "24 cm", "10 cm"],
            answer: "12 cm",
            solution: "A base média de um trapézio é a média aritmética de suas bases. Base Média = (Base maior + Base menor) / 2 = (15 + 9) / 2 = 24 / 2 = 12 cm."
        },
        {
            question: "Se as diagonais de um quadrilátero são iguais e se cruzam no ponto médio, esse quadrilátero é necessariamente um:",
            options: ["Losango", "Trapézio", "Retângulo", "Paralelogramo qualquer"],
            answer: "Retângulo",
            solution: "A propriedade de as diagonais se cruzarem no ponto médio garante que a figura é um paralelogramo. A propriedade adicional de as diagonais serem iguais (congruentes) garante que ele é um retângulo."
        },
        {
            question: "Se as diagonais de um quadrilátero são perpendiculares e se cruzam no ponto médio, esse quadrilátero é necessariamente um:",
            options: ["Losango", "Trapézio", "Retângulo", "Quadrilátero qualquer"],
            answer: "Losango",
            solution: "A propriedade de as diagonais se cruzarem no ponto médio garante que a figura é um paralelogramo. A propriedade adicional de serem perpendiculares garante que ele é um losango."
        },
        {
            question: "Quantas diagonais possui um quadrilátero?",
            options: ["1", "2", "3", "4"],
            answer: "2",
            solution: "Um quadrilátero possui exatamente duas diagonais, que são os segmentos de reta que ligam dois vértices não consecutivos."
        },
        {
            question: "Um quadrilátero tem seus ângulos internos na proporção 1:2:3:4. Qual a medida do maior ângulo?",
            options: ["144°", "120°", "108°", "90°"],
            answer: "144°",
            solution: "Seja x a constante de proporcionalidade. Os ângulos são x, 2x, 3x, 4x. A soma é 360°. Então, x+2x+3x+4x = 360 => 10x = 360 => x = 36°. O maior ângulo é 4x = 4 * 36° = 144°."
        },
        {
            question: "A soma dos ângulos externos de um trapézio é:",
            options: ["180°", "360°", "Depende do tipo de trapézio", "540°"],
            answer: "360°",
            solution: "A soma dos ângulos externos de qualquer polígono convexo, independentemente do número de lados, é sempre 360°."
        },
        {
            question: "Qual das figuras abaixo NÃO é necessariamente um paralelogramo?",
            options: ["Quadrado", "Losango", "Retângulo", "Trapézio"],
            answer: "Trapézio",
            solution: "Quadrados, losangos e retângulos são todos tipos especiais de paralelogramos. Um trapézio, por definição, tem apenas um par de lados paralelos, portanto não é um paralelogramo."
        },
        {
            question: "As diagonais de um trapézio isósceles são:",
            options: ["Perpendiculares", "Congruentes (iguais)", "Paralelas", "Diferentes"],
            answer: "Congruentes (iguais)",
            solution: "Assim como nos retângulos, uma propriedade importante do trapézio isósceles é que suas diagonais têm o mesmo comprimento."
        },
        {
            question: "Um piso é ladrilhado com peças de um único tipo de quadrilátero regular. Que quadrilátero é esse?",
            options: ["Losango", "Trapézio", "Quadrado", "Retângulo"],
            answer: "Quadrado",
            solution: "Um quadrilátero regular é aquele que é equilátero (lados iguais) e equiângulo (ângulos iguais) ao mesmo tempo. A única figura que satisfaz ambas as condições é o quadrado."
        },
        {
            question: "A diagonal de um retângulo mede 10 cm e um de seus lados mede 6 cm. Qual a medida do outro lado?",
            options: ["4 cm", "8 cm", "16 cm", "$\\sqrt{136}$ cm"],
            answer: "8 cm",
            solution: "A diagonal, um lado e o outro lado de um retângulo formam um triângulo retângulo. Pelo Teorema de Pitágoras: $10^2 = 6^2 + x^2 => 100 = 36 + x^2 => x^2 = 64 => x = 8$ cm."
        },
        {
            question: "As diagonais de um losango medem 12 cm e 16 cm. Qual é a medida do lado desse losango?",
            options: ["10 cm", "14 cm", "20 cm", "28 cm"],
            answer: "10 cm",
            solution: "As diagonais de um losango se cruzam no ponto médio e são perpendiculares, formando quatro triângulos retângulos. Os catetos de cada triângulo são metade das diagonais (12/2=6 cm e 16/2=8 cm). O lado do losango é a hipotenusa: $L^2 = 6^2 + 8^2 => L^2 = 36 + 64 => L^2 = 100 => L = 10$ cm."
        },
        {
            question: "O perímetro de um paralelogramo é 36 cm. Se um lado é o dobro do outro, quais são as medidas dos lados?",
            options: ["9 cm e 18 cm", "6 cm e 12 cm", "8 cm e 16 cm", "10 cm e 20 cm"],
            answer: "6 cm e 12 cm",
            solution: "Sejam os lados x e 2x. O perímetro é 2(x + 2x) = 36. Então, 2(3x) = 36 => 6x = 36 => x = 6 cm. Os lados medem 6 cm e 12 cm."
        },
        {
            question: "Qual quadrilátero tem lados opostos congruentes, mas ângulos opostos não necessariamente congruentes?",
            options: ["Paralelogramo", "Trapézio Isósceles", "Tal quadrilátero não existe", "Pipa (ou Deltoide)"],
            answer: "Tal quadrilátero não existe",
            solution: "Se um quadrilátero possui os dois pares de lados opostos congruentes, ele é, por definição, um paralelogramo. E uma propriedade de todo paralelogramo é ter os ângulos opostos congruentes."
        },
        {
            question: "A base média de um trapézio mede 20 cm. Se a base maior é 8 cm mais longa que a base menor, quais são os comprimentos das bases?",
            options: ["16 cm e 24 cm", "18 cm e 26 cm", "15 cm e 23 cm", "14 cm e 22 cm"],
            answer: "16 cm e 24 cm",
            solution: "Seja b a base menor e B a maior. B = b+8. A base média é (B+b)/2 = 20. Substituindo: ((b+8)+b)/2 = 20 => (2b+8)/2 = 20 => b+4 = 20 => b = 16 cm. A base maior é B = 16+8 = 24 cm."
        },
        {
            question: "Um quadrilátero convexo é um losango se, e somente se:",
            options: ["Suas diagonais forem congruentes", "Seus ângulos forem retos", "Seus lados forem paralelos", "Suas diagonais forem perpendiculares e se bissectarem"],
            answer: "Suas diagonais forem perpendiculares e se bissectarem",
            solution: "A condição de as diagonais se bissectarem (cruzarem no ponto médio) o torna um paralelogramo. A condição adicional de serem perpendiculares o torna um losango."
        },
        // --- CIÊNCIAS - Capítulo 6: Processos Reprodutivos e Reprodução Assexuada (30 Questões) ---
        {
            question: "Qual teoria afirmava que a vida poderia surgir espontaneamente a partir de matéria bruta?",
            options: ["Biogênese", "Panspermia", "Criacionismo", "Abiogênese"],
            answer: "Abiogênese",
            solution: "A teoria da Abiogênese, ou geração espontânea, defendia que seres vivos poderiam se originar de matéria inanimada, como larvas surgindo de carne em decomposição."
        },
        {
            question: "A famosa frase 'Omne vivum ex vivo' (Toda vida vem da vida) resume qual teoria?",
            options: ["Abiogênese", "Biogênese", "Evolução Química", "Geração Espontânea"],
            answer: "Biogênese",
            solution: "A teoria da Biogênese contrapõe a abiogênese, afirmando que um ser vivo só pode se originar a partir de outro ser vivo preexistente."
        },
        {
            question: "Qual cientista é famoso por seus experimentos com frascos de 'pescoço de cisne', que refutaram a abiogênese?",
            options: ["Francesco Redi", "Lazzaro Spallanzani", "Louis Pasteur", "Aristóteles"],
            answer: "Louis Pasteur",
            solution: "Louis Pasteur utilizou frascos com gargalos curvados (pescoço de cisne) para demonstrar que micro-organismos presentes no ar, e não a 'força vital', eram responsáveis pela contaminação de caldos nutritivos, refutando a abiogênese."
        },
        {
            question: "Qual é a principal característica da reprodução assexuada?",
            options: ["Envolve a fusão de gametas", "Gera alta variabilidade genética", "Um único indivíduo origina descendentes idênticos", "Requer dois progenitores"],
            answer: "Um único indivíduo origina descendentes idênticos",
            solution: "A reprodução assexuada se caracteriza pela participação de apenas um genitor, que produz descendentes geneticamente idênticos a si, chamados de clones."
        },
        {
            question: "Bactérias e protozoários comumente se reproduzem por um processo em que a célula se divide em duas. Como se chama esse processo?",
            options: ["Brotamento", "Esporulação", "Fragmentação", "Bipartição (ou Cissiparidade)"],
            answer: "Bipartição (ou Cissiparidade)",
            solution: "A bipartição ou cissiparidade é o tipo de reprodução assexuada em que um organismo unicelular se divide ao meio, originando dois novos indivíduos idênticos."
        },
        {
            question: "A hidra, um pequeno animal aquático, pode formar um pequeno broto em seu corpo que cresce e se solta, formando um novo indivíduo. Qual o nome desse tipo de reprodução?",
            options: ["Brotamento", "Esporulação", "Fragmentação", "Partenogênese"],
            answer: "Brotamento",
            solution: "O brotamento é um tipo de reprodução assexuada em que um novo indivíduo se desenvolve a partir de uma protuberância ou 'broto' que surge no corpo do progenitor."
        },
        {
            question: "Fungos, como o mofo do pão, liberam células microscópicas muito resistentes que podem germinar em um novo local. Essas células são chamadas de:",
            options: ["Gametas", "Brotos", "Esporos", "Zigotos"],
            answer: "Esporos",
            solution: "A esporulação é o processo em que um organismo produz esporos, que são células reprodutivas especializadas, geralmente muito resistentes, capazes de originar um novo indivíduo sem a necessidade de fecundação."
        },
        {
            question: "A estrela-do-mar pode regenerar um organismo inteiro a partir de um braço perdido, desde que contenha parte do disco central. Esse processo é um exemplo de:",
            options: ["Brotamento", "Bipartição", "Fragmentação", "Esporulação"],
            answer: "Fragmentação",
            solution: "Na fragmentação, o corpo do indivíduo se divide em dois ou mais fragmentos, e cada fragmento é capaz de regenerar as partes que faltam para formar um novo organismo completo."
        },
        {
            question: "A principal vantagem da reprodução assexuada para uma espécie é:",
            options: ["Aumentar a diversidade genética da população", "Permitir uma rápida colonização de ambientes estáveis", "Facilitar a adaptação a mudanças ambientais", "Economizar energia, pois não produz gametas"],
            answer: "Permitir uma rápida colonização de ambientes estáveis",
            solution: "Como não requer parceiros e é um processo rápido, a reprodução assexuada permite que um indivíduo bem adaptado a um ambiente estável gere muitos descendentes rapidamente, colonizando o local."
        },
        {
            question: "Qual é a principal desvantagem da reprodução assexuada?",
            options: ["É um processo muito lento", "Gasta muita energia", "A baixa variabilidade genética dificulta a adaptação a mudanças", "Requer condições ambientais muito específicas"],
            answer: "A baixa variabilidade genética dificulta a adaptação a mudanças",
            solution: "Como todos os descendentes são clones, uma mudança súbita no ambiente (como uma nova doença ou alteração de temperatura) pode ser prejudicial para toda a população, que não possui variações genéticas que poderiam conferir resistência."
        },
        {
            question: "O experimento de Francesco Redi com frascos contendo carne, alguns abertos e outros cobertos, foi um dos primeiros a questionar a:",
            options: ["Biogênese", "Teoria celular", "Abiogênese", "Evolução das espécies"],
            answer: "Abiogênese",
            solution: "Redi demonstrou que as larvas na carne só apareciam nos frascos abertos, onde as moscas podiam pousar e depositar seus ovos, sugerindo que a vida (larvas) vinha de outra vida (moscas), e não da carne."
        },
        {
            question: "A clonagem artificial de uma ovelha (como a famosa Dolly) é um exemplo de tecnologia baseada nos princípios da:",
            options: ["Reprodução sexuada", "Reprodução assexuada", "Seleção natural", "Engenharia genética"],
            answer: "Reprodução assexuada",
            solution: "A clonagem é um processo que produz um indivíduo geneticamente idêntico a outro, sem a combinação de gametas, o que a caracteriza como uma forma artificial de reprodução assexuada."
        },
        {
            question: "Qual dos organismos a seguir NÃO se reproduz tipicamente por bipartição?",
            options: ["Bactéria", "Ameba", "Paramécio", "Levedura"],
            answer: "Levedura",
            solution: "As leveduras, que são fungos unicelulares, se reproduzem tipicamente por brotamento. Bactérias, amebas e paramécios são exemplos clássicos de organismos que realizam bipartição."
        },
        {
            question: "O surgimento de uma batata-inglesa a partir de um 'olho' (gema) de outra batata é um tipo de reprodução assexuada chamada:",
            options: ["Esporulação", "Brotamento", "Fragmentação vegetativa", "Partenogênese"],
            answer: "Fragmentação vegetativa",
            solution: "Esse processo é conhecido como propagação ou multiplicação vegetativa, uma forma de fragmentação em plantas, onde uma parte da planta (como o tubérculo da batata) origina um novo indivíduo completo."
        },
        {
            question: "A teoria da Biogênese foi definitivamente estabelecida graças aos experimentos de:",
            options: ["Aristóteles", "Francesco Redi", "John Needham", "Louis Pasteur"],
            answer: "Louis Pasteur",
            solution: "Embora Redi e Spallanzani tenham contribuído, foram os experimentos conclusivos de Pasteur com os frascos de pescoço de cisne que refutaram de forma definitiva a ideia da geração espontânea para os micro-organismos."
        },
        {
            question: "Na reprodução assexuada, a fonte de variação genética é primariamente a:",
            options: ["Recombinação gênica", "Mutação", "Permutação cromossômica", "Fusão de gametas"],
            answer: "Mutação",
            solution: "Como não há mistura de material genético de diferentes indivíduos, a única fonte de novas características em uma linhagem assexuada é a ocorrência de mutações, que são alterações raras e aleatórias no DNA."
        },
        {
            question: "A regeneração de uma lagartixa que perdeu a cauda é um exemplo de reprodução?",
            options: ["Sim, por fragmentação", "Sim, por brotamento", "Não, é apenas um processo de regeneração de uma parte do corpo", "Sim, por esporulação"],
            answer: "Não, é apenas um processo de regeneração de uma parte do corpo",
            solution: "A regeneração da cauda não origina um novo indivíduo. É apenas a capacidade do organismo de reconstruir uma parte perdida. Para ser reprodução por fragmentação, a parte perdida teria que gerar um novo organismo completo."
        },
        {
            question: "O que era a 'força vital' ou 'princípio ativo' segundo os defensores da abiogênese?",
            options: ["A energia do Sol", "O material genético (DNA)", "Uma força mística presente na matéria inanimada capaz de gerar vida", "O oxigênio do ar"],
            answer: "Uma força mística presente na matéria inanimada capaz de gerar vida",
            solution: "Os abiogenistas acreditavam que existia uma 'força vital' no ar, na lama ou em matéria orgânica em decomposição que era responsável por organizar a matéria e transformá-la em seres vivos."
        },
        {
            question: "Qual é a principal diferença entre brotamento e bipartição?",
            options: ["A bipartição gera clones, o brotamento não", "No brotamento, a divisão do citoplasma é desigual, formando indivíduos de tamanhos diferentes", "A bipartição ocorre em animais e o brotamento em bactérias", "Não há diferença, são o mesmo processo"],
            answer: "No brotamento, a divisão do citoplasma é desigual, formando indivíduos de tamanhos diferentes",
            solution: "Na bipartição, a célula se divide em duas de tamanho aproximadamente igual. No brotamento, um broto pequeno surge no progenitor e cresce, sendo uma divisão citoplasmática desigual."
        },
        {
            question: "A formação de mudas de violeta a partir de uma folha colocada na água é um exemplo de:",
            options: ["Reprodução sexuada", "Esporulação", "Propagação vegetativa", "Brotamento"],
            answer: "Propagação vegetativa",
            solution: "Este é outro exemplo de propagação vegetativa, um tipo de reprodução assexuada em plantas onde partes como folhas, caules ou raízes podem dar origem a uma planta inteira."
        },
        {
            question: "Por que os caldos nutritivos de Spallanzani, que foram fervidos e vedados, não desenvolveram micro-organismos?",
            options: ["Porque a fervura destruiu a 'força vital'", "Porque a vedação impediu a entrada de micro-organismos do ar", "Porque o vidro do frasco era especial", "Porque o caldo não era nutritivo o suficiente"],
            answer: "Porque a vedação impediu a entrada de micro-organismos do ar",
            solution: "O experimento de Spallanzani apoiou a biogênese ao mostrar que a fervura matava os micro-organismos existentes e a vedação impedia a entrada de novos, evitando a contaminação. Os abiogenistas, no entanto, argumentaram que a fervura destruía a 'força vital'."
        },
        {
            question: "Qual dos seguintes processos de reprodução assexuada está mais associado à capacidade de regeneração?",
            options: ["Bipartição", "Brotamento", "Fragmentação", "Esporulação"],
            answer: "Fragmentação",
            solution: "A fragmentação depende diretamente da capacidade do organismo de regenerar as partes que faltam em um fragmento para formar um novo indivíduo completo. Exemplos são planárias e estrelas-do-mar."
        },
        {
            question: "Qual das alternativas apresenta APENAS exemplos de reprodução assexuada?",
            options: ["Brotamento, fecundação, esporulação", "Fragmentação, bipartição, brotamento", "Cissiparidade, meiose, clonagem", "Fecundação, zigoto, brotamento"],
            answer: "Fragmentação, bipartição, brotamento",
            solution: "Fecundação, meiose e formação de zigoto são eventos característicos da reprodução sexuada. Fragmentação, bipartição (ou cissiparidade) e brotamento são todos tipos de reprodução assexuada."
        },
        {
            question: "A ideia inicial de que 'vermes' surgiam de um pedaço de queijo era um exemplo de crença na:",
            options: ["Biogênese", "Geração espontânea", "Seleção artificial", "Panspermia"],
            answer: "Geração espontânea",
            solution: "A geração espontânea é outro nome para a teoria da abiogênese, que acreditava que a vida poderia surgir espontaneamente de matéria não viva, como vermes do queijo ou ratos de roupas sujas."
        },
        {
            question: "Em termos de evolução, a reprodução assexuada é mais vantajosa em ambientes:",
            options: ["Que mudam constantemente", "Com alta competição entre espécies", "Estáveis e previsíveis", "Pobres em nutrientes"],
            answer: "Estáveis e previsíveis",
            solution: "Em um ambiente que não muda, um indivíduo bem-sucedido pode se replicar rapidamente através da reprodução assexuada, passando suas características vantajosas para todos os descendentes sem alterações."
        },
        {
            question: "A formação de um 'tapete' de mofo verde sobre uma laranja é resultado de qual processo reprodutivo do fungo?",
            options: ["Bipartição", "Brotamento", "Esporulação", "Fragmentação"],
            answer: "Esporulação",
            solution: "O mofo libera milhões de esporos no ar. Quando um deles cai sobre um substrato favorável como a laranja, ele germina e se multiplica, formando a colônia visível (o 'tapete' de mofo)."
        },
        {
            question: "A ameba, ao atingir certo tamanho, simplesmente se divide ao meio. Esse processo é:",
            options: ["Uma forma de reprodução sexuada", "Chamado de mitose seguida de citocinese", "Uma forma de brotamento", "Um exemplo de esporulação"],
            answer: "Chamado de mitose seguida de citocinese",
            solution: "A bipartição em eucariontes como a ameba envolve a duplicação do material genético (mitose) seguida da divisão do citoplasma (citocinese), resultando em duas células-filhas idênticas."
        },
        {
            question: "A principal diferença entre os experimentos de Spallanzani e Pasteur foi:",
            options: ["O tipo de caldo utilizado", "O uso do microscópio por Pasteur", "O 'pescoço de cisne' nos frascos de Pasteur, que permitia contato com o ar", "A temperatura de fervura"],
            answer: "O 'pescoço de cisne' nos frascos de Pasteur, que permitia contato com o ar",
            solution: "A genialidade de Pasteur foi criar um frasco que permitia a entrada do ar (e da suposta 'força vital'), mas impedia a entrada de micro-organismos, que ficavam retidos na curva. Isso respondeu à crítica feita ao experimento de Spallanzani, que vedava completamente o frasco."
        },
        {
            question: "O cultivo de cana-de-açúcar é feito enterrando-se pedaços do caule da planta. Este método é uma forma de:",
            options: ["Reprodução por sementes", "Propagação vegetativa", "Reprodução por esporos", "Hibridização"],
            answer: "Propagação vegetativa",
            solution: "Essa técnica, chamada de estaquia, é um método de propagação vegetativa (reprodução assexuada) onde um pedaço do caule (a estaca) é usado para gerar uma nova planta completa, idêntica à original."
        },
        {
            question: "A divisão múltipla, onde o núcleo se divide várias vezes antes da divisão do citoplasma, originando várias células, é uma variação da bipartição que ocorre, por exemplo, no protozoário causador da malária. Este processo também é conhecido como:",
            options: ["Brotamento", "Gemulação", "Esquizogonia", "Estrobilização"],
            answer: "Esquizogonia",
            solution: "Esquizogonia é um tipo especial de reprodução assexuada, uma forma de divisão múltipla, característica de alguns protozoários como o Plasmódio, causador da malária."
        },
        // --- CIÊNCIAS - Capítulo 7: Reprodução Sexuada (35 Questões) ---
        {
            question: "Qual é a principal vantagem evolutiva da reprodução sexuada?",
            options: ["É mais rápida que a assexuada", "Gera descendentes idênticos", "Aumenta a variabilidade genética da população", "Requer menos energia"],
            answer: "Aumenta a variabilidade genética da população",
            solution: "A mistura do material genético de dois progenitores diferentes gera descendentes com novas combinações de características, aumentando a variabilidade genética. Isso permite que a população se adapte melhor a mudanças no ambiente."
        },
        {
            question: "As células reprodutivas especializadas envolvidas na reprodução sexuada são chamadas de:",
            options: ["Células somáticas", "Gametas", "Esporos", "Zigotos"],
            answer: "Gametas",
            solution: "Gametas são as células (como espermatozoide e óvulo) que se fundem durante a fecundação para dar origem a um novo indivíduo."
        },
        {
            question: "Como são chamadas as células que formam o corpo dos organismos, como as da pele, músculos e ossos?",
            options: ["Células gaméticas", "Células haploides", "Células somáticas", "Células-tronco"],
            answer: "Células somáticas",
            solution: "As células somáticas são todas as células do corpo de um organismo multicelular, exceto as células germinativas que dão origem aos gametas."
        },
        {
            question: "Em humanos, as células somáticas são diploides (2n), o que significa que:",
            options: ["Possuem 23 cromossomos", "Os cromossomos ocorrem em pares de homólogos", "Não possuem núcleo", "São geneticamente idênticas aos gametas"],
            answer: "Os cromossomos ocorrem em pares de homólogos",
            solution: "Uma célula diploide (2n) possui dois conjuntos de cromossomos, um herdado do pai e outro da mãe. Esses pares de cromossomos com genes para as mesmas características são chamados de homólogos."
        },
        {
            question: "Os gametas humanos (espermatozoide e óvulo) são haploides (n). Isso significa que eles contêm:",
            options: ["46 cromossomos", "Apenas um cromossomo de cada par de homólogos", "O dobro de cromossomos de uma célula da pele", "Apenas cromossomos sexuais"],
            answer: "Apenas um cromossomo de cada par de homólogos",
            solution: "Uma célula haploide (n) contém apenas um conjunto de cromossomos, ou seja, metade do número de uma célula diploide. Em humanos, n=23."
        },
        {
            question: "O processo de fusão de um gameta masculino com um gameta feminino é chamado de:",
            options: ["Meiose", "Mitose", "Fecundação", "Ovulação"],
            answer: "Fecundação",
            solution: "Fecundação é o nome do evento em que o espermatozoide e o óvulo se unem, combinando seus materiais genéticos."
        },
        {
            question: "A primeira célula formada após a fecundação, que é diploide (2n), é chamada de:",
            options: ["Gameta", "Embrião", "Feto", "Zigoto"],
            answer: "Zigoto",
            solution: "O zigoto é a célula resultante da união dos gametas. Ele contém o material genético combinado dos dois progenitores e começará a se dividir para formar o embrião."
        },
        {
            question: "Em peixes e anfíbios, a fêmea geralmente libera seus óvulos na água e o macho libera seus espermatozoides sobre eles. Esse tipo de fecundação é chamado de:",
            options: ["Interna", "Cruzada", "Externa", "Autofecundação"],
            answer: "Externa",
            solution: "A fecundação externa ocorre fora do corpo da fêmea, geralmente em ambiente aquático, o que exige a produção de um grande número de gametas."
        },
        {
            question: "Em répteis, aves e mamíferos, a união dos gametas ocorre dentro do sistema reprodutor da fêmea. Esse tipo de fecundação é chamado de:",
            options: ["Interna", "Externa", "Autofecundação", "Global"],
            answer: "Interna",
            solution: "A fecundação interna ocorre dentro do corpo da fêmea, o que protege os gametas e o embrião inicial, aumentando as chances de sucesso da reprodução."
        },
        {
            question: "Animais que se desenvolvem dentro de ovos que são postos e eclodem fora do corpo da mãe, como as aves, são chamados de:",
            options: ["Vivíparos", "Marsupiais", "Ovíparos", "Ovovivíparos"],
            answer: "Ovíparos",
            solution: "Ovíparos são animais cujo embrião se desenvolve dentro de um ovo com casca, que é depositado no ambiente externo. A nutrição vem da gema (vitelo) presente no ovo."
        },
        {
            question: "Mamíferos, como os seres humanos, em que o embrião se desenvolve totalmente dentro do corpo da mãe, recebendo nutrientes diretamente dela, são chamados de:",
            options: ["Vivíparos", "Ovíparos", "Ovovivíparos", "Placentários"],
            answer: "Vivíparos",
            solution: "Vivíparos são animais cujo embrião se desenvolve dentro do útero materno, nutrido através de uma placenta. O filhote nasce já formado."
        },
        {
            question: "Algumas espécies de tubarões e serpentes produzem ovos que permanecem dentro do corpo da fêmea até a eclosão. Os filhotes nascem já formados, mas sem ligação nutricional direta com a mãe (sem placenta). Esses animais são chamados de:",
            options: ["Vivíparos", "Ovíparos", "Ovovivíparos", "Hermafroditas"],
            answer: "Ovovivíparos",
            solution: "Os ovovivíparos são um caso intermediário: o desenvolvimento ocorre em um ovo, mas este fica retido no corpo da mãe. A nutrição vem do ovo, não da mãe, mas o filhote já nasce pronto."
        },
        {
            question: "O que é um organismo hermafrodita?",
            options: ["Um organismo que se reproduz apenas assexuadamente", "Um organismo que produz tanto gametas masculinos quanto femininos", "Um organismo que não se reproduz", "Um organismo que realiza apenas fecundação externa"],
            answer: "Um organismo que produz tanto gametas masculinos quanto femininos",
            solution: "Hermafroditas, como as minhocas e muitos caracóis, são espécies em que o mesmo indivíduo possui os sistemas reprodutores masculino e feminino."
        },
        {
            question: "Quando dois indivíduos hermafroditas, como as minhocas, trocam gametas entre si, dizemos que ocorreu uma:",
            options: ["Autofecundação", "Fecundação externa", "Fecundação cruzada", "Bipartição"],
            answer: "Fecundação cruzada",
            solution: "Apesar de serem hermafroditas, muitos evitam a autofecundação e realizam a fecundação cruzada, onde um indivíduo fecunda o outro e vice-versa. Isso garante a variabilidade genética."
        },
        {
            question: "A tênia (solitária) é um verme hermafrodita que vive sozinho no intestino humano e consegue se reproduzir fecundando seus próprios óvulos. Esse processo é chamado de:",
            options: ["Fecundação cruzada", "Autofecundação", "Fecundação interna", "Partenogênese"],
            answer: "Autofecundação",
            solution: "A autofecundação ocorre quando um indivíduo hermafrodita utiliza seus próprios gametas masculinos para fecundar seus próprios gametas femininos."
        },
        {
            question: "O material genético (DNA) está organizado dentro do núcleo das células em estruturas chamadas:",
            options: ["Ribossomos", "Mitocôndrias", "Cromossomos", "Lisossomos"],
            answer: "Cromossomos",
            solution: "Os cromossomos são longas moléculas de DNA associadas a proteínas, que se tornam visíveis e condensadas durante a divisão celular."
        },
        {
            question: "Em plantas como pinheiros (gimnospermas), a estrutura que contém o gameta masculino e é transportada pelo vento é o:",
            options: ["Pistilo", "Estame", "Grão de pólen", "Óvulo"],
            answer: "Grão de pólen",
            solution: "O grão de pólen é a estrutura que carrega o gameta masculino. Nas gimnospermas, sua dispersão (polinização) é feita principalmente pelo vento."
        },
        {
            question: "Em plantas com flores (angiospermas), após a fecundação, o óvulo se desenvolve em ________ e o ovário se desenvolve em ________.",
            options: ["fruto; semente", "semente; fruto", "flor; semente", "semente; flor"],
            answer: "semente; fruto",
            solution: "Esta é uma característica chave das angiospermas. A dupla fecundação leva ao desenvolvimento do óvulo fecundado em semente (que contém o embrião) e do ovário da flor em fruto (que protege a semente)."
        },
        {
            question: "A principal vantagem da fecundação interna sobre a externa é:",
            options: ["Gerar maior número de descendentes", "Não necessitar de gametas", "Maior proteção aos gametas e ao zigoto, aumentando a chance de sobrevivência", "Ocorrer mais rapidamente"],
            answer: "Maior proteção aos gametas e ao zigoto, aumentando a chance de sobrevivência",
            solution: "O ambiente interno do corpo feminino protege os gametas do ressecamento e da predação, garantindo um local seguro para a fecundação e o desenvolvimento inicial do embrião."
        },
        {
            question: "Qual o número de cromossomos em um gameta humano?",
            options: ["46", "44", "23", "22"],
            answer: "23",
            solution: "As células somáticas humanas têm 46 cromossomos (2n=46). Os gametas, sendo haploides (n), possuem metade desse número, ou seja, 23 cromossomos."
        },
        {
            question: "Qual evento na reprodução sexuada é o principal responsável pela recombinação do material genético dos pais?",
            options: ["Mitose do zigoto", "Fecundação", "Gametogênese (Meiose)", "Desenvolvimento embrionário"],
            answer: "Gametogênese (Meiose)",
            solution: "Durante a meiose, processo de formação dos gametas, ocorre o 'crossing-over' (permutação), que mistura os genes nos cromossomos. A fecundação depois combina os gametas, mas a recombinação inicial ocorre na meiose."
        },
        {
            question: "O desenvolvimento de um óvulo não fecundado em um novo indivíduo, como ocorre em abelhas (zangões), é chamado de:",
            options: ["Hermafroditismo", "Fecundação cruzada", "Partenogênese", "Neotenia"],
            answer: "Partenogênese",
            solution: "A partenogênese é um tipo de reprodução em que um embrião se desenvolve a partir de um gameta feminino sem que tenha havido fecundação. É comum em alguns insetos, répteis e peixes."
        },
        {
            question: "As flores coloridas e os frutos suculentos das angiospermas são adaptações para:",
            options: ["Realizar fotossíntese", "Proteger a planta contra o frio", "Atrair animais para auxiliar na polinização e dispersão de sementes", "Absorver água do solo"],
            answer: "Atrair animais para auxiliar na polinização e dispersão de sementes",
            solution: "As flores atraem polinizadores (insetos, aves) e os frutos atraem dispersores, que comem o fruto e liberam as sementes em outros locais, garantindo o sucesso reprodutivo da planta."
        },
        {
            question: "A célula resultante da união de um espermatozoide com 23 cromossomos e um óvulo com 23 cromossomos terá:",
            options: ["23 cromossomos", "46 cromossomos", "69 cromossomos", "Um número variável de cromossomos"],
            answer: "46 cromossomos",
            solution: "A fecundação restaura o número diploide da espécie. O zigoto humano é formado pela soma dos cromossomos do espermatozoide (n=23) e do óvulo (n=23), resultando em uma célula com 2n=46 cromossomos."
        },
        {
            question: "O que significa dizer que uma espécie tem desenvolvimento direto?",
            options: ["O filhote nasce como uma larva e sofre metamorfose", "O filhote já nasce com uma forma semelhante à do adulto", "O desenvolvimento é externo, em ovos", "O desenvolvimento é muito rápido"],
            answer: "O filhote já nasce com uma forma semelhante à do adulto",
            solution: "No desenvolvimento direto, não há estágio larval. O indivíduo que nasce ou eclode já se parece com o adulto, apenas em tamanho menor, e cresce até atingir a maturidade. É o caso de répteis, aves e mamíferos."
        },
        {
            question: "Borboletas e sapos são exemplos de animais com desenvolvimento:",
            options: ["Direto", "Interno", "Indireto", "Assexuado"],
            answer: "Indireto",
            solution: "O desenvolvimento indireto envolve um estágio larval (lagarta no caso da borboleta, girino no caso do sapo) que é morfologicamente diferente do adulto e passa por um processo de metamorfose para atingir a forma final."
        },
        {
            question: "O pinhão, semente do pinheiro, é um exemplo de estrutura reprodutiva de qual grupo de plantas?",
            options: ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"],
            answer: "Gimnospermas",
            solution: "As gimnospermas são plantas que produzem sementes 'nuas', ou seja, não protegidas por frutos. O pinheiro é o exemplo mais conhecido, e o pinhão é sua semente."
        },
        {
            question: "Em relação ao local de desenvolvimento, os seres humanos são classificados como:",
            options: ["Ovíparos com fecundação externa", "Vivíparos com fecundação interna", "Ovovivíparos com fecundação interna", "Ovíparos com fecundação interna"],
            answer: "Vivíparos com fecundação interna",
            solution: "A fecundação humana ocorre dentro do corpo da mulher (interna) e o embrião se desenvolve completamente dentro do útero, caracterizando a viviparidade."
        },
        {
            question: "A principal função do vitelo (gema) em um ovo de galinha é:",
            options: ["Proteger o embrião contra choques mecânicos", "Fornecer nutrientes para o desenvolvimento do embrião", "Realizar trocas gasosas com o ambiente", "Armazenar as excretas do embrião"],
            answer: "Fornecer nutrientes para o desenvolvimento do embrião",
            solution: "O vitelo é uma reserva nutritiva rica em lipídios e proteínas que alimenta o embrião durante todo o seu desenvolvimento dentro do ovo."
        },
        {
            question: "Qual é a sequência correta dos eventos na reprodução sexuada?",
            options: ["Fecundação -> Formação de gametas -> Formação do zigoto", "Formação de gametas -> Fecundação -> Formação do zigoto", "Formação do zigoto -> Fecundação -> Formação de gametas", "Fecundação -> Formação do zigoto -> Formação de gametas"],
            answer: "Formação de gametas -> Fecundação -> Formação do zigoto",
            solution: "Primeiro, os organismos produzem os gametas (gametogênese). Depois, os gametas se encontram e se fundem (fecundação). A célula resultante dessa fusão é o zigoto."
        },
        {
            question: "O DNA é a molécula que contém as informações genéticas. Um segmento de DNA que contém a informação para uma característica é chamado de:",
            options: ["Cromossomo", "Gene", "Gameta", "Proteína"],
            answer: "Gene",
            solution: "Um gene é uma porção específica da molécula de DNA que carrega o código para a produção de uma proteína ou para uma característica hereditária."
        },
        {
            question: "A reprodução sexuada surgiu e se manteve evolutivamente porque:",
            options: ["É mais simples e rápida que a assexuada", "A variabilidade genética que ela gera é uma grande vantagem adaptativa", "Ela elimina completamente as mutações ruins", "Todos os organismos do planeta a realizam"],
            answer: "A variabilidade genética que ela gera é uma grande vantagem adaptativa",
            solution: "A capacidade de gerar novas combinações de genes a cada geração permite que as espécies se adaptem a ambientes em constante mudança, sobrevivendo a novas doenças, predadores e desafios, o que é uma enorme vantagem evolutiva."
        },
        {
            question: "Nas angiospermas, a polinização cruzada (pólen de uma flor em outra) é mais vantajosa que a autopolinização porque:",
            options: ["Gera sementes maiores", "É mais rápida", "Aumenta a variabilidade genética", "Produz mais frutos"],
            answer: "Aumenta a variabilidade genética",
            solution: "Assim como em animais, a polinização cruzada combina material genético de dois indivíduos diferentes, aumentando a variabilidade genética da descendência, o que é evolutivamente vantajoso."
        },
        {
            question: "A principal diferença entre células somáticas e gaméticas reside no:",
            options: ["Tamanho e formato", "Número de cromossomos (diploide vs. haploide)", "Local onde são encontradas no corpo", "Tipo de metabolismo que realizam"],
            answer: "Número de cromossomos (diploide vs. haploide)",
            solution: "A diferença fundamental é a ploidia: células somáticas são diploides (2n), com pares de cromossomos, enquanto os gametas são haploides (n), com apenas um cromossomo de cada par."
        },
        {
            question: "Dois indivíduos hermafroditas que realizam fecundação cruzada estão agindo como:",
            options: ["Macho e fêmea ao mesmo tempo", "Apenas como machos", "Apenas como fêmeas", "Organismos assexuados"],
            answer: "Macho e fêmea ao mesmo tempo",
            solution: "Durante a fecundação cruzada, cada indivíduo doa espermatozoides (agindo como macho) e recebe espermatozoides para fecundar seus óvulos (agindo como fêmea)."
        },
        // --- CIÊNCIAS - Capítulo 8: Sistemas Genitais (35 Questões) ---
        {
            question: "Qual é o principal órgão produtor de espermatozoides no sistema genital masculino?",
            options: ["Próstata", "Pênis", "Testículos", "Uretra"],
            answer: "Testículos",
            solution: "Os testículos são as gônadas masculinas responsáveis pela produção dos espermatozoides (espermatogênese) e do hormônio testosterona."
        },
        {
            question: "Após serem produzidos, onde os espermatozoides amadurecem e ficam armazenados?",
            options: ["Ducto deferente", "Epidídimo", "Vesícula seminal", "Próstata"],
            answer: "Epidídimo",
            solution: "O epidídimo é um tubo enovelado localizado sobre os testículos, onde os espermatozoides recém-produzidos terminam seu amadurecimento e adquirem mobilidade, ficando armazenados até a ejaculação."
        },
        {
            question: "Qual é o hormônio sexual masculino, responsável pelo desenvolvimento das características sexuais secundárias como pelos e voz grossa?",
            options: ["Estrogênio", "Progesterona", "Testosterona", "Insulina"],
            answer: "Testosterona",
            solution: "A testosterona, produzida principalmente nos testículos, é o principal andrógeno, responsável tanto pela produção de espermatozoides quanto pelas características masculinas."
        },
        {
            question: "Qual estrutura do sistema genital masculino conduz tanto a urina quanto o sêmen para fora do corpo?",
            options: ["Ducto deferente", "Epidídimo", "Ureter", "Uretra"],
            answer: "Uretra",
            solution: "A uretra é o canal que percorre o interior do pênis. Ela serve como via final tanto para o sistema urinário (eliminando a urina) quanto para o sistema reprodutor (eliminando o sêmen)."
        },
        {
            question: "Quais são as gônadas femininas, responsáveis pela produção dos óvulos e hormônios?",
            options: ["Útero", "Vagina", "Ovários", "Tubas uterinas"],
            answer: "Ovários",
            solution: "Os ovários são os órgãos correspondentes aos testículos no homem. Eles produzem e armazenam os ovócitos (que se tornarão óvulos) e secretam os hormônios sexuais femininos, estrogênio e progesterona."
        },
        {
            question: "Local onde normalmente ocorre a fecundação (encontro do espermatozoide com o óvulo):",
            options: ["Útero", "Vagina", "Ovário", "Tuba uterina (ou Trompa de Falópio)"],
            answer: "Tuba uterina (ou Trompa de Falópio)",
            solution: "Após a ovulação, o óvulo é captado pela tuba uterina. É nesse local que os espermatozoides, que subiram pelo útero, o encontram e realizam a fecundação."
        },
        {
            question: "Qual órgão muscular e oco do sistema genital feminino é responsável por abrigar e nutrir o embrião durante a gestação?",
            options: ["Ovário", "Útero", "Vagina", "Bexiga"],
            answer: "Útero",
            solution: "O útero é um órgão com uma parede muscular espessa (miométrio) e um revestimento interno (endométrio) preparado para receber o embrião e permitir seu desenvolvimento ao longo dos nove meses de gestação."
        },
        {
            question: "O que é a ovulação?",
            options: ["A produção de espermatozoides", "A liberação de um ovócito maduro pelo ovário", "A descamação do endométrio", "A fecundação do óvulo"],
            answer: "A liberação de um ovócito maduro pelo ovário",
            solution: "A ovulação é o evento do ciclo menstrual em que o folículo ovariano se rompe e libera um ovócito secundário, que então segue para a tuba uterina para uma possível fecundação."
        },
        {
            question: "O que é a menstruação?",
            options: ["O período fértil da mulher", "A fusão do óvulo com o espermatozoide", "A descamação da parede interna do útero (endométrio) quando não há fecundação", "A produção de hormônios pelo ovário"],
            answer: "A descamação da parede interna do útero (endométrio) quando não há fecundação",
            solution: "Se não ocorrer a fecundação, os níveis hormonais caem, e o endométrio, que havia se espessado para receber um embrião, se desfaz e é eliminado junto com sangue, caracterizando a menstruação."
        },
        {
            question: "Quais são os dois principais hormônios que regulam o ciclo menstrual feminino, produzidos pelos ovários?",
            options: ["Testosterona e Insulina", "Estrogênio e Progesterona", "FSH e LH", "Adrenalina e Cortisol"],
            answer: "Estrogênio e Progesterona",
            solution: "O estrogênio promove o espessamento do endométrio na primeira metade do ciclo, enquanto a progesterona o mantém preparado para a gravidez na segunda metade."
        },
        {
            question: "Após a fecundação na tuba uterina, o zigoto começa a se dividir e se desloca em direção ao útero, onde se fixa na parede. Esse processo de fixação é chamado de:",
            options: ["Ovulação", "Nidação", "Menstruação", "Parto"],
            answer: "Nidação",
            solution: "Nidação é a implantação do embrião (no estágio de blastocisto) no endométrio uterino, o que marca o início da gravidez."
        },
        {
            question: "A estrutura que permite as trocas de nutrientes, gases e excretas entre o sangue da mãe e do feto, sem que os sangues se misturem, é a:",
            options: ["Placenta", "Bolsa amniótica", "Cordão umbilical", "Endométrio"],
            answer: "Placenta",
            solution: "A placenta é um órgão temporário que se desenvolve durante a gestação, fundamental para a nutrição, respiração e excreção do feto, além de produzir hormônios que mantêm a gravidez."
        },
        {
            question: "A produção de espermatozoides é um processo contínuo a partir da puberdade. Verdadeiro ou Falso?",
            options: ["Falso, ocorre apenas uma vez na vida", "Verdadeiro, milhões são produzidos diariamente", "Falso, ocorre apenas durante a ovulação", "Verdadeiro, mas apenas durante a noite"],
            answer: "Verdadeiro, milhões são produzidos diariamente",
            solution: "Diferente das mulheres, que já nascem com todos os seus ovócitos, os homens produzem espermatozoides de forma contínua nos testículos a partir da puberdade ao longo de quase toda a vida."
        },
        {
            question: "Onde o sêmen (ou esperma) é formado?",
            options: ["Apenas nos testículos", "É a mistura de espermatozoides com líquidos produzidos pelas vesículas seminais e pela próstata", "Apenas na próstata", "No pênis"],
            answer: "É a mistura de espermatozoides com líquidos produzidos pelas vesículas seminais e pela próstata",
            solution: "O sêmen é composto pelos espermatozoides (dos testículos) e pelos fluidos das glândulas acessórias (vesículas seminais, próstata e glândulas bulbouretrais), que nutrem e facilitam o transporte dos gametas."
        },
        {
            question: "O canal que liga o útero ao exterior do corpo feminino é a:",
            options: ["Tuba uterina", "Uretra", "Vagina", "Cérvix"],
            answer: "Vagina",
            solution: "A vagina é o canal que recebe o pênis durante a relação sexual e serve como canal de passagem para o bebê durante o parto normal."
        },
        {
            question: "O que é o parto?",
            options: ["O momento da fecundação", "O primeiro mês de gestação", "O processo de expulsão do feto e da placenta do útero", "O início do ciclo menstrual"],
            answer: "O processo de expulsão do feto e da placenta do útero",
            solution: "O parto marca o final da gestação e é desencadeado por contrações rítmicas do útero, que levam à saída do bebê e, em seguida, da placenta."
        },
        {
            question: "Uma gravidez dura, em média, quantas semanas?",
            options: ["20 semanas", "30 semanas", "40 semanas", "50 semanas"],
            answer: "40 semanas",
            solution: "A gestação humana tem uma duração média de 40 semanas, ou aproximadamente 9 meses, contadas a partir do primeiro dia da última menstruação."
        },
        {
            question: "Qual a função do líquido amniótico, que envolve o feto dentro da bolsa amniótica?",
            options: ["Nutrir o feto", "Realizar trocas gasosas", "Proteger o feto contra choques mecânicos e manter a temperatura", "Produzir hormônios"],
            answer: "Proteger o feto contra choques mecânicos e manter a temperatura",
            solution: "O líquido amniótico amortece impactos, protege contra infecções, permite a movimentação do feto e ajuda a manter uma temperatura corporal estável."
        },
        {
            question: "A vasectomia é um procedimento cirúrgico contraceptivo masculino que consiste em:",
            options: ["Remover os testículos", "Cortar os ductos deferentes", "Bloquear a uretra", "Remover a próstata"],
            answer: "Cortar os ductos deferentes",
            solution: "A vasectomia impede a passagem dos espermatozoides dos epidídimos para a uretra, cortando os canais deferentes. O homem continua a ejacular o líquido seminal, mas sem os gametas."
        },
        {
            question: "A laqueadura (ou ligadura de trompas) é um procedimento contraceptivo feminino que consiste em:",
            options: ["Remover os ovários", "Remover o útero", "Cortar ou amarrar as tubas uterinas", "Bloquear a vagina"],
            answer: "Cortar ou amarrar as tubas uterinas",
            solution: "A laqueadura impede o encontro do óvulo com o espermatozoide ao bloquear a passagem nas tubas uterinas. A mulher continua ovulando e menstruando normalmente."
        },
        {
            question: "Por que as mulheres já nascem com um número definido de folículos ovarianos?",
            options: ["Porque eles se regeneram mensalmente", "É um mito, elas produzem novos folículos", "Porque o processo de formação de ovócitos (ovogênese) começa na vida fetal e para", "Porque eles são muito grandes para serem produzidos depois"],
            answer: "Porque o processo de formação de ovócitos (ovogênese) começa na vida fetal e para",
            solution: "A ovogênese inicia quando a mulher ainda é um feto, e os ovócitos primários ficam estacionados em uma fase da meiose até a puberdade, quando são liberados um a cada ciclo."
        },
        {
            question: "O clitóris, no sistema genital feminino, é análogo a qual estrutura masculina?",
            options: ["Testículo", "Próstata", "Pênis", "Saco escrotal"],
            answer: "Pênis",
            solution: "O clitóris e o pênis têm a mesma origem embrionária (são estruturas homólogas) e são ricos em terminações nervosas, sendo os principais pontos de prazer sexual."
        },
        {
            question: "O exame de Papanicolau é um procedimento preventivo importante para detectar precocemente alterações no colo do útero que podem levar ao:",
            options: ["Câncer de ovário", "Câncer de colo de útero", "Endometriose", "Miomas"],
            answer: "Câncer de colo de útero",
            solution: "O Papanicolau coleta células do colo do útero para análise, permitindo a detecção de lesões causadas pelo HPV que, se não tratadas, podem evoluir para um câncer."
        },
        {
            question: "Qual glândula masculina produz um líquido que neutraliza a acidez da uretra e da vagina, protegendo os espermatozoides?",
            options: ["Testículo", "Epidídimo", "Glândula bulbouretral", "Próstata"],
            answer: "Próstata",
            solution: "A próstata produz um fluido leitoso e alcalino que compõe uma parte significativa do sêmen e ajuda a neutralizar a acidez do trato reprodutor feminino, aumentando a motilidade e a sobrevivência dos espermatozoides."
        },
        {
            question: "Após a ejaculação, os espermatozoides sobrevivem por quanto tempo, em média, dentro do sistema reprodutor feminino?",
            options: ["Alguns minutos", "Cerca de 1 hora", "De 2 a 5 dias", "Apenas durante a ovulação"],
            answer: "De 2 a 5 dias",
            solution: "Em condições favoráveis, os espermatozoides podem permanecer viáveis no útero e nas tubas uterinas por vários dias, o que significa que uma relação sexual dias antes da ovulação pode resultar em gravidez."
        },
        {
            question: "O que é a menopausa?",
            options: ["A primeira menstruação na puberdade", "O período de gestação", "A interrupção permanente da menstruação e da ovulação", "Uma doença do útero"],
            answer: "A interrupção permanente da menstruação e da ovulação",
            solution: "A menopausa marca o fim da vida reprodutiva da mulher, ocorrendo geralmente entre 45 e 55 anos, quando os ovários esgotam sua reserva de folículos e a produção de estrogênio diminui drasticamente."
        },
        {
            question: "O hímen é:",
            options: ["Um músculo que controla a saída da urina", "Uma fina membrana que pode recobrir parcialmente a entrada da vagina", "O órgão responsável pela ovulação", "Um osso da bacia"],
            answer: "Uma fina membrana que pode recobrir parcialmente a entrada da vagina",
            solution: "O hímen é uma membrana mucosa presente na entrada da vagina. Sua presença, formato e elasticidade variam muito entre as mulheres, e ele pode se romper em diversas situações, não apenas na primeira relação sexual."
        },
        {
            question: "O cordão umbilical liga o feto à:",
            options: ["Placenta", "Parede do útero", "Bolsa amniótica", "Coluna da mãe"],
            answer: "Placenta",
            solution: "O cordão umbilical é a estrutura que contém os vasos sanguíneos (duas artérias e uma veia) que transportam o sangue entre o feto e a placenta, permitindo as trocas de substâncias."
        },
        {
            question: "A ereção peniana ocorre devido ao:",
            options: ["Aumento de um osso no pênis", "Contração dos músculos do pênis", "Preenchimento dos corpos cavernosos com sangue", "Liberação de espermatozoides"],
            answer: "Preenchimento dos corpos cavernosos com sangue",
            solution: "Sob estímulo sexual, as artérias do pênis se dilatam, enchendo de sangue os tecidos esponjosos chamados corpos cavernosos e corpo esponjoso. Isso causa o enrijecimento e aumento do pênis."
        },
        {
            question: "A fecundação in vitro (FIV) é uma técnica de reprodução assistida onde:",
            options: ["A inseminação ocorre artificialmente no útero", "A fecundação do óvulo pelo espermatozoide ocorre em laboratório", "A mulher toma hormônios para ovular", "O homem recebe tratamento para produzir mais espermatozoides"],
            answer: "A fecundação do óvulo pelo espermatozoide ocorre em laboratório",
            solution: "Na FIV, os óvulos são coletados da mulher e fecundados pelos espermatozoides em uma placa de cultura ('in vitro' = 'no vidro'). Os embriões formados são então transferidos para o útero."
        },
        {
            question: "Qual o nome da extremidade inferior do útero que se projeta na vagina?",
            options: ["Fundo do útero", "Colo do útero (ou cérvix)", "Endométrio", "Miométrio"],
            answer: "Colo do útero (ou cérvix)",
            solution: "O colo do útero é a parte mais estreita e inferior do útero, que se abre durante o parto para permitir a passagem do bebê."
        },
        {
            question: "O saco escrotal (ou bolsa escrotal) tem como principal função:",
            options: ["Produzir testosterona", "Armazenar urina", "Proteger o pênis", "Manter os testículos a uma temperatura ligeiramente inferior à do corpo"],
            answer: "Manter os testículos a uma temperatura ligeiramente inferior à do corpo",
            solution: "A produção de espermatozoides (espermatogênese) é mais eficiente a uma temperatura um pouco mais baixa que os 36,5-37°C do corpo. A posição externa do saco escrotal ajuda a regular essa temperatura."
        },
        {
            question: "Durante a gestação, o ciclo menstrual e a ovulação são interrompidos. Por quê?",
            options: ["O útero está ocupado", "Os altos níveis de hormônios da gravidez (como a progesterona) inibem a liberação de FSH e LH", "A mulher não tem mais óvulos", "É uma proteção contra gêmeos"],
            answer: "Os altos níveis de hormônios da gravidez (como a progesterona) inibem a liberação de FSH e LH",
            solution: "A progesterona, produzida inicialmente pelo corpo lúteo e depois pela placenta, mantém o endométrio e envia um feedback negativo para a hipófise, impedindo que ela libere FSH e LH, os hormônios que iniciariam um novo ciclo."
        },
        {
            question: "As vesículas seminais são glândulas que produzem:",
            options: ["Espermatozoides", "Um líquido nutritivo, rico em frutose, que compõe a maior parte do sêmen", "Testosterona", "O hormônio do crescimento"],
            answer: "Um líquido nutritivo, rico em frutose, que compõe a maior parte do sêmen",
            solution: "O fluido das vesículas seminais é alcalino e contém frutose, um açúcar que serve como principal fonte de energia para os espermatozoides em seu trajeto."
        },
        {
            question: "O que acontece com o folículo ovariano após a ovulação?",
            options: ["Ele é expelido junto com o óvulo", "Ele se desintegra imediatamente", "Ele se transforma no corpo lúteo, que produz progesterona", "Ele se torna um novo óvulo"],
            answer: "Ele se transforma no corpo lúteo, que produz progesterona",
            solution: "As células do folículo que permanecem no ovário após a liberação do ovócito se reorganizam para formar o corpo lúteo (ou corpo amarelo), uma glândula endócrina temporária que secreta progesterona para preparar o corpo para a gravidez."
        },
        // --- CIÊNCIAS - Capítulo 9: Métodos Contraceptivos (30 Questões) ---
        {
            question: "Qual o objetivo do planejamento familiar?",
            options: ["Impedir que as pessoas tenham filhos", "Oferecer às pessoas a possibilidade de decidir se querem ter filhos, quando e quantos", "Promover apenas métodos contraceptivos definitivos", "Forçar as pessoas a usar contraceptivos"],
            answer: "Oferecer às pessoas a possibilidade de decidir se querem ter filhos, quando e quantos",
            solution: "Planejamento familiar é o conjunto de ações que ajudam pessoas e casais a decidirem de forma livre e consciente sobre a sua reprodução, garantindo o direito de escolha."
        },
        {
            question: "A camisinha (preservativo masculino) é classificada como um método contraceptivo de:",
            options: ["Barreira", "Hormonal", "Natural", "Definitivo"],
            answer: "Barreira",
            solution: "Métodos de barreira são aqueles que criam um obstáculo físico, impedindo o encontro do espermatozoide com o óvulo. A camisinha é o exemplo mais comum."
        },
        {
            question: "Além de prevenir a gravidez, qual é a outra grande vantagem do uso da camisinha (masculina e feminina)?",
            options: ["Aumentar o prazer sexual", "Regular o ciclo menstrual", "Ser o método mais eficaz que existe", "Proteger contra a maioria das Infecções Sexualmente Transmissíveis (ISTs)"],
            answer: "Proteger contra a maioria das Infecções Sexualmente Transmissíveis (ISTs)",
            solution: "A camisinha é o único método que oferece dupla proteção: evita a gravidez e previne a transmissão da maioria das ISTs, como HIV, sífilis e gonorreia."
        },
        {
            question: "As pílulas anticoncepcionais mais comuns contêm hormônios sintéticos que agem principalmente:",
            options: ["Matando os espermatozoides", "Criando uma barreira no colo do útero", "Impedindo a ovulação", "Destruindo o óvulo após a fecundação"],
            answer: "Impedindo a ovulação",
            solution: "Os hormônios da pílula (geralmente estrogênio e progesterona sintéticos) inibem a liberação de FSH e LH pela hipófise, impedindo o amadurecimento do folículo e a ovulação."
        },
        {
            question: "Qual dos seguintes é um método contraceptivo definitivo (cirúrgico)?",
            options: ["DIU de cobre", "Pílula do dia seguinte", "Vasectomia", "Diafragma"],
            answer: "Vasectomia",
            solution: "A vasectomia (no homem) e a laqueadura (na mulher) são métodos cirúrgicos considerados permanentes ou de difícil reversão, por isso são chamados de definitivos."
        },
        {
            question: "O que é o DIU (Dispositivo Intrauterino)?",
            options: ["Uma pílula tomada diariamente", "Um pequeno objeto inserido no útero para prevenir a gravidez", "Uma injeção hormonal mensal", "Um adesivo colado na pele"],
            answer: "Um pequeno objeto inserido no útero para prevenir a gravidez",
            solution: "O DIU é um pequeno dispositivo em formato de 'T' que é inserido no útero por um profissional de saúde. Existem dois tipos principais: o de cobre e o hormonal."
        },
        {
            question: "O método da 'tabelinha' se baseia em:",
            options: ["Medir a temperatura corporal todos os dias", "Evitar relações sexuais durante o período fértil calculado da mulher", "Observar o muco cervical", "Interromper o coito antes da ejaculação"],
            answer: "Evitar relações sexuais durante o período fértil calculado da mulher",
            solution: "A tabelinha é um método natural que envolve calcular os dias férteis do ciclo menstrual com base em ciclos anteriores. É considerado pouco eficaz devido à irregularidade dos ciclos."
        },
        {
            question: "Por que o coito interrompido é considerado um método contraceptivo de baixa eficácia?",
            options: ["Porque o homem não consegue controlar", "Porque o líquido liberado antes da ejaculação pode conter espermatozoides", "Porque ele causa infecções", "Porque só funciona se a mulher estiver de pé"],
            answer: "Porque o líquido liberado antes da ejaculação pode conter espermatozoides",
            solution: "O líquido pré-ejaculatório (ou de lubrificação) pode conter espermatozoides, e a retirada pode não ocorrer a tempo, tornando o método muito sujeito a falhas."
        },
        {
            question: "O diafragma é um método de barreira que consiste em:",
            options: ["Uma capa de látex que cobre o pênis", "Um anel de silicone inserido na vagina", "Uma pequena cúpula de silicone inserida no fundo da vagina para cobrir o colo do útero", "Um dispositivo inserido no útero"],
            answer: "Uma pequena cúpula de silicone inserida no fundo da vagina para cobrir o colo do útero",
            solution: "O diafragma deve ser colocado antes da relação sexual e removido horas depois. Ele impede que os espermatozoides entrem no útero. Geralmente é usado com espermicida."
        },
        {
            question: "A pílula do dia seguinte é um método:",
            options: ["De uso rotineiro, que substitui a pílula normal", "De emergência, que deve ser usado apenas em situações excepcionais", "100% eficaz para evitar a gravidez", "Que protege contra ISTs"],
            answer: "De emergência, que deve ser usado apenas em situações excepcionais",
            solution: "A contracepção de emergência possui uma alta dose hormonal e serve para situações como falha do método usual (camisinha estourou) ou relação desprotegida. Não deve ser usada como método regular."
        },
        {
            question: "Qual método contraceptivo, além da laqueadura, é exclusivo para mulheres?",
            options: ["Camisinha", "Vasectomia", "Coito interrompido", "Pílula anticoncepcional"],
            answer: "Pílula anticoncepcional",
            solution: "A pílula hormonal, injeções, adesivos, anel vaginal, diafragma e DIU são todos métodos de uso feminino. Vasectomia e coito interrompido dependem do homem."
        },
        {
            question: "O DIU de cobre previne a gravidez principalmente porque:",
            options: ["Libera hormônios que impedem a ovulação", "O cobre cria um ambiente hostil aos espermatozoides, dificultando sua movimentação e sobrevivência", "Bloqueia fisicamente a entrada do útero", "Mata o óvulo"],
            answer: "O cobre cria um ambiente hostil aos espermatozoides, dificultando sua movimentação e sobrevivência",
            solution: "O cobre tem uma ação espermicida e causa uma reação inflamatória no endométrio que impede a fecundação e a implantação, sem usar hormônios."
        },
        {
            question: "Qual dos seguintes métodos é considerado o mais eficaz na prevenção da gravidez (menor taxa de falha)?",
            options: ["Tabelinha", "Coito interrompido", "Implante hormonal subcutâneo", "Espermicida usado sozinho"],
            answer: "Implante hormonal subcutâneo",
            solution: "Métodos de longa duração e reversíveis, como o implante e o DIU hormonal, e os métodos definitivos (laqueadura/vasectomia) têm as maiores taxas de eficácia, pois não dependem da lembrança ou ação do usuário a cada dia ou a cada relação."
        },
        {
            question: "A laqueadura impede a mulher de menstruar?",
            options: ["Sim, a menstruação cessa imediatamente", "Não, a mulher continua ovulando e menstruando normalmente", "Sim, mas apenas após alguns anos", "Depende da idade da mulher"],
            answer: "Não, a mulher continua ovulando e menstruando normalmente",
            solution: "A laqueadura apenas bloqueia as tubas uterinas. Os ovários continuam produzindo hormônios e liberando óvulos, e o útero continua preparando e descamando o endométrio. O ciclo hormonal e a menstruação não são afetados."
        },
        {
            question: "Um homem que fez vasectomia continua a ejacular?",
            options: ["Não, a ejaculação cessa", "Sim, mas o volume diminui muito", "Sim, ele ejacula o líquido seminal, mas sem espermatozoides", "Apenas em algumas ocasiões"],
            answer: "Sim, ele ejacula o líquido seminal, mas sem espermatozoides",
            solution: "Os espermatozoides representam uma parte mínima do volume do sêmen. As vesículas seminais e a próstata continuam produzindo os fluidos normalmente, então a ejaculação, o orgasmo e o volume do sêmen permanecem praticamente inalterados."
        },
        {
            question: "Qual método consiste em um pequeno bastão inserido sob a pele do braço que libera hormônios continuamente?",
            options: ["DIU", "Adesivo contraceptivo", "Implante contraceptivo", "Anel vaginal"],
            answer: "Implante contraceptivo",
            solution: "O implante é um método hormonal de longa duração (até 3 anos) que libera progesterona continuamente, inibindo a ovulação e espessando o muco cervical."
        },
        {
            question: "A 'tabelinha' e o 'coito interrompido' são classificados como métodos:",
            options: ["De barreira", "Hormonais", "Cirúrgicos", "Naturais (ou comportamentais)"],
            answer: "Naturais (ou comportamentais)",
            solution: "São chamados de naturais ou comportamentais porque não envolvem o uso de dispositivos, hormônios ou cirurgias, dependendo apenas da observação do corpo e de mudanças de comportamento."
        },
        {
            question: "A eficácia da pílula anticoncepcional pode ser reduzida por:",
            options: ["Consumo de frutas cítricas", "Prática de exercícios físicos", "Vômitos, diarreia ou uso de certos medicamentos (como alguns antibióticos)", "Dormir poucas horas"],
            answer: "Vômitos, diarreia ou uso de certos medicamentos (como alguns antibióticos)",
            solution: "Vômitos ou diarreia intensa podem impedir a correta absorção do hormônio pelo corpo. Além disso, alguns medicamentos podem interferir no metabolismo da pílula, diminuindo sua eficácia. É essencial consultar a bula e o médico."
        },
        {
            question: "O DIU hormonal (Mirena®, Kyleena®) atua principalmente:",
            options: ["Pela ação do cobre", "Liberando progesterona, que espessa o muco cervical e afina o endométrio", "Bloqueando a tuba uterina", "Causando a menopausa precoce"],
            answer: "Liberando progesterona, que espessa o muco cervical e afina o endométrio",
            solution: "A progesterona liberada localmente no útero dificulta a passagem dos espermatozoides (muco espesso) e torna o endométrio inadequado para a implantação, podendo também inibir a ovulação em algumas mulheres."
        },
        {
            question: "Qual método contraceptivo deve ser colocado corretamente antes de qualquer penetração?",
            options: ["DIU", "Pílula", "Preservativo (camisinha)", "Adesivo"],
            answer: "Preservativo (camisinha)",
            solution: "A camisinha deve ser colocada no pênis ereto antes do início da penetração, pois o líquido pré-ejaculatório pode conter espermatozoides e transmitir ISTs."
        },
        {
            question: "O anel vaginal é um método hormonal que:",
            options: ["É inserido no útero pelo médico", "É um anel flexível inserido na vagina pela própria mulher, onde permanece por 3 semanas", "É colocado no colo do útero antes de cada relação", "É um método definitivo"],
            answer: "É um anel flexível inserido na vagina pela própria mulher, onde permanece por 3 semanas",
            solution: "O anel libera hormônios (estrogênio e progesterona) que são absorvidos pela mucosa vaginal. A mulher usa o anel por 3 semanas e faz uma pausa de 1 semana, quando ocorre a menstruação."
        },
        {
            question: "A principal razão pela qual os métodos naturais têm altas taxas de falha é:",
            options: ["A irregularidade dos ciclos menstruais e a dificuldade de aplicação correta", "O alto custo desses métodos", "Os efeitos colaterais que causam", "A falta de hormônios"],
            answer: "A irregularidade dos ciclos menstruais e a dificuldade de aplicação correta",
            solution: "O ciclo menstrual pode variar por estresse, doenças e outros fatores, tornando os cálculos da tabelinha imprecisos. Outros métodos, como o coito interrompido, exigem um controle que pode falhar."
        },
        {
            question: "O que é um espermicida?",
            options: ["Um hormônio que impede a ovulação", "Uma substância química que destrói ou imobiliza os espermatozoides", "Um dispositivo de barreira", "Um método natural"],
            answer: "Uma substância química que destrói ou imobiliza os espermatozoides",
            solution: "Espermicidas são géis, cremes ou espumas aplicados na vagina antes da relação. Usados sozinhos, têm baixa eficácia, mas podem ser combinados com métodos de barreira como o diafragma."
        },
        {
            question: "Para uma adolescente que está iniciando a vida sexual, qual método é frequentemente recomendado por oferecer dupla proteção?",
            options: ["Tabelinha", "DIU de Cobre", "Pílula anticoncepcional", "Preservativo (camisinha)"],
            answer: "Preservativo (camisinha)",
            solution: "A camisinha é crucial para jovens e pessoas com múltiplos parceiros por ser o único método que protege tanto da gravidez quanto da transmissão de ISTs. Pode ser combinada com outro método para maior eficácia contraceptiva."
        },
        {
            question: "O adesivo contraceptivo funciona de forma semelhante à pílula, mas a via de administração é:",
            options: ["Oral", "Intrauterina", "Transdérmica (através da pele)", "Injetável"],
            answer: "Transdérmica (através da pele)",
            solution: "O adesivo é colado na pele (nádegas, braço, abdômen) e libera os mesmos hormônios da pílula combinada, que são absorvidos pela pele e caem na corrente sanguínea. Troca-se o adesivo uma vez por semana, por 3 semanas, com uma de pausa."
        },
        {
            question: "Qual método de barreira é de uso interno feminino?",
            options: ["Preservativo masculino", "Diafragma", "Coito interrompido", "Vasectomia"],
            answer: "Diafragma",
            solution: "O diafragma, assim como a camisinha feminina e o anel vaginal, são métodos inseridos no canal vaginal. O preservativo masculino é externo."
        },
        {
            question: "As injeções contraceptivas podem ser de aplicação:",
            options: ["Diária ou semanal", "Apenas anual", "Mensal ou trimestral", "Apenas na emergência"],
            answer: "Mensal ou trimestral",
            solution: "Existem injeções hormonais mensais (que contêm estrogênio e progesterona) e trimestrais (que contêm apenas progesterona), ambas com alta eficácia."
        },
        {
            question: "A escolha do método contraceptivo deve ser feita:",
            options: ["Com base na opinião de amigos", "Sempre optando pelo mais barato", "Após uma consulta médica ou de enfermagem, considerando a saúde e o estilo de vida da pessoa", "Apenas uma vez na vida"],
            answer: "Após uma consulta médica ou de enfermagem, considerando a saúde e o estilo de vida da pessoa",
            solution: "Cada método tem indicações, contraindicações e modo de uso específicos. A melhor escolha é individual e deve ser orientada por um profissional de saúde."
        },
        {
            question: "Uma mulher com histórico de trombose não deve usar qual tipo de contraceptivo?",
            options: ["DIU de Cobre", "Preservativo", "Contraceptivos hormonais combinados (com estrogênio)", "Tabelinha"],
            answer: "Contraceptivos hormonais combinados (com estrogênio)",
            solution: "O estrogênio presente nas pílulas combinadas, adesivo e anel vaginal pode aumentar o risco de eventos trombóticos em mulheres com predisposição. Nesses casos, métodos sem estrogênio são mais seguros."
        },
        {
            question: "Qual é a principal função do planejamento familiar no contexto da saúde pública?",
            options: ["Controlar o crescimento populacional", "Reduzir a mortalidade materna e infantil e promover a saúde sexual e reprodutiva", "Apenas distribuir preservativos", "Obrigar o uso de DIU"],
            answer: "Reduzir a mortalidade materna e infantil e promover a saúde sexual e reprodutiva",
            solution: "Ao permitir que as mulheres evitem gestações de alto risco ou muito próximas, o planejamento familiar contribui diretamente para a redução da mortalidade materna e infantil, além de promover a autonomia e o bem-estar."
        },
        // --- CIÊNCIAS - Capítulo 10: Infecções Sexualmente Transmissíveis (ISTs) (30 Questões) ---
        {
            question: "O que são ISTs?",
            options: ["Doenças transmitidas apenas pelo ar", "Infecções transmitidas principalmente por contato sexual sem proteção", "Doenças que afetam apenas os órgãos genitais", "Infecções causadas apenas por vírus"],
            answer: "Infecções transmitidas principalmente por contato sexual sem proteção",
            solution: "IST é a sigla para Infecções Sexualmente Transmissíveis. O termo substituiu DST (Doenças) para destacar que uma pessoa pode estar infectada e transmitir a infecção mesmo sem apresentar sintomas."
        },
        {
            question: "Qual é o método mais eficaz para prevenir a transmissão da maioria das ISTs?",
            options: ["Pílula anticoncepcional", "Lavagem dos genitais após a relação", "Uso correto e consistente do preservativo (camisinha)", "DIU"],
            answer: "Uso correto e consistente do preservativo (camisinha)",
            solution: "O preservativo (masculino ou feminino) cria uma barreira física que impede o contato com secreções e lesões, sendo a forma mais eficaz de prevenção para a maioria das ISTs, incluindo o HIV."
        },
        {
            question: "A sífilis é uma IST causada por qual tipo de microrganismo?",
            options: ["Vírus", "Fungo", "Bactéria", "Protozoário"],
            answer: "Bactéria",
            solution: "A sífilis é causada pela bactéria Treponema pallidum. Ela tem tratamento e cura com antibióticos, mas se não tratada, pode levar a complicações graves."
        },
        {
            question: "Qual IST, causada por bactéria, é caracterizada inicialmente por uma ferida indolor (cancro duro) nos órgãos genitais?",
            options: ["Gonorreia", "Clamídia", "Sífilis", "Herpes genital"],
            answer: "Sífilis",
            solution: "A primeira fase da sífilis (sífilis primária) geralmente se manifesta como uma única úlcera ou ferida, chamada de cancro duro, que não dói e desaparece sozinha, podendo enganar a pessoa infectada."
        },
        {
            question: "O HIV é o vírus que causa qual doença?",
            options: ["Hepatite B", "HPV", "Aids", "Herpes"],
            answer: "Aids",
            solution: "HIV é a sigla para Vírus da Imunodeficiência Humana. Ele ataca o sistema imunológico, e quando este se torna muito debilitado, a pessoa desenvolve a Síndrome da Imunodeficiência Adquirida (Aids), ficando vulnerável a doenças oportunistas."
        },
        {
            question: "Qual é a principal forma de transmissão do HIV?",
            options: ["Picada de mosquito", "Abraço ou aperto de mão", "Relação sexual desprotegida", "Uso de talheres ou copos compartilhados"],
            answer: "Relação sexual desprotegida",
            solution: "O HIV é transmitido através do contato com fluidos corporais infectados, como sangue, sêmen, secreções vaginais e leite materno. A via sexual é a mais comum."
        },
        {
            question: "O HPV (Papilomavírus Humano) é um vírus associado principalmente ao risco de desenvolver qual tipo de câncer?",
            options: ["Câncer de pele", "Câncer de pulmão", "Câncer de colo de útero", "Leucemia"],
            answer: "Câncer de colo de útero",
            solution: "Certos tipos de HPV, chamados de oncogênicos, são a principal causa do câncer de colo de útero. A infecção por HPV também está associada a outros cânceres (ânus, pênis, orofaringe)."
        },
        {
            question: "Existe vacina para prevenir a infecção por alguns dos tipos mais comuns de HPV?",
            options: ["Não, ainda está em estudo", "Sim, está disponível no SUS para meninas e meninos em idade escolar", "Sim, mas apenas para idosos", "Não, a prevenção é apenas com camisinha"],
            answer: "Sim, está disponível no SUS para meninas e meninos em idade escolar",
            solution: "A vacina contra o HPV é uma importante forma de prevenção primária. Ela é altamente eficaz na prevenção da infecção pelos principais tipos de HPV que causam câncer e verrugas genitais."
        },
        {
            question: "A herpes genital, causada por um vírus, é caracterizada por:",
            options: ["Corrimento amarelado", "Pequenas bolhas e feridas dolorosas que surgem em surtos", "Uma única ferida que não dói", "Febre alta e dor de garganta"],
            answer: "Pequenas bolhas e feridas dolorosas que surgem em surtos",
            solution: "A herpes genital não tem cura, e o vírus permanece no corpo. A pessoa pode ter crises recorrentes (surtos) de lesões vesiculares (bolhas) dolorosas na região genital."
        },
        {
            question: "A candidíase é uma infecção causada por um fungo que pode afetar a região genital, causando coceira e corrimento esbranquiçado. Ela é considerada uma IST?",
            options: ["Sim, sempre é transmitida sexualmente", "Não, é apenas uma alergia", "Pode ser transmitida sexualmente, mas geralmente ocorre por um desequilíbrio da flora local", "Sim, e é a mais perigosa de todas"],
            answer: "Pode ser transmitida sexualmente, mas geralmente ocorre por um desequilíbrio da flora local",
            solution: "O fungo Candida já faz parte da flora normal do corpo. A infecção (candidíase) acontece quando há um desequilíbrio (por estresse, baixa imunidade, uso de antibióticos). Embora possa ser transmitida ao parceiro(a), nem sempre tem origem sexual."
        },
        {
            question: "Gonorreia e Clamídia são ISTs bacterianas que, se não tratadas, podem causar sérias complicações, como:",
            options: ["Câncer de fígado", "Doença inflamatória pélvica (DIP) e infertilidade", "Perda de memória", "Insuficiência cardíaca"],
            answer: "Doença inflamatória pélvica (DIP) e infertilidade",
            solution: "Em mulheres, essas bactérias podem ascender pelo trato reprodutor e causar a DIP, uma inflamação grave que pode levar a dores crônicas e obstrução das trompas, resultando em infertilidade."
        },
        {
            question: "Qual IST viral também pode ser prevenida por vacina, que geralmente é administrada nos primeiros meses de vida?",
            options: ["HIV", "Herpes", "Hepatite B", "Sífilis"],
            answer: "Hepatite B",
            solution: "A hepatite B é uma infecção grave do fígado que pode ser transmitida sexualmente, por sangue contaminado ou de mãe para filho. A vacinação é a principal forma de prevenção."
        },
        {
            question: "O tratamento para ISTs causadas por BACTÉRIAS, como sífilis, gonorreia e clamídia, é feito com:",
            options: ["Vacinas", "Antivirais", "Antibióticos", "Analgésicos"],
            answer: "Antibióticos",
            solution: "As infecções bacterianas são tratadas e curadas com o uso de antibióticos específicos, que devem ser prescritos por um médico. É fundamental que o(s) parceiro(s) também seja(m) tratado(s)."
        },
        {
            question: "O tratamento para o HIV/Aids atualmente:",
            options: ["Não existe", "Cura a infecção em poucas semanas", "Consiste em medicamentos antirretrovirais que controlam o vírus, permitindo que a pessoa viva com qualidade", "É feito apenas com repouso e boa alimentação"],
            answer: "Consiste em medicamentos antirretrovirais que controlam o vírus, permitindo que a pessoa viva com qualidade",
            solution: "A terapia antirretroviral (TARV) não elimina o HIV do corpo, mas impede sua multiplicação. Isso mantém a carga viral indetectável e o sistema imune forte, permitindo uma vida longa e saudável, e tornando a pessoa intransmissível por via sexual."
        },
        {
            question: "É possível uma pessoa ter uma IST e não apresentar nenhum sintoma?",
            options: ["Não, todas as ISTs causam sintomas imediatos", "Sim, muitas ISTs podem ser assintomáticas, mas a pessoa ainda pode transmiti-las", "Apenas homens podem ser assintomáticos", "Apenas se a pessoa tiver uma imunidade muito alta"],
            answer: "Sim, muitas ISTs podem ser assintomáticas, mas a pessoa ainda pode transmiti-las",
            solution: "Infecções como clamídia, HPV e até mesmo HIV podem passar longos períodos sem manifestar sintomas evidentes. Por isso, a testagem regular e o uso de preservativo são tão importantes."
        },
        {
            question: "Qual a importância de comunicar ao(s) parceiro(s) sobre um diagnóstico de IST?",
            options: ["Não tem importância, é um assunto pessoal", "É fundamental para que eles também possam se testar e tratar, quebrando a cadeia de transmissão", "Serve apenas para constranger a outra pessoa", "Apenas se a IST for muito grave"],
            answer: "É fundamental para que eles também possam se testar e tratar, quebrando a cadeia de transmissão",
            solution: "Avisar as parcerias sexuais é um ato de responsabilidade e saúde pública. Permite que outras pessoas recebam o tratamento adequado, evitando complicações para elas e a reinfecção de quem já se tratou."
        },
        {
            question: "As verrugas genitais, também conhecidas como 'crista de galo', são uma manifestação comum de qual IST?",
            options: ["Sífilis", "Herpes", "HPV", "Gonorreia"],
            answer: "HPV",
            solution: "As verrugas genitais (condilomas) são causadas por tipos de HPV de baixo risco oncogênico. Embora não evoluam para câncer, são contagiosas e requerem tratamento."
        },
        {
            question: "O que significa ter uma carga viral de HIV 'indetectável'?",
            options: ["Que a pessoa está curada do HIV", "Que a quantidade de vírus no sangue é tão baixa que os exames não conseguem detectar, e o risco de transmissão sexual é zero", "Que o vírus está dormente e pode voltar a qualquer momento", "Que o teste de HIV deu negativo"],
            answer: "Que a quantidade de vírus no sangue é tão baixa que os exames não conseguem detectar, e o risco de transmissão sexual é zero",
            solution: "Alcançar e manter a carga viral indetectável através do tratamento antirretroviral é o objetivo principal. O conceito I=I (Indetectável = Intransmissível) confirma que pessoas vivendo com HIV e com carga viral indetectável não transmitem o vírus por via sexual."
        },
        {
            question: "A transmissão vertical de uma IST refere-se à transmissão:",
            options: ["Entre pessoas do mesmo sexo", "Da mãe para o bebê durante a gestação, parto ou amamentação", "Através de transfusão de sangue", "Em ambientes hospitalares"],
            answer: "Da mãe para o bebê durante a gestação, parto ou amamentação",
            solution: "A transmissão vertical é a passagem de uma infecção (como HIV, sífilis, hepatite B) da mãe para o feto ou recém-nascido. O pré-natal adequado, com testagem e tratamento, é essencial para preveni-la."
        },
        {
            question: "O diagnóstico de ISTs é feito através de:",
            options: ["Apenas observação dos sintomas", "Exames de sangue, urina, análise de secreções ou exame clínico", "Adivinhação", "Apenas por biópsia"],
            answer: "Exames de sangue, urina, análise de secreções ou exame clínico",
            solution: "Cada IST tem um método diagnóstico. Pode ser um exame de sangue (sífilis, HIV, hepatites), análise de corrimento (gonorreia, clamídia) ou avaliação clínica das lesões (herpes, HPV). Apenas um profissional de saúde pode diagnosticar corretamente."
        },
        {
            question: "Corrimento amarelado ou esverdeado e dor ao urinar são sintomas clássicos em homens de qual IST bacteriana?",
            options: ["Sífilis", "Gonorreia", "HPV", "Herpes"],
            answer: "Gonorreia",
            solution: "A gonorreia, causada pela bactéria Neisseria gonorrhoeae, frequentemente causa uretrite (inflamação da uretra) em homens, com sintomas de corrimento purulento e ardência. Em mulheres, pode ser assintomática."
        },
        {
            question: "Por que não se deve fazer autotratamento ou usar medicamentos indicados por amigos para tratar uma suspeita de IST?",
            options: ["Porque os medicamentos são muito caros", "Porque o tratamento errado pode mascarar sintomas, criar resistência bacteriana e não curar a infecção", "Porque os farmacêuticos não sabem indicar", "Porque é mais divertido ir ao médico"],
            answer: "Porque o tratamento errado pode mascarar sintomas, criar resistência bacteriana e não curar a infecção",
            solution: "Apenas um profissional de saúde pode diagnosticar a IST correta e prescrever o medicamento (e a dose) adequado. O uso incorreto de antibióticos, por exemplo, é um grave problema de saúde pública."
        },
        {
            question: "A hepatite B, se não tratada, pode evoluir para formas crônicas, causando graves danos a qual órgão?",
            options: ["Coração", "Cérebro", "Rins", "Fígado"],
            answer: "Fígado",
            solution: "As hepatites virais (A, B, C) são infecções que atacam primariamente o fígado, podendo levar a cirrose e câncer hepático se a infecção se tornar crônica, como pode ocorrer com a hepatite B e C."
        },
        {
            question: "Qual das seguintes afirmações sobre o HIV é VERDADEIRA?",
            options: ["Abraços, beijos e compartilhamento de objetos transmitem o vírus", "Pessoas com HIV não podem ter filhos", "Existe tratamento eficaz que permite uma vida longa e saudável", "A camisinha não protege contra o HIV"],
            answer: "Existe tratamento eficaz que permite uma vida longa e saudável",
            solution: "Com a terapia antirretroviral, a infecção pelo HIV tornou-se uma condição crônica controlável. As outras opções são mitos: o vírus não é transmitido por contato casual, pessoas com HIV podem ter filhos saudáveis com acompanhamento médico, e a camisinha é altamente eficaz na prevenção."
        },
        {
            question: "O cancro mole, outra IST bacteriana, difere do cancro duro da sífilis porque:",
            options: ["A ferida do cancro mole é dolorosa", "O cancro mole é causado por vírus", "O cancro mole não tem cura", "O cancro mole aparece no corpo todo"],
            answer: "A ferida do cancro mole é dolorosa",
            solution: "Enquanto a lesão inicial da sífilis (cancro duro) é tipicamente única e indolor, o cancro mole é caracterizado por múltiplas feridas dolorosas e com pus na região genital."
        },
        {
            question: "A PEP (Profilaxia Pós-Exposição) é uma medida de urgência que consiste em:",
            options: ["Tomar uma vacina após a relação de risco", "Usar medicamentos antirretrovirais por 28 dias para reduzir o risco de infecção pelo HIV após uma exposição", "Fazer um teste rápido de HIV imediatamente", "Tomar um antibiótico potente"],
            answer: "Usar medicamentos antirretrovirais por 28 dias para reduzir o risco de infecção pelo HIV após uma exposição",
            solution: "A PEP é indicada para situações de risco (como sexo desprotegido ou rompimento da camisinha) e deve ser iniciada o mais rápido possível, idealmente nas primeiras 2 horas e no máximo em 72 horas após a exposição."
        },
        {
            question: "A clamídia é conhecida como uma 'infecção silenciosa' porque:",
            options: ["Não pode ser detectada por exames", "É frequentemente assintomática, especialmente em mulheres", "O som da bactéria é muito baixo", "Não é considerada uma IST"],
            answer: "É frequentemente assintomática, especialmente em mulheres",
            solution: "Cerca de 70-80% das mulheres e uma parcela significativa dos homens com clamídia não apresentam sintomas, o que dificulta o diagnóstico e facilita a transmissão."
        },
        {
            question: "A melhor forma de saber se você tem uma IST como HIV ou sífilis é:",
            options: ["Esperar os sintomas aparecerem", "Perguntar ao seu parceiro(a)", "Fazer o teste", "Pesquisar os sintomas na internet"],
            answer: "Fazer o teste",
            solution: "A única maneira de ter certeza é realizando a testagem. Os testes para HIV, sífilis e hepatites B e C são rápidos, seguros, sigilosos e gratuitos no SUS."
        },
        {
            question: "A sífilis congênita ocorre quando:",
            options: ["A bactéria é transmitida pelo ar", "A mãe transmite a bactéria para o feto durante a gravidez", "A pessoa se infecta em um hospital", "A sífilis afeta o cérebro"],
            answer: "A mãe transmite a bactéria para o feto durante a gravidez",
            solution: "A sífilis congênita é uma forma grave da doença, transmitida da mãe para o bebê. Pode causar malformações, aborto ou morte do bebê. É totalmente prevenível com o diagnóstico e tratamento da gestante durante o pré-natal."
        },
        {
            question: "O uso de pílula anticoncepcional protege contra ISTs?",
            options: ["Sim, protege contra todas", "Não, a pílula não oferece proteção contra ISTs", "Sim, mas apenas contra as bacterianas", "Apenas se tomada corretamente"],
            answer: "Não, a pílula não oferece proteção contra ISTs",
            solution: "Métodos hormonais (pílula, injeção, adesivo, implante) e o DIU são eficazes para prevenir a gravidez, mas não impedem a transmissão de infecções. Para isso, o uso do preservativo é indispensável."
        }
    ];

    const questionTitle = document.getElementById('question-title');
    const optionsContainer = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressText = document.getElementById('progress-text');
    const resultArea = document.getElementById('result-area');
    const scoreText = document.getElementById('score-text');
    const restartBtn = document.getElementById('restart-btn');
    const dissertationText = document.getElementById('dissertation-text');
    const correctionDisplay = document.getElementById('correction-display');
    const timerDisplay = document.getElementById('timer-display');
    const pauseBtn = document.getElementById('pause-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let shuffledQuestions = [...questions];
    let timerInterval;
    let seconds = 0;
    let isPaused = false;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startTimer() {
        seconds = 0;
        isPaused = false;
        pauseBtn.textContent = '⏸️ Pausar';
        pauseBtn.classList.remove('paused');
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (!isPaused) {
                seconds++;
                updateTimerDisplay();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = `⏱️ Tempo: ${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function togglePause() {
        isPaused = !isPaused;
        if (isPaused) {
            pauseBtn.textContent = '▶️ Retomar';
            pauseBtn.classList.add('paused');
        } else {
            pauseBtn.textContent = '⏸️ Pausar';
            pauseBtn.classList.remove('paused');
        }
    }

    function startQuiz() {
        shuffleArray(shuffledQuestions);
        currentQuestionIndex = 0;
        score = 0;
        resultArea.classList.add('hide');
        document.getElementById('question-area').style.display = '';
        document.getElementById('dissertation-area').style.display = '';
        document.getElementById('navigation-buttons').style.display = '';
        startTimer();
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = shuffledQuestions[currentQuestionIndex];
        progressText.innerText = `Questão ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
        questionTitle.innerText = currentQuestion.question;

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectOption(button));
            optionsContainer.appendChild(button);
        });
    }

    function resetState() {
        nextBtn.classList.add('hide');
        submitBtn.classList.remove('hide');
        submitBtn.disabled = true;
        dissertationText.value = '';
        dissertationText.readOnly = false;
        correctionDisplay.innerHTML = 'A correção aparecerá aqui após você clicar em "Verificar Resposta".';
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
        selectedOption = null;
    }

    function selectOption(button) {
        if (button.disabled) return;
        const buttons = optionsContainer.getElementsByClassName('option-btn');
        Array.from(buttons).forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedOption = button;
        checkSubmitButtonState();
    }

    function checkSubmitButtonState() {
        if (selectedOption && dissertationText.value.trim().length > 10) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    dissertationText.addEventListener('input', checkSubmitButtonState);

    submitBtn.addEventListener('click', () => {
        if (selectedOption === null) {
            alert('Por favor, selecione uma resposta.');
            return;
        }

        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const correctAnswer = currentQuestion.answer;
        const isCorrect = selectedOption.innerText === correctAnswer;

        if (isCorrect) {
            score++;
            selectedOption.classList.add('correct');
        } else {
            selectedOption.classList.add('wrong');
        }

        Array.from(optionsContainer.children).forEach(button => {
            if (button.innerText === correctAnswer) {
                button.classList.add('correct');
            }
            button.disabled = true;
        });

        correctionDisplay.innerText = currentQuestion.solution;
        dissertationText.readOnly = true;

        submitBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    });

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    function showResult() {
        clearInterval(timerInterval);
        document.getElementById('question-area').style.display = 'none';
        document.getElementById('dissertation-area').style.display = 'none';
        document.getElementById('navigation-buttons').style.display = 'none';
        resultArea.classList.remove('hide');
        const totalQuestions = shuffledQuestions.length;
        const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
        scoreText.innerText = `Você acertou ${score} de ${totalQuestions} questões! (${percentage.toFixed(1)}%)`;
        sendEmailResult(score, totalQuestions, percentage.toFixed(1));
    }

    function sendEmailResult(finalScore, totalQuestions, finalPercentage) {
        // ---- INÍCIO DA CONFIGURAÇÃO DO EMAILJS ----
        // 1. Crie uma conta em https://www.emailjs.com
        // 2. Conecte seu serviço de e-mail (ex: Gmail) e anote o SERVICE ID.
        // 3. Crie um Template de E-mail e anote o TEMPLATE ID.
        // 4. Em "Account", pegue sua PUBLIC KEY.

        const SERVICE_ID = 'service_pg1xyzv';       // Substitua pelo seu Service ID
        const TEMPLATE_ID = 'template_lgvxu65';      // Substitua pelo seu Template ID
        const PUBLIC_KEY = '7_4f_zjROXig_tyC7';      // Substitua pela sua Public Key

        // Verifica se as chaves foram substituídas
        if (SERVICE_ID === 'SEU_SERVICE_ID' || TEMPLATE_ID === 'SEU_TEMPLATE_ID' || PUBLIC_KEY === 'SUA_PUBLIC_KEY') {
            console.log("EmailJS não configurado. Pule o envio de e-mail.");
            scoreText.innerText += "\n\n(Envio de e-mail não configurado.)";
            return;
        }

        emailjs.init(PUBLIC_KEY);

        const templateParams = {
            to_email: 'gil.francojr@gmail.com',
            score: finalScore,
            total_questions: totalQuestions,
            percentage: finalPercentage
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(function (response) {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                scoreText.innerText += "\n\n(Resultado também enviado para o seu e-mail.)";
            }, function (error) {
                console.log('FALHA NO ENVIO DO E-MAIL...', error);
                scoreText.innerText += "\n\n(Houve uma falha ao enviar o resultado por e-mail.)";
            });
        // ---- FIM DA CONFIGURAÇÃO DO EMAILJS ----
    }

    pauseBtn.addEventListener('click', togglePause);
    restartBtn.addEventListener('click', startQuiz);

    startQuiz();
});