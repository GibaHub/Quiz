document.addEventListener('DOMContentLoaded', () => {
    // Banco de dados das 120 questões com resoluções
    const questions = [
        // --- Capítulo 6: Produtos Notáveis e Fatoração (24 Questões) ---
        {
            question: "Qual é o resultado da expansão de $(x + 5)^2$?",
            options: ["$x^2 + 25$", "$x^2 + 10x + 10$", "$x^2 + 10x + 25$", "$x^2 + 5x + 25$"],
            answer: "$x^2 + 10x + 25$",
            solution: "Aplica-se o Quadrado da Soma: $(a+b)^2 = a^2 + 2ab + b^2$.\nOnde a=x e b=5.\n$(x)^2 + 2(x)(5) + (5)^2 = x^2 + 10x + 25$."
        },
        {
            question: "Desenvolva o produto notável $(2y + 3)^2$.",
            options: ["$4y^2 + 9$", "$4y^2 + 12y + 9$", "$2y^2 + 12y + 9$", "$4y^2 + 6y + 9$"],
            answer: "$4y^2 + 12y + 9$",
            solution: "Aplica-se o Quadrado da Soma: $(a+b)^2 = a^2 + 2ab + b^2$.\nOnde a=2y e b=3.\n$(2y)^2 + 2(2y)(3) + (3)^2 = 4y^2 + 12y + 9$."
        },
        {
            question: "Se $(a + b)^2 = a^2 + 2ab + b^2$, qual é o valor de $(m + 7n)^2$?",
            options: ["$m^2 + 49n^2$", "$m^2 + 14mn + 49n^2$", "$m^2 + 7mn + 49n^2$", "$m^2 + 14mn + 14n^2$"],
            answer: "$m^2 + 14mn + 49n^2$",
            solution: "Usando a fórmula do Quadrado da Soma com a=m e b=7n:\n$(m)^2 + 2(m)(7n) + (7n)^2 = m^2 + 14mn + 49n^2$."
        },
        {
            question: "A expressão $x^2 + 14x + 49$ é o resultado de qual produto notável?",
            options: ["$(x + 7)^2$", "$(x - 7)^2$", "$(x + 14)^2$", "$(x + 49)(x - 49)$"],
            answer: "$(x + 7)^2$",
            solution: "Identificamos um trinômio quadrado perfeito. A raiz do primeiro termo é $\\sqrt{x^2} = x$. A raiz do terceiro termo é $\\sqrt{49} = 7$. O termo do meio é $2(x)(7) = 14x$. Como o sinal é positivo, a forma fatorada é $(x+7)^2$."
        },
        {
            question: "Calcule a área de um quadrado cujo lado mede $(z + 4)$.",
            options: ["$z^2 + 16$", "$z^2 + 8z + 16$", "$z^2 + 4z + 16$", "$2z + 8$"],
            answer: "$z^2 + 8z + 16$",
            solution: "A área de um quadrado é lado ao quadrado: $(z+4)^2$.\nAplicando o Quadrado da Soma: $(z)^2 + 2(z)(4) + (4)^2 = z^2 + 8z + 16$."
        },
        {
            question: "Complete a expressão para que seja um trinômio quadrado perfeito: $y^2 + 20y +$ ___.",
            options: ["20", "40", "100", "400"],
            answer: "100",
            solution: "Em um trinômio quadrado perfeito $(a+b)^2$, o termo do meio é $2ab$. Aqui, $a^2=y^2 \\Rightarrow a=y$. O termo do meio é $20y = 2(y)b \\Rightarrow b=10$. O terceiro termo é $b^2 = 10^2 = 100$."
        },
        {
            question: "Qual é o resultado da expansão de $(x - 8)^2$?",
            options: ["$x^2 - 16x + 64$", "$x^2 - 64$", "$x^2 + 16x + 64$", "$x^2 - 8x + 64$"],
            answer: "$x^2 - 16x + 64$",
            solution: "Aplica-se o Quadrado da Diferença: $(a-b)^2 = a^2 - 2ab + b^2$.\nOnde a=x e b=8.\n$(x)^2 - 2(x)(8) + (8)^2 = x^2 - 16x + 64$."
        },
        {
            question: "Desenvolva o produto notável $(3a - 4b)^2$.",
            options: ["$9a^2 - 16b^2$", "$9a^2 + 24ab + 16b^2$", "$3a^2 - 24ab + 4b^2$", "$9a^2 - 24ab + 16b^2$"],
            answer: "$9a^2 - 24ab + 16b^2$",
            solution: "Aplica-se o Quadrado da Diferença: $(a-b)^2 = a^2 - 2ab + b^2$.\nOnde a=3a e b=4b.\n$(3a)^2 - 2(3a)(4b) + (4b)^2 = 9a^2 - 24ab + 16b^2$."
        },
        {
            question: "Se $(a - b)^2 = a^2 - 2ab + b^2$, qual é o valor de $(5k - 2)^2$?",
            options: ["$25k^2 - 4$", "$25k^2 - 10k + 4$", "$25k^2 - 20k + 4$", "$5k^2 - 20k + 4$"],
            answer: "$25k^2 - 20k + 4$",
            solution: "Usando a fórmula do Quadrado da Diferença com a=5k e b=2:\n$(5k)^2 - 2(5k)(2) + (2)^2 = 25k^2 - 20k + 4$."
        },
        {
            question: "A expressão $y^2 - 12y + 36$ é o resultado de qual produto notável?",
            options: ["$(y + 6)^2$", "$(y - 12)^2$", "$(y - 6)^2$", "$(y + 6)(y-6)$"],
            answer: "$(y - 6)^2$",
            solution: "Identificamos um trinômio quadrado perfeito. A raiz do primeiro termo é $\\sqrt{y^2} = y$. A raiz do terceiro termo é $\\sqrt{36} = 6$. O termo do meio é $2(y)(6) = 12y$. Como o sinal do termo do meio é negativo, a forma fatorada é $(y-6)^2$."
        },
        {
            question: "Calcule a área de um quadrado cujo lado mede $(2z - 1)$.",
            options: ["$4z^2 - 1$", "$2z^2 - 4z + 1$", "$4z^2 - 4z + 1$", "$4z^2 + 4z + 1$"],
            answer: "$4z^2 - 4z + 1$",
            solution: "A área de um quadrado é lado ao quadrado: $(2z-1)^2$.\nAplicando o Quadrado da Diferença: $(2z)^2 - 2(2z)(1) + (1)^2 = 4z^2 - 4z + 1$."
        },
        {
            question: "Complete a expressão para que seja um trinômio quadrado perfeito: $9a^2 - $ ___ $+ 25b^2$.",
            options: ["$15ab$", "$30ab$", "$45ab$", "$60ab$"],
            answer: "$30ab$",
            solution: "Em $(a-b)^2 = a^2 - 2ab + b^2$, temos $a^2=9a^2 \\Rightarrow a=3a$ e $b^2=25b^2 \\Rightarrow b=5b$. O termo do meio é $2ab = 2(3a)(5b) = 30ab$."
        },
        {
            question: "Qual é o resultado do produto $(x + 9)(x - 9)$?",
            options: ["$x^2 - 81$", "$x^2 + 18x - 81$", "$x^2 - 18x + 81$", "$x^2 + 81$"],
            answer: "$x^2 - 81$",
            solution: "Aplica-se o Produto da Soma pela Diferença: $(a+b)(a-b) = a^2 - b^2$.\nOnde a=x e b=9.\n$(x)^2 - (9)^2 = x^2 - 81$."
        },
        {
            question: "Desenvolva a expressão $(4y + 5)(4y - 5)$.",
            options: ["$16y^2 + 25$", "$16y^2 - 40y + 25$", "$16y^2 - 25$", "$8y^2 - 25$"],
            answer: "$16y^2 - 25$",
            solution: "Aplica-se o Produto da Soma pela Diferença: $(a+b)(a-b) = a^2 - b^2$.\nOnde a=4y e b=5.\n$(4y)^2 - (5)^2 = 16y^2 - 25$."
        },
        {
            question: "Qual é o valor de $(7a + 2b)(7a - 2b)$?",
            options: ["$49a^2 - 4b^2$", "$49a^2 + 4b^2$", "$49a^2 - 28ab + 4b^2$", "$7a^2 - 4b^2$"],
            answer: "$49a^2 - 4b^2$",
            solution: "Usando a fórmula $(a+b)(a-b) = a^2 - b^2$ com a=7a e b=2b:\n$(7a)^2 - (2b)^2 = 49a^2 - 4b^2$."
        },
        {
            question: "A expressão $m^2 - 81$ pode ser fatorada como qual produto?",
            options: ["$(m - 9)^2$", "$(m + 9)^2$", "$(m + 9)(m - 9)$", "$(m - 81)^2$"],
            answer: "$(m + 9)(m - 9)$",
            solution: "Trata-se de uma diferença de dois quadrados, $a^2-b^2$. A raiz do primeiro termo é $\\sqrt{m^2} = m$. A raiz do segundo termo é $\\sqrt{81} = 9$. A forma fatorada é $(m+9)(m-9)$."
        },
        {
            question: "Calcule o valor numérico de $101 \\times 99$ usando o produto da soma pela diferença.",
            options: ["10000", "9999", "9990", "9899"],
            answer: "9999",
            solution: "Podemos reescrever a expressão como $(100 + 1)(100 - 1)$.\nAplicando a fórmula $(a+b)(a-b) = a^2 - b^2$:\n$100^2 - 1^2 = 10000 - 1 = 9999$."
        },
        {
            question: "Simplifique a expressão $(k + 3)(k - 3) - k^2$.",
            options: ["-9", "9", "6", "-6"],
            answer: "-9",
            solution: "Primeiro, resolvemos o produto notável $(k+3)(k-3) = k^2 - 3^2 = k^2 - 9$.\nAgora, substituímos na expressão: $(k^2 - 9) - k^2$.\n$k^2 - k^2 - 9 = -9$."
        },
        {
            question: "Qual é a forma fatorada da expressão $7x + 7y$?",
            options: ["$7(x+y)$", "$7(x-y)$", "$14xy$", "$7x+y$"],
            answer: "$7(x+y)$",
            solution: "Este é um caso de fatoração por Fator Comum em Evidência. O termo comum a ambos os monômios é o 7. Colocando o 7 em evidência, temos $7(x+y)$."
        },
        {
            question: "Fatore a expressão $a^2b + ab^2$.",
            options: ["$ab(a+b)$", "$ab(a-b)$", "$a^2(b+b^2)$", "$ab(a^2+b^2)$"],
            answer: "$ab(a+b)$",
            solution: "Fator Comum em Evidência. O termo 'a' e o termo 'b' aparecem em ambas as parcelas. O fator comum é 'ab'.\n$ab(a) + ab(b) = ab(a+b)$."
        },
        {
            question: "Fatore por agrupamento a expressão $xy + 5x + 2y + 10$.",
            options: ["$(x+2)(y+5)$", "$(x+5)(y+2)$", "$(x+y)(5+2)$", "$(xy+2)(5x+10)$"],
            answer: "$(x+2)(y+5)$",
            solution: "Agrupamos os termos de dois em dois:\n$(xy + 5x) + (2y + 10)$.\nColocamos o fator comum em evidência em cada grupo:\n$x(y + 5) + 2(y + 5)$.\nAgora, o termo $(y+5)$ é o novo fator comum:\n$(x+2)(y+5)$."
        },
        {
            question: "Qual é a forma fatorada do trinômio $x^2 + 8x + 15$?",
            options: ["$(x+8)(x+15)$", "$(x+1)(x+15)$", "$(x+3)(x+5)$", "$(x-3)(x-5)$"],
            answer: "$(x+3)(x+5)$",
            solution: "Fatoração de trinômio do tipo $x^2+Sx+P$. Procuramos dois números cuja soma (S) seja 8 e cujo produto (P) seja 15. Esses números são 3 e 5. A forma fatorada é $(x+3)(x+5)$."
        },
        {
            question: "Fatore a expressão $36m^2 - 49n^2$.",
            options: ["$(6m - 7n)^2$", "$(6m + 7n)(6m - 7n)$", "$(36m - 49n)(36m + 49n)$", "$(6m + 7n)^2$"],
            answer: "$(6m + 7n)(6m - 7n)$",
            solution: "Diferença de dois quadrados, $a^2-b^2$. A raiz de $36m^2$ é $6m$. A raiz de $49n^2$ é $7n$. A forma fatorada é $(6m+7n)(6m-7n)$."
        },
        {
            question: "Qual é o fator comum em $12x^3y^2 - 18x^2y^4$?",
            options: ["$6x^2y^2$", "$6x^3y^4$", "$12x^2y^2$", "$3xy$"],
            answer: "$6x^2y^2$",
            solution: "Para os coeficientes 12 e 18, o MDC é 6. Para as variáveis, pegamos as menores potências: $x^2$ e $y^2$. Portanto, o fator comum é $6x^2y^2$."
        },
        // --- Capítulo 7: Frações Algébricas e Sequências ---
        {
            question: "Qual é o MDC (Máximo Divisor Comum) entre os monômios $10x^2y$ e $15xy^3$?",
            options: ["$5xy$", "$10xy$", "$15x^2y^3$", "$30xy$"],
            answer: "$5xy$",
            solution: "MDC dos coeficientes (10 e 15) é 5. Para as variáveis, pegamos as menores potências comuns: x¹ e y¹. Juntando tudo, o MDC é 5xy."
        },
        {
            question: "Qual é o MMC (Mínimo Múltiplo Comum) entre $6a^3b$ e $8ab^2$?",
            options: ["$2ab$", "$24a^3b^2$", "$48a^4b^3$", "$24ab$"],
            answer: "$24a^3b^2$",
            solution: "MMC dos coeficientes (6 e 8) é 24. Para as variáveis, pegamos as maiores potências que aparecem: a³ e b². Juntando tudo, o MMC é 24a³b²."
        },
        {
            question: "Determine o MDC dos polinômios $x^2 - 4$ e $x^2 + 2x$.",
            options: ["$x$", "$x-2$", "$x+2$", "$x(x+2)$"],
            answer: "$x+2$",
            solution: "Fatoramos os dois polinômios:\n1) $x^2 - 4 = (x+2)(x-2)$\n2) $x^2 + 2x = x(x+2)$\nO MDC é o produto dos fatores comuns com o menor expoente. O único fator comum é $(x+2)$."
        },
        {
            question: "Determine o MMC dos polinômios $(x - 3)$ e $(x^2 - 9)$.",
            options: ["$(x-3)$", "$(x+3)$", "$(x-3)(x+3)$", "1"],
            answer: "$(x-3)(x+3)$",
            solution: "Fatoramos os polinômios:\n1) $x - 3$ (já está fatorado)\n2) $x^2 - 9 = (x-3)(x+3)$\nO MMC é o produto de todos os fatores com o maior expoente. Os fatores são $(x-3)$ e $(x+3)$. Portanto, o MMC é $(x-3)(x+3)$."
        },
        {
            question: "Simplifique a fração $\\frac{15a^3b^2}{5a^2b}$.",
            options: ["$3ab$", "$3a^5b^3$", "$10ab$", "$3a$"],
            answer: "$3ab$",
            solution: "Dividimos os coeficientes: 15 / 5 = 3.\nDividimos as partes literais usando a propriedade de potências (subtrai os expoentes): $a^{3-2} = a^1 = a$ e $b^{2-1} = b^1 = b$. \nO resultado é 3ab."
        },
        {
            question: "Reduza a fração algébrica $\\frac{x^2 - 25}{x + 5}$.",
            options: ["$x + 5$", "$x - 5$", "$x - 25$", "$x + 25$"],
            answer: "$x - 5$",
            solution: "Fatoramos o numerador, que é uma diferença de quadrados: $x^2 - 25 = (x+5)(x-5)$.\nA fração se torna $\\frac{(x+5)(x-5)}{x+5}$.\nCortamos o termo $(x+5)$ do numerador e do denominador. O resultado é $(x-5)$."
        },
        {
            question: "Simplifique a expressão $\\frac{y^2 + 6y + 9}{y + 3}$.",
            options: ["$y - 3$", "$y + 6$", "$y + 3$", "$y^2 + 3$"],
            answer: "$y + 3$",
            solution: "Fatoramos o numerador, que é um trinômio quadrado perfeito: $y^2 + 6y + 9 = (y+3)^2$.\nA fração se torna $\\frac{(y+3)^2}{y+3}$.\nSimplificando, o resultado é $(y+3)$."
        },
        {
            question: "Qual é a forma simplificada de $\\frac{2x - 8}{x^2 - 16}$?",
            options: ["$\\frac{2}{x-4}$", "$\\frac{2}{x+4}$", "$\\frac{1}{x+8}$", "$2(x+4)$"],
            answer: "$\\frac{2}{x+4}$",
            solution: "Fatoramos o numerador e o denominador:\nNumerador: $2x-8 = 2(x-4)$\nDenominador: $x^2 - 16 = (x+4)(x-4)$\nA fração fica $\\frac{2(x-4)}{(x+4)(x-4)}$.\nCancelamos o termo $(x-4)$. Sobra $\\frac{2}{x+4}$."
        },
        {
            question: "Simplifique a fração $\\frac{ab + ac}{b + c}$.",
            options: ["$a$", "$b$", "$c$", "Não pode ser simplificada"],
            answer: "$a$",
            solution: "Fatoramos o numerador por fator comum: $ab + ac = a(b+c)$.\nA fração se torna $\\frac{a(b+c)}{b+c}$.\nCancelamos o termo $(b+c)$. O resultado é $a$."
        },
        {
            question: "Reduza a fração $\\frac{m^2 - 5m}{m^2 - 25}$.",
            options: ["$\\frac{m}{m-5}$", "$\\frac{m}{m+5}$", "$\\frac{1}{m+5}$", "$m$"],
            answer: "$\\frac{m}{m+5}$",
            solution: "Fatoramos o numerador e o denominador:\nNumerador: $m^2 - 5m = m(m-5)$\nDenominador: $m^2 - 25 = (m+5)(m-5)$\nA fração fica $\\frac{m(m-5)}{(m+5)(m-5)}$.\nCancelamos o termo $(m-5)$. Sobra $\\frac{m}{m+5}$."
        },
        {
            question: "Simplifique $\\frac{x^2 - 7x + 10}{x - 2}$.",
            options: ["$x + 5$", "$x - 5$", "$x - 7$", "$x + 2$"],
            answer: "$x - 5$",
            solution: "Fatoramos o trinômio do numerador (soma -7, produto 10): $x^2 - 7x + 10 = (x-2)(x-5)$.\nA fração fica $\\frac{(x-2)(x-5)}{x-2}$.\nCancelamos o termo $(x-2)$. O resultado é $x-5$."
        },
        {
            question: "Qual é a forma irredutível de $\\frac{8z^3 - 8z}{4z^2 - 4z}$?",
            options: ["$2(z+1)$", "$2z$", "$z-1$", "$2(z-1)$"],
            answer: "$2(z+1)$",
            solution: "Fatoramos ambos:\nNumerador: $8z(z^2-1) = 8z(z+1)(z-1)$\nDenominador: $4z(z-1)$\nA fração fica $\\frac{8z(z+1)(z-1)}{4z(z-1)}$.\nSimplificamos 8/4=2, cancelamos z e (z-1). Sobra $2(z+1)$."
        },
        {
            question: "Calcule a soma: $\\frac{2}{x} + \\frac{5}{y}$.",
            options: ["$\\frac{7}{xy}$", "$\\frac{7}{x+y}$", "$\\frac{2y+5x}{xy}$", "$\\frac{2x+5y}{xy}$"],
            answer: "$\\frac{2y+5x}{xy}$",
            solution: "O MMC entre x e y é xy.\n$\\frac{2y}{xy} + \\frac{5x}{xy} = \\frac{2y+5x}{xy}$."
        },
        {
            question: "Efetue a subtração: $\\frac{3}{a - 1} - \\frac{2}{a - 1}$.",
            options: ["$\\frac{1}{a-1}$", "$1$", "$\\frac{5}{a-1}$", "$\\frac{1}{(a-1)^2}$"],
            answer: "$\\frac{1}{a-1}$",
            solution: "Como os denominadores são iguais, mantemos o denominador e subtraímos os numeradores:\n$\\frac{3-2}{a-1} = \\frac{1}{a-1}$."
        },
        {
            question: "Calcule o produto: $\\frac{x+1}{y} \\times \\frac{y^2}{x^2-1}$.",
            options: ["$\\frac{y}{x-1}$", "$\\frac{y}{x+1}$", "$\\frac{y(x+1)}{x-1}$", "$\\frac{y^2}{x-1}$"],
            answer: "$\\frac{y}{x-1}$",
            solution: "Fatoramos $x^2-1 = (x+1)(x-1)$.\nFica: $\\frac{x+1}{y} \\times \\frac{y^2}{(x+1)(x-1)}$.\nCancelamos $(x+1)$ e um y. Sobra $\\frac{y}{x-1}$."
        },
        {
            question: "Efetue a divisão: $\\frac{a^2}{b} \\div \\frac{a}{b^2}$.",
            options: ["$ab$", "$\\frac{a}{b}$", "$\\frac{a^3}{b^3}$", "$\\frac{1}{ab}$"],
            answer: "$ab$",
            solution: "Mantemos a primeira fração e multiplicamos pelo inverso da segunda:\n$\\frac{a^2}{b} \\times \\frac{b^2}{a}$.\nSimplificando, $a^{2-1} = a$ e $b^{2-1} = b$. O resultado é $ab$."
        },
        {
            question: "Calcule: $\\frac{5}{x+2} + \\frac{3}{x-2}$.",
            options: ["$\\frac{8}{x^2-4}$", "$\\frac{8x-4}{x^2-4}$", "$\\frac{2x-16}{x^2-4}$", "$\\frac{8x+4}{x^2-4}$"],
            answer: "$\\frac{8x-4}{x^2-4}$",
            solution: "O MMC é $(x+2)(x-2) = x^2-4$.\n$\\frac{5(x-2) + 3(x+2)}{(x+2)(x-2)} = \\frac{5x-10+3x+6}{x^2-4} = \\frac{8x-4}{x^2-4}$."
        },
        {
            question: "Efetue: $\\frac{m}{m+3} - \\frac{2}{m-1}$.",
            options: ["$\\frac{m-2}{2}$", "$\\frac{m^2-3m-6}{(m+3)(m-1)}$", "$\\frac{m^2+m+6}{(m+3)(m-1)}$", "$\\frac{m-2}{(m+3)(m-1)}$"],
            answer: "$\\frac{m^2-3m-6}{(m+3)(m-1)}$",
            solution: "O MMC é $(m+3)(m-1)$.\n$\\frac{m(m-1) - 2(m+3)}{(m+3)(m-1)} = \\frac{m^2-m - (2m+6)}{(m+3)(m-1)} = \\frac{m^2-m-2m-6}{(m+3)(m-1)} = \\frac{m^2-3m-6}{(m+3)(m-1)}$."
        },
        {
            question: "Multiplique: $\\frac{x^2-4}{x+3} \\times \\frac{x+3}{x-2}$.",
            options: ["$x-2$", "$x+2$", "$\\frac{x-2}{x+3}$", "1"],
            answer: "$x+2$",
            solution: "Fatoramos $x^2-4 = (x+2)(x-2)$.\nFica $\\frac{(x+2)(x-2)}{x+3} \\times \\frac{x+3}{x-2}$.\nCancelamos $(x+3)$ e $(x-2)$. Sobra $(x+2)$."
        },
        {
            question: "Divida: $\\frac{y^2-y}{y+1} \\div \\frac{y-1}{y^2+2y+1}$.",
            options: ["$y(y+1)$", "$y$", "$\\frac{y}{y+1}$", "1"],
            answer: "$y(y+1)$",
            solution: "Fatoramos e invertemos a segunda fração:\n$\\frac{y(y-1)}{y+1} \\times \\frac{(y+1)^2}{y-1}$.\nCancelamos $(y-1)$ e um $(y+1)$. Sobra $y(y+1)$."
        },
        {
            question: "Qual é o 10º termo da sequência aritmética (PA) 3, 7, 11, 15, ...?",
            options: ["39", "40", "43", "35"],
            answer: "39",
            solution: "A razão (d) é $7-3=4$. O primeiro termo (a1) é 3. Usamos a fórmula do termo geral da PA: an = a1 + (n-1)d.\na10 = 3 + (10-1) * 4\na10 = 3 + 9 * 4\na10 = 3 + 36 = 39."
        },
        {
            question: "Identifique a regra (lei de formação) da sequência 2, 5, 8, 11, ...",
            options: ["$a_n = n+1$", "$a_n = 2n+1$", "$a_n = 3n-1$", "$a_n = 3n$"],
            answer: "$a_n = 3n-1$",
            solution: "É uma PA com a1=2 e razão d=3. A fórmula do termo geral é an = a1 + (n-1)d = 2 + (n-1)3 = 2 + 3n - 3 = 3n - 1."
        },
        {
            question: "Usando a técnica de Gauss, calcule a soma de todos os números inteiros de 1 a 50.",
            options: ["1250", "1275", "2500", "2550"],
            answer: "1275",
            solution: "A Soma de Gauss é S = (primeiro + último) * (quantidade / 2).\nS = (1 + 50) * (50 / 2)\nS = 51 * 25 = 1275."
        },
        {
            question: "Qual é o próximo número na sequência 1, 4, 9, 16, 25, ...?",
            options: ["30", "32", "35", "36"],
            answer: "36",
            solution: "A sequência é formada pelos quadrados dos números naturais: 1², 2², 3², 4², 5², ...\nO próximo termo é 6² = 36."
        },
        // --- Capítulo 8: Triângulos ---
        {
            question: "Quais são os três elementos fundamentais que definem um triângulo?",
            options: ["Lados, Alturas, Medianas", "Vértices, Lados, Ângulos", "Vértices, Raios, Diagonais", "Ângulos, Bissetrizes, Lados"],
            answer: "Vértices, Lados, Ângulos",
            solution: "Um triângulo é uma figura geométrica plana definida por três pontos não colineares (vértices), os três segmentos que os unem (lados) e os três ângulos formados por esses segmentos."
        },
        {
            question: "Dois lados de um triângulo medem 8 cm e 12 cm. Qual é a medida inteira máxima possível para o terceiro lado?",
            options: ["19 cm", "20 cm", "21 cm", "4 cm"],
            answer: "19 cm",
            solution: "Pela Desigualdade Triangular, um lado deve ser menor que a soma dos outros dois. Seja x o terceiro lado: x < 8 + 12 => x < 20. A medida inteira máxima é 19."
        },
        {
            question: "É possível construir um triângulo com lados medindo 5 cm, 6 cm e 12 cm?",
            options: ["Sim, pois 5+6 é maior que 12.", "Sim, pois todos os lados são positivos.", "Não, pois 5+6 não é maior que 12.", "Não, pois 12 é o dobro de 6."],
            answer: "Não, pois 5+6 não é maior que 12.",
            solution: "A Desigualdade Triangular exige que a soma de quaisquer dois lados seja MAIOR que o terceiro. Aqui, 5 + 6 = 11, que não é maior que 12. Portanto, não é possível formar o triângulo."
        },
        {
            question: "Em um triângulo, o lado A se opõe a um ângulo de 80°, e o lado B se opõe a um ângulo de 50°. Qual lado é maior?",
            options: ["Lado A", "Lado B", "São iguais", "Não é possível determinar"],
            answer: "Lado A",
            solution: "Em qualquer triângulo, o maior lado está sempre oposto ao maior ângulo. Como 80° > 50°, o Lado A (oposto a 80°) é maior que o Lado B (oposto a 50°)."
        },
        {
            question: "Dois lados de um triângulo isósceles medem 10 cm e 4 cm. Qual é a medida do terceiro lado?",
            options: ["4 cm", "10 cm", "6 cm", "14 cm"],
            answer: "10 cm",
            solution: "O terceiro lado deve ser ou 10 cm ou 4 cm. Testamos com a Desigualdade Triangular. Se for 4 cm, os lados seriam 4, 4, 10. Mas 4+4=8, que NÃO é maior que 10. Se for 10 cm, os lados seriam 10, 10, 4, o que é válido (10+4 > 10). Logo, o lado é 10 cm."
        },
        {
            question: "Para que valores de x é possível formar um triângulo com lados medindo 6, 10 e x?",
            options: ["$4 < x < 16$", "$x > 16$", "$x < 4$", "$x = 16$"],
            answer: "$4 < x < 16$",
            solution: "Pela Desigualdade Triangular: |10 - 6| < x < 10 + 6. Portanto, 4 < x < 16."
        },
        {
            question: "Se dois ângulos internos de um triângulo medem 40° e 60°, qual a medida do terceiro ângulo?",
            options: ["70°", "80°", "90°", "100°"],
            answer: "80°",
            solution: "A soma dos ângulos internos de um triângulo é 180°. Então, 180° - (40° + 60°) = 180° - 100° = 80°."
        },
        {
            question: "Um triângulo pode ter dois ângulos retos?",
            options: ["Sim", "Não, pois a soma excederia 180°.", "Apenas se for isósceles.", "Apenas se for equilátero."],
            answer: "Não, pois a soma excederia 180°.",
            solution: "Dois ângulos retos somariam 90° + 90° = 180°. Isso deixaria 0° para o terceiro ângulo, o que é impossível. A soma dos três deve ser 180°."
        },
        {
            question: "Qual é a soma das medidas dos ângulos externos de qualquer triângulo?",
            options: ["90°", "180°", "270°", "360°"],
            answer: "360°",
            solution: "A soma dos ângulos externos de qualquer polígono convexo, incluindo o triângulo, é sempre 360°."
        },
        {
            question: "O ângulo externo de um vértice de um triângulo mede 110°. Se um dos ângulos internos não adjacentes mede 50°, qual a medida do outro?",
            options: ["50°", "60°", "70°", "110°"],
            answer: "60°",
            solution: "O ângulo externo é igual à soma dos dois ângulos internos não adjacentes. Então, 110° = 50° + x. Logo, x = 110° - 50° = 60°."
        },
        {
            question: "Em um triângulo isósceles, o ângulo do vértice (formado pelos lados iguais) mede 100°. Quais são as medidas dos ângulos da base?",
            options: ["50° e 50°", "40° e 40°", "80° e 80°", "100° e 100°"],
            answer: "40° e 40°",
            solution: "A soma dos ângulos é 180°. Sobram 180° - 100° = 80° para os dois ângulos da base. Como eles são iguais, cada um mede 80° / 2 = 40°."
        },
        {
            question: "Em um triângulo retângulo, um dos ângulos agudos mede 35°. Qual a medida do outro ângulo agudo?",
            options: ["45°", "55°", "65°", "35°"],
            answer: "55°",
            solution: "Os ângulos agudos de um triângulo retângulo são complementares (somam 90°). Então, 90° - 35° = 55°."
        },
        {
            question: "Um triângulo equilátero possui qual medida para cada um de seus ângulos internos?",
            options: ["30°", "60°", "90°", "120°"],
            answer: "60°",
            solution: "Um triângulo equilátero tem três ângulos iguais. Como a soma é 180°, cada um mede 180° / 3 = 60°."
        },
        {
            question: "A soma de dois ângulos externos de um triângulo é 260°. Quanto mede o terceiro ângulo externo?",
            options: ["80°", "90°", "100°", "120°"],
            answer: "100°",
            solution: "A soma dos três ângulos externos é sempre 360°. Então, o terceiro ângulo externo mede 360° - 260° = 100°."
        },
        {
            question: "Cite os quatro principais casos de congruência de triângulos.",
            options: ["LLL, LAL, ALA, LAAo", "ABC, DEF, GHI, JKL", "LADO, ANGULO, VERTICE, LADO", "AAL, LLA, ALL, LLL"],
            answer: "LLL, LAL, ALA, LAAo",
            solution: "Os quatro casos são: Lado-Lado-Lado (LLL), Lado-Ângulo-Lado (LAL), Ângulo-Lado-Ângulo (ALA) e Lado-Ângulo-Ângulo Oposto (LAAo)."
        },
        {
            question: "Se dois triângulos têm os três lados respectivamente congruentes, eles são congruentes. Qual caso é esse?",
            options: ["LAL", "ALA", "LLL", "LAAo"],
            answer: "LLL",
            solution: "O caso Lado-Lado-Lado (LLL) afirma que se os três lados de um triângulo são congruentes aos três lados de outro, os triângulos são congruentes."
        },
        {
            question: "Dois triângulos são congruentes pelo caso LAL (Lado-Ângulo-Lado). O que isso significa?",
            options: ["Dois lados e o ângulo entre eles são congruentes.", "Dois ângulos e o lado entre eles são congruentes.", "Dois lados e um ângulo oposto a um deles são congruentes.", "Todos os lados e ângulos são congruentes."],
            answer: "Dois lados e o ângulo entre eles são congruentes.",
            solution: "O caso LAL exige que dois lados e, crucialmente, o ângulo formado *entre* esses dois lados sejam congruentes nos dois triângulos."
        },
        {
            question: "Se dois triângulos retângulos possuem hipotenusa e um cateto congruentes, eles são congruentes?",
            options: ["Sim, pelo caso especial HC.", "Não, faltam informações.", "Sim, pelo caso LAL.", "Sim, pelo caso LLL."],
            answer: "Sim, pelo caso especial HC.",
            solution: "Este é o Caso Especial de Congruência para Triângulos Retângulos, conhecido como Hipotenusa-Cateto (HC)."
        },
        {
            question: "Em um paralelogramo ABCD, a diagonal AC o divide em dois triângulos, ABC e ADC. Por qual caso de congruência podemos afirmar que esses triângulos são congruentes?",
            options: ["LAL", "LLL", "ALA", "LAAo"],
            answer: "LLL",
            solution: "Em um paralelogramo, lados opostos são iguais (AB=DC, BC=AD). A diagonal AC é um lado comum aos dois triângulos. Portanto, os três lados são congruentes (caso LLL)."
        },
        {
            question: "Dois triângulos isósceles são congruentes se suas bases e os ângulos adjacentes a elas forem respectivamente iguais. Qual caso de congruência se aplica?",
            options: ["LAL", "LLL", "ALA", "LAAo"],
            answer: "ALA",
            solution: "Temos a base (Lado) e os dois ângulos adjacentes a ela (Ângulo, Ângulo). Isso configura o caso Ângulo-Lado-Ângulo (ALA)."
        },
        {
            question: "O que significa o caso de congruência ALA?",
            options: ["Dois lados e o ângulo entre eles.", "Dois ângulos e o lado entre eles.", "Dois ângulos e um lado não incluso.", "Todos os três lados."],
            answer: "Dois ângulos e o lado entre eles.",
            solution: "O caso Ângulo-Lado-Ângulo (ALA) exige que dois ângulos e o lado que está *entre* esses dois ângulos sejam congruentes nos dois triângulos."
        },
        {
            question: "Se o triângulo PQR é congruente ao triângulo XYZ e PQ = 8 cm, qual lado do triângulo XYZ mede 8 cm?",
            options: ["XY", "YZ", "XZ", "Não é possível determinar."],
            answer: "XY",
            solution: "Na congruência, a ordem dos vértices importa. O lado PQ corresponde ao lado XY, pois P é o primeiro vértice e Q é o segundo, assim como X e Y."
        },
        {
            question: "Como se chama o maior lado de um triângulo retângulo?",
            options: ["Cateto adjacente", "Cateto oposto", "Hipotenusa", "Mediana"],
            answer: "Hipotenusa",
            solution: "A hipotenusa é o lado oposto ao ângulo reto (90°) e é sempre o maior lado de um triângulo retângulo. Os outros dois lados são chamados de catetos."
        },
        {
            question: "Qual é a relação entre um ângulo externo e os dois ângulos internos não adjacentes a ele?",
            options: ["É igual à soma deles.", "É igual à diferença deles.", "É igual ao produto deles.", "Não há relação direta."],
            answer: "É igual à soma deles.",
            solution: "O Teorema do Ângulo Externo afirma que a medida de um ângulo externo de um triângulo é igual à soma das medidas dos dois ângulos internos não adjacentes."
        },
        // --- Capítulo 9: Segmentos e Pontos Notáveis ---
        {
            question: "O que é a mediana de um triângulo?",
            options: ["Segmento que divide um ângulo ao meio.", "Segmento perpendicular a um lado.", "Segmento que liga um vértice ao ponto médio do lado oposto.", "Segmento que une dois pontos médios."],
            answer: "Segmento que liga um vértice ao ponto médio do lado oposto.",
            solution: "A mediana é um segmento de reta que une um vértice ao ponto médio do lado oposto a esse vértice. Todo triângulo possui três medianas."
        },
        {
            question: "Como é chamado o ponto de encontro das medianas?",
            options: ["Incentro", "Ortocentro", "Baricentro", "Circuncentro"],
            answer: "Baricentro",
            solution: "O Baricentro é o ponto onde as três medianas de um triângulo se cruzam."
        },
        {
            question: "Qual é a outra denominação para o baricentro de um triângulo?",
            options: ["Centro de simetria", "Ponto de equilíbrio", "Centro de massa", "Ponto central"],
            answer: "Centro de massa",
            solution: "O baricentro também é conhecido como o centro de massa ou centro de gravidade do triângulo, pois é o ponto onde o triângulo se equilibraria perfeitamente."
        },
        {
            question: "O baricentro divide cada mediana em dois segmentos. Qual é a razão entre as medidas desses segmentos?",
            options: ["1:1", "2:1", "3:1", "3:2"],
            answer: "2:1",
            solution: "O baricentro divide cada mediana em duas partes, onde a parte que contém o vértice é o dobro da parte que contém o ponto médio do lado. A razão é de 2 para 1."
        },
        {
            question: "Uma mediana de 18 cm de comprimento é traçada em um triângulo. Quais são os comprimentos dos dois segmentos em que ela é dividida pelo baricentro?",
            options: ["9 cm e 9 cm", "12 cm e 6 cm", "10 cm e 8 cm", "15 cm e 3 cm"],
            answer: "12 cm e 6 cm",
            solution: "A mediana é dividida em 3 partes (2+1). 18 cm / 3 = 6 cm por parte. O segmento maior tem 2 partes (2*6=12 cm) e o menor tem 1 parte (1*6=6 cm)."
        },
        {
            question: "Quantas medianas possui um triângulo?",
            options: ["1", "2", "3", "Infinitas"],
            answer: "3",
            solution: "Todo triângulo possui exatamente três medianas, uma para cada vértice."
        },
        {
            question: "O que é a bissetriz interna de um triângulo?",
            options: ["Segmento que divide um lado ao meio.", "Segmento que divide um ângulo ao meio.", "Segmento perpendicular a um lado.", "Segmento que une um vértice ao ponto médio do lado oposto."],
            answer: "Segmento que divide um ângulo ao meio.",
            solution: "A bissetriz de um ângulo é a semirreta que o divide em dois ângulos congruentes (de mesma medida)."
        },
        {
            question: "Como é chamado o ponto de encontro das bissetrizes internas?",
            options: ["Incentro", "Ortocentro", "Baricentro", "Circuncentro"],
            answer: "Incentro",
            solution: "O Incentro é o ponto onde as três bissetrizes internas de um triângulo se encontram."
        },
        {
            question: "O incentro é o centro de qual circunferência associada ao triângulo?",
            options: ["Circunferência circunscrita", "Circunferência inscrita", "Circunferência de Euler", "Nenhuma das opções"],
            answer: "Circunferência inscrita",
            solution: "O incentro é o centro da circunferência que está *dentro* do triângulo e tangencia seus três lados, chamada de circunferência inscrita."
        },
        {
            question: "Qual é a principal propriedade do incentro em relação aos lados do triângulo?",
            options: ["É equidistante dos vértices.", "É equidistante dos lados.", "Divide as medianas na razão 2:1.", "É o ponto médio da hipotenusa."],
            answer: "É equidistante dos lados.",
            solution: "Por ser o centro da circunferência inscrita, o incentro está à mesma distância (é equidistante) dos três lados do triângulo."
        },
        {
            question: "Em um triângulo equilátero, a bissetriz de um ângulo também é a mediana e a altura relativa ao lado oposto.",
            options: ["Verdadeiro", "Falso", "Depende do triângulo", "Apenas em triângulos retângulos"],
            answer: "Verdadeiro",
            solution: "Esta é uma propriedade fundamental do triângulo equilátero. Devido à sua simetria, os segmentos notáveis (altura, mediana, bissetriz, mediatriz) relativos a um mesmo lado coincidem."
        },
        {
            question: "Quantas bissetrizes internas possui um triângulo?",
            options: ["1", "2", "3", "6"],
            answer: "3",
            solution: "Todo triângulo possui exatamente três bissetrizes internas, uma para cada ângulo."
        },
        {
            question: "O que é a altura de um triângulo?",
            options: ["Segmento que une dois vértices.", "Segmento que divide um ângulo ao meio.", "Segmento que parte de um vértice e é perpendicular ao lado oposto.", "Segmento que liga um vértice ao ponto médio do lado oposto."],
            answer: "Segmento que parte de um vértice e é perpendicular ao lado oposto.",
            solution: "A altura é um segmento de reta traçado a partir de um vértice que forma um ângulo de 90° (é perpendicular) com a reta que contém o lado oposto."
        },
        {
            question: "Como é chamado o ponto de encontro das retas suportes das alturas?",
            options: ["Incentro", "Ortocentro", "Baricentro", "Circuncentro"],
            answer: "Ortocentro",
            solution: "O Ortocentro é o ponto onde as retas que contêm as três alturas de um triângulo se encontram."
        },
        {
            question: "Em um triângulo retângulo, onde se localiza o ortocentro?",
            options: ["Fora do triângulo", "No ponto médio da hipotenusa", "No vértice do ângulo reto", "No baricentro"],
            answer: "No vértice do ângulo reto",
            solution: "Em um triângulo retângulo, duas das alturas são os próprios catetos. Eles se encontram no vértice do ângulo reto, que é, portanto, o ortocentro."
        },
        {
            question: "Em um triângulo obtusângulo, o ortocentro é um ponto interno ou externo ao triângulo?",
            options: ["Interno", "Externo", "Sobre um dos lados", "Sobre um dos vértices"],
            answer: "Externo",
            solution: "Em um triângulo obtusângulo (com um ângulo maior que 90°), as alturas relativas aos lados do ângulo obtuso são externas, fazendo com que o ortocentro fique fora do triângulo."
        },
        {
            question: "Em um triângulo acutângulo, o ortocentro é interno ou externo?",
            options: ["Interno", "Externo", "Sobre um dos lados", "Sobre um dos vértices"],
            answer: "Interno",
            solution: "Em um triângulo acutângulo (todos os ângulos menores que 90°), todas as três alturas são segmentos internos, e, portanto, o ortocentro também é um ponto interno."
        },
        {
            question: "A altura de um triângulo é sempre um segmento interno a ele?",
            options: ["Sim, sempre.", "Não, pode ser externa em triângulos obtusângulos.", "Sim, exceto em triângulos equiláteros.", "Não, apenas a mediana é sempre interna."],
            answer: "Não, pode ser externa em triângulos obtusângulos.",
            solution: "A mediana e a bissetriz são sempre internas. A altura, no entanto, pode ser externa se o triângulo for obtusângulo."
        },
        {
            question: "O que é a mediatriz de um lado de um triângulo?",
            options: ["Uma reta que divide um ângulo ao meio.", "Uma reta perpendicular a um lado que passa pelo seu ponto médio.", "Uma reta que liga um vértice a um lado.", "Uma reta que passa por dois vértices."],
            answer: "Uma reta perpendicular a um lado que passa pelo seu ponto médio.",
            solution: "A mediatriz é uma reta que combina duas condições: ela é perpendicular a um segmento (lado) e passa exatamente pelo ponto médio desse segmento."
        },
        {
            question: "Como é chamado o ponto de encontro das mediatrizes?",
            options: ["Incentro", "Ortocentro", "Baricentro", "Circuncentro"],
            answer: "Circuncentro",
            solution: "O Circuncentro é o ponto onde as três mediatrizes dos lados de um triângulo se cruzam."
        },
        {
            question: "O circuncentro é o centro de qual circunferência associada ao triângulo?",
            options: ["Circunferência circunscrita", "Circunferência inscrita", "Circunferência de Apolônio", "Nenhuma das opções"],
            answer: "Circunferência circunscrita",
            solution: "O circuncentro é o centro da circunferência que passa *por fora* do triângulo, tocando seus três vértices. É chamada de circunferência circunscrita."
        },
        {
            question: "Qual é a principal propriedade do circuncentro em relação aos vértices do triângulo?",
            options: ["É equidistante dos lados.", "É equidistante dos vértices.", "Coincide com o baricentro.", "Está sempre dentro do triângulo."],
            answer: "É equidistante dos vértices.",
            solution: "Por ser o centro da circunferência que passa pelos três vértices, o circuncentro está à mesma distância (é equidistante) dos três vértices."
        },
        {
            question: "Em um triângulo retângulo, onde se localiza o circuncentro?",
            options: ["No vértice do ângulo reto", "No ponto médio da hipotenusa", "Fora do triângulo", "Dentro do triângulo"],
            answer: "No ponto médio da hipotenusa",
            solution: "Em todo triângulo retângulo, a hipotenusa é o diâmetro da circunferência circunscrita. Portanto, o centro dessa circunferência (o circuncentro) está no ponto médio da hipotenusa."
        },
        {
            question: "Em qual tipo de triângulo todos os quatro pontos notáveis (baricentro, incentro, ortocentro e circuncentro) coincidem?",
            options: ["Isósceles", "Retângulo", "Equilátero", "Obtusângulo"],
            answer: "Equilátero",
            solution: "Apenas no triângulo equilátero, devido à sua perfeita simetria, os quatro pontos notáveis principais ocupam o mesmo lugar no centro do triângulo."
        },
        // --- Capítulo 10: Quadriláteros ---
        {
            question: "O que define um polígono como um quadrilátero?",
            options: ["Ter 3 lados", "Ter 4 lados", "Ter 5 lados", "Ter lados paralelos"],
            answer: "Ter 4 lados",
            solution: "A definição de um quadrilátero é ser um polígono com exatamente quatro lados, quatro vértices e quatro ângulos."
        },
        {
            question: "Qual é a soma das medidas dos ângulos internos de qualquer quadrilátero convexo?",
            options: ["180°", "270°", "360°", "540°"],
            answer: "360°",
            solution: "A soma dos ângulos internos de um polígono convexo é S = (n-2) * 180°. Para um quadrilátero, n=4, então S = (4-2) * 180° = 2 * 180° = 360°."
        },
        {
            question: "Qual é a soma das medidas dos ângulos externos de qualquer quadrilátero convexo?",
            options: ["180°", "360°", "540°", "720°"],
            answer: "360°",
            solution: "A soma dos ângulos externos de QUALQUER polígono convexo, independentemente do número de lados, é sempre 360°."
        },
        {
            question: "Um quadrilátero com lados 5, 6, 7 e 20 pode existir?",
            options: ["Sim", "Não", "Apenas se for um trapézio", "Apenas se for côncavo"],
            answer: "Não",
            solution: "Não. Em qualquer polígono, a medida de um lado deve ser menor que a soma das medidas dos outros lados. Neste caso, o lado 20 é maior que a soma dos outros (5+6+7=18). Portanto, é impossível construir tal quadrilátero."
        },
        {
            question: "O que define um quadrilátero como um paralelogramo?",
            options: ["Ter apenas um par de lados paralelos.", "Ter lados opostos paralelos.", "Ter todos os lados iguais.", "Ter todos os ângulos retos."],
            answer: "Ter lados opostos paralelos.",
            solution: "A definição fundamental de um paralelogramo é ser um quadrilátero que possui dois pares de lados opostos paralelos."
        },
        {
            question: "Em um paralelogramo, os ângulos opostos são sempre congruentes.",
            options: ["Verdadeiro", "Falso", "Apenas em retângulos", "Apenas em losangos"],
            answer: "Verdadeiro",
            solution: "Esta é uma propriedade fundamental dos paralelogramos. Os ângulos que estão em vértices opostos têm sempre a mesma medida."
        },
        {
            question: "As diagonais de um paralelogramo sempre se encontram em seu ponto médio.",
            options: ["Verdadeiro", "Falso", "Apenas em quadrados", "Apenas em retângulos"],
            answer: "Verdadeiro",
            solution: "Esta é uma propriedade fundamental dos paralelogramos. As duas diagonais se cruzam exatamente no ponto médio de ambas."
        },
        {
            question: "Se um ângulo de um paralelogramo mede 75°, quais são as medidas dos outros três ângulos?",
            options: ["75°, 75°, 75°", "105°, 105°, 75°", "75°, 105°, 105°", "75°, 115°, 115°"],
            answer: "75°, 105°, 105°",
            solution: "Ângulos opostos são iguais, então há outro ângulo de 75°. Ângulos consecutivos são suplementares (somam 180°), então 180°-75°=105°. O oposto a este também é 105°. Os ângulos são 75°, 105°, 75°, 105°."
        },
        {
            question: "Os ângulos consecutivos de um paralelogramo são:",
            options: ["Congruentes", "Complementares", "Suplementares", "Opostos pelo vértice"],
            answer: "Suplementares",
            solution: "Ângulos consecutivos (vizinhos) em um paralelogramo sempre somam 180°, ou seja, são suplementares."
        },
        {
            question: "Todo retângulo é um paralelogramo?",
            options: ["Sim", "Não", "Apenas se for um quadrado", "Apenas se não for um quadrado"],
            answer: "Sim",
            solution: "Sim. Um retângulo tem dois pares de lados opostos paralelos, o que satisfaz a definição de paralelogramo. É um tipo especial de paralelogramo."
        },
        {
            question: "Qual propriedade adicional um retângulo tem em relação a um paralelogramo comum?",
            options: ["Lados opostos paralelos", "Ângulos internos de 90°", "Lados opostos congruentes", "Diagonais que se cruzam ao meio"],
            answer: "Ângulos internos de 90°",
            solution: "Um retângulo possui todas as propriedades de um paralelogramo, com a característica adicional de ter os quatro ângulos internos retos (90°)."
        },
        {
            question: "Qual propriedade adicional um losango tem em relação a um paralelogramo comum?",
            options: ["Todos os lados congruentes", "Ângulos opostos congruentes", "Diagonais que se cruzam ao meio", "Ângulos consecutivos suplementares"],
            answer: "Todos os lados congruentes",
            solution: "Um losango possui todas as propriedades de um paralelogramo, com a característica adicional de ter os quatro lados com a mesma medida (congruentes)."
        },
        {
            question: "As diagonais de um losango são sempre perpendiculares entre si.",
            options: ["Verdadeiro", "Falso", "Apenas se for um quadrado", "Apenas se não for um quadrado"],
            answer: "Verdadeiro",
            solution: "Esta é uma propriedade específica dos losangos (e dos quadrados, que são um tipo de losango). As diagonais se cruzam formando um ângulo de 90°."
        },
        {
            question: "Como se pode definir um quadrado em termos das propriedades de um retângulo e um losango?",
            options: ["É um retângulo, mas não um losango.", "É um losango, mas não um retângulo.", "É simultaneamente um retângulo e um losango.", "Não é nem retângulo, nem losango."],
            answer: "É simultaneamente um retângulo e um losango.",
            solution: "Um quadrado possui as propriedades do retângulo (4 ângulos retos) e as propriedades do losango (4 lados iguais). Portanto, é a intersecção dos dois conjuntos."
        },
        {
            question: "As diagonais de um retângulo são sempre congruentes (iguais em medida).",
            options: ["Verdadeiro", "Falso", "Apenas se for um quadrado", "Apenas se não for um quadrado"],
            answer: "Verdadeiro",
            solution: "Esta é uma propriedade específica dos retângulos (e dos quadrados). As duas diagonais têm exatamente o mesmo comprimento."
        },
        {
            question: "Todo quadrado é um losango?",
            options: ["Sim", "Não", "Apenas se os lados forem pares", "Apenas se o perímetro for maior que 10"],
            answer: "Sim",
            solution: "Sim. A definição de losango é ter quatro lados iguais. Como o quadrado tem quatro lados iguais, ele satisfaz a definição e é um tipo especial de losango."
        },
        {
            question: "As diagonais de um losango são também bissetrizes de seus ângulos internos.",
            options: ["Verdadeiro", "Falso", "Apenas se o losango for um quadrado", "Nunca"],
            answer: "Verdadeiro",
            solution: "Esta é outra propriedade importante do losango. Cada diagonal divide os ângulos dos vértices por onde ela passa exatamente ao meio."
        },
        {
            question: "Se a diagonal de um quadrado mede $6\\sqrt{2}$ cm, qual a medida do seu lado?",
            options: ["3 cm", "6 cm", "12 cm", "$3\\sqrt{2}$ cm"],
            answer: "6 cm",
            solution: "A fórmula da diagonal (d) de um quadrado de lado (L) é d = L√2. Se d = 6√2, então L√2 = 6√2. Dividindo ambos os lados por √2, obtemos L = 6 cm."
        },
        {
            question: "O que define um quadrilátero como um trapézio?",
            options: ["Ter exatamente dois pares de lados paralelos.", "Ter exatamente um par de lados paralelos.", "Não ter lados paralelos.", "Ter diagonais perpendiculares."],
            answer: "Ter exatamente um par de lados paralelos.",
            solution: "A definição de um trapézio é ser um quadrilátero com apenas um par de lados opostos paralelos. Se tivesse dois pares, seria um paralelogramo."
        },
        {
            question: "Como são chamados os lados paralelos de um trapézio?",
            options: ["Lados oblíquos", "Diagonais", "Bases", "Alturas"],
            answer: "Bases",
            solution: "Os dois lados paralelos de um trapézio são chamados de base maior e base menor."
        },
        {
            question: "Qual é a definição de um trapézio isósceles?",
            options: ["Trapézio com lados não paralelos congruentes.", "Trapézio com um ângulo reto.", "Trapézio com bases congruentes.", "Trapézio com diagonais paralelas."],
            answer: "Trapézio com lados não paralelos congruentes.",
            solution: "Um trapézio é classificado como isósceles quando seus lados não paralelos (chamados de lados oblíquos) têm a mesma medida."
        },
        {
            question: "O que é um trapézio retângulo?",
            options: ["Aquele cujas diagonais são retas.", "Aquele com lados não paralelos congruentes.", "Aquele que possui pelo menos um ângulo reto.", "Aquele cujas bases são perpendiculares."],
            answer: "Aquele que possui pelo menos um ângulo reto.",
            solution: "Um trapézio é classificado como retângulo se um de seus lados não paralelos for perpendicular às bases, formando dois ângulos de 90°."
        },
        {
            question: "Qual é a propriedade dos ângulos da base em um trapézio isósceles?",
            options: ["São sempre retos.", "São suplementares.", "São congruentes.", "São complementares."],
            answer: "São congruentes.",
            solution: "Em um trapézio isósceles, os dois ângulos de cada base (os dois da base maior e os dois da base menor) são congruentes entre si."
        },
        {
            question: "A base média de um trapézio é calculada pela média aritmética das bases. Se as bases medem 10 cm e 20 cm, quanto mede a base média?",
            options: ["10 cm", "15 cm", "20 cm", "30 cm"],
            answer: "15 cm",
            solution: "A fórmula da base média (Bm) é Bm = (Base maior + base menor) / 2.\nBm = (20 + 10) / 2 = 30 / 2 = 15 cm."
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
            .then(function(response) {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                scoreText.innerText += "\n\n(Resultado também enviado para o seu e-mail.)";
            }, function(error) {
                console.log('FALHA NO ENVIO DO E-MAIL...', error);
                scoreText.innerText += "\n\n(Houve uma falha ao enviar o resultado por e-mail.)";
            });
        // ---- FIM DA CONFIGURAÇÃO DO EMAILJS ----
    }

    pauseBtn.addEventListener('click', togglePause);
    restartBtn.addEventListener('click', startQuiz);

    startQuiz();
});