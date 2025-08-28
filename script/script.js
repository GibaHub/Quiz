document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // --- Português: Vozes Verbais (15 Questões) ---
        {
            question: "Qual a voz verbal da frase 'Os cientistas descobriram a cura'?",
            options: ["Voz ativa", "Voz passiva", "Voz reflexiva", "Voz impessoal"],
            answer: "Voz ativa",
            solution: "A voz é ativa porque o sujeito 'Os cientistas' pratica a ação de descobrir."
        },
        {
            question: "A frase 'O trabalho foi concluído por nós' está na voz passiva. Qual é a sua forma na voz ativa?",
            options: ["Nós concluímos o trabalho.", "O trabalho se concluiu.", "Nós fomos concluídos pelo trabalho.", "Concluíram o trabalho."],
            answer: "Nós concluímos o trabalho.",
            solution: "Na conversão da voz passiva para a ativa, o agente da passiva ('por nós') torna-se o sujeito ('Nós'), e o sujeito paciente ('O trabalho') torna-se o objeto direto."
        },
        {
            question: "Em 'Os atletas se cumprimentaram antes da competição', a voz verbal é:",
            options: ["Ativa", "Passiva", "Reflexiva", "Recíproca"],
            answer: "Recíproca",
            solution: "A voz é classificada como recíproca (um tipo de voz reflexiva) porque a ação de cumprimentar é trocada entre os elementos do sujeito ('um cumprimentou o outro')."
        },
        {
            question: "Qual frase está na voz passiva analítica?",
            options: ["Vende-se a casa.", "A casa foi vendida.", "Ele vendeu a casa.", "Ele se vendeu."],
            answer: "A casa foi vendida.",
            solution: "A voz passiva analítica é formada pelo verbo auxiliar 'ser' (foi) + particípio do verbo principal (vendida)."
        },
        {
            question: "Transforme 'O governo implementará novas medidas' para a voz passiva.",
            options: ["As novas medidas se implementarão.", "Implementaram-se novas medidas.", "Novas medidas serão implementadas pelo governo.", "O governo se implementará."],
            answer: "Novas medidas serão implementadas pelo governo.",
            solution: "O objeto 'novas medidas' vira sujeito, o verbo vai para a forma passiva 'serão implementadas' e o sujeito 'o governo' vira agente da passiva."
        },
        {
            question: "A oração 'Ela se penteava em frente ao espelho' apresenta voz:",
            options: ["Ativa", "Passiva", "Reflexiva", "Recíproca"],
            answer: "Reflexiva",
            solution: "A voz é reflexiva porque o sujeito 'Ela' pratica e recebe a ação de pentear (penteava a si mesma)."
        },
        {
            question: "Identifique a frase na voz ativa.",
            options: ["O relatório será revisado amanhã.", "Os ingressos foram comprados por eles.", "A comunidade construiu a nova escola.", "Alugam-se apartamentos."],
            answer: "A comunidade construiu a nova escola.",
            solution: "Nesta frase, o sujeito 'A comunidade' é o agente que pratica a ação de construir."
        },
        {
            question: "Qual o agente da passiva na frase 'A cidade foi destruída pelo furacão'?",
            options: ["A cidade", "foi destruída", "pelo furacão", "Não há agente da passiva"],
            answer: "pelo furacão",
            solution: "O agente da passiva é o termo que, na voz passiva, pratica a ação sofrida pelo sujeito. Neste caso, 'pelo furacão'."
        },
        {
            question: "A conversão de 'Eles lerão o livro' para a voz passiva resulta em:",
            options: ["O livro será lido por eles.", "O livro foi lido por eles.", "O livro é lido por eles.", "O livro se lerá."],
            answer: "O livro será lido por eles.",
            solution: "O verbo 'lerão' (futuro do presente) na voz ativa passa para 'será lido' na voz passiva, mantendo o tempo verbal."
        },
        {
            question: "A frase 'O árbitro encerrou a partida' está em qual voz?",
            options: ["Voz passiva", "Voz reflexiva", "Voz ativa", "Voz neutra"],
            answer: "Voz ativa",
            solution: "O sujeito 'O árbitro' é quem pratica a ação de 'encerrar'."
        },
        {
            question: "Qual das alternativas contém uma oração em voz reflexiva?",
            options: ["As cartas foram enviadas.", "O gato se escondeu.", "Nós nos abraçamos fortemente.", "O sol nasceu."],
            answer: "O gato se escondeu.",
            solution: "A ação de esconder é praticada e recebida pelo próprio sujeito 'O gato'."
        },
        {
            question: "Converter 'A lei foi aprovada pelos senadores' para a voz ativa resulta em:",
            options: ["Aprovaram a lei.", "Os senadores aprovaram a lei.", "A lei se aprovou.", "Os senadores foram aprovados pela lei."],
            answer: "Os senadores aprovaram a lei.",
            solution: "O agente da passiva 'pelos senadores' torna-se o sujeito, e o sujeito paciente 'A lei' torna-se o objeto direto."
        },
        {
            question: "'As árvores foram derrubadas pela tempestade.' Qual é o sujeito desta oração?",
            options: ["As árvores", "A tempestade", "derrubadas", "Oculto"],
            answer: "As árvores",
            solution: "Na voz passiva, o sujeito é o termo que sofre a ação. 'As árvores' sofrem a ação de serem derrubadas. É um sujeito paciente."
        },
        {
            question: "A frase 'Os namorados beijaram-se' tem voz:",
            options: ["Ativa", "Passiva", "Reflexiva", "Recíproca"],
            answer: "Recíproca",
            solution: "A ação é mútua, trocada entre os elementos do sujeito. Um beijou o outro."
        },
        {
            question: "Qual a forma passiva da frase 'Eu farei o jantar'?",
            options: ["O jantar será feito por mim.", "O jantar foi feito por mim.", "O jantar é feito por mim.", "Eu serei feito pelo jantar."],
            answer: "O jantar será feito por mim.",
            solution: "O tempo futuro ('farei') é mantido na voz passiva com o verbo auxiliar no futuro ('será feito')."
        },

        // --- Português: Transitividade Verbal (15 Questões) ---
        {
            question: "Na frase 'O sol brilha', o verbo 'brilhar' é:",
            options: ["Transitivo direto", "Transitivo indireto", "Bitransitivo", "Intransitivo"],
            answer: "Intransitivo",
            solution: "O verbo 'brilhar' possui sentido completo, não exigindo nenhum complemento para ser compreendido."
        },
        {
            question: "Em 'Ela necessita de atenção', qual a transitividade do verbo 'necessitar'?",
            options: ["Verbo transitivo direto (VTD)", "Verbo transitivo indireto (VTI)", "Verbo intransitivo", "Verbo de ligação"],
            answer: "Verbo transitivo indireto (VTI)",
            solution: "O verbo 'necessitar' exige um complemento regido pela preposição 'de'. Quem necessita, necessita DE algo."
        },
        {
            question: "Qual o objeto direto na frase 'O menino chutou a bola'?",
            options: ["O menino", "chutou", "a bola", "Não há objeto direto"],
            answer: "a bola",
            solution: "O verbo 'chutou' é transitivo direto, e 'a bola' é o complemento que se liga a ele sem preposição."
        },
        {
            question: "'Ele deu o livro ao professor.' Como se classifica o verbo 'dar'?",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "Bitransitivo"],
            answer: "Bitransitivo",
            solution: "O verbo é bitransitivo (ou transitivo direto e indireto) pois possui dois complementos: 'o livro' (objeto direto) e 'ao professor' (objeto indireto)."
        },
        {
            question: "Na oração 'Todos acreditam em dias melhores', o verbo é:",
            options: ["Intransitivo", "Transitivo direto", "Transitivo indireto", "De ligação"],
            answer: "Transitivo indireto",
            solution: "O verbo 'acreditar' pede um complemento com a preposição 'em'. Quem acredita, acredita EM alguma coisa."
        },
        {
            question: "Qual frase contém um verbo transitivo direto?",
            options: ["O cachorro latiu muito.", "Eu gosto de chocolate.", "Ela comprou flores.", "A criança dorme."],
            answer: "Ela comprou flores.",
            solution: "O verbo 'comprou' tem seu sentido completado por 'flores' (objeto direto), que se liga ao verbo sem preposição."
        },
        {
            question: "'As plantas morreram.' O verbo 'morrer' nesta frase é:",
            options: ["Transitivo direto", "Intransitivo", "De ligação", "Transitivo indireto"],
            answer: "Intransitivo",
            solution: "O verbo 'morrer' expressa um fenômeno que tem sentido completo em si mesmo, não precisando de complemento."
        },
        {
            question: "Identifique a oração com verbo bitransitivo.",
            options: ["Eu li o livro.", "Ele obedeceu aos pais.", "A empresa ofereceu um cargo ao funcionário.", "O bebê chorou."],
            answer: "A empresa ofereceu um cargo ao funcionário.",
            solution: "O verbo 'ofereceu' tem dois objetos: 'um cargo' (direto) e 'ao funcionário' (indireto)."
        },
        {
            question: "Qual o objeto indireto em 'O filho desobedeceu ao pai'?",
            options: ["O filho", "desobedeceu", "ao pai", "Não há objeto indireto"],
            answer: "ao pai",
            solution: "'ao pai' é o complemento do verbo transitivo indireto 'desobedeceu', regido pela preposição 'a'."
        },
        {
            question: "Na frase 'Choveu muito ontem', o verbo 'chover' é:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação"],
            answer: "Intransitivo",
            solution: "Verbos que expressam fenômenos da natureza, como 'chover', são intransitivos."
        },
        {
            question: "'Nós assistimos ao filme.' Qual a transitividade do verbo 'assistir' nesse sentido?",
            options: ["Intransitivo", "Transitivo direto", "Transitivo indireto", "Bitransitivo"],
            answer: "Transitivo indireto",
            solution: "No sentido de 'ver' ou 'presenciar', o verbo 'assistir' é transitivo indireto e exige a preposição 'a'."
        },
        {
            question: "Qual oração possui um verbo intransitivo?",
            options: ["Ele vendeu o carro.", "O avião caiu.", "Preciso de você.", "Entreguei a chave para ela."],
            answer: "O avião caiu.",
            solution: "O verbo 'caiu' tem sentido completo e não necessita de um objeto para complementar sua significação."
        },
        {
            question: "Em 'Agradeci o favor ao meu amigo', os objetos são, respectivamente:",
            options: ["Direto e direto", "Indireto e indireto", "Direto e indireto", "Indireto e direto"],
            answer: "Direto e indireto",
            solution: "O verbo 'agradecer' é bitransitivo: 'o favor' é o objeto direto (o que foi agradecido) e 'ao meu amigo' é o objeto indireto (a quem foi agradecido)."
        },
        {
            question: "A frase 'Ela confia em você' contém um verbo:",
            options: ["Intransitivo", "Transitivo direto", "Transitivo indireto", "Bitransitivo"],
            answer: "Transitivo indireto",
            solution: "O verbo 'confiar' é transitivo indireto, pois quem confia, confia EM alguém ou EM algo."
        },
        {
            question: "Na frase 'O homem abriu a porta', o termo 'a porta' funciona como:",
            options: ["Sujeito", "Objeto direto", "Objeto indireto", "Adjunto adverbial"],
            answer: "Objeto direto",
            solution: "É o complemento do verbo 'abriu' (VTD), ligando-se a ele sem o uso de preposição."
        },

        // --- Português: Sintagmas Nominais (15 Questões) ---
        {
            question: "Qual o núcleo do sintagma nominal 'o meu melhor amigo de infância'?",
            options: ["o", "meu", "melhor", "amigo"],
            answer: "amigo",
            solution: "O núcleo é sempre o substantivo ou pronome principal. Neste caso, 'amigo' é o substantivo central, e as outras palavras o modificam."
        },
        {
            question: "No sintagma 'três grandes caixas de papelão', o núcleo é:",
            options: ["três", "grandes", "caixas", "papelão"],
            answer: "caixas",
            solution: "O substantivo principal, que é o elemento central do sintagma, é 'caixas'."
        },
        {
            question: "Identifique o sintagma nominal na frase 'O cachorro preto latiu alto'.",
            options: ["O cachorro preto", "latiu alto", "preto latiu", "O cachorro"],
            answer: "O cachorro preto",
            solution: "O sintagma nominal é o grupo de palavras que tem um substantivo como núcleo e funciona como sujeito, objeto, etc. Aqui, é o sujeito da oração."
        },
        {
            question: "Na frase 'Eu comprei um lindo vestido azul', qual palavra é o núcleo do sintagma nominal que funciona como objeto?",
            options: ["lindo", "vestido", "azul", "um"],
            answer: "vestido",
            solution: "O objeto da frase é 'um lindo vestido azul'. O substantivo principal (núcleo) desse grupo é 'vestido'."
        },
        {
            question: "Em 'Aquelas flores raras do jardim morreram', o núcleo do sujeito é:",
            options: ["Aquelas", "flores", "raras", "jardim"],
            answer: "flores",
            solution: "O sujeito da oração é 'Aquelas flores raras do jardim'. O substantivo central, ao qual os outros termos se referem, é 'flores'."
        },
        {
            question: "Um sintagma nominal tem como núcleo um:",
            options: ["Verbo", "Advérbio", "Substantivo ou pronome", "Adjetivo"],
            answer: "Substantivo ou pronome",
            solution: "Por definição, um sintagma nominal é uma estrutura que se organiza em torno de um nome (substantivo) ou de um pronome."
        },
        {
            question: "Qual o núcleo do sintagma nominal 'uma questão muito difícil'?",
            options: ["uma", "questão", "muito", "difícil"],
            answer: "questão",
            solution: "O substantivo principal, que é modificado pelos outros termos ('uma', 'muito', 'difícil'), é 'questão'."
        },
        {
            question: "Na frase 'A menina da casa ao lado viajou', qual é o núcleo do sujeito?",
            options: ["menina", "casa", "lado", "A"],
            answer: "menina",
            solution: "O sujeito é 'A menina da casa ao lado'. O núcleo é 'menina', pois é a palavra principal que executa a ação."
        },
        {
            question: "O termo 'o' em 'o carro' é o núcleo do sintagma nominal?",
            options: ["Sim, sempre", "Não, o núcleo é 'carro'", "Sim, porque vem primeiro", "Não, é um adjunto"],
            answer: "Não, o núcleo é 'carro'",
            solution: "O artigo 'o' é um determinante que acompanha o núcleo, mas o núcleo em si é o substantivo 'carro'."
        },
        {
            question: "No sintagma 'água de coco gelada', o núcleo é:",
            options: ["água", "coco", "gelada", "de"],
            answer: "água",
            solution: "O substantivo principal é 'água'. 'De coco' e 'gelada' são especificações dessa água."
        },
        {
            question: "Qual das opções NÃO é o núcleo do sintagma 'a bela paisagem montanhosa'?",
            options: ["paisagem", "bela", "a", "montanhosa"],
            answer: "paisagem",
            solution: "A pergunta pede o que NÃO é o núcleo. O núcleo é 'paisagem'. As outras palavras ('a', 'bela', 'montanhosa') são determinantes ou modificadores."
        },
        {
            question: "Em 'O retorno dos campeões foi triunfal', o núcleo do sintagma nominal sujeito é:",
            options: ["retorno", "campeões", "triunfal", "O"],
            answer: "retorno",
            solution: "O sujeito é 'O retorno dos campeões'. A palavra principal, que 'foi triunfal', é 'retorno'."
        },
        {
            question: "'Ele' pode ser um sintagma nominal?",
            options: ["Não, é apenas um pronome", "Sim, pois um pronome pode ser o núcleo", "Não, porque é muito curto", "Apenas se estiver acompanhado de um substantivo"],
            answer: "Sim, pois um pronome pode ser o núcleo",
            solution: "Um sintagma nominal pode ser formado por uma única palavra, desde que ela seja um substantivo ou um pronome. 'Ele' é um pronome que pode funcionar como núcleo de um sintagma."
        },
        {
            question: "Qual é o núcleo do sintagma 'um velho amigo meu'?",
            options: ["velho", "amigo", "meu", "um"],
            answer: "amigo",
            solution: "O substantivo central que recebe as qualificações de 'velho' e 'meu' é 'amigo'."
        },
        {
            question: "Na frase 'Vimos o filme novo no cinema', o núcleo do objeto direto é:",
            options: ["Vimos", "filme", "novo", "cinema"],
            answer: "filme",
            solution: "O objeto direto é 'o filme novo'. O substantivo principal desse sintagma é 'filme'."
        },

        // --- Português: Adjuntos Adverbiais (15 Questões) ---
        {
            question: "Na frase 'Eles chegarão amanhã', o termo 'amanhã' é um adjunto adverbial de:",
            options: ["Lugar", "Modo", "Tempo", "Intensidade"],
            answer: "Tempo",
            solution: "O termo 'amanhã' indica a circunstância de tempo em que a ação de chegar ocorrerá."
        },
        {
            question: "'Ele agiu com calma.' O adjunto adverbial expressa uma circunstância de:",
            options: ["Causa", "Modo", "Finalidade", "Companhia"],
            answer: "Modo",
            solution: "A expressão 'com calma' (equivalente a 'calmamente') indica a maneira como ele agiu."
        },
        {
            question: "Em 'Nós moramos muito longe', a palavra 'muito' é um adjunto adverbial de:",
            options: ["Lugar", "Modo", "Tempo", "Intensidade"],
            answer: "Intensidade",
            solution: "O advérbio 'muito' está intensificando outro advérbio ('longe'), expressando um alto grau de distância."
        },
        {
            question: "Qual frase contém um adjunto adverbial de lugar?",
            options: ["Talvez eu vá.", "O carro virou à direita.", "Ele comeu demais.", "Ela cantou bem."],
            answer: "O carro virou à direita.",
            solution: "A expressão 'à direita' indica o lugar, a direção para onde o carro virou."
        },
        {
            question: "Na oração 'Por causa da chuva, o jogo foi cancelado', o termo destacado é um adjunto adverbial de:",
            options: ["Tempo", "Causa", "Consequência", "Condição"],
            answer: "Causa",
            solution: "'Por causa da chuva' indica o motivo, a razão pela qual o jogo foi cancelado."
        },
        {
            question: "Identifique o adjunto adverbial de negação.",
            options: ["Ele certamente virá.", "Eu jamais faria isso.", "Andei bastante hoje.", "Eles vivem aqui."],
            answer: "Eu jamais faria isso.",
            solution: "O advérbio 'jamais' expressa uma negação categórica da ação."
        },
        {
            question: "'Estudei para a prova.' O termo 'para a prova' expressa:",
            options: ["Meio", "Assunto", "Finalidade", "Causa"],
            answer: "Finalidade",
            solution: "Indica o objetivo, o propósito com o qual a ação de estudar foi realizada."
        },
        {
            question: "Em 'Falei sobre política com meu pai', temos adjuntos adverbiais de:",
            options: ["Assunto e companhia", "Modo e lugar", "Tempo e intensidade", "Causa e consequência"],
            answer: "Assunto e companhia",
            solution: "'Sobre política' indica o assunto da conversa, e 'com meu pai' indica a companhia."
        },
        {
            question: "'Ele abriu a porta com a chave.' O termo 'com a chave' é adjunto adverbial de:",
            options: ["Modo", "Companhia", "Instrumento", "Causa"],
            answer: "Instrumento",
            solution: "Indica o objeto, a ferramenta utilizada para realizar a ação de abrir a porta."
        },
        {
            question: "Qual o valor semântico do adjunto adverbial em 'Com certeza, seremos aprovados'?",
            options: ["Dúvida", "Modo", "Afirmação", "Negação"],
            answer: "Afirmação",
            solution: "A locução adverbial 'Com certeza' serve para reforçar, afirmar a ideia expressa na oração."
        },
        {
            question: "Na frase 'Viajamos de avião', o termo 'de avião' indica:",
            options: ["Lugar", "Meio", "Companhia", "Modo"],
            answer: "Meio",
            solution: "Indica o meio de transporte utilizado para realizar a viagem."
        },
        {
            question: "Em 'Caminhamos por duas horas', o adjunto adverbial é de:",
            options: ["Tempo/Duração", "Distância", "Intensidade", "Modo"],
            answer: "Tempo/Duração",
            solution: "A expressão 'por duas horas' especifica a duração da ação de caminhar."
        },
        {
            question: "A palavra 'aqui' na frase 'Deixei o livro aqui' é um adjunto adverbial de:",
            options: ["Modo", "Tempo", "Lugar", "Intensidade"],
            answer: "Lugar",
            solution: "'Aqui' é um advérbio que indica o local onde o livro foi deixado."
        },
        {
            question: "Qual adjunto adverbial indica modo?",
            options: ["Talvez", "Não", "Bem", "Hoje"],
            answer: "Bem",
            solution: "'Bem' é um advérbio que qualifica a maneira como uma ação é realizada (ex: 'Ele canta bem')."
        },
        {
            question: "Na frase 'O preço da gasolina aumentou muito', 'muito' é adjunto adverbial de:",
            options: ["Modo", "Intensidade", "Tempo", "Causa"],
            answer: "Intensidade",
            solution: "'Muito' intensifica a ação do verbo 'aumentou', indicando que o aumento foi de grande proporção."
        },

        // --- Português: Orações Coordenadas (15 Questões) ---
        {
            question: "Na frase 'Ele estudou e foi aprovado', a segunda oração é coordenada sindética:",
            options: ["Adversativa", "Aditiva", "Alternativa", "Conclusiva"],
            answer: "Aditiva",
            solution: "A conjunção 'e' introduz uma ideia de soma, de acréscimo em relação à oração anterior."
        },
        {
            question: "A oração 'Estudei muito, mas não passei no teste' estabelece uma relação de:",
            options: ["Adição", "Oposição", "Alternância", "Explicação"],
            answer: "Oposição",
            solution: "A conjunção 'mas' introduz uma ideia contrária, uma adversidade em relação ao que era esperado da primeira oração."
        },
        {
            question: "Em 'Ou você estuda, ou você trabalha', as orações são coordenadas e expressam:",
            options: ["Conclusão", "Explicação", "Adição", "Alternativa"],
            answer: "Alternativa",
            solution: "A conjunção 'ou... ou...' apresenta uma escolha, uma alternância entre duas possibilidades que se excluem."
        },
        {
            question: "'Penso, logo existo.' A segunda oração é classificada como:",
            options: ["Aditiva", "Adversativa", "Conclusiva", "Explicativa"],
            answer: "Conclusiva",
            solution: "A conjunção 'logo' introduz uma conclusão lógica baseada na afirmação da primeira oração."
        },
        {
            question: "Na frase 'Não demore, que o filme já vai começar', a oração 'que o filme já vai começar' é:",
            options: ["Coordenada sindética explicativa", "Coordenada sindética conclusiva", "Oração subordinada causal", "Coordenada sindética aditiva"],
            answer: "Coordenada sindética explicativa",
            solution: "A conjunção 'que' (com o mesmo valor de 'pois' ou 'porque') está justificando, explicando a ordem dada na oração anterior."
        },
        {
            question: "Qual conjunção poderia substituir 'porém' em 'Ele é inteligente, porém preguiçoso' sem alterar o sentido?",
            options: ["portanto", "e", "pois", "contudo"],
            answer: "contudo",
            solution: "'Contudo', assim como 'porém', 'mas', 'todavia' e 'entretanto', é uma conjunção adversativa."
        },
        {
            question: "A oração 'Ele não só dança, mas também canta' é um exemplo de coordenação:",
            options: ["Adversativa", "Alternativa", "Aditiva", "Conclusiva"],
            answer: "Aditiva",
            solution: "A estrutura 'não só... mas também...' expressa uma soma de ideias ou ações."
        },
        {
            question: "Em 'O time jogou bem; deve, pois, vencer', a oração 'deve, pois, vencer' é:",
            options: ["Explicativa", "Conclusiva", "Adversativa", "Aditiva"],
            answer: "Conclusiva",
            solution: "A conjunção 'pois' quando vem depois do verbo, como neste caso, tem valor conclusivo, sinônimo de 'portanto'."
        },
        {
            question: "'Quer chova, quer faça sol, eu irei à praia.' As orações coordenadas expressam:",
            options: ["Oposição", "Adição", "Alternância", "Condição"],
            answer: "Alternância",
            solution: "A estrutura 'quer... quer...' indica uma alternância entre duas situações que não impedem a ação principal."
        },
        {
            question: "Qual período é composto por coordenação assindética?",
            options: ["Cheguei, vi, venci.", "Cheguei e vi.", "Cheguei, mas não venci.", "Cheguei, portanto venci."],
            answer: "Cheguei, vi, venci.",
            solution: "As orações são assindéticas porque estão unidas apenas por vírgulas, sem a presença de uma conjunção (síndeto)."
        },
        {
            question: "A conjunção 'entretanto' classifica a oração como:",
            options: ["Aditiva", "Adversativa", "Conclusiva", "Explicativa"],
            answer: "Adversativa",
            solution: "'Entretanto' é uma conjunção que introduz uma ideia de oposição ou contraste."
        },
        {
            question: "'O dia está chuvoso, portanto levarei um guarda-chuva'. A segunda oração é:",
            options: ["Aditiva", "Adversativa", "Alternativa", "Conclusiva"],
            answer: "Conclusiva",
            solution: "A conjunção 'portanto' expressa uma conclusão baseada no fato apresentado na primeira oração."
        },
        {
            question: "Qual das frases abaixo contém uma oração coordenada sindética explicativa?",
            options: ["Ele estudou, logo passou.", "Não vá lá, pois é perigoso.", "Ele caiu, mas não se machucou.", "Ora ele ri, ora ele chora."],
            answer: "Não vá lá, pois é perigoso.",
            solution: "A oração 'pois é perigoso' fornece uma justificativa para a ordem expressa em 'Não vá lá'."
        },
        {
            question: "Em 'A situação é grave, e exige cuidado', a conjunção 'e' tem valor:",
            options: ["Aditivo", "Adversativo", "Conclusivo", "Alternativo"],
            answer: "Aditivo",
            solution: "O 'e' está somando duas informações sobre a situação."
        },
        {
            question: "A oração 'Seja otimista, seja realista' expressa uma ideia de:",
            options: ["Adição", "Oposição", "Alternância", "Explicação"],
            answer: "Alternância",
            solution: "A estrutura 'seja... seja...' apresenta duas possibilidades ou posturas que se alternam."
        },

        // --- Português: Orações Subordinadas Substantivas (15 Questões) ---
        {
            question: "Na frase 'É provável que ele viaje amanhã', a oração 'que ele viaje amanhã' tem função de:",
            options: ["Sujeito", "Objeto direto", "Objeto indireto", "Aposto"],
            answer: "Sujeito",
            solution: "A oração funciona como sujeito do verbo 'É'. Por isso, é uma oração subordinada substantiva subjetiva. (Isso é provável)."
        },
        {
            question: "Em 'Eu quero que você seja feliz', a segunda oração é classificada como:",
            options: ["Subjetiva", "Objetiva direta", "Objetiva indireta", "Completiva nominal"],
            answer: "Objetiva direta",
            solution: "A oração 'que você seja feliz' completa o sentido do verbo transitivo direto 'quero'. Quem quer, quer algo. Funciona como objeto direto."
        },
        {
            question: "Qual a função da oração 'de que me ajude' em 'Eu preciso de que me ajude'?",
            options: ["Objetiva direta", "Objetiva indireta", "Completiva nominal", "Predicativa"],
            answer: "Objetiva indireta",
            solution: "A oração completa o sentido do verbo transitivo indireto 'preciso', que exige a preposição 'de'. Funciona como objeto indireto."
        },
        {
            question: "Na oração 'Tenho certeza de que ele virá', a oração 'de que ele virá' é:",
            options: ["Objetiva indireta", "Completiva nominal", "Subjetiva", "Apositiva"],
            answer: "Completiva nominal",
            solution: "A oração completa o sentido de um nome (o substantivo 'certeza'), e não de um verbo. Por isso, é completiva nominal."
        },
        {
            question: "Em 'Meu desejo é que a paz reine', a oração 'que a paz reine' tem função de:",
            options: ["Sujeito", "Objeto direto", "Predicativo do sujeito", "Aposto"],
            answer: "Predicativo do sujeito",
            solution: "A oração funciona como predicativo do sujeito 'Meu desejo', pois está ligada ao sujeito por um verbo de ligação ('é')."
        },
        {
            question: "A oração 'que todos sejam felizes' em 'Só peço isto: que todos sejam felizes' é:",
            options: ["Subjetiva", "Objetiva direta", "Predicativa", "Apositiva"],
            answer: "Apositiva",
            solution: "A oração tem a função de explicar ou especificar um termo anterior (o pronome 'isto'). Por isso, é classificada como apositiva."
        },
        {
            question: "Qual frase contém uma oração subordinada substantiva subjetiva?",
            options: ["Disseram que ele voltaria.", "É importante que você estude.", "Lembre-se de que sou seu amigo.", "Meu medo era que chovesse."],
            answer: "É importante que você estude.",
            solution: "A oração 'que você estude' exerce a função de sujeito do verbo de ligação 'É'."
        },
        {
            question: "'Convém que você participe da reunião.' A oração subordinada é:",
            options: ["Objetiva direta", "Objetiva indireta", "Subjetiva", "Completiva nominal"],
            answer: "Subjetiva",
            solution: "A oração 'que você participe da reunião' funciona como sujeito do verbo 'Convém'. (Isso convém)."
        },
        {
            question: "Em 'O problema é que ninguém se entende', a oração 'que ninguém se entende' é:",
            options: ["Subjetiva", "Objetiva direta", "Predicativa", "Apositiva"],
            answer: "Predicativa",
            solution: "A oração está após o verbo de ligação 'é' e serve como uma característica, um predicativo, para o sujeito 'O problema'."
        },
        {
            question: "Qual a classificação da oração 'se o projeto foi aprovado' em 'O gerente perguntou se o projeto foi aprovado'?",
            options: ["Subjetiva", "Objetiva direta", "Objetiva indireta", "Apositiva"],
            answer: "Objetiva direta",
            solution: "A oração completa o sentido do verbo transitivo direto 'perguntou'. Quem pergunta, pergunta algo."
        },
        {
            question: "Na frase 'Ele se queixou de que o trataram mal', a oração subordinada é:",
            options: ["Objetiva direta", "Objetiva indireta", "Completiva nominal", "Subjetiva"],
            answer: "Objetiva indireta",
            solution: "A oração completa o sentido do verbo 'queixou-se', que exige a preposição 'de'. Funciona como objeto indireto."
        },
        {
            question: "A oração 'que você tenha sucesso' em 'Nosso sonho é que você tenha sucesso' é:",
            options: ["Subjetiva", "Predicativa", "Apositiva", "Objetiva direta"],
            answer: "Predicativa",
            solution: "A oração está ligada ao sujeito 'Nosso sonho' pelo verbo de ligação 'é', funcionando como predicativo do sujeito."
        },
        {
            question: "Identifique a oração subordinada substantiva completiva nominal.",
            options: ["É necessário que chova.", "Ele me convenceu de que eu estava errado.", "Tenho necessidade de que me apoiem.", "Espero que você venha."],
            answer: "Tenho necessidade de que me apoiem.",
            solution: "A oração 'de que me apoiem' completa o sentido do substantivo 'necessidade', e não de um verbo."
        },
        {
            question: "'Foi anunciado que o show começaria mais tarde.' A oração subordinada é:",
            options: ["Objetiva direta", "Subjetiva", "Predicativa", "Apositiva"],
            answer: "Subjetiva",
            solution: "A oração principal está na voz passiva. A oração 'que o show começaria mais tarde' funciona como sujeito. (Isso foi anunciado)."
        },
        {
            question: "Em 'A verdade é uma só: que a vida é curta', a segunda oração é classificada como:",
            options: ["Predicativa", "Apositiva", "Subjetiva", "Objetiva direta"],
            answer: "Apositiva",
            solution: "A oração 'que a vida é curta' serve para explicar o termo anterior 'uma só', funcionando como um aposto."
        },

        // --- Espanhol: Pronomes Relativos (15 Questões) ---
        {
            question: "Completa la frase: 'El coche ___ compré ayer es rojo.'",
            options: ["que", "quien", "donde", "cuyo"],
            answer: "que",
            solution: "'Que' es el pronombre relativo más común, utilizado para referirse a cosas (en este caso, 'el coche')."
        },
        {
            question: "Elige la opción correcta: 'Los amigos con ___ fui al cine son muy simpáticos.'",
            options: ["que", "quienes", "donde", "cuyos"],
            answer: "quienes",
            solution: "Se usa 'quien' o 'quienes' para referirse a personas después de una preposición ('con'). Como 'amigos' es plural, se usa 'quienes'."
        },
        {
            question: "Completa la frase: 'Esa es la ciudad ___ nací.'",
            options: ["que", "la que", "donde", "cuando"],
            answer: "donde",
            solution: "'Donde' es el pronombre relativo que se utiliza para referirse a un lugar."
        },
        {
            question: "Elige el pronombre correcto: 'Es un escritor ___ obras son famosas en todo el mundo.'",
            options: ["que", "quien", "cuyas", "cuales"],
            answer: "cuyas",
            solution: "'Cuyo/a/os/as' se usa para indicar posesión o pertenencia. En este caso, las obras pertenecen al escritor. Concuerda en género y número con 'obras' (femenino, plural)."
        },
        {
            question: "En la frase 'La razón por ___ no vine fue la lluvia', el pronombre que falta es:",
            options: ["que", "la cual", "quien", "donde"],
            answer: "la cual",
            solution: "Después de preposiciones como 'por', es común usar 'el cual', 'la cual', etc., para mayor claridad. 'La razón por la cual...'"
        },
        {
            question: "Completa la frase: 'El momento ___ nos conocimos fue inolvidable.'",
            options: ["que", "en que", "donde", "quien"],
            answer: "en que",
            solution: "Aunque 'que' a veces se usa, 'en que' (o 'en el cual') es más preciso para referirse a un momento o tiempo."
        },
        {
            question: "Elige la opción correcta: 'Los temas de ___ hablamos son confidenciales.'",
            options: ["que", "quienes", "los cuales", "cuyos"],
            answer: "los cuales",
            solution: "'De que' o 'de los cuales' se usa para referirse a 'los temas'. 'De los cuales' es más formal y claro en este contexto."
        },
        {
            question: "'Esta es la chica a ___ le di el regalo.'",
            options: ["que", "quien", "la que", "quién"],
            answer: "quien",
            solution: "Se usa 'quien' (o 'a la que') para referirse a una persona cuando es objeto indirecto, introducido por la preposición 'a'."
        },
        {
            question: "Completa: 'El edificio ___ ventanas están rotas será demolido.'",
            options: ["que", "cuyas", "donde", "cuales"],
            answer: "cuyas",
            solution: "'Cuyas' indica que las ventanas pertenecen al edificio. Es femenino y plural para concordar con 'ventanas'."
        },
        {
            question: "'No me gusta la forma ___ me hablas.'",
            options: ["que", "en que", "la cual", "como"],
            answer: "en que",
            solution: "'En que' o 'como' se usan para referirse a la manera o modo. 'La forma en que' es una construcción muy común."
        },
        {
            question: "'El autor, ___ ya te hablé, ganó un premio.'",
            options: ["de que", "de quien", "cuyo", "del que"],
            answer: "de quien",
            solution: "'De quien' (o 'del cual'/'del que') se usa para referirse a una persona después de la preposición 'de'."
        },
        {
            question: "Completa la frase: 'Recuerdo el día ___ te vi por primera vez.'",
            options: ["donde", "quien", "que", "cuyo"],
            answer: "que",
            solution: "'Que' se puede usar de forma general para referirse al tiempo (el día que, el año que)."
        },
        {
            question: "Elige la opción correcta: 'Tengo un amigo ___ padre es médico.'",
            options: ["que", "quien", "cuyo", "cual"],
            answer: "cuyo",
            solution: "'Cuyo' establece la relación de posesión entre 'amigo' y 'padre' (el padre del amigo)."
        },
        {
            question: "En la frase 'Los niños, ___ jugaban en el parque, eran mis sobrinos', el pronombre correcto es:",
            options: ["que", "quienes", "donde", "cuyos"],
            answer: "quienes",
            solution: "Se usa 'quienes' en una cláusula explicativa (entre comas) para referirse a personas en plural."
        },
        {
            question: "'El problema ___ me preocupa es la falta de tiempo.'",
            options: ["que", "quien", "el cual", "cuyo"],
            answer: "que",
            solution: "'Que' es el pronombre relativo más adecuado y común para referirse a 'el problema'."
        },

        // --- Espanhol: Pronomes Interrogativos (15 Questões) ---
        {
            question: "Completa la pregunta: '¿___ hora es?'",
            options: ["Que", "Qué", "Cuál", "Cómo"],
            answer: "Qué",
            solution: "Para preguntar por una definición o una explicación, como en '¿Qué es esto?' o '¿Qué hora es?', se usa 'Qué' con tilde."
        },
        {
            question: "Elige el pronombre correcto: '¿___ es tu color favorito?'",
            options: ["Qué", "Cuál", "Quién", "Dónde"],
            answer: "Cuál",
            solution: "Se usa 'Cuál' o 'Cuáles' para preguntar por una elección o selección dentro de un grupo (de todos los colores, cuál es tu favorito)."
        },
        {
            question: "'¿___ vives?' - 'Vivo en Madrid.'",
            options: ["Cuándo", "Cómo", "Dónde", "Por qué"],
            answer: "Dónde",
            solution: "'Dónde' con tilde se utiliza para preguntar por un lugar o ubicación."
        },
        {
            question: "Completa la pregunta: '¿___ no viniste a la clase?'",
            options: ["Por que", "Porque", "Por qué", "Porqué"],
            answer: "Por qué",
            solution: "'Por qué' (separado y con tilde) es la forma interrogativa que se usa para preguntar por la causa o el motivo de algo."
        },
        {
            question: "Para preguntar por una persona, usamos:",
            options: ["¿Qué?", "¿Quién/Quiénes?", "¿Cuál?", "¿Cuándo?"],
            answer: "¿Quién/Quiénes?",
            solution: "'Quién' (singular) y 'Quiénes' (plural) son los pronombres interrogativos que se usan exclusivamente para preguntar por personas."
        },
        {
            question: "'¿___ te llamas?'",
            options: ["Qué", "Cuál", "Cómo", "Quién"],
            answer: "Cómo",
            solution: "La pregunta estándar para el nombre de alguien en español es '¿Cómo te llamas?', usando el interrogativo 'Cómo'."
        },
        {
            question: "Elige la opción correcta: '¿___ de estos libros prefieres leer?'",
            options: ["Qué", "Cuál", "Quién", "Cuánto"],
            answer: "Cuál",
            solution: "Cuando se pregunta para elegir entre varias opciones presentadas ('de estos libros'), se usa 'Cuál'."
        },
        {
            question: "'¿___ empieza la película?' - 'Empieza a las ocho.'",
            options: ["Qué", "Dónde", "Cuándo", "Cómo"],
            answer: "Cuándo",
            solution: "'Cuándo' con tilde es el pronombre interrogativo que se utiliza para preguntar por el tiempo o un momento."
        },
        {
            question: "Completa: 'No sé ___ hacer.'",
            options: ["que", "qué", "por que", "porque"],
            answer: "qué",
            solution: "En una interrogativa indirecta, como en 'No sé...', se usa el pronombre interrogativo con tilde. 'No sé qué hacer'."
        },
        {
            question: "Para preguntar por la cantidad, usamos:",
            options: ["¿Cómo?", "¿Cuál?", "¿Cuánto/a/os/as?", "¿Qué?"],
            answer: "¿Cuánto/a/os/as?",
            solution: "'Cuánto' y sus variaciones (cuánta, cuántos, cuántas) se usan para preguntar por una cantidad."
        },
        {
            question: "'¿___ es el presidente de Francia?'",
            options: ["Qué", "Cuál", "Quién", "Cómo"],
            answer: "Quién",
            solution: "Se usa 'Quién' para preguntar por la identidad de una persona."
        },
        {
            question: "Completa la pregunta: '¿___ está tu hermano? ¿Está mejor?'",
            options: ["Qué", "Cómo", "Cuál", "Dónde"],
            answer: "Cómo",
            solution: "'Cómo' se usa para preguntar por el estado o la condición de algo o alguien (en este caso, la salud)."
        },
        {
            question: "Diferencia entre 'adonde' y 'a dónde':",
            options: ["No hay diferencia", "'a dónde' es interrogativo, 'adonde' es relativo", "'adonde' es interrogativo, 'a dónde' es relativo", "Ambos son interrogativos"],
            answer: "'a dónde' es interrogativo, 'adonde' es relativo",
            solution: "La forma separada y con tilde, 'a dónde', se usa en preguntas directas e indirectas sobre el destino. 'Adonde' (junto y sin tilde) es un relativo de lugar."
        },
        {
            question: "Elige la opción correcta: '¿___ significa esa palabra?'",
            options: ["Qué", "Cuál", "Cómo", "Por qué"],
            answer: "Qué",
            solution: "Para pedir una definición o el significado de algo, se utiliza el pronombre interrogativo 'Qué'."
        },
        {
            question: "'¿___ son tus padres?' - 'Son las personas que están allí.'",
            options: ["Qué", "Cuáles", "Quiénes", "Cuántos"],
            answer: "Quiénes",
            solution: "Se usa 'Quiénes' (plural) para preguntar por la identidad de dos o más personas."
        },

        // --- Inglês: Countable and Uncountable Nouns (10 Questões) ---
        {
            question: "Which of the following nouns is uncountable?",
            options: ["chair", "book", "information", "car"],
            answer: "information",
            solution: "'Information' is an uncountable noun. It does not have a plural form. We say 'a piece of information'."
        },
        {
            question: "Which of the following nouns is countable?",
            options: ["water", "money", "advice", "apple"],
            answer: "apple",
            solution: "'Apple' is a countable noun because you can have 'one apple', 'two apples', etc."
        },
        {
            question: "Is the word 'furniture' countable or uncountable?",
            options: ["Countable", "Uncountable", "Both", "Neither"],
            answer: "Uncountable",
            solution: "'Furniture' is uncountable. It refers to a group of items, but we don't say 'furnitures'. We count the individual items (chairs, tables)."
        },
        {
            question: "Choose the correct sentence:",
            options: ["I need an advice.", "I need some advices.", "I need some advice.", "I need a advice."],
            answer: "I need some advice.",
            solution: "'Advice' is an uncountable noun, so it cannot be used with 'an' and does not have a plural form ('advices'). We use 'some' with it."
        },
        {
            question: "Is 'rice' countable or uncountable?",
            options: ["Countable", "Uncountable", "It depends on the context", "Both"],
            answer: "Uncountable",
            solution: "'Rice' is considered a mass noun and is uncountable. We don't count individual grains."
        },
        {
            question: "Which noun is uncountable?",
            options: ["job", "work", "task", "position"],
            answer: "work",
            solution: "'Work' (in the sense of labor or employment) is uncountable. 'Job', 'task', and 'position' are all countable."
        },
        {
            question: "How do we make the uncountable noun 'bread' countable?",
            options: ["a bread", "two breads", "a loaf of bread", "a lot of breads"],
            answer: "a loaf of bread",
            solution: "To count uncountable nouns, we use partitive expressions. For 'bread', we say 'a loaf of bread', 'a slice of bread', etc."
        },
        {
            question: "The word 'money' is:",
            options: ["Countable", "Uncountable", "Always plural", "Always singular"],
            answer: "Uncountable",
            solution: "'Money' is uncountable. We can count 'dollars', 'euros', 'coins', but not 'moneys'."
        },
        {
            question: "Which sentence is correct?",
            options: ["She has beautiful hairs.", "She has a beautiful hair.", "She has beautiful hair.", "She has a hair beautiful."],
            answer: "She has beautiful hair.",
            solution: "'Hair' (referring to all the hair on one's head) is an uncountable noun and is used in the singular form."
        },
        {
            question: "Is 'news' a countable or uncountable noun?",
            options: ["Countable", "Uncountable", "Both", "It's an adjective"],
            answer: "Uncountable",
            solution: "Despite ending in 's', 'news' is an uncountable noun and takes a singular verb (e.g., 'The news is good')."
        },

        // --- Inglês: Much and Many (10 Questões) ---
        {
            question: "Complete the sentence: 'I don't have ___ time.'",
            options: ["much", "many", "a lot", "some"],
            answer: "much",
            solution: "'Time' is an uncountable noun, so we use 'much' in negative sentences and questions."
        },
        {
            question: "Choose the correct word: 'How ___ people were at the party?'",
            options: ["much", "many", "little", "few"],
            answer: "many",
            solution: "'People' is a plural countable noun, so we must use 'many'."
        },
        {
            question: "Is this sentence correct? 'There is too much cars on the street.'",
            options: ["Yes", "No, it should be 'many cars'", "No, it should be 'much car'", "Yes, it's informal"],
            answer: "No, it should be 'many cars'",
            solution: "The sentence is incorrect. 'Cars' is a countable noun, so the correct word to use is 'many', not 'much'."
        },
        {
            question: "We use 'many' with ___ nouns.",
            options: ["uncountable", "countable", "singular", "abstract"],
            answer: "countable",
            solution: "The rule is to use 'many' with countable nouns, especially in their plural form."
        },
        {
            question: "Complete the question: 'How ___ does this book cost?'",
            options: ["many", "much", "few", "a lot"],
            answer: "much",
            solution: "We use 'How much' to ask about the price or cost of something, as 'money' is uncountable."
        },
        {
            question: "Which option is correct for the blank? 'She doesn't drink ___ coffee.'",
            options: ["many", "a few", "much", "a lot of of"],
            answer: "much",
            solution: "'Coffee' is an uncountable noun. In negative sentences, we use 'much'."
        },
        {
            question: "There aren't ___ students in the library today.",
            options: ["much", "many", "little", "a lot"],
            answer: "many",
            solution: "'Students' is a plural countable noun, so 'many' is the correct choice."
        },
        {
            question: "We use 'much' with ___ nouns.",
            options: ["countable", "plural", "uncountable", "concrete"],
            answer: "uncountable",
            solution: "The rule is to use 'much' with uncountable nouns like 'water', 'money', 'time', etc."
        },
        {
            question: "How ___ sugar do you want in your tea?",
            options: ["many", "much", "a few", "any"],
            answer: "much",
            solution: "'Sugar' is an uncountable noun, so we use 'How much' to ask about the quantity."
        },
        {
            question: "'I have seen that movie so ___ times.'",
            options: ["much", "many", "a lot", "little"],
            answer: "many",
            solution: "'Times' (in the sense of occasions) is a countable noun, so the correct word is 'many'."
        },

        // --- Inglês: Little, Few, A little, A few (10 Questões) ---
        {
            question: "Complete: 'There are ___ people here. The room is almost empty.'",
            options: ["a little", "little", "a few", "few"],
            answer: "few",
            solution: "'People' is countable. 'Few' is used to indicate a small, almost insufficient number (negative meaning)."
        },
        {
            question: "Choose the correct option: 'I have ___ money, just enough to buy a coffee.'",
            options: ["a little", "little", "a few", "few"],
            answer: "a little",
            solution: "'Money' is uncountable. 'A little' is used to indicate a small but sufficient amount (positive meaning)."
        },
        {
            question: "What is the difference between 'few' and 'a few'?",
            options: ["'Few' is for uncountable, 'a few' is for countable", "'Few' has a negative meaning, 'a few' has a positive one", "There is no difference", "'A few' means more than 'few'"],
            answer: "'Few' has a negative meaning, 'a few' has a positive one",
            solution: "Both are used with countable nouns. 'Few' means 'not many' (negative), while 'a few' means 'some' (positive)."
        },
        {
            question: "'He has very ___ patience for this kind of work.'",
            options: ["little", "a little", "few", "a few"],
            answer: "little",
            solution: "'Patience' is uncountable. 'Little' is used to indicate an almost non-existent amount (negative meaning)."
        },
        {
            question: "Which phrase is used with countable nouns?",
            options: ["a little", "little", "much", "a few"],
            answer: "a few",
            solution: "'A few' and 'few' are used with countable nouns, while 'a little' and 'little' are used with uncountable nouns."
        },
        {
            question: "Complete the sentence: 'She has ___ friends who can help her.'",
            options: ["a little", "little", "a few", "few"],
            answer: "a few",
            solution: "'Friends' is countable. The context implies a positive meaning (she has some friends to help), so 'a few' is appropriate."
        },
        {
            question: "'There is ___ hope of success.' This implies that success is unlikely.",
            options: ["a little", "little", "a few", "few"],
            answer: "little",
            solution: "'Hope' is uncountable. To express a negative, pessimistic view (success is unlikely), we use 'little'."
        },
        {
            question: "I need to buy ___ things at the supermarket.",
            options: ["a little", "little", "a few", "few"],
            answer: "a few",
            solution: "'Things' is a plural countable noun. 'A few' means 'some' or 'a small number'."
        },
        {
            question: "Can I have ___ water, please?",
            options: ["a little", "little", "a few", "few"],
            answer: "a little",
            solution: "'Water' is uncountable. 'A little' is used to request a small, positive amount of something."
        },
        {
            question: "'___ students understood the lesson, so the teacher had to explain it again.'",
            options: ["A little", "Little", "A few", "Few"],
            answer: "Few",
            solution: "'Students' is countable. The fact that the teacher had to explain again implies a negative meaning: 'not many students understood'."
        },
        {
            "question": "Identifique a voz verbal na frase: “O aluno escreveu a redação.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz ativa",
            "solution": "A frase “O aluno escreveu a redação.” está na voz ativa pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “A redação foi escrita pelo aluno.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva analítica",
            "solution": "A frase “A redação foi escrita pelo aluno.” está na voz passiva analítica pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Escreveu-se a redação.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Escreveu-se a redação.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “O atleta se machucou.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz reflexiva",
            "solution": "A frase “O atleta se machucou.” está na voz reflexiva pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Alugam-se casas na praia.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Alugam-se casas na praia.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Vendem-se livros usados.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Vendem-se livros usados.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “A porta foi aberta pela professora.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva analítica",
            "solution": "A frase “A porta foi aberta pela professora.” está na voz passiva analítica pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “A professora abriu a porta.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz ativa",
            "solution": "A frase “A professora abriu a porta.” está na voz ativa pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Lavou-se o carro pela manhã.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Lavou-se o carro pela manhã.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “O carro lavou-se sozinho? (sentido estilístico)”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz reflexiva",
            "solution": "A frase “O carro lavou-se sozinho? (sentido estilístico)” está na voz reflexiva pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “O aluno escreveu a redação.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz ativa",
            "solution": "A frase “O aluno escreveu a redação.” está na voz ativa pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “A redação foi escrita pelo aluno.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva analítica",
            "solution": "A frase “A redação foi escrita pelo aluno.” está na voz passiva analítica pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Escreveu-se a redação.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Escreveu-se a redação.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “O atleta se machucou.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz reflexiva",
            "solution": "A frase “O atleta se machucou.” está na voz reflexiva pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Alugam-se casas na praia.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Alugam-se casas na praia.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Vendem-se livros usados.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Vendem-se livros usados.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “A porta foi aberta pela professora.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva analítica",
            "solution": "A frase “A porta foi aberta pela professora.” está na voz passiva analítica pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “A professora abriu a porta.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz ativa",
            "solution": "A frase “A professora abriu a porta.” está na voz ativa pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “Lavou-se o carro pela manhã.”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz passiva sintética",
            "solution": "A frase “Lavou-se o carro pela manhã.” está na voz passiva sintética pela relação entre sujeito e ação."
        },
        {
            "question": "Identifique a voz verbal na frase: “O carro lavou-se sozinho? (sentido estilístico)”",
            "options": [
                "Voz ativa",
                "Voz passiva analítica",
                "Voz passiva sintética",
                "Voz reflexiva"
            ],
            "answer": "Voz reflexiva",
            "solution": "A frase “O carro lavou-se sozinho? (sentido estilístico)” está na voz reflexiva pela relação entre sujeito e ação."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “O bebê dorme.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo intransitivo",
            "solution": "Na frase “O bebê dorme.”, o verbo é classificado como verbo intransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Ele comprou um carro.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo direto",
            "solution": "Na frase “Ele comprou um carro.”, o verbo é classificado como verbo transitivo direto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Ela gosta de música.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Ela gosta de música.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Ele entregou o presente ao amigo.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo bitransitivo",
            "solution": "Na frase “Ele entregou o presente ao amigo.”, o verbo é classificado como verbo bitransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Precisamos de ajuda.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Precisamos de ajuda.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Assisti ao filme ontem.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Assisti ao filme ontem.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Paguei a conta.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo direto",
            "solution": "Na frase “Paguei a conta.”, o verbo é classificado como verbo transitivo direto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Obedecemos às regras.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Obedecemos às regras.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Informei o resultado aos alunos.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo bitransitivo",
            "solution": "Na frase “Informei o resultado aos alunos.”, o verbo é classificado como verbo bitransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Choveu muito.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo intransitivo",
            "solution": "Na frase “Choveu muito.”, o verbo é classificado como verbo intransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “O bebê dorme.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo intransitivo",
            "solution": "Na frase “O bebê dorme.”, o verbo é classificado como verbo intransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Ele comprou um carro.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo direto",
            "solution": "Na frase “Ele comprou um carro.”, o verbo é classificado como verbo transitivo direto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Ela gosta de música.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Ela gosta de música.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Ele entregou o presente ao amigo.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo bitransitivo",
            "solution": "Na frase “Ele entregou o presente ao amigo.”, o verbo é classificado como verbo bitransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Precisamos de ajuda.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Precisamos de ajuda.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Assisti ao filme ontem.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Assisti ao filme ontem.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Paguei a conta.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo direto",
            "solution": "Na frase “Paguei a conta.”, o verbo é classificado como verbo transitivo direto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Obedecemos às regras.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo transitivo indireto",
            "solution": "Na frase “Obedecemos às regras.”, o verbo é classificado como verbo transitivo indireto pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Informei o resultado aos alunos.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo bitransitivo",
            "solution": "Na frase “Informei o resultado aos alunos.”, o verbo é classificado como verbo bitransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "Classifique a transitividade do verbo na frase: “Choveu muito.”",
            "options": [
                "Verbo intransitivo",
                "Verbo transitivo direto",
                "Verbo transitivo indireto",
                "Verbo bitransitivo"
            ],
            "answer": "Verbo intransitivo",
            "solution": "Na frase “Choveu muito.”, o verbo é classificado como verbo intransitivo pela presença/ausência e tipo de complemento."
        },
        {
            "question": "No sintagma nominal “o belo carro vermelho”, qual é o núcleo?",
            "options": [
                "carro",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "carro",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “o belo carro vermelho”, o núcleo é “carro”."
        },
        {
            "question": "No sintagma nominal “essas duas casas antigas”, qual é o núcleo?",
            "options": [
                "casas",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "casas",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “essas duas casas antigas”, o núcleo é “casas”."
        },
        {
            "question": "No sintagma nominal “meus melhores amigos”, qual é o núcleo?",
            "options": [
                "amigos",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "amigos",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “meus melhores amigos”, o núcleo é “amigos”."
        },
        {
            "question": "No sintagma nominal “aquela ideia inovadora”, qual é o núcleo?",
            "options": [
                "ideia",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "ideia",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “aquela ideia inovadora”, o núcleo é “ideia”."
        },
        {
            "question": "No sintagma nominal “todo aquele barulho”, qual é o núcleo?",
            "options": [
                "barulho",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "barulho",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “todo aquele barulho”, o núcleo é “barulho”."
        },
        {
            "question": "No sintagma nominal “um livro interessante”, qual é o núcleo?",
            "options": [
                "livro",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "livro",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “um livro interessante”, o núcleo é “livro”."
        },
        {
            "question": "No sintagma nominal “os nossos projetos”, qual é o núcleo?",
            "options": [
                "projetos",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "projetos",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “os nossos projetos”, o núcleo é “projetos”."
        },
        {
            "question": "No sintagma nominal “certa dúvida antiga”, qual é o núcleo?",
            "options": [
                "dúvida",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "dúvida",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “certa dúvida antiga”, o núcleo é “dúvida”."
        },
        {
            "question": "No sintagma nominal “o belo carro vermelho”, qual é o núcleo?",
            "options": [
                "carro",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "carro",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “o belo carro vermelho”, o núcleo é “carro”."
        },
        {
            "question": "No sintagma nominal “essas duas casas antigas”, qual é o núcleo?",
            "options": [
                "casas",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "casas",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “essas duas casas antigas”, o núcleo é “casas”."
        },
        {
            "question": "No sintagma nominal “meus melhores amigos”, qual é o núcleo?",
            "options": [
                "amigos",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "amigos",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “meus melhores amigos”, o núcleo é “amigos”."
        },
        {
            "question": "No sintagma nominal “aquela ideia inovadora”, qual é o núcleo?",
            "options": [
                "ideia",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "ideia",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “aquela ideia inovadora”, o núcleo é “ideia”."
        },
        {
            "question": "No sintagma nominal “todo aquele barulho”, qual é o núcleo?",
            "options": [
                "barulho",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "barulho",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “todo aquele barulho”, o núcleo é “barulho”."
        },
        {
            "question": "No sintagma nominal “um livro interessante”, qual é o núcleo?",
            "options": [
                "livro",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "livro",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “um livro interessante”, o núcleo é “livro”."
        },
        {
            "question": "No sintagma nominal “os nossos projetos”, qual é o núcleo?",
            "options": [
                "projetos",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "projetos",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “os nossos projetos”, o núcleo é “projetos”."
        },
        {
            "question": "No sintagma nominal “certa dúvida antiga”, qual é o núcleo?",
            "options": [
                "dúvida",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "dúvida",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “certa dúvida antiga”, o núcleo é “dúvida”."
        },
        {
            "question": "No sintagma nominal “o belo carro vermelho”, qual é o núcleo?",
            "options": [
                "carro",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "carro",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “o belo carro vermelho”, o núcleo é “carro”."
        },
        {
            "question": "No sintagma nominal “essas duas casas antigas”, qual é o núcleo?",
            "options": [
                "casas",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "casas",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “essas duas casas antigas”, o núcleo é “casas”."
        },
        {
            "question": "No sintagma nominal “meus melhores amigos”, qual é o núcleo?",
            "options": [
                "amigos",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "amigos",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “meus melhores amigos”, o núcleo é “amigos”."
        },
        {
            "question": "No sintagma nominal “aquela ideia inovadora”, qual é o núcleo?",
            "options": [
                "ideia",
                "o",
                "meus/essas",
                "belo/melhores"
            ],
            "answer": "ideia",
            "solution": "No sintagma nominal, o núcleo é o nome (substantivo). Em “aquela ideia inovadora”, o núcleo é “ideia”."
        },
        {
            "question": "Na frase “Ele chegou ontem.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "tempo",
            "solution": "O termo adverbial em “Ele chegou ontem.” indica tempo."
        },
        {
            "question": "Na frase “Eles moram aqui.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "lugar",
            "solution": "O termo adverbial em “Eles moram aqui.” indica lugar."
        },
        {
            "question": "Na frase “Falou calmamente.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "modo",
            "solution": "O termo adverbial em “Falou calmamente.” indica modo."
        },
        {
            "question": "Na frase “Estudou muito.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "intensidade",
            "solution": "O termo adverbial em “Estudou muito.” indica intensidade."
        },
        {
            "question": "Na frase “Voltaremos amanhã.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "tempo",
            "solution": "O termo adverbial em “Voltaremos amanhã.” indica tempo."
        },
        {
            "question": "Na frase “Caminhou devagar.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "modo",
            "solution": "O termo adverbial em “Caminhou devagar.” indica modo."
        },
        {
            "question": "Na frase “Trabalha longe.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "lugar",
            "solution": "O termo adverbial em “Trabalha longe.” indica lugar."
        },
        {
            "question": "Na frase “Choveu bastante.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "intensidade",
            "solution": "O termo adverbial em “Choveu bastante.” indica intensidade."
        },
        {
            "question": "Na frase “Ele chegou ontem.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "tempo",
            "solution": "O termo adverbial em “Ele chegou ontem.” indica tempo."
        },
        {
            "question": "Na frase “Eles moram aqui.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "lugar",
            "solution": "O termo adverbial em “Eles moram aqui.” indica lugar."
        },
        {
            "question": "Na frase “Falou calmamente.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "modo",
            "solution": "O termo adverbial em “Falou calmamente.” indica modo."
        },
        {
            "question": "Na frase “Estudou muito.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "intensidade",
            "solution": "O termo adverbial em “Estudou muito.” indica intensidade."
        },
        {
            "question": "Na frase “Voltaremos amanhã.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "tempo",
            "solution": "O termo adverbial em “Voltaremos amanhã.” indica tempo."
        },
        {
            "question": "Na frase “Caminhou devagar.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "modo",
            "solution": "O termo adverbial em “Caminhou devagar.” indica modo."
        },
        {
            "question": "Na frase “Trabalha longe.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "lugar",
            "solution": "O termo adverbial em “Trabalha longe.” indica lugar."
        },
        {
            "question": "Na frase “Choveu bastante.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "intensidade",
            "solution": "O termo adverbial em “Choveu bastante.” indica intensidade."
        },
        {
            "question": "Na frase “Ele chegou ontem.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "tempo",
            "solution": "O termo adverbial em “Ele chegou ontem.” indica tempo."
        },
        {
            "question": "Na frase “Eles moram aqui.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "lugar",
            "solution": "O termo adverbial em “Eles moram aqui.” indica lugar."
        },
        {
            "question": "Na frase “Falou calmamente.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "modo",
            "solution": "O termo adverbial em “Falou calmamente.” indica modo."
        },
        {
            "question": "Na frase “Estudou muito.”, o adjunto adverbial expressa:",
            "options": [
                "tempo",
                "lugar",
                "modo",
                "intensidade"
            ],
            "answer": "intensidade",
            "solution": "O termo adverbial em “Estudou muito.” indica intensidade."
        },
        {
            "question": "Classifique a oração coordenada em: “Estudou e passou.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Aditiva",
            "solution": "A conjunção em “Estudou e passou.” indica relação aditiva."
        },
        {
            "question": "Classifique a oração coordenada em: “Estudou, mas não passou.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Adversativa",
            "solution": "A conjunção em “Estudou, mas não passou.” indica relação adversativa."
        },
        {
            "question": "Classifique a oração coordenada em: “Ou estuda, ou reprova.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Alternativa",
            "solution": "A conjunção em “Ou estuda, ou reprova.” indica relação alternativa."
        },
        {
            "question": "Classifique a oração coordenada em: “Estudou, portanto passou.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Conclusiva",
            "solution": "A conjunção em “Estudou, portanto passou.” indica relação conclusiva."
        },
        {
            "question": "Classifique a oração coordenada em: “Não saiu, porque chovia.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Explicativa",
            "solution": "A conjunção em “Não saiu, porque chovia.” indica relação explicativa."
        },
        {
            "question": "Classifique a oração coordenada em: “Estudou e passou.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Aditiva",
            "solution": "A conjunção em “Estudou e passou.” indica relação aditiva."
        },
        {
            "question": "Classifique a oração coordenada em: “Estudou, mas não passou.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Adversativa",
            "solution": "A conjunção em “Estudou, mas não passou.” indica relação adversativa."
        },
        {
            "question": "Classifique a oração coordenada em: “Ou estuda, ou reprova.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Alternativa",
            "solution": "A conjunção em “Ou estuda, ou reprova.” indica relação alternativa."
        },
        {
            "question": "Classifique a oração coordenada em: “Estudou, portanto passou.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Conclusiva",
            "solution": "A conjunção em “Estudou, portanto passou.” indica relação conclusiva."
        },
        {
            "question": "Classifique a oração coordenada em: “Não saiu, porque chovia.”",
            "options": [
                "Aditiva",
                "Adversativa",
                "Alternativa",
                "Conclusiva"
            ],
            "answer": "Explicativa",
            "solution": "A conjunção em “Não saiu, porque chovia.” indica relação explicativa."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “É importante que você estude.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Subjetiva",
            "solution": "A oração destacada exerce função de subjetiva."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “Desejo que você venha.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Objetiva direta",
            "solution": "A oração destacada exerce função de objetiva direta."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “Preciso de que você venha.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Objetiva indireta",
            "solution": "A oração destacada exerce função de objetiva indireta."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “Estou certo de que ele virá.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Completiva nominal",
            "solution": "A oração destacada exerce função de completiva nominal."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “O desejo dele era que todos fossem felizes.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Apositiva",
            "solution": "A oração destacada exerce função de apositiva."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “É importante que você estude.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Subjetiva",
            "solution": "A oração destacada exerce função de subjetiva."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “Desejo que você venha.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Objetiva direta",
            "solution": "A oração destacada exerce função de objetiva direta."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “Preciso de que você venha.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Objetiva indireta",
            "solution": "A oração destacada exerce função de objetiva indireta."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “Estou certo de que ele virá.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Completiva nominal",
            "solution": "A oração destacada exerce função de completiva nominal."
        },
        {
            "question": "Classifique a oração subordinada substantiva em: “O desejo dele era que todos fossem felizes.”",
            "options": [
                "Subjetiva",
                "Objetiva direta",
                "Objetiva indireta",
                "Completiva nominal"
            ],
            "answer": "Apositiva",
            "solution": "A oração destacada exerce função de apositiva."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El libro _____ leí es interesante.",
            "options": [
                "que",
                "donde",
                "cuyo",
                "quienes"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La persona a _____ conocí ayer es mi vecina.",
            "options": [
                "quien",
                "cuya",
                "cuyo",
                "quienes"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La ciudad en _____ nací es pequeña.",
            "options": [
                "donde",
                "cuyos",
                "quien",
                "el que"
            ],
            "answer": "donde",
            "solution": "El relativo adecuado es “donde” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El autor _____ obras admiro vive en Madrid.",
            "options": [
                "cuyas",
                "la que",
                "donde",
                "quien"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Los amigos _____ vinieron viven lejos.",
            "options": [
                "que",
                "quienes",
                "cuyas",
                "quien"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: No entiendo _____ dices.",
            "options": [
                "lo que",
                "quienes",
                "el que",
                "donde"
            ],
            "answer": "lo que",
            "solution": "El relativo adecuado es “lo que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La profesora, _____ llegó tarde, se disculpó.",
            "options": [
                "quien",
                "que",
                "donde",
                "lo que"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Este es el chico de _____ te hablé.",
            "options": [
                "quien",
                "que",
                "donde",
                "la que"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La casa en _____ vivimos es antigua.",
            "options": [
                "la que",
                "el que",
                "quienes",
                "donde"
            ],
            "answer": "la que",
            "solution": "El relativo adecuado es “la que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El alumno _____ notas mejoraron estudió más.",
            "options": [
                "cuyas",
                "que",
                "quienes",
                "la que"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El libro _____ leí es interesante.",
            "options": [
                "que",
                "quien",
                "donde",
                "lo que"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La persona a _____ conocí ayer es mi vecina.",
            "options": [
                "quien",
                "la que",
                "quienes",
                "lo que"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La ciudad en _____ nací es pequeña.",
            "options": [
                "donde",
                "que",
                "el que",
                "cuyos"
            ],
            "answer": "donde",
            "solution": "El relativo adecuado es “donde” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El autor _____ obras admiro vive en Madrid.",
            "options": [
                "cuyas",
                "cuyo",
                "donde",
                "la que"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Los amigos _____ vinieron viven lejos.",
            "options": [
                "que",
                "cuyo",
                "cuyos",
                "la que"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: No entiendo _____ dices.",
            "options": [
                "lo que",
                "el que",
                "cuyos",
                "cuyas"
            ],
            "answer": "lo que",
            "solution": "El relativo adecuado es “lo que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La profesora, _____ llegó tarde, se disculpó.",
            "options": [
                "quien",
                "cuya",
                "la que",
                "cuyo"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Este es el chico de _____ te hablé.",
            "options": [
                "quien",
                "que",
                "el que",
                "cuya"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La casa en _____ vivimos es antigua.",
            "options": [
                "la que",
                "que",
                "quien",
                "donde"
            ],
            "answer": "la que",
            "solution": "El relativo adecuado es “la que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El alumno _____ notas mejoraron estudió más.",
            "options": [
                "cuyas",
                "lo que",
                "cuyos",
                "donde"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El libro _____ leí es interesante.",
            "options": [
                "que",
                "el que",
                "donde",
                "cuya"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La persona a _____ conocí ayer es mi vecina.",
            "options": [
                "quien",
                "el que",
                "que",
                "lo que"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La ciudad en _____ nací es pequeña.",
            "options": [
                "donde",
                "que",
                "cuya",
                "la que"
            ],
            "answer": "donde",
            "solution": "El relativo adecuado es “donde” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El autor _____ obras admiro vive en Madrid.",
            "options": [
                "cuyas",
                "cuyo",
                "donde",
                "cuya"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Los amigos _____ vinieron viven lejos.",
            "options": [
                "que",
                "cuyos",
                "cuya",
                "el que"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: No entiendo _____ dices.",
            "options": [
                "lo que",
                "cuyas",
                "quienes",
                "cuya"
            ],
            "answer": "lo que",
            "solution": "El relativo adecuado es “lo que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La profesora, _____ llegó tarde, se disculpó.",
            "options": [
                "quien",
                "cuyos",
                "cuya",
                "donde"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Este es el chico de _____ te hablé.",
            "options": [
                "quien",
                "cuya",
                "cuyo",
                "cuyos"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La casa en _____ vivimos es antigua.",
            "options": [
                "la que",
                "cuyo",
                "quienes",
                "lo que"
            ],
            "answer": "la que",
            "solution": "El relativo adecuado es “la que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El alumno _____ notas mejoraron estudió más.",
            "options": [
                "cuyas",
                "cuyos",
                "la que",
                "lo que"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El libro _____ leí es interesante.",
            "options": [
                "que",
                "cuya",
                "cuyo",
                "donde"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La persona a _____ conocí ayer es mi vecina.",
            "options": [
                "quien",
                "el que",
                "la que",
                "cuyo"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La ciudad en _____ nací es pequeña.",
            "options": [
                "donde",
                "cuyos",
                "el que",
                "cuyas"
            ],
            "answer": "donde",
            "solution": "El relativo adecuado es “donde” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El autor _____ obras admiro vive en Madrid.",
            "options": [
                "cuyas",
                "cuyo",
                "quien",
                "la que"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Los amigos _____ vinieron viven lejos.",
            "options": [
                "que",
                "cuyos",
                "lo que",
                "cuyo"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: No entiendo _____ dices.",
            "options": [
                "lo que",
                "cuya",
                "que",
                "quien"
            ],
            "answer": "lo que",
            "solution": "El relativo adecuado es “lo que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La profesora, _____ llegó tarde, se disculpó.",
            "options": [
                "quien",
                "cuyo",
                "lo que",
                "el que"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Este es el chico de _____ te hablé.",
            "options": [
                "quien",
                "quienes",
                "cuyo",
                "cuya"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La casa en _____ vivimos es antigua.",
            "options": [
                "la que",
                "cuyo",
                "cuyos",
                "donde"
            ],
            "answer": "la que",
            "solution": "El relativo adecuado es “la que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El alumno _____ notas mejoraron estudió más.",
            "options": [
                "cuyas",
                "cuyo",
                "quienes",
                "que"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El libro _____ leí es interesante.",
            "options": [
                "que",
                "cuya",
                "donde",
                "el que"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La persona a _____ conocí ayer es mi vecina.",
            "options": [
                "quien",
                "la que",
                "cuyos",
                "el que"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La ciudad en _____ nací es pequeña.",
            "options": [
                "donde",
                "quien",
                "el que",
                "cuya"
            ],
            "answer": "donde",
            "solution": "El relativo adecuado es “donde” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El autor _____ obras admiro vive en Madrid.",
            "options": [
                "cuyas",
                "cuya",
                "cuyo",
                "el que"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Los amigos _____ vinieron viven lejos.",
            "options": [
                "que",
                "quienes",
                "la que",
                "quien"
            ],
            "answer": "que",
            "solution": "El relativo adecuado es “que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: No entiendo _____ dices.",
            "options": [
                "lo que",
                "cuyo",
                "donde",
                "cuyos"
            ],
            "answer": "lo que",
            "solution": "El relativo adecuado es “lo que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La profesora, _____ llegó tarde, se disculpó.",
            "options": [
                "quien",
                "que",
                "donde",
                "cuyo"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: Este es el chico de _____ te hablé.",
            "options": [
                "quien",
                "que",
                "lo que",
                "donde"
            ],
            "answer": "quien",
            "solution": "El relativo adecuado es “quien” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: La casa en _____ vivimos es antigua.",
            "options": [
                "la que",
                "el que",
                "donde",
                "cuyos"
            ],
            "answer": "la que",
            "solution": "El relativo adecuado es “la que” por la función y el antecedente en la oración."
        },
        {
            "question": "Complete con el pronombre relativo correcto: El alumno _____ notas mejoraron estudió más.",
            "options": [
                "cuyas",
                "el que",
                "quienes",
                "cuya"
            ],
            "answer": "cuyas",
            "solution": "El relativo adecuado es “cuyas” por la función y el antecedente en la oración."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu nombre?",
            "options": [
                "¿Cuál",
                "¿Quiénes",
                "¿Cuánto",
                "¿Cómo"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ vives?",
            "options": [
                "¿Dónde",
                "¿Qué",
                "¿Quiénes",
                "¿Cuáles"
            ],
            "answer": "¿Dónde",
            "solution": "Se emplea “¿Dónde” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ llegas?",
            "options": [
                "¿Cuándo",
                "¿Por qué",
                "¿Cuánto",
                "¿Dónde"
            ],
            "answer": "¿Cuándo",
            "solution": "Se emplea “¿Cuándo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ estás?",
            "options": [
                "¿Cómo",
                "¿Qué",
                "¿Quién",
                "¿Quiénes"
            ],
            "answer": "¿Cómo",
            "solution": "Se emplea “¿Cómo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ cuesta?",
            "options": [
                "¿Cuánto",
                "¿Quién",
                "¿Qué",
                "¿Por qué"
            ],
            "answer": "¿Cuánto",
            "solution": "Se emplea “¿Cuánto” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ libros tienes?",
            "options": [
                "¿Cuántos",
                "¿Dónde",
                "¿Por qué",
                "¿Qué"
            ],
            "answer": "¿Cuántos",
            "solution": "Se emplea “¿Cuántos” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es esto?",
            "options": [
                "¿Qué",
                "¿Dónde",
                "¿Por qué",
                "¿Cómo"
            ],
            "answer": "¿Qué",
            "solution": "Se emplea “¿Qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ de los dos prefieres?",
            "options": [
                "¿Cuál",
                "¿Dónde",
                "¿Cómo",
                "¿Quién"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ no viniste ayer?",
            "options": [
                "¿Por qué",
                "¿Dónde",
                "¿Cuándo",
                "¿Qué"
            ],
            "answer": "¿Por qué",
            "solution": "Se emplea “¿Por qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu hermano?",
            "options": [
                "¿Quién",
                "¿Por qué",
                "¿Cuál",
                "¿Cuánto"
            ],
            "answer": "¿Quién",
            "solution": "Se emplea “¿Quién” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu nombre?",
            "options": [
                "¿Cuál",
                "¿Cuáles",
                "¿Cuántas",
                "¿Cuánta"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ vives?",
            "options": [
                "¿Dónde",
                "¿Quién",
                "¿Cómo",
                "¿Quiénes"
            ],
            "answer": "¿Dónde",
            "solution": "Se emplea “¿Dónde” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ llegas?",
            "options": [
                "¿Cuándo",
                "¿Cuánta",
                "¿Quiénes",
                "¿Cuáles"
            ],
            "answer": "¿Cuándo",
            "solution": "Se emplea “¿Cuándo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ estás?",
            "options": [
                "¿Cómo",
                "¿Por qué",
                "¿Qué",
                "¿Cuáles"
            ],
            "answer": "¿Cómo",
            "solution": "Se emplea “¿Cómo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ cuesta?",
            "options": [
                "¿Cuánto",
                "¿Por qué",
                "¿Cuánta",
                "¿Cuándo"
            ],
            "answer": "¿Cuánto",
            "solution": "Se emplea “¿Cuánto” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ libros tienes?",
            "options": [
                "¿Cuántos",
                "¿Por qué",
                "¿Cuánta",
                "¿Quiénes"
            ],
            "answer": "¿Cuántos",
            "solution": "Se emplea “¿Cuántos” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es esto?",
            "options": [
                "¿Qué",
                "¿Cuáles",
                "¿Quiénes",
                "¿Cuánta"
            ],
            "answer": "¿Qué",
            "solution": "Se emplea “¿Qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ de los dos prefieres?",
            "options": [
                "¿Cuál",
                "¿Qué",
                "¿Por qué",
                "¿Quién"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ no viniste ayer?",
            "options": [
                "¿Por qué",
                "¿Quiénes",
                "¿Qué",
                "¿Cuántos"
            ],
            "answer": "¿Por qué",
            "solution": "Se emplea “¿Por qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu hermano?",
            "options": [
                "¿Quién",
                "¿Qué",
                "¿Por qué",
                "¿Cuáles"
            ],
            "answer": "¿Quién",
            "solution": "Se emplea “¿Quién” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu nombre?",
            "options": [
                "¿Cuál",
                "¿Cuánta",
                "¿Cuáles",
                "¿Quiénes"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ vives?",
            "options": [
                "¿Dónde",
                "¿Por qué",
                "¿Cuándo",
                "¿Cuáles"
            ],
            "answer": "¿Dónde",
            "solution": "Se emplea “¿Dónde” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ llegas?",
            "options": [
                "¿Cuándo",
                "¿Qué",
                "¿Cuáles",
                "¿Quién"
            ],
            "answer": "¿Cuándo",
            "solution": "Se emplea “¿Cuándo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ estás?",
            "options": [
                "¿Cómo",
                "¿Qué",
                "¿Cuánto",
                "¿Cuáles"
            ],
            "answer": "¿Cómo",
            "solution": "Se emplea “¿Cómo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ cuesta?",
            "options": [
                "¿Cuánto",
                "¿Cuándo",
                "¿Por qué",
                "¿Cuántas"
            ],
            "answer": "¿Cuánto",
            "solution": "Se emplea “¿Cuánto” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ libros tienes?",
            "options": [
                "¿Cuántos",
                "¿Dónde",
                "¿Cuál",
                "¿Cuánta"
            ],
            "answer": "¿Cuántos",
            "solution": "Se emplea “¿Cuántos” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es esto?",
            "options": [
                "¿Qué",
                "¿Quién",
                "¿Cuántos",
                "¿Cuánta"
            ],
            "answer": "¿Qué",
            "solution": "Se emplea “¿Qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ de los dos prefieres?",
            "options": [
                "¿Cuál",
                "¿Cuándo",
                "¿Dónde",
                "¿Cuánta"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ no viniste ayer?",
            "options": [
                "¿Por qué",
                "¿Quién",
                "¿Quiénes",
                "¿Cuál"
            ],
            "answer": "¿Por qué",
            "solution": "Se emplea “¿Por qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu hermano?",
            "options": [
                "¿Quién",
                "¿Por qué",
                "¿Cómo",
                "¿Cuándo"
            ],
            "answer": "¿Quién",
            "solution": "Se emplea “¿Quién” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu nombre?",
            "options": [
                "¿Cuál",
                "¿Quién",
                "¿Cuántas",
                "¿Por qué"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ vives?",
            "options": [
                "¿Dónde",
                "¿Por qué",
                "¿Cuánta",
                "¿Qué"
            ],
            "answer": "¿Dónde",
            "solution": "Se emplea “¿Dónde” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ llegas?",
            "options": [
                "¿Cuándo",
                "¿Por qué",
                "¿Quién",
                "¿Dónde"
            ],
            "answer": "¿Cuándo",
            "solution": "Se emplea “¿Cuándo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ estás?",
            "options": [
                "¿Cómo",
                "¿Cuánta",
                "¿Cuántas",
                "¿Cuál"
            ],
            "answer": "¿Cómo",
            "solution": "Se emplea “¿Cómo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ cuesta?",
            "options": [
                "¿Cuánto",
                "¿Dónde",
                "¿Quién",
                "¿Por qué"
            ],
            "answer": "¿Cuánto",
            "solution": "Se emplea “¿Cuánto” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ libros tienes?",
            "options": [
                "¿Cuántos",
                "¿Cuáles",
                "¿Por qué",
                "¿Cuál"
            ],
            "answer": "¿Cuántos",
            "solution": "Se emplea “¿Cuántos” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es esto?",
            "options": [
                "¿Qué",
                "¿Cuánto",
                "¿Dónde",
                "¿Quién"
            ],
            "answer": "¿Qué",
            "solution": "Se emplea “¿Qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ de los dos prefieres?",
            "options": [
                "¿Cuál",
                "¿Dónde",
                "¿Cuáles",
                "¿Cuánta"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ no viniste ayer?",
            "options": [
                "¿Por qué",
                "¿Quién",
                "¿Cuándo",
                "¿Cuántas"
            ],
            "answer": "¿Por qué",
            "solution": "Se emplea “¿Por qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu hermano?",
            "options": [
                "¿Quién",
                "¿Dónde",
                "¿Cuántas",
                "¿Cuántos"
            ],
            "answer": "¿Quién",
            "solution": "Se emplea “¿Quién” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu nombre?",
            "options": [
                "¿Cuál",
                "¿Quiénes",
                "¿Qué",
                "¿Cuánto"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ vives?",
            "options": [
                "¿Dónde",
                "¿Cómo",
                "¿Qué",
                "¿Cuáles"
            ],
            "answer": "¿Dónde",
            "solution": "Se emplea “¿Dónde” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ llegas?",
            "options": [
                "¿Cuándo",
                "¿Qué",
                "¿Dónde",
                "¿Quién"
            ],
            "answer": "¿Cuándo",
            "solution": "Se emplea “¿Cuándo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ estás?",
            "options": [
                "¿Cómo",
                "¿Cuáles",
                "¿Quién",
                "¿Cuánta"
            ],
            "answer": "¿Cómo",
            "solution": "Se emplea “¿Cómo” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ cuesta?",
            "options": [
                "¿Cuánto",
                "¿Cuál",
                "¿Cuántos",
                "¿Por qué"
            ],
            "answer": "¿Cuánto",
            "solution": "Se emplea “¿Cuánto” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ libros tienes?",
            "options": [
                "¿Cuántos",
                "¿Cuál",
                "¿Cuánta",
                "¿Cuáles"
            ],
            "answer": "¿Cuántos",
            "solution": "Se emplea “¿Cuántos” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es esto?",
            "options": [
                "¿Qué",
                "¿Cuánta",
                "¿Cuáles",
                "¿Cómo"
            ],
            "answer": "¿Qué",
            "solution": "Se emplea “¿Qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ de los dos prefieres?",
            "options": [
                "¿Cuál",
                "¿Quiénes",
                "¿Cómo",
                "¿Cuánto"
            ],
            "answer": "¿Cuál",
            "solution": "Se emplea “¿Cuál” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ no viniste ayer?",
            "options": [
                "¿Por qué",
                "¿Cuánto",
                "¿Cómo",
                "¿Cuándo"
            ],
            "answer": "¿Por qué",
            "solution": "Se emplea “¿Por qué” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Elige el pronombre interrogativo correcto: ___ es tu hermano?",
            "options": [
                "¿Quién",
                "¿Por qué",
                "¿Qué",
                "¿Dónde"
            ],
            "answer": "¿Quién",
            "solution": "Se emplea “¿Quién” por el tipo de información solicitada en la pregunta."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “books”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“books” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “apples”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“apples” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “chairs”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“chairs” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “ideas”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“ideas” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “milk”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“milk” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “water”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“water” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “sugar”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“sugar” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “information”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“information” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “advice”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“advice” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “news”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“news” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “books”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“books” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “apples”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“apples” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “chairs”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“chairs” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “ideas”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“ideas” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “milk”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“milk” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “water”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“water” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “sugar”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“sugar” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “information”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“information” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “advice”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“advice” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “news”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“news” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “books”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“books” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “apples”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“apples” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “chairs”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“chairs” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “ideas”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“ideas” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “milk”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“milk” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “water”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“water” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “sugar”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“sugar” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “information”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“information” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “advice”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“advice” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “news”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“news” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “books”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“books” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “apples”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“apples” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “chairs”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“chairs” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “ideas”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Countable",
            "solution": "“ideas” is treated as countable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “milk”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“milk” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “water”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“water” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “sugar”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“sugar” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “information”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“information” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “advice”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“advice” is treated as uncountable in standard English usage."
        },
        {
            "question": "Classify the noun as Countable or Uncountable: “news”.",
            "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Neither"
            ],
            "answer": "Uncountable",
            "solution": "“news” is treated as uncountable in standard English usage."
        },
        {
            "question": "Complete with MUCH or MANY: There aren’t ___ chairs in the room.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: I don’t have ___ time today.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: How ___ apples do we need?",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: How ___ sugar do you take?",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: We saw ___ people at the concert.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: She didn’t eat ___ rice.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: Too ___ emails to answer!",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: Too ___ noise to focus.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: There aren’t ___ chairs in the room.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: I don’t have ___ time today.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: How ___ apples do we need?",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: How ___ sugar do you take?",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: We saw ___ people at the concert.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: She didn’t eat ___ rice.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: Too ___ emails to answer!",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: Too ___ noise to focus.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: There aren’t ___ chairs in the room.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: I don’t have ___ time today.",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: How ___ apples do we need?",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "many",
            "solution": "Use “many” with countable nouns."
        },
        {
            "question": "Complete with MUCH or MANY: How ___ sugar do you take?",
            "options": [
                "much",
                "many",
                "a lot",
                "few"
            ],
            "answer": "much",
            "solution": "Use “much” with uncountable nouns."
        },
        {
            "question": "Choose the best quantifier: There is ___ milk left, so make tea.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: He has ___ friends; he feels lonely.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ time, hurry up!",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: She made ___ mistakes; good job.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: I drink ___ coffee in the evening.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: They brought ___ chairs, but enough.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ options; this is hard.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: Add ___ sugar to taste.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: There is ___ milk left, so make tea.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: He has ___ friends; he feels lonely.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ time, hurry up!",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: She made ___ mistakes; good job.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: I drink ___ coffee in the evening.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: They brought ___ chairs, but enough.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ options; this is hard.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: Add ___ sugar to taste.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: There is ___ milk left, so make tea.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: He has ___ friends; he feels lonely.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ time, hurry up!",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: She made ___ mistakes; good job.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: I drink ___ coffee in the evening.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: They brought ___ chairs, but enough.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ options; this is hard.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: Add ___ sugar to taste.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: There is ___ milk left, so make tea.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: He has ___ friends; he feels lonely.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ time, hurry up!",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: She made ___ mistakes; good job.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: I drink ___ coffee in the evening.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: They brought ___ chairs, but enough.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ options; this is hard.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: Add ___ sugar to taste.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: There is ___ milk left, so make tea.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: He has ___ friends; he feels lonely.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ time, hurry up!",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: She made ___ mistakes; good job.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: I drink ___ coffee in the evening.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "little",
            "solution": "“little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: They brought ___ chairs, but enough.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a few",
            "solution": "“a few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: We have ___ options; this is hard.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "few",
            "solution": "“few” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },
        {
            "question": "Choose the best quantifier: Add ___ sugar to taste.",
            "options": [
                "little",
                "few",
                "a little",
                "a few"
            ],
            "answer": "a little",
            "solution": "“a little” fits the noun type and meaning (negative/small vs. small but sufficient)."
        },

        {
            question: "A frase 'Precisa-se de funcionários' está na voz:",
            options: ["Ativa", "Passiva sintética", "Reflexiva", "Passiva analítica"],
            answer: "Passiva sintética",
            solution: "A voz passiva sintética (ou pronominal) é formada por um verbo na 3ª pessoa, mais o pronome apassivador 'se'."
        },
        {
            question: "Qual a forma ativa da frase 'As chaves haviam sido entregues pelo porteiro'?",
            options: ["O porteiro entregou as chaves.", "As chaves se entregaram.", "O porteiro havia entregue as chaves.", "Entregaram as chaves."],
            answer: "O porteiro havia entregue as chaves.",
            solution: "A locução verbal da voz passiva ('haviam sido entregues') é convertida para a sua forma ativa correspondente ('havia entregue'), mantendo o tempo composto."
        },
        {
            question: "Em 'O político se elegeu com muitos votos', a voz é:",
            options: ["Ativa", "Passiva", "Reflexiva", "Recíproca"],
            answer: "Reflexiva",
            solution: "Embora a ação seja praticada por outros (os eleitores), a construção da frase indica que o sujeito pratica e recebe a ação (elegeu a si mesmo)."
        },
        {
            question: "Se passarmos 'A ventania derrubava as árvores' para a voz passiva, teremos:",
            options: ["As árvores foram derrubadas pela ventania.", "As árvores eram derrubadas pela ventania.", "As árvores serão derrubadas pela ventania.", "As árvores se derrubaram."],
            answer: "As árvores eram derrubadas pela ventania.",
            solution: "O tempo verbal da ativa (pretérito imperfeito 'derrubava') deve ser mantido na passiva, usando o auxiliar 'ser' no mesmo tempo ('eram')."
        },
        {
            question: "A frase 'Ele feriu-se com a faca' está na voz:",
            options: ["Ativa", "Passiva", "Reflexiva", "Passiva sintética"],
            answer: "Reflexiva",
            solution: "O sujeito 'Ele' pratica a ação de ferir e também a recebe, pois feriu a si mesmo."
        },
        {
            question: "Qual frase NÃO está na voz passiva?",
            options: ["A matéria foi explicada pelo professor.", "Sabe-se toda a verdade.", "Eles se queixaram do barulho.", "O carro é consertado pelo mecânico."],
            answer: "Eles se queixaram do barulho.",
            solution: "Nesta frase, o 'se' é parte do verbo pronominal 'queixar-se'. A voz é ativa, pois o sujeito 'Eles' pratica a ação de se queixar."
        },
        {
            question: "A forma passiva de 'Os bombeiros apagarão o incêndio' é:",
            options: ["O incêndio foi apagado pelos bombeiros.", "O incêndio era apagado pelos bombeiros.", "O incêndio será apagado pelos bombeiros.", "O incêndio se apagará."],
            answer: "O incêndio será apagado pelos bombeiros.",
            solution: "O verbo no futuro ('apagarão') exige que o auxiliar na voz passiva também esteja no futuro ('será apagado')."
        },
        {
            question: "Em 'Penteou-se rapidamente', a voz é reflexiva e o sujeito é:",
            options: ["Ele/Ela (Oculto)", "Rapidamente", "Indeterminado", "Inexistente"],
            answer: "Ele/Ela (Oculto)",
            solution: "A voz é reflexiva (penteou a si mesmo). Pela terminação do verbo, o sujeito é a 3ª pessoa do singular (Ele/Ela), que está oculto."
        },
        {
            question: "Qual o sujeito da oração 'Vende-se uma casa antiga'?",
            options: ["Indeterminado", "Uma casa antiga", "Oculto", "Inexistente"],
            answer: "Uma casa antiga",
            solution: "Na voz passiva sintética, o termo que não é preposicionado ('uma casa antiga') é o sujeito paciente. A frase equivale a 'Uma casa antiga é vendida'."
        },
        {
            question: "Convertendo 'Eu estava escrevendo a carta' para a voz passiva, a forma correta é:",
            options: ["A carta foi escrita por mim.", "A carta será escrita por mim.", "A carta estava sendo escrita por mim.", "A carta era escrita por mim."],
            answer: "A carta estava sendo escrita por mim.",
            solution: "A locução verbal da ativa ('estava escrevendo') deve ser mantida na passiva, transformando-se em 'estava sendo escrita'."
        },
        {
            question: "Na frase 'Os pais amam os filhos', a voz é:",
            options: ["Ativa", "Passiva", "Reflexiva", "Recíproca"],
            answer: "Ativa",
            solution: "O sujeito 'Os pais' é o agente que pratica a ação de amar."
        },
        {
            question: "'Aluga-se este apartamento.' A voz desta oração é:",
            options: ["Ativa", "Passiva sintética", "Reflexiva", "Passiva analítica"],
            answer: "Passiva sintética",
            solution: "A construção com verbo na 3ª pessoa + pronome 'se' + sujeito paciente ('este apartamento') caracteriza a voz passiva sintética."
        },
        {
            question: "A frase 'Eles se olharam em silêncio' possui voz:",
            options: ["Passiva", "Ativa", "Reflexiva", "Recíproca"],
            answer: "Recíproca",
            solution: "A ação de 'olhar' é mútua, trocada entre os elementos do sujeito 'Eles' (um olhou para o outro)."
        },
        {
            question: "Qual a forma ativa de 'O mistério foi desvendado por ela'?",
            options: ["Ela desvendou o mistério.", "O mistério se desvendou.", "Ela foi desvendada pelo mistério.", "Desvendaram o mistério."],
            answer: "Ela desvendou o mistério.",
            solution: "O agente da passiva 'por ela' vira o sujeito 'Ela', e o sujeito paciente 'O mistério' vira o objeto direto."
        },
        {
            question: "A oração 'O muro foi pichado' está na voz passiva. Qual elemento falta para a estrutura completa da passiva?",
            options: ["O sujeito", "O objeto direto", "O agente da passiva", "O verbo de ligação"],
            answer: "O agente da passiva",
            solution: "A frase tem sujeito paciente ('O muro') e a locução verbal passiva ('foi pichado'), mas omite quem praticou a ação (o agente da passiva)."
        },

        // --- Português: Transitividade Verbal (15 Questões) ---
        {
            question: "Em 'O tempo passa', o verbo 'passar' é:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação"],
            answer: "Intransitivo",
            solution: "Neste contexto, o verbo 'passar' tem sentido completo, indicando o decorrer do tempo."
        },
        {
            question: "Na frase 'Ele informou o ocorrido à polícia', o verbo 'informar' é:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "Bitransitivo"],
            answer: "Bitransitivo",
            solution: "O verbo 'informar' exige dois complementos: 'o ocorrido' (objeto direto) e 'à polícia' (objeto indireto)."
        },
        {
            question: "'Eu simpatizei com ela.' O verbo 'simpatizar' é classificado como:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação"],
            answer: "Transitivo indireto",
            solution: "O verbo 'simpatizar' sempre exige um complemento regido pela preposição 'com'."
        },
        {
            question: "Qual frase apresenta um verbo de ligação?",
            options: ["Ele comprou um presente.", "O menino parecia feliz.", "Nós caminhamos no parque.", "Ela gosta de sorvete."],
            answer: "O menino parecia feliz.",
            solution: "O verbo 'parecia' é de ligação, pois apenas conecta o sujeito ('O menino') a uma característica sua ('feliz'), que é o predicativo do sujeito."
        },
        {
            question: "Em 'Paguei o boleto', o verbo 'pagar' é transitivo direto. Em 'Paguei ao banco', ele é transitivo indireto. Em 'Paguei o boleto ao banco', ele é:",
            options: ["Intransitivo", "Transitivo direto", "Transitivo indireto", "Bitransitivo"],
            answer: "Bitransitivo",
            solution: "Quando o verbo 'pagar' tem como complementos a coisa paga ('o boleto' - OD) e a quem se paga ('ao banco' - OI), ele é bitransitivo."
        },
        {
            question: "Na frase 'O espetáculo agradou ao público', o verbo 'agradar' é:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação"],
            answer: "Transitivo indireto",
            solution: "No sentido de 'satisfazer' ou 'causar agrado', o verbo 'agradar' é transitivo indireto e rege a preposição 'a'."
        },
        {
            question: "Qual verbo é intransitivo na lista abaixo?",
            options: ["Comprar", "Gostar", "Chegar", "Entregar"],
            answer: "Chegar",
            solution: "'Chegar' é um verbo que indica movimento e tem sentido completo. Os termos que o acompanham (ex: 'em casa', 'cedo') são adjuntos adverbiais, não objetos."
        },
        {
            question: "A frase 'A cidade amanheceu fria' contém um verbo:",
            options: ["Intransitivo com predicativo do sujeito", "De ligação", "Transitivo direto", "Transitivo indireto"],
            answer: "Intransitivo com predicativo do sujeito",
            solution: "O verbo 'amanhecer' é intransitivo, mas nesta frase ele vem acompanhado de uma característica do sujeito ('fria'), que é um predicativo."
        },
        {
            question: "Na frase 'Esqueci o compromisso', o verbo 'esquecer' é VTD. Qual a forma correta para que ele seja VTI?",
            options: ["Esqueci-me o compromisso.", "Esqueci ao compromisso.", "Esqueci-me do compromisso.", "Esqueci do compromisso."],
            answer: "Esqueci-me do compromisso.",
            solution: "Quando o verbo 'esquecer' é usado como pronominal ('esquecer-se'), ele se torna transitivo indireto, exigindo a preposição 'de'."
        },
        {
            question: "Identifique a frase com um verbo transitivo direto e indireto (bitransitivo).",
            options: ["Ele se referiu ao problema.", "O sol nasceu.", "O professor perdoou a todos.", "Comuniquei o fato à diretoria."],
            answer: "Comuniquei o fato à diretoria.",
            solution: "O verbo 'comunicar' possui dois objetos: 'o fato' (objeto direto) e 'à diretoria' (objeto indireto)."
        },
        {
            question: "'Ele aspira ao cargo de gerente.' O verbo 'aspirar' neste contexto é:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação"],
            answer: "Transitivo indireto",
            solution: "No sentido de 'desejar' ou 'almejar', o verbo 'aspirar' é transitivo indireto e rege a preposição 'a'."
        },
        {
            question: "Em 'Todos vivem', o verbo 'viver' é intransitivo. Em qual frase ele é transitivo direto?",
            options: ["Todos vivem bem.", "Ele viveu uma vida de aventuras.", "Ele vive em São Paulo.", "Viver é maravilhoso."],
            answer: "Ele viveu uma vida de aventuras.",
            solution: "Neste caso, 'viver' tem o sentido de 'experimentar', 'passar por', e 'uma vida de aventuras' é seu objeto direto."
        },
        {
            question: "'Obedeça aos sinais de trânsito.' O verbo 'obedecer' é sempre:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "Bitransitivo"],
            answer: "Transitivo indireto",
            solution: "O verbo 'obedecer' é um clássico transitivo indireto, sempre exigindo um complemento com a preposição 'a'."
        },
        {
            question: "Na frase 'O rio corre para o mar', o verbo 'correr' é:",
            options: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação"],
            answer: "Intransitivo",
            solution: "O verbo 'correr' tem sentido completo. O termo 'para o mar' é um adjunto adverbial de lugar (direção), não um objeto."
        },
        {
            question: "Qual a função do termo 'o presente' em 'Ele entregou o presente ao amigo'?",
            options: ["Sujeito", "Objeto direto", "Objeto indireto", "Predicativo"],
            answer: "Objeto direto",
            solution: "É o complemento do verbo bitransitivo 'entregou' que não exige preposição. É 'aquilo que' foi entregue."
        },

        // --- Português: Sintagmas Nominais (15 Questões) ---
        {
            question: "Na frase 'O presidente do clube anunciou a novidade', qual é o núcleo do sujeito?",
            options: ["presidente", "clube", "O", "do"],
            answer: "presidente",
            solution: "O sujeito é 'O presidente do clube'. A palavra central, que pratica a ação de anunciar, é 'presidente'."
        },
        {
            question: "Qual o núcleo do sintagma 'uma surpreendente capacidade de memorização'?",
            options: ["surpreendente", "capacidade", "memorização", "uma"],
            answer: "capacidade",
            solution: "O substantivo principal do grupo é 'capacidade'. Os outros termos ('surpreendente', 'de memorização') modificam este substantivo."
        },
        {
            question: "Em 'Todos os meus antigos vizinhos se mudaram', o núcleo do sujeito é:",
            options: ["Todos", "meus", "antigos", "vizinhos"],
            answer: "vizinhos",
            solution: "O substantivo central do sintagma nominal que funciona como sujeito é 'vizinhos'."
        },
        {
            question: "O objeto da frase 'Ele leu um livro interessante de ficção científica' é um sintagma nominal. Qual seu núcleo?",
            options: ["livro", "interessante", "ficção", "científica"],
            answer: "livro",
            solution: "O núcleo do sintagma 'um livro interessante de ficção científica' é o substantivo 'livro'."
        },
        {
            question: "Na estrutura 'o carro do meu pai', o núcleo é 'carro'. O que é 'do meu pai'?",
            options: ["Núcleo secundário", "Adjunto adnominal", "Adjunto adverbial", "Aposto"],
            answer: "Adjunto adnominal",
            solution: "'Do meu pai' é uma locução adjetiva que caracteriza o núcleo 'carro', funcionando como um adjunto adnominal."
        },
        {
            question: "'Nós' pode ser considerado um sintagma nominal?",
            options: ["Não, é muito pequeno.", "Apenas se for 'nós mesmos'.", "Sim, pois seu núcleo é um pronome.", "Não, pois não tem substantivo."],
            answer: "Sim, pois seu núcleo é um pronome.",
            solution: "Um sintagma nominal pode ser formado por apenas uma palavra, desde que esta seja um pronome ou substantivo. 'Nós' é um pronome que pode funcionar como sujeito ou objeto."
        },
        {
            question: "Qual o núcleo do sintagma 'a pequena casa de madeira na colina'?",
            options: ["pequena", "casa", "madeira", "colina"],
            answer: "casa",
            solution: "O substantivo principal, ao qual todas as outras características ('pequena', 'de madeira', 'na colina') se referem, é 'casa'."
        },
        {
            question: "Em 'A crítica do especialista ao filme foi dura', o núcleo do sujeito é:",
            options: ["crítica", "especialista", "filme", "dura"],
            answer: "crítica",
            solution: "O sujeito é 'A crítica do especialista ao filme'. O núcleo é 'crítica', pois é 'a crítica' que 'foi dura'."
        },
        {
            question: "Qual palavra determina o gênero e o número de todo o sintagma nominal?",
            options: ["O adjetivo", "O verbo", "O núcleo (substantivo)", "O artigo"],
            answer: "O núcleo (substantivo)",
            solution: "É o núcleo do sintagma nominal que impõe a concordância de gênero e número aos seus determinantes e modificadores (artigos, adjetivos, etc.)."
        },
        {
            question: "No sintagma 'muitos problemas financeiros', qual é o núcleo?",
            options: ["muitos", "problemas", "financeiros", "Não há núcleo"],
            answer: "problemas",
            solution: "O substantivo central é 'problemas'. 'Muitos' e 'financeiros' são modificadores deste núcleo."
        },
        {
            question: "Em 'O professor de matemática faltou', o núcleo do sujeito é:",
            options: ["professor", "matemática", "O", "de"],
            answer: "professor",
            solution: "O sujeito é 'O professor de matemática', e a palavra principal, que executa a ação, é 'professor'."
        },
        {
            question: "Qual o núcleo do sintagma que funciona como objeto em 'Ela bebeu um copo de água'?",
            options: ["copo", "água", "de", "um"],
            answer: "copo",
            solution: "O objeto direto é 'um copo de água'. O que ela bebeu? Um copo. Portanto, 'copo' é o núcleo. 'De água' especifica o conteúdo do copo."
        },
        {
            question: "No grupo de palavras 'alguns importantes documentos oficiais', o núcleo é:",
            options: ["alguns", "importantes", "documentos", "oficiais"],
            answer: "documentos",
            solution: "O substantivo que é o elemento principal do sintagma é 'documentos'."
        },
        {
            question: "'Aquilo' pode ser o núcleo de um sintagma nominal?",
            options: ["Não, é um advérbio", "Sim, pois é um pronome demonstrativo", "Não, precisa de um substantivo", "Sim, mas apenas em perguntas"],
            answer: "Sim, pois é um pronome demonstrativo",
            solution: "Pronomes (pessoais, possessivos, demonstrativos, etc.) podem funcionar como núcleo de um sintagma nominal."
        },
        {
            question: "Em 'A luz forte do sol da manhã me acordou', o núcleo do sujeito é:",
            options: ["luz", "forte", "sol", "manhã"],
            answer: "luz",
            solution: "O sujeito é todo o trecho antes do verbo. O elemento principal, 'aquilo que' me acordou, foi a 'luz'."
        },

        // --- Português: Adjuntos Adverbiais (15 Questões) ---
        {
            question: "Na frase 'Talvez ele venha à festa', o termo 'talvez' é um adjunto adverbial de:",
            options: ["Afirmação", "Modo", "Dúvida", "Tempo"],
            answer: "Dúvida",
            solution: "O advérbio 'talvez' expressa uma incerteza, uma dúvida em relação à ação de vir."
        },
        {
            question: "Em 'Passeamos pelo parque', o termo 'pelo parque' indica uma circunstância de:",
            options: ["Meio", "Lugar", "Modo", "Tempo"],
            answer: "Lugar",
            solution: "A expressão 'pelo parque' indica o local por onde a ação de passear ocorreu."
        },
        {
            question: "'Ele saiu com os amigos.' O termo 'com os amigos' é um adjunto adverbial de:",
            options: ["Modo", "Instrumento", "Companhia", "Causa"],
            answer: "Companhia",
            solution: "Indica com quem a ação de sair foi praticada."
        },
        {
            question: "Qual frase contém um adjunto adverbial de intensidade?",
            options: ["O menino correu rapidamente.", "Cheguei cedo em casa.", "A prova estava difícil demais.", "Ele mora em Paris."],
            answer: "A prova estava difícil demais.",
            solution: "O advérbio 'demais' está intensificando o adjetivo 'difícil'."
        },
        {
            question: "'Ele cortou o pão com uma faca.' O termo destacado é um adjunto adverbial de:",
            options: ["Modo", "Meio", "Instrumento", "Companhia"],
            answer: "Instrumento",
            solution: "'Com uma faca' indica a ferramenta, o instrumento utilizado para realizar a ação."
        },
        {
            question: "Na frase 'Certamente, ele entendeu a matéria', o advérbio 'certamente' expressa:",
            options: ["Modo", "Afirmação", "Dúvida", "Conclusão"],
            answer: "Afirmação",
            solution: "'Certamente' é um advérbio que reforça a ideia, conferindo um valor de afirmação ou certeza."
        },
        {
            question: "Em 'Morreu de fome', o termo 'de fome' é um adjunto adverbial de:",
            options: ["Modo", "Causa", "Finalidade", "Intensidade"],
            answer: "Causa",
            solution: "A expressão 'de fome' indica o motivo, a causa da morte."
        },
        {
            question: "Qual o adjunto adverbial de tempo em 'Sempre estudo à noite'?",
            options: ["Sempre", "à noite", "Sempre, à noite", "Não há"],
            answer: "Sempre, à noite",
            solution: "A frase possui dois adjuntos adverbiais de tempo: 'Sempre' (frequência) e 'à noite' (período)."
        },
        {
            question: "Na frase 'Falamos sobre economia', o termo 'sobre economia' expressa:",
            options: ["Causa", "Finalidade", "Meio", "Assunto"],
            answer: "Assunto",
            solution: "Indica o tema, o assunto sobre o qual se falou."
        },
        {
            question: "'Ele caminhava lentamente pela rua.' Os adjuntos adverbiais são, respectivamente, de:",
            options: ["Modo e lugar", "Tempo e modo", "Intensidade e lugar", "Modo e tempo"],
            answer: "Modo e lugar",
            solution: "'Lentamente' indica o modo como ele caminhava, e 'pela rua' indica o lugar."
        },
        {
            question: "Qual das alternativas contém um adjunto adverbial de negação?",
            options: ["Provavelmente choverá.", "Ele agiu bem.", "De modo algum eu farei isso.", "Estudei bastante."],
            answer: "De modo algum eu farei isso.",
            solution: "A locução adverbial 'de modo algum' tem um forte valor de negação."
        },
        {
            question: "Em 'Viajarei de trem', o termo 'de trem' é um adjunto adverbial de:",
            options: ["Instrumento", "Companhia", "Meio", "Lugar"],
            answer: "Meio",
            solution: "Indica o meio de transporte utilizado para a viagem."
        },
        {
            question: "Na frase 'Estudo para passar no concurso', 'para passar no concurso' indica:",
            options: ["Causa", "Consequência", "Finalidade", "Modo"],
            answer: "Finalidade",
            solution: "A oração indica o objetivo, a finalidade da ação de estudar."
        },
        {
            question: "O termo 'bastante' em 'Eles conversaram bastante' é um adjunto adverbial de:",
            options: ["Modo", "Intensidade", "Tempo", "Afirmação"],
            answer: "Intensidade",
            solution: "'Bastante' (equivalente a 'muito') intensifica a ação do verbo 'conversaram'."
        },
        {
            question: "Qual a circunstância expressa por 'às cegas' em 'Ele confiava nela às cegas'?",
            options: ["Lugar", "Tempo", "Modo", "Intensidade"],
            answer: "Modo",
            solution: "A expressão 'às cegas' indica a maneira, o modo como ele confiava nela (sem questionar, totalmente)."
        },

        // --- Português: Orações Coordenadas (15 Questões) ---
        {
            question: "Na frase 'Ele não veio nem ligou', a segunda oração é:",
            options: ["Adversativa", "Alternativa", "Aditiva", "Explicativa"],
            answer: "Aditiva",
            solution: "A conjunção 'nem' (equivalente a 'e não') adiciona uma segunda informação negativa à primeira."
        },
        {
            question: "Em 'Ame o próximo, pois a vida é curta', a segunda oração classifica-se como:",
            options: ["Conclusiva", "Explicativa", "Causal", "Adversativa"],
            answer: "Explicativa",
            solution: "A conjunção 'pois' está explicando, justificando a ordem dada na oração anterior."
        },
        {
            question: "Qual conjunção adversativa poderia substituir 'mas' em 'Tentei, mas falhei'?",
            options: ["Logo", "Portanto", "Todavia", "Ou"],
            answer: "Todavia",
            solution: "'Todavia' é uma conjunção adversativa, assim como 'mas', 'porém', 'contudo' e 'entretanto'."
        },
        {
            question: "As orações em 'Ora chora, ora ri' expressam uma relação de:",
            options: ["Adição", "Oposição", "Alternância", "Conclusão"],
            answer: "Alternância",
            solution: "A estrutura 'ora... ora...' indica uma alternância de estados ou ações."
        },
        {
            question: "'O doente piorou; deve, pois, ser hospitalizado.' A segunda oração é:",
            options: ["Explicativa", "Aditiva", "Conclusiva", "Adversativa"],
            answer: "Conclusiva",
            solution: "A conjunção 'pois', quando está deslocada (depois do verbo), tem valor de conclusão, equivalendo a 'portanto'."
        },
        {
            question: "Identifique o período composto por coordenação.",
            options: ["É preciso que você venha.", "Ele disse que viria.", "Estudei, por isso passei.", "Quando ele chegou, eu saí."],
            answer: "Estudei, por isso passei.",
            solution: "As orações 'Estudei' e 'por isso passei' são independentes sintaticamente e estão unidas por uma conjunção conclusiva."
        },
        {
            question: "No período 'Ele trabalha e estuda', a relação entre as orações é de:",
            options: ["Oposição", "Adição", "Explicação", "Alternância"],
            answer: "Adição",
            solution: "A conjunção 'e' expressa a soma de duas ações praticadas pelo sujeito."
        },
        {
            question: "A conjunção 'no entanto' introduz uma oração:",
            options: ["Aditiva", "Adversativa", "Conclusiva", "Alternativa"],
            answer: "Adversativa",
            solution: "'No entanto' é uma locução conjuntiva que expressa oposição, contraste."
        },
        {
            question: "Em 'Desligue o celular, porque a aula vai começar', a segunda oração é:",
            options: ["Adversativa", "Alternativa", "Conclusiva", "Explicativa"],
            answer: "Explicativa",
            solution: "A oração iniciada por 'porque' está dando a razão, a explicação para a ordem anterior."
        },
        {
            question: "'Choveu muito, portanto as ruas alagaram.' A segunda oração é:",
            options: ["Aditiva", "Adversativa", "Conclusiva", "Explicativa"],
            answer: "Conclusiva",
            solution: "A conjunção 'portanto' indica que o alagamento das ruas é uma consequência, uma conclusão do fato de ter chovido muito."
        },
        {
            question: "Qual das frases abaixo tem uma oração coordenada sindética alternativa?",
            options: ["Fui à festa, mas não dancei.", "Estude ou ficará de castigo.", "Ele não fala nem ouve.", "O tempo está nublado, logo choverá."],
            answer: "Estude ou ficará de castigo.",
            solution: "A conjunção 'ou' estabelece uma relação de escolha ou alternância entre as duas ideias."
        },
        {
            question: "O período 'Acordei, levantei, tomei café' é formado por orações coordenadas:",
            options: ["Sindéticas aditivas", "Assindéticas", "Sindéticas explicativas", "Sindéticas alternativas"],
            answer: "Assindéticas",
            solution: "As orações estão justapostas, unidas apenas por vírgulas, sem a presença de conjunções (síndetos)."
        },
        {
            question: "Na frase 'Ele é muito rico, contudo não é feliz', a conjunção 'contudo' indica:",
            options: ["Causa", "Consequência", "Oposição", "Adição"],
            answer: "Oposição",
            solution: "'Contudo' é uma conjunção adversativa, que expressa uma quebra de expectativa."
        },
        {
            question: "Em 'Não só reclamou, como também não ajudou', a relação é de:",
            options: ["Oposição", "Adição", "Alternância", "Conclusão"],
            answer: "Adição",
            solution: "A estrutura 'não só... como também...' adiciona uma segunda informação, reforçando a primeira."
        },
        {
            question: "A oração 'Saia daqui, que você me irrita!' é classificada como:",
            options: ["Aditiva", "Adversativa", "Conclusiva", "Explicativa"],
            answer: "Explicativa",
            solution: "O 'que' (com valor de 'pois') está explicando o motivo da ordem 'Saia daqui'."
        },

        // --- Português: Orações Subordinadas Substantivas (15 Questões) ---
        {
            question: "Em 'Ninguém soube se a notícia era verdadeira', a oração subordinada é:",
            options: ["Subjetiva", "Objetiva direta", "Objetiva indireta", "Completiva nominal"],
            answer: "Objetiva direta",
            solution: "A oração 'se a notícia era verdadeira' completa o sentido do verbo transitivo direto 'soube'. (Ninguém soube isso)."
        },
        {
            question: "Na frase 'O importante é que todos participem', a oração 'que todos participem' é:",
            options: ["Subjetiva", "Objetiva direta", "Predicativa", "Apositiva"],
            answer: "Predicativa",
            solution: "A oração funciona como predicativo do sujeito 'O importante', pois se liga a ele através do verbo de ligação 'é'."
        },
        {
            question: "Qual a função da oração 'de que o time venceria' em 'Estávamos confiantes de que o time venceria'?",
            options: ["Objetiva indireta", "Completiva nominal", "Subjetiva", "Predicativa"],
            answer: "Completiva nominal",
            solution: "A oração completa o sentido do adjetivo 'confiantes' (um nome), e não de um verbo. Por isso, é completiva nominal."
        },
        {
            question: "A oração 'que o exame fosse adiado' em 'Havia a esperança de que o exame fosse adiado' é:",
            options: ["Objetiva indireta", "Completiva nominal", "Subjetiva", "Apositiva"],
            answer: "Completiva nominal",
            solution: "A oração completa o sentido do substantivo abstrato 'esperança'."
        },
        {
            question: "'Urge que se tomem providências.' A oração subordinada é classificada como:",
            options: ["Subjetiva", "Objetiva direta", "Objetiva indireta", "Apositiva"],
            answer: "Subjetiva",
            solution: "A oração 'que se tomem providências' funciona como sujeito do verbo 'Urge'. (Isso urge)."
        },
        {
            question: "Em 'Todos querem a mesma coisa: que o bem vença.', a oração subordinada é:",
            options: ["Predicativa", "Apositiva", "Objetiva direta", "Subjetiva"],
            answer: "Apositiva",
            solution: "A oração 'que o bem vença' explica, desenvolve o sentido do termo anterior 'a mesma coisa', funcionando como um aposto."
        },
        {
            question: "Qual frase contém uma oração subordinada substantiva objetiva indireta?",
            options: ["Insisto em que você fique.", "É bom que você fique.", "Quero que você fique.", "Meu desejo é que você fique."],
            answer: "Insisto em que você fique.",
            solution: "A oração 'em que você fique' completa o sentido do verbo transitivo indireto 'insistir', que exige a preposição 'em'."
        },
        {
            question: "Em 'Consta que haverá um novo feriado', a oração 'que haverá um novo feriado' é:",
            options: ["Objetiva direta", "Subjetiva", "Completiva nominal", "Apositiva"],
            answer: "Subjetiva",
            solution: "A oração funciona como sujeito do verbo 'Consta'. (Isso consta)."
        },
        {
            question: "'Percebeu-se que era tarde demais.' A oração subordinada é:",
            options: ["Objetiva direta", "Subjetiva", "Predicativa", "Completiva nominal"],
            answer: "Subjetiva",
            solution: "Com o verbo na voz passiva sintética ('Percebeu-se'), a oração substantiva exerce a função de sujeito. (Que era tarde demais foi percebido)."
        },
        {
            question: "A oração 'de que ele era inocente' em 'Tínhamos a convicção de que ele era inocente' é:",
            options: ["Objetiva indireta", "Completiva nominal", "Subjetiva", "Apositiva"],
            answer: "Completiva nominal",
            solution: "A oração completa o sentido do substantivo 'convicção'."
        },
        {
            question: "Em 'A minha impressão é que vai chover', a oração subordinada é classificada como:",
            options: ["Subjetiva", "Objetiva direta", "Predicativa", "Apositiva"],
            answer: "Predicativa",
            solution: "A oração 'que vai chover' funciona como predicativo do sujeito 'A minha impressão', ligada a ele pelo verbo 'é'."
        },
        {
            question: "Qual a função da oração 'como o acidente aconteceu' em 'Ninguém explicou como o acidente aconteceu'?",
            options: ["Subjetiva", "Objetiva direta", "Objetiva indireta", "Completiva nominal"],
            answer: "Objetiva direta",
            solution: "A oração completa o sentido do verbo transitivo direto 'explicou'. (Ninguém explicou isso)."
        },
        {
            question: "Na frase 'Ele se esqueceu de que tinha um compromisso', a oração subordinada é:",
            options: ["Objetiva direta", "Objetiva indireta", "Completiva nominal", "Subjetiva"],
            answer: "Objetiva indireta",
            solution: "A oração completa o sentido do verbo pronominal e transitivo indireto 'esqueceu-se', que rege a preposição 'de'."
        },
        {
            question: "A oração 'que sejamos pontuais' em 'O diretor exige que sejamos pontuais' é:",
            options: ["Subjetiva", "Objetiva direta", "Objetiva indireta", "Predicativa"],
            answer: "Objetiva direta",
            solution: "A oração funciona como objeto direto do verbo transitivo direto 'exige'."
        },
        {
            question: "Qual a classificação da oração 'se haverá aula amanhã' em 'A dúvida era se haverá aula amanhã'?",
            options: ["Predicativa", "Apositiva", "Subjetiva", "Objetiva direta"],
            answer: "Predicativa",
            solution: "A oração funciona como predicativo do sujeito 'A dúvida', ligada pelo verbo de ligação 'era'."
        },

        // --- Espanhol: Pronomes Relativos (15 Questões) ---
        {
            question: "Completa la frase: 'El restaurante ___ fuimos anoche es excelente.'",
            options: ["que", "al que", "donde", "cuyo"],
            answer: "al que",
            solution: "Cuando 'ir' indica destino, se usa la preposición 'a'. El pronombre relativo correcto es 'al que' (a + el que) o 'adonde'."
        },
        {
            question: "Elige la opción correcta: 'La mujer para ___ trabajo es muy amable.'",
            options: ["que", "quien", "la que", "cuya"],
            answer: "quien",
            solution: "Después de una preposición como 'para', se usa 'quien' para referirse a una persona. 'Para la que' también sería correcto."
        },
        {
            question: "Completa: 'No encuentro el documento del ___ me hablaste.'",
            options: ["que", "cual", "quien", "cuyo"],
            answer: "que",
            solution: "'Del que' (de + el que) es la forma correcta para referirse a 'el documento' después de la preposición 'de'."
        },
        {
            question: "En 'Ese es el motivo por ___ estoy feliz', falta:",
            options: ["que", "el cual", "quien", "donde"],
            answer: "el cual",
            solution: "'Por el cual' es una estructura formal y correcta para indicar la razón o el motivo."
        },
        {
            question: "'Es una persona en ___ se puede confiar.'",
            options: ["que", "quien", "la que", "quién"],
            answer: "quien",
            solution: "Para referirse a una persona después de una preposição ('en'), se utiliza 'quien'. 'En la que' también es válido."
        },
        {
            question: "Elige el pronombre correcto: 'Visité el museo ___ cuadros son de Picasso.'",
            options: ["que", "cuyos", "donde", "cuales"],
            answer: "cuyos",
            solution: "'Cuyos' indica que los cuadros pertenecen al museo. Es masculino y plural para concordar con 'cuadros'."
        },
        {
            question: "Completa la frase: 'La casa en ___ vivo es antigua.'",
            options: ["que", "la que", "donde", "la cual"],
            answer: "la que",
            solution: "'En la que' o 'donde' son correctos para referirse a un lugar. 'En la que' se refiere específicamente a 'la casa'."
        },
        {
            question: "El pronombre 'quien' se refiere exclusivamente a:",
            options: ["Lugares", "Cosas", "Personas", "Ideas"],
            answer: "Personas",
            solution: "El pronombre relativo 'quien' (y su plural 'quienes') se utiliza únicamente para hacer referencia a personas."
        },
        {
            question: "'Los estudiantes a ___ el profesor felicitó estaban muy contentos.'",
            options: ["que", "quienes", "los que", "cuyos"],
            answer: "quienes",
            solution: "Se usa 'a quienes' para referirse a personas en plural cuando funcionan como objeto directo preposicional."
        },
        {
            question: "Completa: 'La película ___ vi ayer me encantó.'",
            options: ["que", "la cual", "quien", "donde"],
            answer: "que",
            solution: "'Que' es el pronombre más común y adecuado para referirse a 'la película'."
        },
        {
            question: "'El año ___ nos graduamos fue 2020.'",
            options: ["que", "en que", "cuando", "cuyo"],
            answer: "en que",
            solution: "Para referirse a un punto en el tiempo, es común usar la estructura 'en que' o 'en el cual'. 'Que' también es aceptado informalmente."
        },
        {
            question: "Elige la opción correcta: 'Esa es la empresa ___ gerente es mi tío.'",
            options: ["que", "donde", "cuyo", "quien"],
            answer: "cuyo",
            solution: "'Cuyo' indica la relación de pertenencia (el gerente de la empresa). Es masculino singular para concordar con 'gerente'."
        },
        {
            question: "El pronombre 'donde' se usa para referirse a:",
            options: ["Tiempo", "Modo", "Lugar", "Causa"],
            answer: "Lugar",
            solution: "'Donde' es un adverbio relativo que se utiliza para introducir oraciones que se refieren a un lugar."
        },
        {
            question: "'Me presentaste a tu hermano, a ___ no conocía.'",
            options: ["que", "quien", "el que", "cuyo"],
            answer: "quien",
            solution: "Se usa 'a quien' para referirse a una persona (tu hermano) cuando es el objeto directo."
        },
        {
            question: "Completa: 'Hay muchas cosas ___ no entiendo.'",
            options: ["que", "quienes", "cuales", "donde"],
            answer: "que",
            solution: "Para referirse a 'cosas' de forma general, se utiliza el pronombre 'que'."
        },

        // --- Espanhol: Pronomes Interrogativos (15 Questões) ---
        {
            question: "Completa la pregunta: '¿De ___ color es su coche?'",
            options: ["qué", "cuál", "quién", "cómo"],
            answer: "qué",
            solution: "Cuando el interrogativo va seguido directamente por un sustantivo ('color'), se usa 'qué'."
        },
        {
            question: "'No entiendo ___ quieres decir.' Esta es una pregunta indirecta. ¿Cuál es el pronombre correcto?",
            options: ["que", "qué", "por que", "porque"],
            answer: "qué",
            solution: "En preguntas indirectas (introducidas por verbos como 'no sé', 'no entiendo', 'pregunto', etc.), se usan los pronombres interrogativos con tilde."
        },
        {
            question: "'¿___ de los dos vestidos te gusta más?'",
            options: ["Qué", "Cuál", "Quién", "Cuánto"],
            answer: "Cuál",
            solution: "Se usa 'cuál' cuando se pide una elección entre un número limitado y específico de opciones ('de los dos vestidos')."
        },
        {
            question: "Completa la respuesta: '¿Por qué estás cansado?' - 'Estoy cansado ___ trabajé mucho.'",
            options: ["por que", "porque", "por qué", "porqué"],
            answer: "porque",
            solution: "'Porque' (junto y sin tilde) es la conjunción que se usa para dar una respuesta, una causa o una explicación."
        },
        {
            question: "Elige la opción correcta: '¿A ___ esperas?'",
            options: ["que", "quién", "qué", "quien"],
            answer: "quién",
            solution: "Para preguntar por una persona que es objeto de una preposición ('a'), se usa 'quién' con tilde."
        },
        {
            question: "'¿___ cuesta ese reloj?' - 'Cuesta cien euros.'",
            options: ["Qué", "Cuál", "Cuánto", "Cómo"],
            answer: "Cuánto",
            solution: "'Cuánto' es el interrogativo que se usa para preguntar por el precio o la cantidad."
        },
        {
            question: "'¿___ es la capital de Australia?'",
            options: ["Qué", "Cuál", "Quién", "Dónde"],
            answer: "Cuál",
            solution: "Aunque en español se pregunta '¿Qué es...?' para definiciones, cuando se pide identificar un elemento específico (la capital, entre todas las ciudades), se usa 'cuál'."
        },
        {
            question: "Completa: 'Dime ___ te gustaría hacer esta tarde.'",
            options: ["que", "qué", "el que", "lo que"],
            answer: "qué",
            solution: "Esta es una pregunta indirecta. Se usa el interrogativo 'qué' con tilde para preguntar por la acción."
        },
        {
            question: "'¿___ vas con tanta prisa?'",
            options: ["Adónde", "Adonde", "A dónde", "A donde"],
            answer: "A dónde",
            solution: "'A dónde' (separado y con tilde) es la forma interrogativa para preguntar por el destino o la dirección de un movimiento."
        },
        {
            question: "La palabra 'porqué' (junta y con tilde) es un:",
            options: ["Verbo", "Adjetivo", "Sustantivo", "Pronombre"],
            answer: "Sustantivo",
            solution: "'El porqué' es un sustantivo masculino que significa 'la causa' o 'el motivo'. Ejemplo: 'No entiendo el porqué de tu decisión'."
        },
        {
            question: "Elige la opción correcta: '¿___ de todos es tu hermano?'",
            options: ["Qué", "Cuál", "Quién", "Cómo"],
            answer: "Quién",
            solution: "Se usa 'quién' para identificar a una persona dentro de un grupo."
        },
        {
            question: "Completa: '¿___ opinas sobre este asunto?'",
            options: ["Cuál", "Cómo", "Qué", "Cuánto"],
            answer: "Qué",
            solution: "Para preguntar por una opinión general sobre algo, se usa '¿Qué opinas?'."
        },
        {
            question: "'¿___ has estado todo este tiempo?'",
            options: ["Adónde", "Dónde", "De dónde", "Por dónde"],
            answer: "Dónde",
            solution: "'Dónde' se usa para preguntar por la ubicación (dónde estabas), mientras que 'adónde' se usa para preguntar por el destino (adónde ibas)."
        },
        {
            question: "'¿Para ___ es este regalo?'",
            options: ["qué", "quién", "cuál", "cómo"],
            answer: "quién",
            solution: "Se usa 'quién' para preguntar por la persona destinataria del regalo."
        },
        {
            question: "Elige la opción correcta: '¿___ tipo de música te gusta?'",
            options: ["Qué", "Cuál", "Cómo", "Cuánto"],
            answer: "Qué",
            solution: "Se utiliza 'qué' antes de un sustantivo ('tipo') para preguntar por una característica o clase."
        },

        // --- Inglês: Countable and Uncountable Nouns (10 Questões) ---
        {
            question: "Which of these is typically uncountable?",
            options: ["suggestion", "problem", "luggage", "suitcase"],
            answer: "luggage",
            solution: "'Luggage' (or 'baggage') is an uncountable noun. We count the individual items: 'bags', 'suitcases'."
        },
        {
            question: "Choose the correct sentence:",
            options: ["I'd like a water, please.", "I'd like some waters, please.", "I'd like a glass of water, please.", "I'd like one water, please."],
            answer: "I'd like a glass of water, please.",
            solution: "'Water' is uncountable. To specify a quantity, we use a partitive phrase like 'a glass of' or 'a bottle of'."
        },
        {
            question: "Is 'knowledge' countable or uncountable?",
            options: ["Countable", "Uncountable", "Both", "It depends"],
            answer: "Uncountable",
            solution: "'Knowledge' is an abstract noun and is considered uncountable. It has no plural form."
        },
        {
            question: "Which noun is countable?",
            options: ["scenery", "view", "weather", "traffic"],
            answer: "view",
            solution: "'Scenery', 'weather', and 'traffic' are uncountable. 'View' is countable (e.g., 'There are two beautiful views from this window')."
        },
        {
            question: "The word 'research' is:",
            options: ["Countable", "Uncountable", "A verb only", "Always plural"],
            answer: "Uncountable",
            solution: "'Research' is an uncountable noun. We say 'a piece of research' or 'some research', not 'a research' or 'researches'."
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["I have a good news for you.", "I have some good news for you.", "I have good new for you.", "I have some good newses for you."],
            answer: "I have some good news for you.",
            solution: "'News' is an uncountable noun, so it cannot be used with 'a' and has no plural form. We use 'some' or 'a piece of'."
        },
        {
            question: "Is the word 'spaghetti' countable or uncountable in English?",
            options: ["Countable", "Uncountable", "Countable in the UK, uncountable in the US", "It's an adjective"],
            answer: "Uncountable",
            solution: "Like 'rice' or 'sand', 'spaghetti' is treated as a mass noun and is uncountable."
        },
        {
            question: "Which of these is a countable noun?",
            options: ["electricity", "light", "lamp", "energy"],
            answer: "lamp",
            solution: "'Lamp' is a specific, countable object. 'Electricity', 'light' (in a general sense), and 'energy' are uncountable concepts."
        },
        {
            question: "The word 'travel' (as a general activity) is uncountable. Which related word is countable?",
            options: ["transportation", "journey", "tourism", "movement"],
            answer: "journey",
            solution: "'Journey' is a countable noun (e.g., 'We had two long journeys'). The other options are uncountable abstract nouns."
        },
        {
            question: "Choose the correct form: 'We saw ___ lightning during the storm.'",
            options: ["a", "some", "many", "a lot"],
            answer: "some",
            solution: "'Lightning' is uncountable. We can say 'a flash of lightning' to count it, but when referring to it generally, we use 'some' or 'a lot of'."
        },

        // --- Inglês: Much and Many (10 Questões) ---
        {
            question: "Complete: 'There isn't ___ space in this room.'",
            options: ["many", "much", "a few", "several"],
            answer: "much",
            solution: "'Space' (meaning room or area) is uncountable, so we use 'much' in negative sentences."
        },
        {
            question: "How ___ mistakes did you make on the test?",
            options: ["much", "many", "a little", "lot of"],
            answer: "many",
            solution: "'Mistakes' is a plural countable noun, so the correct interrogative is 'How many'."
        },
        {
            question: "She put too ___ salt in the soup.",
            options: ["many", "much", "few", "a lot"],
            answer: "much",
            solution: "'Salt' is uncountable. We use 'too much' with uncountable nouns to indicate an excessive amount."
        },
        {
            question: "I don't know ___ of the students in this class.",
            options: ["much", "many", "a great deal", "a large amount"],
            answer: "many",
            solution: "'Students' is a plural countable noun. We use 'many' in negative sentences."
        },
        {
            question: "There is so ___ pollution in our city.",
            options: ["many", "much", "few", "a few"],
            answer: "much",
            solution: "'Pollution' is an uncountable noun. We use 'so much' to emphasize a large quantity of an uncountable noun."
        },
        {
            question: "How ___ slices of pizza do you want?",
            options: ["much", "many", "a little", "a great deal of"],
            answer: "many",
            solution: "Even though 'pizza' can be uncountable, the word 'slices' is countable, so we must use 'many'."
        },
        {
            question: "I don't have ___ patience for this.",
            options: ["many", "much", "a few", "several"],
            answer: "much",
            solution: "'Patience' is an uncountable abstract noun. We use 'much' in negative sentences."
        },
        {
            question: "He has ___ interesting ideas.",
            options: ["so much", "too much", "so many", "a lot"],
            answer: "so many",
            solution: "'Ideas' is a plural countable noun. We use 'so many' to emphasize a large quantity of a countable noun."
        },
        {
            question: "There wasn't ___ traffic this morning.",
            options: ["many", "much", "a few", "several"],
            answer: "much",
            solution: "'Traffic' is an uncountable noun, so we use 'much' in negative sentences."
        },
        {
            question: "How ___ times do I have to tell you?",
            options: ["much", "many", "a great deal of", "a little"],
            answer: "many",
            solution: "'Times' (referring to occurrences) is a countable noun. Therefore, we use 'How many'."
        },

        // --- Inglês: Little, Few, A little, A few (10 Questões) ---
        {
            question: "He speaks very ___ English, so it's difficult to understand him.",
            options: ["a little", "little", "a few", "few"],
            answer: "little",
            solution: "'English' (as a language) is uncountable. The context is negative ('difficult to understand'), so we use 'little' (meaning 'almost no')."
        },
        {
            question: "I have ___ apples. We can make a pie.",
            options: ["a little", "little", "a few", "few"],
            answer: "a few",
            solution: "'Apples' is countable. The context is positive ('we can make a pie'), so we use 'a few' (meaning 'a small but sufficient number')."
        },
        {
            question: "Which one has a negative meaning?",
            options: ["a little", "a few", "little", "many"],
            answer: "little",
            solution: "'Little' (with uncountable nouns) and 'few' (with countable nouns) both have a negative connotation, meaning 'almost none' or 'not enough'."
        },
        {
            question: "I need ___ more time to finish the project.",
            options: ["a little", "little", "a few", "few"],
            answer: "a little",
            solution: "'Time' is uncountable. The request is for a small, additional amount, which is a positive context, so we use 'a little'."
        },
        {
            question: "Very ___ people can answer this question. It's extremely difficult.",
            options: ["little", "a little", "few", "a few"],
            answer: "few",
            solution: "'People' is countable. The context is negative ('extremely difficult'), implying that not many people can answer. Therefore, 'few' is correct."
        },
        {
            question: "We only have ___ milk left. We should buy more.",
            options: ["a little", "little", "a few", "few"],
            answer: "little",
            solution: "'Milk' is uncountable. The need to buy more indicates a negative situation (the amount is insufficient), so we use 'little'."
        },
        {
            question: "I know ___ good restaurants in this area if you're hungry.",
            options: ["a little", "little", "a few", "few"],
            answer: "a few",
            solution: "'Restaurants' is countable. The offer to recommend some is a positive context, so 'a few' (meaning 'some') is the correct choice."
        },
        {
            question: "There was ___ traffic on the road, so we arrived early.",
            options: ["a little", "little", "a few", "few"],
            answer: "little",
            solution: "'Traffic' is uncountable. Arriving early means there was 'not much' traffic, which is a positive outcome from a 'negative' quantity. 'Little' means 'almost no'."
        },
        {
            question: "He added ___ salt to the soup. It tasted much better.",
            options: ["a little", "little", "a few", "few"],
            answer: "a little",
            solution: "'Salt' is uncountable. The result was positive ('tasted better'), so he added a small but sufficient amount, which is 'a little'."
        },
        {
            question: "'I'm sorry, I have ___ questions for you,' said the detective.",
            options: ["a little", "little", "a few", "few"],
            answer: "a few",
            solution: "'Questions' is countable. 'A few' is used to mean 'some' or 'a small number' in a neutral or positive sense."
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