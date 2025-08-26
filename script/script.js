document.addEventListener('DOMContentLoaded', () => {
 const questions = [
    // HISTÓRIA - CAPÍTULO 6: INDEPENDÊNCIA DA AMÉRICA ESPANHOLA (20 QUESTÕES)
    {
        "question": "Qual era a principal característica da sociedade na América Espanhola no final do século XVIII?",
        "options": [
            "Igualdade entre todos os grupos sociais",
            "Mobilidade social para os mais pobres",
            "Rígida hierarquia social com base na origem (Chapetones, Criollos, etc.)",
            "Ausência de impostos para a população local"
        ],
        "answer": "Rígida hierarquia social com base na origem (Chapetones, Criollos, etc.)",
        "solution": "A sociedade era marcada por uma profunda desigualdade social, onde os Chapetones (nascidos na Espanha) detinham os maiores privilégios, seguidos pelos Criollos (descendentes de espanhóis nascidos na América)."
    },
    {
        "question": "O que eram os 'cabildos' na América Espanhola?",
        "options": [
            "Tribunais religiosos",
            "Conselhos municipais controlados pelos Criollos",
            "Fortalezas militares para defesa das colônias",
            "Grandes propriedades rurais"
        ],
        "answer": "Conselhos municipais controlados pelos Criollos",
        "solution": "Os cabildos eram as câmaras municipais, espaços de poder local onde a elite criolla conseguia exercer alguma influência política e administrativa."
    },
    {
        "question": "A exploração econômica da Espanha sobre suas colônias se baseava principalmente em:",
        "options": [
            "Livre comércio com outras nações",
            "Incentivo à indústria local",
            "Monopólio comercial e extração de metais preciosos",
            "Agricultura de subsistência"
        ],
        "answer": "Monopólio comercial e extração de metais preciosos",
        "solution": "A Espanha impunha o Pacto Colonial, que garantia o monopólio comercial e focava na exploração de riquezas, especialmente ouro e prata, gerando grande insatisfação."
    },
    {
        "question": "Qual movimento intelectual europeu influenciou fortemente os ideais de independência na América Espanhola?",
        "options": [
            "O Renascimento",
            "A Reforma Protestante",
            "O Absolutismo",
            "O Iluminismo"
        ],
        "answer": "O Iluminismo",
        "solution": "As ideias iluministas de liberdade, igualdade, direitos naturais e soberania popular foram a base ideológica para os movimentos de independência em toda a América."
    },
    {
        "question": "Qual evento histórico enfraqueceu a Espanha e abriu caminho para as independências na América?",
        "options": [
            "A Guerra dos Cem Anos",
            "A Revolução Gloriosa na Inglaterra",
            "As Guerras Napoleônicas e a deposição do rei espanhol",
            "A Peste Negra"
        ],
        "answer": "As Guerras Napoleônicas e a deposição do rei espanhol",
        "solution": "Quando Napoleão Bonaparte invadiu a Espanha e depôs o rei Fernando VII, criou-se um vácuo de poder que incentivou as colônias a formarem juntas governativas e lutarem por autonomia."
    },
    {
        "question": "Quem foram os 'Libertadores da América'?",
        "options": [
            "Reis espanhóis que defendiam as colônias",
            "Líderes militares e políticos que comandaram as lutas pela independência",
            "Comerciantes que romperam o monopólio comercial",
            "Religiosos que catequizaram os indígenas"
        ],
        "answer": "Líderes militares e políticos que comandaram as lutas pela independência",
        "solution": "Figuras como Simón Bolívar e José de San Martín são conhecidos como 'Libertadores' por liderarem os exércitos que garantiram a independência de vários países."
    },
    {
        "question": "A independência do Haiti foi particularmente influente na América Espanhola por ter sido:",
        "options": [
            "Um processo pacífico negociado com a França",
            "Liderada pela elite criolla branca",
            "A primeira e única revolução de escravizados bem-sucedida nas Américas",
            "Apoiada diretamente pela Espanha"
        ],
        "answer": "A primeira e única revolução de escravizados bem-sucedida nas Américas",
        "solution": "A independência do Haiti (1804) causou tanto inspiração para os escravizados quanto temor para as elites coloniais, mostrando que uma revolução social era possível."
    },
    {
        "question": "O que era o caudilhismo, fenômeno político comum nos novos países hispano-americanos?",
        "options": [
            "Um sistema democrático com eleições diretas",
            "O poder centralizado em líderes militares locais carismáticos",
            "Um regime parlamentarista inspirado na Inglaterra",
            "A submissão dos novos países à Igreja Católica"
        ],
        "answer": "O poder centralizado em líderes militares locais carismáticos",
        "solution": "O caudilhismo foi marcado pelo poder de chefes militares regionais (caudilhos) que, com base em seu carisma e poder armado, controlavam a política local e nacional, gerando instabilidade."
    },
    {
        "question": "Qual país surgiu da unificação de vários territórios libertados por Simón Bolívar, mas que se fragmentou posteriormente?",
        "options": [
            "Império Mexicano",
            "Grã-Colômbia",
            "Províncias Unidas do Rio da Prata",
            "Confederação Peru-Boliviana"
        ],
        "answer": "Grã-Colômbia",
        "solution": "Simón Bolívar sonhava com uma América unida. A Grã-Colômbia (1819-1831) foi a materialização desse sonho, mas acabou se dividindo em Colômbia, Venezuela, Equador e Panamá."
    },
    {
        "question": "Após a independência, a economia dos países hispano-americanos permaneceu marcada pela:",
        "options": [
            "Rápida industrialização e desenvolvimento tecnológico",
            "Distribuição de terras e reforma agrária",
            "Dependência da exportação de produtos primários (agrícolas e minerais)",
            "Criação de um mercado comum com moeda única"
        ],
        "answer": "Dependência da exportação de produtos primários (agrícolas e minerais)",
        "solution": "A estrutura econômica colonial não foi alterada. Os novos países continuaram como agroexportadores e dependentes economicamente, principalmente da Inglaterra."
    },
    {
        "question": "A Doutrina Monroe (1823), dos EUA, com o lema 'América para os Americanos', representou para a América Latina:",
        "options": [
            "Um apoio direto e militar dos EUA às independências",
            "Uma oposição à recolonização europeia, mas o início da influência dos EUA na região",
            "Um plano de ajuda econômica para industrializar os novos países",
            "Uma proposta de unificação de todas as Américas sob um único governo"
        ],
        "answer": "Uma oposição à recolonização europeia, mas o início da influência dos EUA na região",
        "solution": "Embora aparentemente protecionista, a Doutrina Monroe abriu caminho para a hegemonia e intervenção dos Estados Unidos nos assuntos internos dos países latino-americanos."
    },
    {
        "question": "Qual foi uma das principais consequências sociais das guerras de independência?",
        "options": [
            "O fim imediato da escravidão em todos os países",
            "A ascensão da elite criolla ao poder político",
            "A melhoria das condições de vida dos indígenas",
            "A criação de uma sociedade sem classes"
        ],
        "answer": "A ascensão da elite criolla ao poder político",
        "solution": "A principal mudança foi a substituição da elite espanhola (Chapetones) pela elite local (Criollos) no comando político, mantendo a estrutura social desigual."
    },
    {
        "question": "As revoltas coloniais que antecederam a independência eram, em sua maioria, motivadas por:",
        "options": [
            "Desejo de implantar o comunismo",
            "Conflitos religiosos entre católicos e protestantes",
            "Reação contra a alta carga de impostos e o controle da metrópole",
            "Lealdade ao rei da França em oposição ao da Espanha"
        ],
        "answer": "Reação contra a alta carga de impostos e o controle da metrópole",
        "solution": "Antes de se tornarem lutas por independência, muitas revoltas começaram como protestos contra medidas fiscais e administrativas impostas pela coroa espanhola."
    },
    {
        "question": "A independência do México teve uma particularidade em seu início, que foi:",
        "options": [
            "Ser liderada por padres com forte participação popular e indígena",
            "Ser um acordo pacífico com a Espanha desde o começo",
            "Ser financiada pela Inglaterra para enfraquecer a Espanha",
            "Começar com a proclamação de uma república socialista"
        ],
        "answer": "Ser liderada por padres com forte participação popular e indígena",
        "solution": "O movimento no México começou com o 'Grito de Dolores' (1810), liderado pelos padres Miguel Hidalgo e José María Morelos, que mobilizaram a população pobre e indígena."
    },
    {
        "question": "Por que a fragmentação territorial foi uma característica marcante da América Espanhola pós-independência, ao contrário do Brasil?",
        "options": [
            "Porque a Espanha incentivou a divisão para manter o controle",
            "Pela ausência de uma figura centralizadora como um monarca e pelos interesses das elites regionais",
            "Pelo terreno geográfico que impedia a comunicação no Brasil",
            "Porque o idioma espanhol tem mais dialetos que o português"
        ],
        "answer": "Pela ausência de uma figura centralizadora como um monarca e pelos interesses das elites regionais",
        "solution": "Enquanto o Brasil manteve a unidade em torno da monarquia, a América Espanhola se fragmentou devido aos interesses divergentes das elites locais (caudilhismo) e às dificuldades de integração."
    },
    {
        "question": "Qual Vice-Reino era o mais rico e populoso da América Espanhola, centrado na extração de prata?",
        "options": [
            "Vice-Reino do Rio da Prata",
            "Vice-Reino de Nova Granada",
            "Vice-Reino de Nova Espanha (México)",
            "Vice-Reino do Peru"
        ],
        "answer": "Vice-Reino de Nova Espanha (México)",
        "solution": "O Vice-Reino de Nova Espanha, atual México, era o coração do império espanhol nas Américas, com ricas minas de prata, como as de Zacatecas e Guanajuato."
    },
    {
        "question": "A 'Carta da Jamaica', escrita por Simón Bolívar, defendia:",
        "options": [
            "A manutenção da monarquia espanhola nas Américas",
            "A criação de repúblicas autoritárias governadas por militares",
            "A necessidade de união entre as colônias para garantir a independência e a adoção do modelo republicano",
            "A anexação de todas as colônias pelos Estados Unidos"
        ],
        "answer": "A necessidade de união entre as colônias para garantir a independência e a adoção do modelo republicano",
        "solution": "Na Carta da Jamaica (1815), Bolívar expôs seu projeto político para a América, defendendo a união e a formação de governos republicanos para evitar a anarquia e a tirania."
    },
    {
        "question": "Qual o papel da Inglaterra no processo de independência da América Espanhola?",
        "options": [
            "Apoiou a Espanha para manter o Pacto Colonial",
            "Manteve-se neutra durante todo o processo",
            "Apoiou as independências visando obter novos mercados consumidores e fornecedores",
            "Tentou colonizar os territórios espanhóis para si"
        ],
        "answer": "Apoiou as independências visando obter novos mercados consumidores e fornecedores",
        "solution": "A Inglaterra tinha interesse no fim do monopólio espanhol para poder comerciar livremente com as novas nações, tornando-se a principal parceira econômica da região."
    },
    {
        "question": "A Revolta de Túpac Amaru II, no Peru (1780), é considerada um precursor das lutas de independência por:",
        "options": [
            "Ser um movimento da elite criolla contra os impostos",
            "Ser a maior rebelião indígena contra a exploração espanhola",
            "Ter conseguido a independência do Peru de forma pacífica",
            "Ter sido um movimento de escravizados africanos"
        ],
        "answer": "Ser a maior rebelião indígena contra a exploração espanhola",
        "solution": "Liderada pelo descendente inca José Gabriel Condorcanqui (Túpac Amaru II), a revolta mobilizou milhares de indígenas contra o sistema de trabalho forçado (mita) e os altos impostos."
    },
    {
        "question": "O que restou do vasto império espanhol na América após o ciclo de independências do início do século XIX?",
        "options": [
            "Apenas o México e o Peru",
            "A Flórida e a Califórnia",
            "Cuba e Porto Rico",
            "Nada, todas as colônias se tornaram independentes"
        ],
        "answer": "Cuba e Porto Rico",
        "solution": "Cuba e Porto Rico permaneceram como colônias espanholas até o final do século XIX, quando foram perdidas para os Estados Unidos na Guerra Hispano-Americana de 1898."
    },

    // HISTÓRIA - CAPÍTULO 7: A AMÉRICA PORTUGUESA E A CRISE DO SISTEMA COLONIAL (20 QUESTÕES)
    {
        "question": "O Período Pombalino (1750-1777) foi marcado por qual característica na administração colonial do Brasil?",
        "options": [
            "Abrandamento do controle português sobre a colônia",
            "Tentativa de modernizar a administração e aumentar a arrecadação de impostos",
            "Incentivo à participação popular na política",
            "Extinção de todos os impostos sobre a mineração"
        ],
        "answer": "Tentativa de modernizar a administração e aumentar a arrecadação de impostos",
        "solution": "Influenciado pelo despotismo esclarecido, o Marquês de Pombal implementou reformas para tornar a exploração do Brasil mais eficiente e lucrativa para Portugal."
    },
    {
        "question": "Qual medida pombalina transferiu a capital do Brasil de Salvador para o Rio de Janeiro em 1763?",
        "options": [
            "A descoberta de ouro em Salvador",
            "A necessidade de proteger a capital de invasões francesas",
            "A maior proximidade com a região mineradora (Minas Gerais) para fiscalização",
            "Um surto de doenças em Salvador"
        ],
        "answer": "A maior proximidade com a região mineradora (Minas Gerais) para fiscalização",
        "solution": "A mudança da capital visava a aumentar o controle e a fiscalização sobre a produção de ouro e diamantes de Minas Gerais, principal fonte de riqueza de Portugal na época."
    },
    {
        "question": "A 'derrama', instituída no Brasil colonial, era:",
        "options": [
            "Um imposto sobre a exportação de açúcar",
            "A cobrança forçada de impostos atrasados sobre o ouro",
            "Uma taxa para a libertação de escravizados",
            "Um feriado religioso"
        ],
        "answer": "A cobrança forçada de impostos atrasados sobre o ouro",
        "solution": "A derrama era a cobrança violenta de impostos quando a cota anual de 100 arrobas de ouro não era atingida pela capitania de Minas Gerais, gerando enorme revolta."
    },
    {
        "question": "Qual foi a principal inspiração ideológica da Conjuração Mineira (1789)?",
        "options": [
            "O socialismo utópico",
            "As ideias absolutistas",
            "O Iluminismo e a independência dos Estados Unidos",
            "O anarquismo"
        ],
        "answer": "O Iluminismo e a independência dos Estados Unidos",
        "solution": "Os inconfidentes eram membros da elite intelectualizada que, inspirados pelos ideais de liberdade do Iluminismo e pelo exemplo dos EUA, planejavam proclamar uma república."
    },
    {
        "question": "A Conjuração Baiana (1798), ou Revolta dos Alfaiates, diferenciava-se da Conjuração Mineira por:",
        "options": [
            "Ser um movimento exclusivamente da elite branca",
            "Defender a manutenção da monarquia portuguesa",
            "Ter um caráter mais popular, com a participação de alfaiates, soldados e escravizados",
            "Buscar a independência de Portugal de forma pacífica"
        ],
        "answer": "Ter um caráter mais popular, com a participação de alfaiates, soldados e escravizados",
        "solution": "Enquanto a Mineira foi um movimento elitista, a Baiana teve ampla participação popular e defendia pautas mais radicais, como o fim da escravidão e a igualdade racial."
    },
    {
        "question": "Quem foi o líder mais conhecido da Conjuração Mineira, que acabou sendo executado?",
        "options": [
            "Cláudio Manuel da Costa",
            "Tomás Antônio Gonzaga",
            "Joaquim José da Silva Xavier (Tiradentes)",
            "Alvarenga Peixoto"
        ],
        "answer": "Joaquim José da Silva Xavier (Tiradentes)",
        "solution": "Tiradentes, um alferes de baixa patente, foi o único a assumir a liderança do movimento e, por isso, foi condenado à forca, tornando-se um mártir da independência."
    },
    {
        "question": "No século XVIII, a economia do Brasil colonial passava por uma crise devido ao(à):",
        "options": [
            "Aumento do preço do açúcar no mercado internacional",
            "Esgotamento das minas de ouro de Minas Gerais",
            "Proibição do tráfico de escravizados",
            "Guerra contra a Espanha pela posse da Amazônia"
        ],
        "answer": "Esgotamento das minas de ouro de Minas Gerais",
        "solution": "Após décadas de intensa exploração, a produção de ouro começou a declinar, mas Portugal continuava a exigir altos impostos, o que agravou a crise econômica e a insatisfação."
    },
    {
        "question": "As ideias iluministas chegavam ao Brasil principalmente através de:",
        "options": [
            "Missionários jesuítas",
            "Decretos do rei de Portugal",
            "Estudantes da elite que frequentavam universidades na Europa",
            "Jornais impressos na colônia"
        ],
        "answer": "Estudantes da elite que frequentavam universidades na Europa",
        "solution": "Os filhos da elite colonial que iam estudar em universidades europeias, como a de Coimbra, tinham contato com as novas ideias iluministas e as traziam para o Brasil."
    },
    {
        "question": "Qual era a principal proposta da Conjuração Baiana em relação à escravidão?",
        "options": [
            "Aumentar a importação de escravizados da África",
            "Manter a escravidão como base da economia",
            "Abolir a escravidão e promover a igualdade racial",
            "Libertar apenas os escravizados nascidos no Brasil"
        ],
        "answer": "Abolir a escravidão e promover a igualdade racial",
        "solution": "Influenciada pela Revolução Francesa e pela independência do Haiti, a Conjuração Baiana tinha um programa social radical que incluía o fim da escravidão."
    },
    {
        "question": "A repressão da Coroa Portuguesa à Conjuração Mineira e à Conjuração Baiana demonstrava:",
        "options": [
            "A fraqueza do sistema colonial",
            "A intenção de negociar pacificamente com os revoltosos",
            "A intolerância a qualquer movimento que questionasse seu domínio",
            "O desejo de dar mais autonomia à colônia"
        ],
        "answer": "A intolerância a qualquer movimento que questionasse seu domínio",
        "solution": "A dura punição aos envolvidos, especialmente as execuções e degredos, servia como exemplo para desencorajar qualquer outra tentativa de revolta contra Portugal."
    },
    {
        "question": "A expulsão dos jesuítas do Brasil em 1759, ordenada pelo Marquês de Pombal, visava a:",
        "options": [
            "Fortalecer o poder da Igreja Católica na colônia",
            "Incentivar a educação popular nas missões",
            "Centralizar o poder nas mãos do Estado e controlar as riquezas das missões",
            "Proteger as populações indígenas"
        ],
        "answer": "Centralizar o poder nas mãos do Estado e controlar as riquezas das missões",
        "solution": "Pombal via os jesuítas como um 'Estado dentro do Estado', com muito poder e riqueza. A expulsão foi uma medida para fortalecer o controle da Coroa sobre a colônia."
    },
    {
        "question": "O lema da bandeira proposta pelos inconfidentes mineiros, 'Libertas Quae Sera Tamen', significa:",
        "options": [
            "A liberdade é o bem maior",
            "Liberdade, Igualdade, Fraternidade",
            "Liberdade ainda que tardia",
            "Ordem e Progresso"
        ],
        "answer": "Liberdade ainda que tardia",
        "solution": "O lema, retirado de um verso do poeta romano Virgílio, expressava o desejo de libertação do domínio português, mesmo que demorasse a acontecer."
    },
    {
        "question": "A crise do sistema colonial português no final do século XVIII foi agravada pela:",
        "options": [
            "Independência econômica de Portugal em relação à Inglaterra",
            "Autossuficiência industrial do Brasil",
            "Dependência econômica de Portugal em relação à Inglaterra e exploração do Brasil",
            "Aliança militar entre Portugal e França"
        ],
        "answer": "Dependência econômica de Portugal em relação à Inglaterra e exploração do Brasil",
        "solution": "Grande parte do ouro extraído do Brasil era usado por Portugal para pagar dívidas com a Inglaterra, o que tornava a exploração colonial ainda mais predatória."
    },
    {
        "question": "Por que a Conjuração Baiana teve um desfecho mais violento para seus líderes do que a Conjuração Mineira?",
        "options": [
            "Porque os líderes baianos eram mais ricos e poderosos",
            "Porque o movimento baiano era de origem popular e defendia o fim da escravidão, ameaçando a elite",
            "Porque a Bahia era menos importante para Portugal do que Minas Gerais",
            "Porque a Conjuração Mineira não foi descoberta"
        ],
        "answer": "Porque o movimento baiano era de origem popular e defendia o fim da escravidão, ameaçando a elite",
        "solution": "O caráter popular e as propostas de mudança social radical da Conjuração Baiana assustaram a elite e a Coroa, resultando em uma repressão muito mais severa."
    },
    {
        "question": "O que foi a 'Viradeira'?",
        "options": [
            "Um tipo de dança popular no Brasil colonial",
            "O período que se seguiu à morte do rei D. José I, quando a rainha D. Maria I reverteu muitas das políticas de Pombal",
            "Uma tática militar usada pelos inconfidentes mineiros",
            "A mudança da capital de Salvador para o Rio de Janeiro"
        ],
        "answer": "O período que se seguiu à morte do rei D. José I, quando a rainha D. Maria I reverteu muitas das políticas de Pombal",
        "solution": "Com a subida de D. Maria I ao trono, o Marquês de Pombal caiu em desgraça e muitas de suas reformas centralizadoras e anticlericais foram desfeitas."
    },
    {
        "question": "Qual imposto específico sobre a mineração foi um dos principais estopins para a Conjuração Mineira?",
        "options": [
            "O dízimo",
            "A taxa de iluminação pública",
            "O quinto (20% sobre todo o ouro extraído)",
            "O imposto sobre circulação de mercadorias"
        ],
        "answer": "O quinto (20% sobre todo o ouro extraído)",
        "solution": "O quinto era o principal imposto sobre a mineração. A ameaça da derrama, que cobraria os quintos atrasados de forma violenta, foi o gatilho para a conspiração."
    },
    {
        "question": "A chamada 'Inconfidência Mineira' não chegou a acontecer de fato porque:",
        "options": [
            "Seus líderes desistiram do plano",
            "Foi traída por um de seus membros, Joaquim Silvério dos Reis, antes de ser deflagrada",
            "Tiradentes foi preso antes de conseguir reunir os revoltosos",
            "A Coroa portuguesa perdoou as dívidas, acabando com o motivo da revolta"
        ],
        "answer": "Foi traída por um de seus membros, Joaquim Silvério dos Reis, antes de ser deflagrada",
        "solution": "A conspiração foi denunciada por Joaquim Silvério dos Reis em troca do perdão de suas dívidas com a Coroa, o que levou à prisão de todos os envolvidos."
    },
    {
        "question": "A circulação de panfletos e manuscritos foi uma importante forma de divulgação das ideias na:",
        "options": [
            "Guerra dos Mascates",
            "Revolta de Beckman",
            "Conjuração Baiana",
            "Guerra dos Emboabas"
        ],
        "answer": "Conjuração Baiana",
        "solution": "Os revoltosos da Conjuração Baiana espalharam panfletos manuscritos por Salvador, conclamando a população a lutar por uma república, pelo fim da escravidão e por melhores condições de vida."
    },
    {
        "question": "Qual era a principal atividade econômica do Brasil no século XVIII?",
        "options": [
            "Cultivo de café",
            "Produção de açúcar",
            "Extração de pau-brasil",
            "Mineração de ouro e diamantes"
        ],
        "answer": "Mineração de ouro e diamantes",
        "solution": "O século XVIII é conhecido como o 'Século do Ouro' no Brasil, pois a mineração em Minas Gerais, Goiás e Mato Grosso se tornou a principal fonte de riqueza da colônia e de Portugal."
    },
    {
        "question": "O que a crise do sistema colonial demonstrava sobre a relação entre colônia e metrópole?",
        "options": [
            "A harmonia de interesses entre colonos e portugueses",
            "A crescente divergência de interesses e o aumento da insatisfação na colônia",
            "A capacidade de Portugal de controlar todas as revoltas facilmente",
            "O desejo dos colonos de se tornarem cidadãos portugueses plenos"
        ],
        "answer": "A crescente divergência de interesses e o aumento da insatisfação na colônia",
        "solution": "As revoltas e conjurações mostravam que os interesses da elite colonial e da população em geral já não eram os mesmos de Portugal, abrindo caminho para a ruptura."
    },

    // HISTÓRIA - CAPÍTULO 8: BRASIL: A CAMINHO DA INDEPENDÊNCIA (20 QUESTÕES)
    {
        "question": "O que motivou a transferência da corte portuguesa para o Brasil em 1808?",
        "options": [
            "Uma crise econômica em Portugal",
            "Um convite dos colonos brasileiros",
            "A invasão de Portugal pelas tropas de Napoleão Bonaparte",
            "A busca por novas oportunidades de comércio na América"
        ],
        "answer": "A invasão de Portugal pelas tropas de Napoleão Bonaparte",
        "solution": "Para não se submeter ao domínio francês, a corte portuguesa, liderada por D. João VI, decidiu se transferir para sua colônia mais importante, o Brasil, sob a proteção da esquadra britânica."
    },
    {
        "question": "Qual foi a principal consequência da Abertura dos Portos às Nações Amigas em 1808?",
        "options": [
            "Reforçou o monopólio comercial de Portugal",
            "Isolou o Brasil do comércio internacional",
            "Pôs fim ao Pacto Colonial, beneficiando principalmente a Inglaterra",
            "Permitiu apenas o comércio com a França"
        ],
        "answer": "Pôs fim ao Pacto Colonial, beneficiando principalmente a Inglaterra",
        "solution": "A medida, tomada por D. João VI logo após sua chegada, encerrou o exclusivo comercial português e abriu o Brasil ao comércio com outras nações, com vantagens para os produtos ingleses."
    },
    {
        "question": "A elevação do Brasil a Reino Unido de Portugal e Algarves em 1815 significou que:",
        "options": [
            "O Brasil se tornou mais dependente de Portugal",
            "O Brasil deixou de ser oficialmente uma colônia e ganhou um novo status político",
            "D. João VI deveria retornar imediatamente para Portugal",
            "A escravidão foi abolida no território"
        ],
        "answer": "O Brasil deixou de ser oficialmente uma colônia e ganhou um novo status político",
        "solution": "Essa medida deu ao Brasil um status igual ao de Portugal, tornando o Rio de Janeiro a sede do império português e consolidando as mudanças iniciadas em 1808."
    },
    {
        "question": "O que foi a Revolução Liberal do Porto de 1820?",
        "options": [
            "Um movimento no Brasil para expulsar a família real",
            "Uma revolução em Portugal que exigia o retorno de D. João VI e a criação de uma Constituição",
            "Uma guerra entre Portugal e Espanha pelo controle do comércio atlântico",
            "Um movimento popular no Rio de Janeiro pedindo a independência"
        ],
        "answer": "Uma revolução em Portugal que exigia o retorno de D. João VI e a criação de uma Constituição",
        "solution": "A revolução exigia o fim do absolutismo em Portugal, a elaboração de uma constituição e o retorno do rei, além de tentar recolonizar o Brasil."
    },
    {
        "question": "Qual foi a principal consequência da Revolução do Porto para o Brasil?",
        "options": [
            "O fortalecimento da posição de D. João VI no Rio de Janeiro",
            "Aceleração do processo de independência, devido à tentativa de recolonização",
            "A união das elites brasileiras em apoio a Portugal",
            "A fragmentação do Brasil em várias repúblicas"
        ],
        "answer": "Aceleração do processo de independência, devido à tentativa de recolonização",
        "solution": "As Cortes portuguesas tentaram reverter a autonomia que o Brasil havia conquistado, o que uniu as elites brasileiras em torno da ideia de separação."
    },
    {
        "question": "O 'Dia do Fico', em 9 de janeiro de 1822, representou:",
        "options": [
            "A data em que D. João VI decidiu voltar para Portugal",
            "A declaração oficial da Independência do Brasil",
            "A decisão de D. Pedro de permanecer no Brasil, contrariando as ordens das Cortes portuguesas",
            "A coroação de D. Pedro como imperador do Brasil"
        ],
        "answer": "A decisão de D. Pedro de permanecer no Brasil, contrariando as ordens das Cortes portuguesas",
        "solution": "O 'Fico' foi um passo decisivo para a independência, pois D. Pedro se tornou o líder da resistência brasileira contra as tentativas de recolonização."
    },
    {
        "question": "Quem foi a figura feminina que teve papel ativo no processo de independência, assinando o decreto de separação na ausência de D. Pedro?",
        "options": [
            "Carlota Joaquina",
            "Imperatriz Leopoldina",
            "Marquesa de Santos",
            "Anita Garibaldi"
        ],
        "answer": "Imperatriz Leopoldina",
        "solution": "Como princesa regente, Leopoldina presidiu a sessão do Conselho de Estado que decidiu pela separação definitiva de Portugal, sendo uma articuladora crucial da independência."
    },
    {
        "question": "O 'Grito do Ipiranga', em 7 de setembro de 1822, simboliza:",
        "options": [
            "O início das negociações diplomáticas com Portugal",
            "O rompimento definitivo dos laços políticos entre Brasil e Portugal",
            "A coroação de D. Pedro I",
            "O fim das guerras de independência"
        ],
        "answer": "O rompimento definitivo dos laços políticos entre Brasil e Portugal",
        "solution": "Às margens do riacho Ipiranga, D. Pedro declarou a separação, um ato simbólico que formalizou a decisão política já tomada pela elite brasileira."
    },
    {
        "question": "A independência do Brasil foi um processo totalmente pacífico?",
        "options": [
            "Sim, Portugal aceitou a separação imediatamente e sem conflitos",
            "Não, ocorreram as chamadas Guerras de Independência em províncias com forte presença de tropas portuguesas",
            "Sim, pois a independência foi comprada do governo português",
            "Não, a guerra foi apenas contra a França, que tentou invadir o Brasil"
        ],
        "answer": "Não, ocorreram as chamadas Guerras de Independência em províncias com forte presença de tropas portuguesas",
        "solution": "Houve conflitos armados em províncias como Bahia, Pará, Maranhão e Cisplatina (atual Uruguai) para expulsar as tropas leais a Portugal."
    },
    {
        "question": "Qual foi a principal forma de governo adotada pelo Brasil após a independência?",
        "options": [
            "República Presidencialista",
            "República Parlamentarista",
            "Monarquia Constitucional",
            "Ditadura Militar"
        ],
        "answer": "Monarquia Constitucional",
        "solution": "Ao contrário de seus vizinhos hispano-americanos que se tornaram repúblicas, o Brasil optou por uma monarquia, com D. Pedro I como seu primeiro imperador."
    },
    {
        "question": "A vinda da família real para o Brasil resultou na criação de importantes instituições, como:",
        "options": [
            "A Universidade de São Paulo (USP)",
            "O Banco do Brasil, a Biblioteca Real e o Jardim Botânico",
            "A Petrobras e a Eletrobras",
            "O Instituto Butantan e a Fiocruz"
        ],
        "answer": "O Banco do Brasil, a Biblioteca Real e o Jardim Botânico",
        "solution": "A presença da corte no Rio de Janeiro promoveu uma modernização na cidade, com a criação de diversas instituições culturais, científicas e econômicas."
    },
    {
        "question": "Os Tratados de 1810, assinados com a Inglaterra, garantiam:",
        "options": [
            "A proibição total do comércio entre Brasil e Inglaterra",
            "Altas tarifas para os produtos ingleses no Brasil",
            "Privilégios comerciais e jurídicos para a Inglaterra no Brasil",
            "A devolução do Brasil para o domínio português"
        ],
        "answer": "Privilégios comerciais e jurídicos para a Inglaterra no Brasil",
        "solution": "Esses tratados davam à Inglaterra vantagens como tarifas de importação mais baixas que as de Portugal e o direito de cidadãos britânicos serem julgados por suas próprias leis, consolidando a influência inglesa."
    },
    {
        "question": "A Revolução Pernambucana de 1817, ocorrida antes da independência, defendia:",
        "options": [
            "A coroação de D. João VI como imperador",
            "A proclamação de uma república independente em Pernambuco",
            "A volta imediata da família real para Portugal",
            "A manutenção do monopólio comercial português"
        ],
        "answer": "A proclamação de uma república independente em Pernambuco",
        "solution": "Foi um movimento separatista de caráter republicano, influenciado pelo Iluminismo, que chegou a tomar o poder em Pernambuco por cerca de 75 dias antes de ser duramente reprimido."
    },
    {
        "question": "Após a independência, o que aconteceu com a estrutura social e econômica do Brasil?",
        "options": [
            "Houve uma grande reforma agrária e a abolição da escravidão",
            "O Brasil se industrializou rapidamente",
            "A estrutura baseada no latifúndio e na escravidão foi mantida",
            "Todos os brasileiros passaram a ter direitos políticos iguais"
        ],
        "answer": "A estrutura baseada no latifúndio e na escravidão foi mantida",
        "solution": "A independência foi um arranjo político liderado pela elite que não alterou as bases da sociedade. A economia continuou agroexportadora e a escravidão foi mantida por mais 66 anos."
    },
    {
        "question": "Qual país foi o primeiro a reconhecer a independência do Brasil, em troca de seus próprios interesses comerciais?",
        "options": [
            "Portugal",
            "França",
            "Espanha",
            "Estados Unidos"
        ],
        "answer": "Estados Unidos",
        "solution": "Os EUA reconheceram a independência do Brasil em 1824, em linha com a Doutrina Monroe ('América para os Americanos'), visando ampliar sua influência e comércio no continente."
    },
    {
        "question": "Para que Portugal reconhecesse a independência, o Brasil teve que:",
        "options": [
            "Declarar guerra à Inglaterra",
            "Pagar uma pesada indenização a Portugal",
            "Adotar o parlamentarismo",
            "Devolver a província da Cisplatina"
        ],
        "answer": "Pagar uma pesada indenização a Portugal",
        "solution": "Mediante um acordo intermediado pela Inglaterra, o Brasil concordou em pagar 2 milhões de libras esterlinas a Portugal, iniciando sua dívida externa."
    },
    {
        "question": "O 'Cumpra-se' foi uma medida de D. Pedro que determinava que:",
        "options": [
            "Todas as leis de Portugal seriam automaticamente válidas no Brasil",
            "As leis vindas de Portugal só teriam validade no Brasil com a sua autorização",
            "A escravidão deveria ser abolida imediatamente",
            "O Brasil deveria pagar mais impostos a Portugal"
        ],
        "answer": "As leis vindas de Portugal só teriam validade no Brasil com a sua autorização",
        "solution": "Essa medida, de maio de 1822, reforçou a autoridade de D. Pedro e a autonomia do Brasil, sendo mais um passo importante rumo à separação total."
    },
    {
        "question": "A participação popular no processo de independência do Brasil foi:",
        "options": [
            "Inexistente, foi um processo totalmente pacífico e diplomático",
            "Intensa em todo o país, com o povo liderando o movimento",
            "Limitada, mas presente nas guerras de independência e em revoltas locais",
            "Restrita apenas aos escravizados que lutavam pela liberdade"
        ],
        "answer": "Limitada, mas presente nas guerras de independência e em revoltas locais",
        "solution": "Embora liderada pela elite, a independência contou com a participação de camadas populares, especialmente nos exércitos e milícias que lutaram nas guerras de independência."
    },
    {
        "question": "A transferência da corte portuguesa para o Brasil é chamada por alguns historiadores de 'inversão brasileira'. Por quê?",
        "options": [
            "Porque o Brasil se tornou economicamente inferior a Portugal",
            "Porque a colônia passou a ser a sede do império, invertendo a relação de poder com a metrópole",
            "Porque o clima no Brasil era o inverso do de Portugal",
            "Porque os brasileiros passaram a governar Portugal"
        ],
        "answer": "Porque a colônia passou a ser a sede do império, invertendo a relação de poder com a metrópole",
        "solution": "Com a vinda da corte, o Rio de Janeiro se tornou o centro de decisões do Império Português, uma situação inédita na história da colonização."
    },
    {
        "question": "José Bonifácio de Andrada e Silva teve um papel crucial na independência como:",
        "options": [
            "Líder militar nas guerras de independência",
            "Principal adversário de D. Pedro, defendendo a república",
            "Principal conselheiro de D. Pedro e articulador político da independência",
            "Representante dos interesses portugueses no Brasil"
        ],
        "answer": "Principal conselheiro de D. Pedro e articulador político da independência",
        "solution": "Conhecido como o 'Patriarca da Independência', José Bonifácio foi um ministro influente que orientou D. Pedro e ajudou a consolidar o projeto de um Brasil monárquico e independente."
    },

    // HISTÓRIA - CAPÍTULO 9: O BRASIL DO COMEÇO DO SÉCULO XIX (20 QUESTÕES)
    {
        "question": "A sociedade brasileira no início do Império era predominantemente:",
        "options": [
            "Urbana e industrializada",
            "Rural, patriarcal e escravocrata",
            "Igualitária, com forte presença de imigrantes europeus",
            "Composta por pequenas propriedades com trabalho livre"
        ],
        "answer": "Rural, patriarcal e escravocrata",
        "solution": "A economia era baseada no latifúndio agroexportador, a sociedade era organizada em torno da figura do grande proprietário de terras e a mão de obra principal era a escravizada."
    },
    {
        "question": "A Constituição de 1824, outorgada por D. Pedro I, é caracterizada pela criação do:",
        "options": [
            "Poder Absoluto, que dava plenos poderes ao povo",
            "Poder Moderador, de uso exclusivo do Imperador",
            "Voto universal para todos os homens e mulheres",
            "Federalismo, com autonomia para as províncias"
        ],
        "answer": "Poder Moderador, de uso exclusivo do Imperador",
        "solution": "O Poder Moderador estava acima dos outros três poderes (Executivo, Legislativo e Judiciário) e dava ao imperador a autoridade para intervir em todos eles, caracterizando o seu autoritarismo."
    },
    {
        "question": "O sistema eleitoral da Constituição de 1824 era:",
        "options": [
            "Universal e direto",
            "Censitário e indireto",
            "Aberto a todos os brasileiros, incluindo escravizados",
            "Restrito apenas aos portugueses que viviam no Brasil"
        ],
        "answer": "Censitário e indireto",
        "solution": "O voto era censitário, ou seja, baseado na renda. Apenas homens com determinada renda podiam votar, e as eleições eram indiretas (elegia-se um colégio eleitoral que escolhia os representantes)."
    },
    {
        "question": "A Confederação do Equador (1824) foi uma revolta em Pernambuco contra:",
        "options": [
            "A coroação de D. Pedro I",
            "O autoritarismo do imperador e a dissolução da Assembleia Constituinte",
            "A manutenção da escravidão no Nordeste",
            "A aliança do Brasil com a Inglaterra"
        ],
        "answer": "O autoritarismo do imperador e a dissolução da Assembleia Constituinte",
        "solution": "O movimento, de caráter republicano e separatista, foi uma reação à dissolução da Constituinte de 1823 e à imposição da Constituição de 1824 por D. Pedro I."
    },
    {
        "question": "Qual foi o principal resultado da Guerra da Cisplatina (1825-1828) para o Brasil?",
        "options": [
            "A anexação definitiva da Cisplatina ao território brasileiro",
            "A vitória do Brasil sobre a Argentina",
            "A perda da Província Cisplatina, que se tornou a República Oriental do Uruguai",
            "A consolidação da popularidade de D. Pedro I"
        ],
        "answer": "A perda da Província Cisplatina, que se tornou a República Oriental do Uruguai",
        "solution": "A guerra gerou altos custos financeiros e de vidas, resultando na perda do território e aumentando o desgaste da imagem do imperador."
    },
    {
        "question": "A abdicação de D. Pedro I em 1831 foi resultado de uma crise causada por:",
        "options": [
            "Uma grave doença que o impediu de governar",
            "Seu autoritarismo, a crise econômica e o desgaste com as elites brasileiras",
            "Uma invasão estrangeira que tomou o Rio de Janeiro",
            "Seu desejo de retornar a Portugal para assumir o trono"
        ],
        "answer": "Seu autoritarismo, a crise econômica e o desgaste com as elites brasileiras",
        "solution": "Fatores como a repressão à Confederação do Equador, a crise econômica, o assassinato do jornalista Líbero Badaró e seu envolvimento na sucessão do trono português levaram à sua renúncia."
    },
    {
        "question": "Qual era a condição social das mulheres no Brasil Império?",
        "options": [
            "Tinham os mesmos direitos políticos que os homens",
            "Eram as principais chefes de família e donas de propriedades",
            "Viviam sob a autoridade do pai ou do marido, com atuação restrita ao espaço doméstico",
            "Tinham acesso livre à educação formal e às universidades"
        ],
        "answer": "Viviam sob a autoridade do pai ou do marido, com atuação restrita ao espaço doméstico",
        "solution": "Na sociedade patriarcal do Império, o papel da mulher, especialmente na elite, era restrito ao lar, sendo submissa à autoridade masculina e sem direitos políticos."
    },
    {
        "question": "A vida dos escravizados no início do Império era marcada por:",
        "options": [
            "Trabalho assalariado e boas condições de vida",
            "Violência, trabalho forçado e ausência de direitos",
            "Acesso à educação e possibilidade de ascensão social",
            "Jornadas de trabalho curtas e descanso semanal remunerado"
        ],
        "answer": "Violência, trabalho forçado e ausência de direitos",
        "solution": "Os escravizados eram considerados propriedade, submetidos a jornadas de trabalho exaustivas, castigos físicos e sem qualquer tipo de direito civil ou político."
    },
    {
        "question": "O que era o 'tráfico negreiro'?",
        "options": [
            "O comércio de produtos agrícolas entre Brasil e África",
            "O sequestro e transporte forçado de africanos para serem escravizados no Brasil",
            "O movimento de abolição da escravidão",
            "O retorno de ex-escravizados para a África"
        ],
        "answer": "O sequestro e transporte forçado de africanos para serem escravizados no Brasil",
        "solution": "O tráfico negreiro foi uma atividade extremamente lucrativa que abasteceu o Brasil com mão de obra escravizada por mais de três séculos, causando a morte de milhões de africanos."
    },
    {
        "question": "O que foi a 'Noite das Garrafadas'?",
        "options": [
            "Uma grande festa popular em comemoração ao aniversário do imperador",
            "Um conflito no Rio de Janeiro entre brasileiros e portugueses que apoiavam D. Pedro I",
            "A celebração da abdicação de D. Pedro I",
            "Um debate na Assembleia sobre a importação de vinhos"
        ],
        "answer": "Um conflito no Rio de Janeiro entre brasileiros e portugueses que apoiavam D. Pedro I",
        "solution": "Foi um confronto de rua que evidenciou a forte tensão entre o 'partido brasileiro' e os apoiadores portugueses do imperador, acelerando a crise que levou à sua abdicação."
    },
    {
        "question": "A dissolução da Assembleia Constituinte em 1823 por D. Pedro I demonstrou seu:",
        "options": [
            "Compromisso com a democracia e a soberania popular",
            "Desejo de criar uma constituição liberal e federalista",
            "Caráter autoritário e centralizador",
            "Medo de uma invasão portuguesa"
        ],
        "answer": "Caráter autoritário e centralizador",
        "solution": "D. Pedro I fechou a Assembleia quando percebeu que a constituição que estava sendo elaborada (a 'Constituição da Mandioca') limitaria seus poderes."
    },
    {
        "question": "Qual a principal atividade econômica do Brasil no Primeiro Reinado?",
        "options": [
            "Mineração de ouro",
            "Extração de látex na Amazônia",
            "Cultivo de café, que começava a se expandir",
            "Produção industrial"
        ],
        "answer": "Cultivo de café, que começava a se expandir",
        "solution": "Embora o açúcar e o algodão ainda fossem importantes, o café, cultivado no Vale do Paraíba (Rio de Janeiro e São Paulo), iniciava sua ascensão para se tornar o principal produto de exportação do Brasil."
    },
    {
        "question": "A situação das crianças no Brasil Império era marcada pela:",
        "options": [
            "Educação pública e gratuita para todas",
            "Proteção legal contra o trabalho infantil",
            "Alta mortalidade infantil e início precoce no trabalho",
            "Proibição de castigos físicos pelos pais"
        ],
        "answer": "Alta mortalidade infantil e início precoce no trabalho",
        "solution": "As condições de higiene eram precárias, a mortalidade infantil era altíssima, e as crianças pobres e escravizadas começavam a trabalhar muito cedo."
    },
    {
        "question": "As populações indígenas no início do Império enfrentaram:",
        "options": [
            "A demarcação de suas terras e o respeito à sua cultura",
            "A perda de terras para a expansão agrícola e a violência dos colonos",
            "A integração total à sociedade brasileira com direitos plenos",
            "O incentivo do governo para que mantivessem seu modo de vida isolado"
        ],
        "answer": "A perda de terras para a expansão agrícola e a violência dos colonos",
        "solution": "Com a expansão do café e da pecuária, os indígenas foram expulsos de suas terras, escravizados ou mortos em conflitos, dando continuidade ao processo de expropriação iniciado na colônia."
    },
    {
        "question": "Qual foi a principal consequência da abdicação de D. Pedro I para a política brasileira?",
        "options": [
            "A restauração do domínio português",
            "O início do Período Regencial, uma fase de grande instabilidade política",
            "A coroação imediata de seu filho, D. Pedro II",
            "A proclamação da República"
        ],
        "answer": "O início do Período Regencial, uma fase de grande instabilidade política",
        "solution": "Como seu filho e herdeiro, Pedro de Alcântara, tinha apenas cinco anos, o Brasil teve que ser governado por regentes até que ele atingisse a maioridade."
    },
    {
        "question": "O 'assassinato de Líbero Badaró', um jornalista opositor, contribuiu para o desgaste de D. Pedro I porque:",
        "options": [
            "Badaró era um aliado político do imperador",
            "O crime foi atribuído a pessoas ligadas ao imperador, aumentando sua fama de tirano",
            "Provou que a liberdade de imprensa era total no Brasil",
            "Levou a uma guerra civil"
        ],
        "answer": "O crime foi atribuído a pessoas ligadas ao imperador, aumentando sua fama de tirano",
        "solution": "O assassinato do jornalista, que fazia duras críticas ao governo, gerou uma enorme comoção e foi visto como um ataque à liberdade de imprensa, desgastando ainda mais a imagem de D. Pedro I."
    },
    {
        "question": "A crise financeira do Primeiro Reinado foi agravada pela:",
        "options": [
            "Criação do Banco do Brasil, que estabilizou a economia",
            "Superprodução de café, que gerou lucros recordes",
            "Falência do Banco do Brasil e emissão descontrolada de moeda",
            "Redução de todos os impostos de importação"
        ],
        "answer": "Falência do Banco do Brasil e emissão descontrolada de moeda",
        "solution": "A má gestão financeira, os gastos com a Guerra da Cisplatina e a falência do primeiro Banco do Brasil levaram a uma alta inflação e aprofundaram a crise econômica."
    },
    {
        "question": "Por que o envolvimento de D. Pedro I na questão da sucessão do trono português desagradou as elites brasileiras?",
        "options": [
            "Porque elas queriam que o Brasil e Portugal se unissem novamente",
            "Porque temiam que o imperador usasse recursos do Brasil para seus interesses em Portugal, ameaçando a soberania brasileira",
            "Porque elas apoiavam o irmão de D. Pedro, D. Miguel, para o trono português",
            "Porque a sucessão portuguesa não tinha nenhuma importância para o Brasil"
        ],
        "answer": "Porque temiam que o imperador usasse recursos do Brasil para seus interesses em Portugal, ameaçando a soberania brasileira",
        "solution": "As elites viam o imperador mais preocupado com os assuntos de Portugal do que com os do Brasil, o que alimentava a desconfiança e o sentimento antilusitano."
    },
    {
        "question": "A 'Guerra do Paraguai' ocorreu durante o Primeiro Reinado?",
        "options": [
            "Sim, foi o principal conflito militar do período",
            "Não, ela ocorreu durante o Segundo Reinado, sob o governo de D. Pedro II",
            "Sim, e foi a principal causa da abdicação de D. Pedro I",
            "Não, foi um conflito do Período Regencial"
        ],
        "answer": "Não, ela ocorreu durante o Segundo Reinado, sob o governo de D. Pedro II",
        "solution": "A Guerra do Paraguai (1864-1870) foi o maior conflito da história da América do Sul e ocorreu décadas após o fim do Primeiro Reinado."
    },
    {
        "question": "O que era a Guarda Nacional, criada no Período Regencial mas com origens no final do Primeiro Reinado?",
        "options": [
            "O exército profissional brasileiro",
            "Uma força militar controlada pelos grandes proprietários de terras (coronéis)",
            "A polícia secreta do imperador",
            "Um grupo de voluntários para lutar na África"
        ],
        "answer": "Uma força militar controlada pelos grandes proprietários de terras (coronéis)",
        "solution": "A Guarda Nacional foi criada para manter a ordem e reprimir revoltas, mas na prática se tornou um instrumento de poder dos fazendeiros locais, reforçando o poder do latifúndio."
    },

    // HISTÓRIA - CAPÍTULO 10: A REGÊNCIA E SUAS REVOLTAS (20 QUESTÕES)
    {
        "question": "O Período Regencial (1831-1840) é conhecido como uma fase de:",
        "options": [
            "Grande estabilidade política e crescimento econômico",
            "Expansão das fronteiras brasileiras pela via diplomática",
            "Intensa agitação política, disputas entre facções e numerosas revoltas sociais",
            "Centralização do poder no Rio de Janeiro sem nenhuma oposição"
        ],
        "answer": "Intensa agitação política, disputas entre facções e numerosas revoltas sociais",
        "solution": "Com a ausência de um imperador, o Período Regencial foi marcado por disputas entre liberais e conservadores e por revoltas que ameaçaram a unidade territorial do Brasil."
    },
    {
        "question": "A Cabanagem, ocorrida no Pará (1835-1840), foi uma revolta marcada por:",
        "options": [
            "Ser um movimento de elite que buscava mais poder político",
            "Sua intensa participação popular (indígenas, negros e mestiços) contra a miséria",
            "Lutar pela volta de D. Pedro I ao trono do Brasil",
            "Ser um movimento pacífico e de negociação com o governo central"
        ],
        "answer": "Sua intensa participação popular (indígenas, negros e mestiços) contra a miséria",
        "solution": "A Cabanagem foi uma das revoltas mais populares e violentas do Brasil, onde a população pobre ('cabanos') chegou a tomar o poder, lutando contra a exploração e o abandono político."
    },
    {
        "question": "A Revolta dos Malês (1835), em Salvador, foi um levante de:",
        "options": [
            "Grandes fazendeiros contra os impostos do governo",
            "Soldados que exigiam melhores salários",
            "Escravizados e libertos muçulmanos que lutavam pela liberdade e contra a imposição do catolicismo",
            "Índígenas que tentavam recuperar suas terras"
        ],
        "answer": "Escravizados e libertos muçulmanos que lutavam pela liberdade e contra a imposição do catolicismo",
        "solution": "A Revolta dos Malês foi uma rebelião urbana muito bem organizada por escravizados africanos islamizados (malês), que, apesar de duramente reprimida, abalou o sistema escravista."
    },
    {
        "question": "A Revolução Farroupilha ou Guerra dos Farrapos (1835-1845), no Rio Grande do Sul, foi:",
        "options": [
            "Uma curta revolta de escravizados por liberdade",
            "A mais longa revolta do Brasil, liderada pela elite estancieira contra os altos impostos",
            "Um movimento popular pela reforma agrária",
            "Uma guerra contra a Argentina pela posse do Uruguai"
        ],
        "answer": "A mais longa revolta do Brasil, liderada pela elite estancieira contra os altos impostos",
        "solution": "Liderada por estancieiros (criadores de gado), a Revolução Farroupilha tinha caráter republicano e separatista, motivada principalmente pela insatisfação com a política fiscal do governo central."
    },
    {
        "question": "O que foi o 'Ato Adicional de 1834'?",
        "options": [
            "Uma lei que aboliu a escravidão no Brasil",
            "Uma emenda à Constituição que criou as Assembleias Legislativas Provinciais, dando mais autonomia às províncias",
            "Um decreto que declarou guerra à Argentina",
            "Uma lei que antecipou a maioridade de D. Pedro II"
        ],
        "answer": "Uma emenda à Constituição que criou as Assembleias Legislativas Provinciais, dando mais autonomia às províncias",
        "solution": "O Ato Adicional foi uma tentativa de conciliar centralização e federalismo, extinguindo o Conselho de Estado e dando mais autonomia às províncias, o que na prática aumentou as disputas locais."
    },
    {
        "question": "A Sabinada (1837-1838), na Bahia, defendia:",
        "options": [
            "A separação definitiva da Bahia do resto do Brasil",
            "A proclamação de uma República baiana até a maioridade de D. Pedro II",
            "A volta imediata de D. Pedro I",
            "O fim da escravidão em todo o território nacional"
        ],
        "answer": "A proclamação de uma República baiana até a maioridade de D. Pedro II",
        "solution": "Liderada por setores da classe média urbana, a Sabinada tinha um caráter separatista, mas provisório, pois condicionava a reintegração ao Brasil à coroação do jovem imperador."
    },
    {
        "question": "A Balaiada (1838-1841), no Maranhão, teve sua origem em:",
        "options": [
            "Disputas entre a elite pelo poder e na insatisfação de vaqueiros, artesãos e escravizados",
            "Um plano de invasão do Brasil pela França",
            "Uma grande seca que devastou a província",
            "Uma lei que proibia a fabricação de balaios"
        ],
        "answer": "Disputas entre a elite pelo poder e na insatisfação de vaqueiros, artesãos e escravizados",
        "solution": "A Balaiada foi um movimento complexo que começou com disputas políticas entre os 'bem-te-vis' (liberais) e a aristocracia local, mas que ganhou uma forte conotação popular."
    },
    {
        "question": "O que foi o 'Golpe da Maioridade' em 1840?",
        "options": [
            "Uma tentativa de D. Pedro II de se tornar um ditador",
            "A declaração de independência do Brasil",
            "A antecipação da maioridade de D. Pedro II, que assumiu o trono com 14 anos",
            "Um movimento para derrubar a regência e proclamar a república"
        ],
        "answer": "A antecipação da maioridade de D. Pedro II, que assumiu o trono com 14 anos",
        "solution": "Foi uma manobra política dos liberais para pôr fim à instabilidade do Período Regencial, centralizando o poder na figura do imperador e pacificando o país."
    },
    {
        "question": "Qual das revoltas regenciais chegou a proclamar duas repúblicas independentes?",
        "options": [
            "Cabanagem",
            "Sabinada",
            "Revolta dos Malês",
            "Revolução Farroupilha"
        ],
        "answer": "Revolução Farroupilha",
        "solution": "Durante a longa guerra, os farrapos proclamaram a República Rio-Grandense e, com o auxílio de Giuseppe Garibaldi, a República Juliana (em Santa Catarina)."
    },
    {
        "question": "A Guarda Nacional, criada em 1831, teve um papel fundamental no Período Regencial para:",
        "options": [
            "Defender as fronteiras do Brasil contra invasões",
            "Reprimir as revoltas populares e manter a ordem escravista",
            "Promover a educação e a cidadania",
            "Lutar pela abolição da escravidão"
        ],
        "answer": "Reprimir as revoltas populares e manter a ordem escravista",
        "solution": "Controlada pelas elites locais (coronéis), a Guarda Nacional foi o principal instrumento armado do Estado para conter as agitações sociais e garantir a manutenção da estrutura de poder."
    },
    {
        "question": "A disputa política durante a Regência se deu principalmente entre quais grupos?",
        "options": [
            "Monarquistas e Anarquistas",
            "Liberais (moderados e exaltados) e Conservadores (restauradores)",
            "Industrialistas e Agraristas",
            "Católicos e Protestantes"
        ],
        "answer": "Liberais (moderados e exaltados) e Conservadores (restauradores)",
        "solution": "A política regencial foi marcada pelo embate entre diferentes projetos para o Brasil: os liberais defendiam mais autonomia provincial, enquanto os conservadores (ou caramurus) queriam a volta de D. Pedro I."
    },
    {
        "question": "Qual o significado do nome 'Cabanagem'?",
        "options": [
            "Refere-se ao líder da revolta, Vicente Cabano",
            "É uma homenagem à cabana onde o plano foi traçado",
            "Refere-se à população pobre que vivia em cabanas às margens dos rios",
            "Era o nome do navio que trouxe as armas para os revoltosos"
        ],
        "answer": "Refere-se à população pobre que vivia em cabanas às margens dos rios",
        "solution": "O termo 'cabano' era usado de forma pejorativa pela elite para designar a população pobre da Amazônia que se levantou contra a opressão."
    },
    {
        "question": "A 'Lei Feijó' de 1831, que proibia o tráfico de escravos, ficou conhecida como uma 'lei para inglês ver'. Por quê?",
        "options": [
            "Porque foi escrita em inglês",
            "Porque foi uma lei criada apenas para agradar à Inglaterra, mas que não foi cumprida na prática",
            "Porque só era válida para escravos comprados da Inglaterra",
            "Porque foi proposta por um diplomata inglês chamado Feijó"
        ],
        "answer": "Porque foi uma lei criada apenas para agradar à Inglaterra, mas que não foi cumprida na prática",
        "solution": "A lei foi aprovada para atender às pressões da Inglaterra pelo fim do tráfico, mas as autoridades brasileiras não a fiscalizavam, e o comércio de escravizados continuou intenso."
    },
    {
        "question": "A figura de Anita Garibaldi está associada a qual revolta regencial?",
        "options": [
            "Balaiada",
            "Sabinada",
            "Revolução Farroupilha",
            "Cabanagem"
        ],
        "answer": "Revolução Farroupilha",
        "solution": "Anita Garibaldi lutou ao lado de seu companheiro, o italiano Giuseppe Garibaldi, nas batalhas da Revolução Farroupilha, tornando-se um símbolo de coragem e luta."
    },
    {
        "question": "O que era a 'Regência Trina'?",
        "options": [
            "O governo de três imperadores ao mesmo tempo",
            "A primeira fase da Regência, governada por três regentes",
            "Um conselho de três generais que comandava o exército",
            "Um imposto triplo sobre a produção de café"
        ],
        "answer": "A primeira fase da Regência, governada por três regentes",
        "solution": "Após a abdicação de D. Pedro I, o Brasil foi governado por uma Regência Trina (Provisória e depois Permanente) até 1835, quando foi substituída pela Regência Una."
    },
    {
        "question": "Quem foi o Regente Uno que governou com poderes quase monárquicos, gerando oposição?",
        "options": [
            "José Bonifácio",
            "Diogo Antônio Feijó",
            "Bento Gonçalves",
            "Luís Alves de Lima e Silva (Duque de Caxias)"
        ],
        "answer": "Diogo Antônio Feijó",
        "solution": "Eleito em 1835, o padre Feijó governou de forma centralizadora, o que gerou forte oposição e o surgimento do Partido Conservador. Ele renunciou em 1837."
    },
    {
        "question": "O fim da Revolução Farroupilha ocorreu através de:",
        "options": [
            "Uma derrota militar esmagadora dos farrapos",
            "Um acordo de paz (Tratado de Poncho Verde) que anistiou os revoltosos",
            "A morte de todos os seus líderes",
            "Uma intervenção militar da Argentina"
        ],
        "answer": "Um acordo de paz (Tratado de Poncho Verde) que anistiou os revoltosos",
        "solution": "Já no Segundo Reinado, o governo imperial, liderado por Caxias, negociou a paz, concedendo anistia aos líderes e incorporando os oficiais farrapos ao exército brasileiro."
    },
    {
        "question": "Qual foi a principal consequência política do turbulento Período Regencial?",
        "options": [
            "A fragmentação do Brasil em várias repúblicas independentes",
            "O fortalecimento do federalismo e da autonomia provincial",
            "A consolidação de um sentimento de que apenas um poder central forte (o imperador) poderia garantir a unidade do país",
            "A abolição definitiva da monarquia"
        ],
        "answer": "A consolidação de um sentimento de que apenas um poder central forte (o imperador) poderia garantir a unidade do país",
        "solution": "A experiência regencial, com suas inúmeras revoltas, convenceu as elites políticas da necessidade de um poder centralizador, o que levou ao Golpe da Maioridade e à consolidação do Segundo Reinado."
    },
    {
        "question": "A figura de Duque de Caxias se notabilizou no Período Regencial como:",
        "options": [
            "Líder de várias revoltas populares",
            "Um político liberal que defendia o federalismo",
            "O principal militar do Império, responsável por reprimir diversas revoltas (Balaiada, Farroupilha)",
            "O regente que governou o Brasil por mais tempo"
        ],
        "answer": "O principal militar do Império, responsável por reprimir diversas revoltas (Balaiada, Farroupilha)",
        "solution": "Caxias ganhou o apelido de 'O Pacificador' por sua atuação militar decisiva na contenção das rebeliões que ameaçavam a unidade do Império Brasileiro."
    },
    {
        "question": "Qual das revoltas regenciais NÃO tinha um caráter separatista?",
        "options": [
            "Cabanagem",
            "Revolução Farroupilha",
            "Sabinada",
            "Revolta dos Malês"
        ],
        "answer": "Revolta dos Malês",
        "solution": "A Revolta dos Malês não buscava a separação de uma província, mas sim a libertação dos escravizados e a criação de uma sociedade islâmica, sendo uma revolta social e religiosa."
    },

    // GEOGRAFIA - CAPÍTULO 6: ESTADOS UNIDOS: NASCE UMA POTÊNCIA MUNDIAL (20 QUESTÕES)
    {
        "question": "Qual cadeia de montanhas se estende pela costa leste dos Estados Unidos, sendo mais antiga e de altitudes mais modestas?",
        "options": [
            "Montanhas Rochosas",
            "Serra Nevada",
            "Montes Apalaches",
            "Cordilheira dos Andes"
        ],
        "answer": "Montes Apalaches",
        "solution": "Os Apalaches foram uma barreira natural para os primeiros colonos e se localizam na porção leste do país, sendo geologicamente mais antigos e desgastados que as Rochosas."
    },
    {
        "question": "A região das Grandes Planícies, no centro dos EUA, é caracterizada por qual tipo de clima e vegetação?",
        "options": [
            "Clima equatorial e floresta tropical",
            "Clima polar e tundra",
            "Clima temperado continental e pradarias",
            "Clima desértico e cactos"
        ],
        "answer": "Clima temperado continental e pradarias",
        "solution": "Esta vasta região central possui um clima com grandes variações de temperatura e uma vegetação original de pradarias, hoje amplamente convertida em áreas de cultivo."
    },
    {
        "question": "A 'Marcha para o Oeste' no século XIX foi um processo de:",
        "options": [
            "Recuo da população para o litoral atlântico",
            "Expansão territorial e colonização do interior do continente",
            "Construção de um muro na fronteira com o México",
            "Guerra contra o Canadá pela posse de territórios no norte"
        ],
        "answer": "Expansão territorial e colonização do interior do continente",
        "solution": "Impulsionados pelo 'Destino Manifesto', os colonos americanos expandiram suas fronteiras em direção ao Pacífico, tomando terras de indígenas e do México."
    },
    {
        "question": "A compra da Louisiana da França e da Flórida da Espanha foram exemplos de qual aspecto da formação territorial dos EUA?",
        "options": [
            "Conquista militar de todos os seus territórios",
            "Expansão através de anexações e compras",
            "Isolamento e recusa em expandir suas fronteiras",
            "Devolução de terras aos povos nativos"
        ],
        "answer": "Expansão através de anexações e compras",
        "solution": "Além de guerras, a formação territorial dos EUA envolveu a compra de vastos territórios de potências europeias, como a Louisiana em 1803 e a Flórida em 1819."
    },
    {
        "question": "Qual recurso mineral, descoberto na Califórnia em 1848, acelerou a ocupação do oeste?",
        "options": [
            "Petróleo",
            "Carvão",
            "Ouro",
            "Diamante"
        ],
        "answer": "Ouro",
        "solution": "A 'Corrida do Ouro' da Califórnia atraiu milhares de imigrantes e americanos para o oeste em busca de enriquecimento rápido, impulsionando a colonização da região."
    },
    {
        "question": "O rio que forma uma importante bacia hidrográfica no centro dos EUA e deságua no Golfo do México é o:",
        "options": [
            "Rio Colorado",
            "Rio Columbia",
            "Rio Mississippi",
            "Rio Hudson"
        ],
        "answer": "Rio Mississippi",
        "solution": "A bacia do Mississippi-Missouri é a maior da América do Norte e foi fundamental para o transporte e a agricultura durante a expansão para o oeste."
    },
    {
        "question": "O que foi o 'Homestead Act' (Lei de Terras) de 1862?",
        "options": [
            "Uma lei que proibia a posse de terras no oeste",
            "Uma lei que distribuía terras no oeste a preços simbólicos para quem as cultivasse",
            "Uma lei que criava reservas indígenas em todo o país",
            "Uma lei que proibia a imigração para os EUA"
        ],
        "answer": "Uma lei que distribuía terras no oeste a preços simbólicos para quem as cultivasse",
        "solution": "Essa lei foi um grande incentivo para a ocupação do oeste, pois permitia que colonos se tornassem proprietários de terras, promovendo a agricultura familiar."
    },
    {
        "question": "Qual foi a principal consequência da expansão para o Oeste para as populações nativas americanas?",
        "options": [
            "A integração pacífica à sociedade dos colonos",
            "O enriquecimento através do comércio de peles",
            "A perda de suas terras, o confinamento em reservas e o genocídio",
            "A ascensão a cargos políticos no governo americano"
        ],
        "answer": "A perda de suas terras, o confinamento em reservas e o genocídio",
        "solution": "A expansão americana foi extremamente violenta para os povos indígenas, que foram massacrados, expulsos de suas terras ancestrais e forçados a viver em reservas."
    },
    {
        "question": "A construção de qual infraestrutura foi crucial para conectar o leste e o oeste dos EUA no século XIX?",
        "options": [
            "Canais de irrigação no deserto",
            "Aeroportos internacionais",
            "Ferrovias transcontinentais",
            "Rodovias pavimentadas"
        ],
        "answer": "Ferrovias transcontinentais",
        "solution": "A conclusão da primeira ferrovia transcontinental em 1869 revolucionou o transporte, o comércio e a comunicação, unificando o país e acelerando a colonização do oeste."
    },
    {
        "question": "A região Nordeste dos EUA, conhecida como 'Manufacturing Belt', se industrializou com base em quais recursos?",
        "options": [
            "Ouro e prata",
            "Petróleo e gás natural",
            "Carvão mineral e minério de ferro",
            "Látex e madeira"
        ],
        "answer": "Carvão mineral e minério de ferro",
        "solution": "A abundância de carvão nos Apalaches e minério de ferro na região dos Grandes Lagos forneceu a matéria-prima e a energia para o desenvolvimento da indústria pesada (siderurgia) no nordeste."
    },
    {
        "question": "A grande onda de imigração para os EUA no século XIX foi composta principalmente por pessoas vindas da:",
        "options": [
            "África e Ásia",
            "Europa (irlandeses, alemães, italianos, etc.)",
            "América do Sul",
            "Oceania"
        ],
        "answer": "Europa (irlandeses, alemães, italianos, etc.)",
        "solution": "Milhões de europeus migraram para os EUA em busca de oportunidades de trabalho nas indústrias e de terras para cultivar, fugindo da pobreza e de perseguições em seus países."
    },
    {
        "question": "Qual guerra no século XIX consolidou a anexação de territórios como Califórnia, Texas e Arizona pelos EUA?",
        "options": [
            "Guerra de Secessão",
            "Guerra Mexicano-Americana",
            "Guerra Hispano-Americana",
            "Guerra de 1812"
        ],
        "answer": "Guerra Mexicano-Americana",
        "solution": "Como resultado da guerra (1846-1848), o México foi forçado a ceder mais da metade de seu território aos Estados Unidos, uma enorme expansão para o sudoeste."
    },
    {
        "question": "O clima predominante no sudeste dos EUA, como na Flórida, é o:",
        "options": [
            "Temperado Oceânico",
            "Subtropical úmido",
            "Mediterrâneo",
            "Árido"
        ],
        "answer": "Subtropical úmido",
        "solution": "O Sudeste é caracterizado por verões quentes e úmidos e invernos amenos, o que favoreceu o desenvolvimento de culturas como algodão e tabaco (as 'plantations')."
    },
    {
        "question": "A Guerra de Secessão (1861-1865) foi travada entre:",
        "options": [
            "EUA e Inglaterra",
            "Os estados industrializados do Norte (União) e os estados escravistas do Sul (Confederação)",
            "Colonizadores e indígenas",
            "EUA e México"
        ],
        "answer": "Os estados industrializados do Norte (União) e os estados escravistas do Sul (Confederação)",
        "solution": "A guerra civil teve como pano de fundo as divergências econômicas, políticas e, principalmente, a questão da abolição da escravidão, resultando na vitória do Norte e na unificação do país."
    },
    {
        "question": "O 'Dust Bowl' foi um fenômeno ocorrido nos anos 1930 nas Grandes Planícies, caracterizado por:",
        "options": [
            "Uma grande descoberta de petróleo",
            "Intensas tempestades de poeira causadas pela seca e por práticas agrícolas inadequadas",
            "Uma revolta de agricultores contra o governo",
            "A criação de um grande parque nacional"
        ],
        "answer": "Intensas tempestades de poeira causadas pela seca e por práticas agrícolas inadequadas",
        "solution": "O 'Dust Bowl' foi um desastre ambiental que forçou a migração de milhares de famílias de agricultores, agravando os efeitos da Grande Depressão."
    },
    {
        "question": "A compra do Alasca em 1867 foi feita de qual país?",
        "options": [
            "Inglaterra",
            "Canadá",
            "Rússia",
            "Japão"
        ],
        "answer": "Rússia",
        "solution": "Inicialmente considerada uma loucura ('a geladeira de Seward'), a compra do Alasca da Rússia se mostrou estratégica devido às suas vastas riquezas naturais, como petróleo e ouro."
    },
    {
        "question": "O relevo dos EUA é caracterizado por ter cadeias montanhosas nas bordas leste e oeste e uma grande planície no centro. Essa disposição influencia:",
        "options": [
            "Apenas a localização das cidades",
            "O fluxo dos ventos, permitindo que massas de ar polar e tropical avancem pelo interior, causando eventos climáticos extremos",
            "A inexistência de rios importantes no país",
            "A proibição de atividades agrícolas no centro do país"
        ],
        "answer": "O fluxo dos ventos, permitindo que massas de ar polar e tropical avancem pelo interior, causando eventos climáticos extremos",
        "solution": "Essa 'abertura' central facilita o choque de massas de ar de diferentes temperaturas, sendo um dos fatores para a ocorrência de tornados no 'Tornado Alley'."
    },
    {
        "question": "A doutrina do 'Destino Manifesto' era usada para justificar:",
        "options": [
            "O fim da escravidão",
            "O imperialismo e a expansão territorial dos EUA",
            "A neutralidade dos EUA em conflitos europeus",
            "A ajuda financeira a países pobres"
        ],
        "answer": "O imperialismo e a expansão territorial dos EUA",
        "solution": "Essa crença na superioridade e na missão divina do povo americano serviu como justificativa ideológica para a expansão sobre terras indígenas e mexicanas."
    },
    {
        "question": "Qual o principal fator que permitiu o surgimento dos EUA como uma potência industrial no final do século XIX?",
        "options": [
            "A falta de recursos naturais",
            "A combinação de abundância de recursos (carvão, ferro), um grande mercado consumidor, mão de obra imigrante e inovações tecnológicas",
            "A ajuda financeira da Inglaterra",
            "Uma economia exclusivamente agrária"
        ],
        "answer": "A combinação de abundância de recursos (carvão, ferro), um grande mercado consumidor, mão de obra imigrante e inovações tecnológicas",
        "solution": "Todos esses fatores, somados a um governo que incentivava a industrialização, foram a base para a rápida ascensão econômica dos Estados Unidos."
    },
    {
        "question": "O termo 'Velho Oeste' refere-se ao:",
        "options": [
            "Período colonial sob domínio britânico",
            "Processo de colonização da fronteira oeste dos EUA, marcado por conflitos e pela figura do cowboy",
            "Litoral leste dos EUA, onde as primeiras cidades foram fundadas",
            "Sul dos EUA durante a Guerra de Secessão"
        ],
        "answer": "Processo de colonização da fronteira oeste dos EUA, marcado por conflitos e pela figura do cowboy",
        "solution": "O 'Velho Oeste' ou 'Faroeste' é um período icônico da história americana, romantizado em filmes, que representa a expansão da fronteira, a vida dos pioneiros e os conflitos com os indígenas."
    },

    // GEOGRAFIA - CAPÍTULO 7: ESTADOS UNIDOS: PODER E INFLUÊNCIA GLOBAL (20 QUESTÕES)
    {
        "question": "O sistema político-administrativo dos EUA é o federalismo. Isso significa que:",
        "options": [
            "O poder é totalmente concentrado no governo central em Washington D.C.",
            "Cada estado tem um grau significativo de autonomia, com suas próprias leis e governo",
            "O país é governado por uma monarquia",
            "Os estados não têm permissão para criar leis"
        ],
        "answer": "Cada estado tem um grau significativo de autonomia, com suas próprias leis e governo",
        "solution": "No federalismo, o poder é dividido entre o governo federal (nacional) e os governos estaduais, que têm autonomia para legislar sobre diversos assuntos."
    },
    {
        "question": "A Crise de 1929, ou Grande Depressão, começou com a quebra da Bolsa de Valores de:",
        "options": [
            "Londres",
            "Tóquio",
            "São Paulo",
            "Nova York"
        ],
        "answer": "Nova York",
        "solution": "A quebra da bolsa de Wall Street em Nova York foi o estopim de uma crise de superprodução e especulação financeira que mergulhou os EUA e o mundo em uma profunda crise econômica."
    },
    {
        "question": "O 'New Deal', programa implementado pelo presidente Franklin D. Roosevelt para combater a Crise de 1929, defendia:",
        "options": [
            "A não intervenção do Estado na economia",
            "A forte intervenção do Estado na economia, com investimentos em obras públicas e programas sociais",
            "A privatização de todas as empresas estatais",
            "O aumento dos impostos sobre os mais pobres"
        ],
        "answer": "A forte intervenção do Estado na economia, com investimentos em obras públicas e programas sociais",
        "solution": "O New Deal rompeu com o liberalismo clássico, promovendo a intervenção estatal para gerar empregos (com obras como hidrelétricas) e amparar a população (com seguros e auxílios)."
    },
    {
        "question": "Qual região dos EUA é conhecida como 'Sun Belt' (Cinturão do Sol) e se destaca pela indústria de alta tecnologia?",
        "options": [
            "O Nordeste, frio e tradicionalmente industrial",
            "O Sul e o Sudoeste, incluindo a Califórnia e o Texas",
            "A região dos Grandes Lagos",
            "O Alasca"
        ],
        "answer": "O Sul e o Sudoeste, incluindo a Califórnia e o Texas",
        "solution": "O Sun Belt é uma região que atraiu muitas indústrias de tecnologia (como no Vale do Silício, na Califórnia) e aeroespacial a partir da segunda metade do século XX."
    },
    {
        "question": "O que são os 'Belts' (cinturões agrícolas) nos EUA?",
        "options": [
            "Cidades industriais especializadas em um único produto",
            "Regiões de intensa atividade sísmica",
            "Grandes áreas especializadas na produção de um determinado produto agrícola",
            "Zonas de livre comércio na fronteira com o México"
        ],
        "answer": "Grandes áreas especializadas na produção de um determinado produto agrícola",
        "solution": "Os Belts são regiões agrícolas altamente especializadas e produtivas, como o Corn Belt (cinturão do milho) e o Wheat Belt (cinturão do trigo)."
    },
    {
        "question": "A Crise do Subprime, em 2008, foi causada por uma bolha no mercado:",
        "options": [
            "De tecnologia da internet",
            "Agrícola",
            "Imobiliário",
            "De petróleo"
        ],
        "answer": "Imobiliário",
        "solution": "A crise foi gerada pela concessão de empréstimos imobiliários de alto risco ('subprime') que, com a inadimplência em massa, levaram à falência de grandes bancos e a uma crise financeira global."
    },
    {
        "question": "A hegemonia mundial dos EUA após a Segunda Guerra Mundial foi consolidada com:",
        "options": [
            "O fim da União Soviética e o término da Guerra Fria",
            "A criação do Euro como moeda mundial",
            "A independência de suas colônias na África",
            "Sua derrota na Guerra do Vietnã"
        ],
        "answer": "O fim da União Soviética e o término da Guerra Fria",
        "solution": "Com o colapso de seu principal rival, a URSS, os EUA emergiram como a única superpotência mundial nas décadas de 1990 e 2000, exercendo grande influência política, econômica e cultural."
    },
    {
        "question": "Qual é a principal característica do agronegócio americano?",
        "options": [
            "É baseado em pequenas propriedades familiares com produção orgânica",
            "É altamente mecanizado, tecnológico e voltado para a exportação",
            "Utiliza apenas mão de obra manual",
            "Produz apenas para o mercado interno"
        ],
        "answer": "É altamente mecanizado, tecnológico e voltado para a exportação",
        "solution": "O agronegócio nos EUA é um dos mais produtivos do mundo, caracterizado pelo uso intensivo de máquinas, insumos químicos, biotecnologia e pela produção em larga escala."
    },
    {
        "question": "O Vale do Silício, na Califórnia, é o principal polo de qual setor da economia?",
        "options": [
            "Indústria automobilística",
            "Indústria siderúrgica",
            "Indústria de alta tecnologia e inovação (startups, internet)",
            "Produção de petróleo"
        ],
        "answer": "Indústria de alta tecnologia e inovação (startups, internet)",
        "solution": "O Vale do Silício concentra sedes de gigantes da tecnologia como Apple, Google e Meta, sendo o mais importante centro de inovação tecnológica do planeta."
    },
    {
        "question": "A influência cultural dos EUA no mundo é exercida principalmente através do(a):",
        "options": [
            "Exportação de produtos agrícolas",
            "Imposição de seu sistema político a outros países",
            "Indústria do entretenimento (cinema de Hollywood, música, séries)",
            "Turismo de seus cidadãos em outros países"
        ],
        "answer": "Indústria do entretenimento (cinema de Hollywood, música, séries)",
        "solution": "O chamado 'soft power' americano é amplamente difundido por seus produtos culturais, que moldam hábitos e valores em escala global."
    },
    {
        "question": "O que é o NAFTA (agora USMCA)?",
        "options": [
            "Uma aliança militar entre EUA e Europa",
            "Um acordo de livre comércio entre EUA, Canadá e México",
            "Um programa de ajuda humanitária para a África",
            "A agência espacial americana"
        ],
        "answer": "Um acordo de livre comércio entre EUA, Canadá e México",
        "solution": "É um bloco econômico que visa a eliminar barreiras comerciais entre os três países da América do Norte, embora com muitas críticas sobre seus impactos sociais."
    },
    {
        "question": "A região do 'Manufacturing Belt' (Cinturão da Manufatura), no Nordeste dos EUA, hoje é conhecida como 'Rust Belt' (Cinturão da Ferrugem). Por quê?",
        "options": [
            "Porque descobriram novas jazidas de ferro na região",
            "Devido à crise e ao declínio da indústria tradicional (siderúrgicas, automobilísticas), que deixou um rastro de desemprego e fábricas abandonadas",
            "Porque a poluição do ar deixou os prédios com cor de ferrugem",
            "Devido a uma grande enchente que enferrujou as estruturas metálicas"
        ],
        "answer": "Devido à crise e ao declínio da indústria tradicional (siderúrgicas, automobilísticas), que deixou um rastro de desemprego e fábricas abandonadas",
        "solution": "A partir dos anos 1970, a concorrência internacional e a automação levaram ao declínio da indústria pesada nessa região, causando uma grave crise socioeconômica."
    },
    {
        "question": "A rede de transportes dos EUA é caracterizada por ser:",
        "options": [
            "Exclusivamente ferroviária",
            "Pouco desenvolvida e ineficiente",
            "Integrada e multimodal, com destaque para rodovias, ferrovias e hidrovias",
            "Dependente apenas do transporte aéreo"
        ],
        "answer": "Integrada e multimodal, com destaque para rodovias, ferrovias e hidrovias",
        "solution": "Os EUA possuem uma das redes de transporte mais complexas e eficientes do mundo, essencial para a integração de seu vasto território e para a dinâmica de sua economia."
    },
    {
        "question": "A cidade de Detroit, no estado de Michigan, foi o símbolo de qual indústria americana?",
        "options": [
            "Indústria cinematográfica",
            "Indústria têxtil",
            "Indústria automobilística",
            "Indústria de software"
        ],
        "answer": "Indústria automobilística",
        "solution": "Detroit, conhecida como 'Motor City', foi o berço de gigantes como Ford, General Motors e Chrysler, e seu destino está intimamente ligado às crises e reestruturações desse setor."
    },
    {
        "question": "A economia americana é fortemente influenciada pelo:",
        "options": [
            "Planejamento estatal centralizado",
            "Modelo socialista",
            "Capitalismo liberal e pelo poder das grandes corporações",
            "Isolacionismo econômico"
        ],
        "answer": "Capitalismo liberal e pelo poder das grandes corporações",
        "solution": "A economia dos EUA é a maior do mundo e se baseia na livre iniciativa, na propriedade privada e na forte atuação de empresas multinacionais em escala global."
    },
    {
        "question": "Apesar de sua riqueza, a sociedade americana enfrenta graves problemas, como:",
        "options": [
            "A falta de liberdade de expressão",
            "A ausência de universidades de qualidade",
            "A grande desigualdade social e racial, e a falta de um sistema de saúde público universal",
            "A proibição do acesso à internet"
        ],
        "answer": "A grande desigualdade social e racial, e a falta de um sistema de saúde público universal",
        "solution": "Os EUA são um país de grandes contrastes, com altos índices de pobreza, desigualdade de renda e um sistema de saúde caro e inacessível para milhões de pessoas."
    },
    {
        "question": "O dólar americano tem um papel central na economia mundial porque:",
        "options": [
            "É a moeda mais antiga do mundo",
            "É a principal moeda usada nas transações comerciais internacionais e como reserva de valor pelos bancos centrais",
            "É lastreado em ouro desde 1971",
            "É a única moeda aceita em todos os países"
        ],
        "answer": "É a principal moeda usada nas transações comerciais internacionais e como reserva de valor pelos bancos centrais",
        "solution": "A posição do dólar como moeda de referência global confere aos EUA um poder econômico e político significativo."
    },
    {
        "question": "O poderio militar dos EUA se manifesta através de:",
        "options": [
            "Um exército pequeno e com poucos recursos",
            "Sua política de não intervenção em conflitos externos",
            "O maior orçamento de defesa do mundo, tecnologia militar avançada e bases espalhadas por todo o planeta",
            "Sua filiação à ONU, que o proíbe de usar a força"
        ],
        "answer": "O maior orçamento de defesa do mundo, tecnologia militar avançada e bases espalhadas por todo o planeta",
        "solution": "O poder militar é um dos pilares da hegemonia americana, permitindo que o país projete sua influência e defenda seus interesses em qualquer lugar do globo."
    },
    {
        "question": "A ascensão da China como potência econômica representa hoje o principal desafio à:",
        "options": [
            "Cultura americana",
            "Hegemonia econômica e tecnológica dos EUA",
            "Democracia nos EUA",
            "Produção agrícola americana"
        ],
        "answer": "Hegemonia econômica e tecnológica dos EUA",
        "solution": "A competição entre EUA e China marca a geopolítica do século XXI, com disputas comerciais, tecnológicas e de influência em diversas regiões do mundo."
    },
    {
        "question": "O 'American Way of Life' (Estilo de Vida Americano) é um padrão cultural baseado no:",
        "options": [
            "Consumismo, individualismo e na busca pelo sucesso material",
            "Coletivismo, na vida simples no campo e na ausência de tecnologia",
            "Respeito ao meio ambiente e na sustentabilidade",
            "Seguimento das tradições religiosas orientais"
        ],
        "answer": "Consumismo, individualismo e na busca pelo sucesso material",
        "solution": "Esse padrão, amplamente divulgado pelo cinema e pela publicidade, tornou-se um modelo aspiracional em muitas partes do mundo, impulsionando o consumismo global."
    },

    // GEOGRAFIA - CAPÍTULO 8: ÁFRICA: NATUREZA E SOCIEDADE (20 QUESTÕES)
    {
        "question": "A Conferência de Berlim (1884-1885) foi um marco do neocolonialismo na África porque:",
        "options": [
            "Concedeu a independência a todos os países africanos",
            "Estabeleceu regras para a partilha e ocupação da África pelas potências europeias",
            "Proibiu a exploração de recursos minerais no continente",
            "Criou uma união econômica entre os países africanos"
        ],
        "answer": "Estabeleceu regras para a partilha e ocupação da África pelas potências europeias",
        "solution": "Na conferência, as nações europeias dividiram o continente africano entre si, traçando fronteiras artificiais que ignoraram as divisões étnicas e culturais existentes, gerando conflitos que perduram até hoje."
    },
    {
        "question": "Qual é o maior deserto quente do mundo, localizado no norte da África?",
        "options": [
            "Deserto do Atacama",
            "Deserto de Gobi",
            "Deserto do Saara",
            "Deserto da Arábia"
        ],
        "answer": "Deserto do Saara",
        "solution": "O Saara cobre uma vasta área do norte da África, influenciando o clima, a vegetação e a ocupação humana de toda a região."
    },
    {
        "question": "O Rio Nilo, um dos mais longos do mundo, é fundamental para qual país, sendo sua principal fonte de água?",
        "options": [
            "Nigéria",
            "África do Sul",
            "Egito",
            "República Democrática do Congo"
        ],
        "answer": "Egito",
        "solution": "Desde a antiguidade, a civilização egípcia depende das águas do Nilo para a agricultura (através das cheias que fertilizam as margens), transporte e abastecimento."
    },
    {
        "question": "A região do Sahel, ao sul do Saara, é uma faixa de transição entre o deserto e as savanas, e enfrenta um grave problema de:",
        "options": [
            "Inundações constantes",
            "Congelamento do solo",
            "Desertificação",
            "Excesso de florestas"
        ],
        "answer": "Desertificação",
        "solution": "A desertificação é o processo de avanço do deserto sobre áreas produtivas, causado por mudanças climáticas e atividades humanas inadequadas, agravando a fome e a pobreza na região."
    },
    {
        "question": "O 'Apartheid', que vigorou na África do Sul até o início dos anos 1990, foi um regime de:",
        "options": [
            "Segregação racial que negava direitos à população negra",
            "Democracia plena para todos os cidadãos",
            "Socialismo com economia planificada",
            "União de todos os povos africanos"
        ],
        "answer": "Segregação racial que negava direitos à população negra",
        "solution": "O Apartheid foi um sistema oficial de segregação que classificava as pessoas por raça e impunha leis discriminatórias contra a maioria negra em benefício da minoria branca."
    },
    {
        "question": "Qual tipo de vegetação, caracterizada por árvores esparsas e um extenso tapete de gramíneas, é predominante na África e famosa por sua megafauna (leões, elefantes, girafas)?",
        "options": [
            "Tundra",
            "Floresta Boreal (Taiga)",
            "Savana",
            "Estepe"
        ],
        "answer": "Savana",
        "solution": "As savanas africanas, como o Serengeti, são ecossistemas mundialmente conhecidos por sua rica vida selvagem e paisagens icônicas."
    },
    {
        "question": "O 'Chifre da África' é uma região no nordeste do continente que enfrenta problemas crônicos de:",
        "options": [
            "Frio extremo e nevascas",
            "Secas, fome e instabilidade política",
            "Excesso de chuvas e inundações",
            "Rápida industrialização e poluição"
        ],
        "answer": "Secas, fome e instabilidade política",
        "solution": "Países como Somália, Etiópia e Eritreia, localizados no Chifre da África, sofrem com secas prolongadas, que levam à fome, e com longos períodos de guerras e conflitos."
    },
    {
        "question": "O Vale do Rift, na África Oriental, é uma grande falha geológica caracterizada por:",
        "options": [
            "Ser a área mais plana do continente",
            "Intensa atividade vulcânica e pela presença de grandes lagos",
            "Ser o local mais frio da África",
            "Ser coberto por uma densa floresta equatorial"
        ],
        "answer": "Intensa atividade vulcânica e pela presença de grandes lagos",
        "solution": "O Vale do Rift é uma área onde as placas tectônicas estão se separando, criando uma paisagem de vulcões, montanhas e lagos profundos, como o Vitória e o Tanganica."
    },
    {
        "question": "Os processos de independência na África, ocorridos principalmente após a Segunda Guerra Mundial, foram muitas vezes seguidos por:",
        "options": [
            "Períodos de grande prosperidade econômica e paz",
            "Guerras civis, instabilidade política e golpes de estado",
            "A união de todos os países em um único estado africano",
            "O retorno voluntário ao domínio colonial europeu"
        ],
        "answer": "Guerras civis, instabilidade política e golpes de estado",
        "solution": "As fronteiras artificiais criadas pelos europeus, que uniram etnias rivais em um mesmo país, foram um dos principais fatores para os conflitos que se seguiram à independência."
    },
    {
        "question": "O que foi a 'Partilha da África'?",
        "options": [
            "A divisão do continente em áreas de influência cultural",
            "Um programa de ajuda humanitária da ONU",
            "A divisão e colonização do continente africano pelas potências europeias no século XIX",
            "Um movimento de unificação dos povos africanos"
        ],
        "answer": "A divisão e colonização do continente africano pelas potências europeias no século XIX",
        "solution": "Formalizada na Conferência de Berlim, a Partilha da África foi a expressão máxima do neocolonialismo, visando à exploração de matérias-primas e à criação de mercados."
    },
    {
        "question": "A Cordilheira do Atlas está localizada em qual região da África?",
        "options": [
            "No extremo sul do continente",
            "Na porção central, junto à linha do Equador",
            "No noroeste, na região do Magrebe (Marrocos, Argélia, Tunísia)",
            "Na ilha de Madagascar"
        ],
        "answer": "No noroeste, na região do Magrebe (Marrocos, Argélia, Tunísia)",
        "solution": "A Cordilheira do Atlas funciona como uma barreira natural entre o clima mediterrâneo do litoral e o clima árido do Deserto do Saara."
    },
    {
        "question": "A diversidade étnica e cultural da África é:",
        "options": [
            "Muito pequena, com apenas um grupo étnico e um idioma",
            "Extremamente grande, com milhares de grupos étnicos e idiomas diferentes",
            "Moderada, com cerca de dez grupos étnicos principais",
            "Inexistente, pois todos os povos foram assimilados pela cultura europeia"
        ],
        "answer": "Extremamente grande, com milhares de grupos étnicos e idiomas diferentes",
        "solution": "A África é um mosaico de povos, culturas, línguas e religiões, sendo um dos continentes mais diversos do mundo."
    },
    {
        "question": "O neocolonialismo se diferencia do colonialismo do século XVI por ter sido motivado principalmente pela:",
        "options": [
            "Busca de especiarias e metais preciosos",
            "Necessidade de matérias-primas para a Revolução Industrial e novos mercados consumidores",
            "Expansão da fé católica",
            "Procura de terras para a agricultura de subsistência"
        ],
        "answer": "Necessidade de matérias-primas para a Revolução Industrial e novos mercados consumidores",
        "solution": "No século XIX, as potências industrializadas europeias buscaram na África fontes de matérias-primas (borracha, cobre, etc.) e mercados para vender seus produtos industrializados."
    },
    {
        "question": "O Deserto do Kalahari está localizado principalmente na região:",
        "options": [
            "Norte da África",
            "Chifre da África",
            "África Ocidental",
            "Sul da África"
        ],
        "answer": "Sul da África",
        "solution": "O Kalahari se estende por países como Botsuana, Namíbia e África do Sul, sendo um deserto semiárido com uma vegetação mais presente que a do Saara."
    },
    {
        "question": "Muitos dos conflitos atuais na África têm suas raízes nas:",
        "options": [
            "Antigas disputas entre reinos medievais",
            "Fronteiras artificiais traçadas pelas potências coloniais",
            "Diferenças climáticas entre o norte e o sul",
            "Competições esportivas entre os países"
        ],
        "answer": "Fronteiras artificiais traçadas pelas potências coloniais",
        "solution": "Ao traçar as fronteiras, os europeus ignoraram as divisões étnicas, unindo povos rivais e separando povos aliados, o que se tornou uma fonte permanente de tensão e guerra civil."
    },
    {
        "question": "A Bacia do Congo, na África Central, é dominada por qual tipo de bioma?",
        "options": [
            "Savana",
            "Deserto",
            "Floresta Equatorial (Tropical)",
            "Estepe"
        ],
        "answer": "Floresta Equatorial (Tropical)",
        "solution": "A Bacia do Rio Congo abriga a segunda maior floresta tropical do mundo, depois da Amazônia, com imensa biodiversidade e importância para o equilíbrio climático global."
    },
    {
        "question": "A ilha de Madagascar, na costa leste da África, é famosa por:",
        "options": [
            "Ser a região mais industrializada da África",
            "Sua biodiversidade única, com muitas espécies que não existem em nenhum outro lugar",
            "Ser coberta por um deserto de gelo",
            "Sua população de origem exclusivamente europeia"
        ],
        "answer": "Sua biodiversidade única, com muitas espécies que não existem em nenhum outro lugar",
        "solution": "Devido ao seu isolamento geográfico, Madagascar desenvolveu uma fauna e flora endêmicas, como os lêmures, sendo um dos 'hotspots' de biodiversidade do planeta."
    },
    {
        "question": "O que é o Magrebe?",
        "options": [
            "A região da África ao sul do Saara",
            "A porção noroeste da África, banhada pelo Mediterrâneo (Marrocos, Argélia, Tunísia)",
            "Uma religião tradicional africana",
            "O principal rio da África Ocidental"
        ],
        "answer": "A porção noroeste da África, banhada pelo Mediterrâneo (Marrocos, Argélia, Tunísia)",
        "solution": "O termo 'Magrebe' em árabe significa 'poente' e designa a região do noroeste africano, que compartilha características culturais (árabe-berberes) e históricas."
    },
    {
        "question": "Qual é a principal consequência socioeconômica da herança colonial na África?",
        "options": [
            "O desenvolvimento de uma economia industrial autônoma",
            "A erradicação da pobreza e da desigualdade",
            "A dependência econômica, a pobreza e a instabilidade política",
            "A criação de democracias estáveis em todo o continente"
        ],
        "answer": "A dependência econômica, a pobreza e a instabilidade política",
        "solution": "A exploração colonial deixou um legado de economias frágeis, baseadas na exportação de poucos produtos primários, e de estruturas políticas instáveis, dificultando o desenvolvimento."
    },
    {
        "question": "O genocídio de Ruanda em 1994 foi um trágico conflito entre quais duas etnias?",
        "options": [
            "Zulus e Xhosas",
            "Hutus e Tutsis",
            "Iorubás e Hausas",
            "Berberes e Tuaregues"
        ],
        "answer": "Hutus e Tutsis",
        "solution": "O genocídio foi o ápice de tensões étnicas exacerbadas durante o período colonial belga, que favoreceu a minoria Tutsi em detrimento da maioria Hutu, levando a um massacre de proporções aterradoras."
    },

    // GEOGRAFIA - CAPÍTULO 9: ÁFRICA: ECONOMIA (20 QUESTÕES)
    {
        "question": "A economia da maioria dos países africanos é fortemente baseada em qual setor?",
        "options": [
            "Indústria de alta tecnologia",
            "Setor primário (agricultura, mineração e extrativismo)",
            "Mercado financeiro e serviços",
            "Produção de energia nuclear"
        ],
        "answer": "Setor primário (agricultura, mineração e extrativismo)",
        "solution": "Como herança do período colonial, muitas economias africanas ainda são dependentes da exportação de produtos primários (commodities), o que as torna vulneráveis às variações de preço no mercado internacional."
    },
    {
        "question": "Qual país africano se destaca como o maior produtor de petróleo do continente e é membro da OPEP?",
        "options": [
            "África do Sul",
            "Egito",
            "Nigéria",
            "Marrocos"
        ],
        "answer": "Nigéria",
        "solution": "A Nigéria possui a maior economia da África, impulsionada em grande parte pela exploração e exportação de petróleo, sendo um ator importante no mercado energético global."
    },
    {
        "question": "A África do Sul possui a economia mais industrializada e diversificada do continente, com destaque para a exploração de:",
        "options": [
            "Petróleo e gás natural",
            "Recursos minerais como ouro, diamante e platina",
            "Látex para produção de borracha",
            "Madeira de florestas tropicais"
        ],
        "answer": "Recursos minerais como ouro, diamante e platina",
        "solution": "A África do Sul é uma potência mineral, sendo um dos maiores produtores mundiais de diversos minérios, o que foi a base de sua industrialização."
    },
    {
        "question": "A economia do Egito tem no turismo uma de suas principais fontes de renda. Qual o principal atrativo para os turistas no país?",
        "options": [
            "As savanas e a vida selvagem",
            "As praias tropicais e resorts de luxo",
            "O seu vasto legado histórico, como as pirâmides e templos antigos",
            "Os centros financeiros e arranha-céus modernos"
        ],
        "answer": "O seu vasto legado histórico, como as pirâmides e templos antigos",
        "solution": "O Egito atrai milhões de turistas todos os anos interessados em conhecer sua rica história milenar, incluindo monumentos icônicos como as Pirâmides de Gizé e os templos de Luxor."
    },
    {
        "question": "O que são 'commodities'?",
        "options": [
            "Produtos industrializados de alta tecnologia",
            "Serviços de consultoria financeira",
            "Produtos primários (agrícolas e minerais) com preço definido pelo mercado internacional",
            "Moedas digitais"
        ],
        "answer": "Produtos primários (agrícolas e minerais) com preço definido pelo mercado internacional",
        "solution": "A dependência da exportação de commodities (cacau, café, petróleo, cobre, etc.) torna as economias africanas muito instáveis, pois seus lucros dependem de preços que elas não controlam."
    },
    {
        "question": "A China tem aumentado sua presença econômica na África nas últimas décadas, principalmente através de:",
        "options": [
            "Intervenções militares para derrubar governos",
            "Investimentos em infraestrutura (estradas, portos, ferrovias) em troca de recursos minerais",
            "Imposição de sua cultura e idioma",
            "Programas de preservação ambiental"
        ],
        "answer": "Investimentos em infraestrutura (estradas, portos, ferrovias) em troca de recursos minerais",
        "solution": "A China se tornou o maior parceiro comercial da África, financiando grandes obras de infraestrutura para facilitar a exploração e o escoamento de matérias-primas para suas indústrias."
    },
    {
        "question": "O fluxo migratório de africanos para a Europa é motivado principalmente pela:",
        "options": [
            "Busca de climas mais frios",
            "Atração turística pelas cidades europeias",
            "Fuga de guerras, perseguições e busca por melhores condições econômicas",
            "Realização de intercâmbio estudantil"
        ],
        "answer": "Fuga de guerras, perseguições e busca por melhores condições econômicas",
        "solution": "A instabilidade política, os conflitos e a falta de oportunidades em muitos países africanos levam milhares de pessoas a arriscar a vida na perigosa travessia do Mediterrâneo."
    },
    {
        "question": "A agricultura de 'plantation', comum em muitos países africanos, é caracterizada por:",
        "options": [
            "Pequenas propriedades familiares com produção diversificada para subsistência",
            "Grandes monoculturas voltadas para a exportação (cacau, café, algodão)",
            "Técnicas de cultivo orgânico e sustentável",
            "Criação de gado de forma extensiva"
        ],
        "answer": "Grandes monoculturas voltadas para a exportação (cacau, café, algodão)",
        "solution": "Herdada do período colonial, a plantation ocupa as melhores terras para produzir para o mercado externo, muitas vezes em detrimento da produção de alimentos para a população local."
    },
    {
        "question": "Qual país do Magrebe se destaca pela exportação de fosfato e pelo turismo?",
        "options": [
            "Líbia",
            "Egito",
            "Marrocos",
            "Sudão"
        ],
        "answer": "Marrocos",
        "solution": "O Marrocos possui uma das economias mais estáveis da região, baseada na agricultura, na exploração de fosfato (essencial para fertilizantes) e em um forte setor turístico."
    },
    {
        "question": "A 'doença holandesa' é um fenômeno econômico que pode afetar países ricos em recursos naturais. Ela consiste em:",
        "options": [
            "Uma epidemia que afeta trabalhadores de minas",
            "A valorização da moeda local devido à exportação de um recurso, o que prejudica outros setores da economia (indústria, agricultura)",
            "A falta de tecnologia para explorar os recursos",
            "A proibição da exportação de recursos naturais"
        ],
        "answer": "A valorização da moeda local devido à exportação de um recurso, o que prejudica outros setores da economia (indústria, agricultura)",
        "solution": "Países como a Nigéria sofrem com isso: a grande entrada de dólares do petróleo valoriza sua moeda, tornando seus produtos industriais e agrícolas mais caros e menos competitivos."
    },
    {
        "question": "A extração de diamantes em países como Serra Leoa e Angola financiou guerras civis, dando origem ao termo:",
        "options": [
            "Diamantes de sangue",
            "Diamantes da paz",
            "Diamantes ecológicos",
            "Diamantes sintéticos"
        ],
        "answer": "Diamantes de sangue",
        "solution": "Esse termo se refere a diamantes extraídos em zonas de guerra e vendidos para financiar conflitos, exércitos rebeldes e violações de direitos humanos."
    },
    {
        "question": "O crescimento econômico de alguns países africanos nos últimos anos ('Leões Africanos') tem sido impulsionado principalmente pelo:",
        "options": [
            "Fim de todos os conflitos no continente",
            "Aumento dos preços das commodities e investimentos estrangeiros",
            "Desenvolvimento de uma indústria de software de ponta",
            "Abandono da agricultura e da mineração"
        ],
        "answer": "Aumento dos preços das commodities e investimentos estrangeiros",
        "solution": "O crescimento recente de países como Etiópia, Gana e Ruanda está muito ligado à alta nos preços de seus produtos de exportação e à atração de investimentos, especialmente da China."
    },
    {
        "question": "A infraestrutura de transporte na África (estradas, ferrovias) ainda reflete a lógica colonial. Isso significa que:",
        "options": [
            "As redes são densas e conectam todos os países entre si",
            "As redes foram construídas para ligar as áreas de produção de matéria-prima (interior) aos portos (litoral), e não para integrar o próprio continente",
            "Todos os países possuem sistemas de transporte modernos e eficientes",
            "O transporte é feito exclusivamente por animais"
        ],
        "answer": "As redes foram construídas para ligar as áreas de produção de matéria-prima (interior) aos portos (litoral), e não para integrar o próprio continente",
        "solution": "Essa herança dificulta o comércio entre os próprios países africanos, pois a infraestrutura foi projetada para escoar riquezas para a Europa, e não para promover a integração regional."
    },
    {
        "question": "Qual é um dos maiores desafios para o desenvolvimento econômico sustentável da África?",
        "options": [
            "A falta de recursos naturais",
            "A pequena população em idade de trabalhar",
            "A corrupção, a instabilidade política e a falta de diversificação econômica",
            "O excesso de indústrias poluentes"
        ],
        "answer": "A corrupção, a instabilidade política e a falta de diversificação econômica",
        "solution": "A má governança e a dependência de poucos produtos de exportação são grandes obstáculos para que a riqueza gerada pelos recursos naturais se converta em desenvolvimento para a população."
    },
    {
        "question": "O turismo na África, especialmente o de safári, é uma importante fonte de renda para países como:",
        "options": [
            "Líbia e Argélia",
            "Quênia, Tanzânia e África do Sul",
            "Nigéria e Gabão",
            "Somália e Eritreia"
        ],
        "answer": "Quênia, Tanzânia e África do Sul",
        "solution": "Esses países da África Oriental e Austral atraem turistas do mundo todo para seus parques nacionais, como o Serengeti e o Kruger Park, para a observação da vida selvagem."
    },
    {
        "question": "A dívida externa é um grave problema para muitos países africanos. Ela foi acumulada principalmente devido a:",
        "options": [
            "Gastos excessivos com programas sociais",
            "Empréstimos contraídos para projetos de desenvolvimento que muitas vezes fracassaram ou foram desviados pela corrupção",
            "Investimentos na bolsa de valores de Nova York",
            "Doações a países mais pobres"
        ],
        "answer": "Empréstimos contraídos para projetos de desenvolvimento que muitas vezes fracassaram ou foram desviados pela corrupção",
        "solution": "Muitos países se endividaram com bancos internacionais e governos estrangeiros, e o pagamento dos juros dessa dívida consome uma parte significativa de seus orçamentos."
    },
    {
        "question": "O setor informal da economia (vendedores ambulantes, pequenos serviços sem registro) na África é:",
        "options": [
            "Inexistente, pois todos trabalham com carteira assinada",
            "Muito grande, absorvendo grande parte da mão de obra que não encontra emprego no setor formal",
            "Ilegal e punido com prisão",
            "Restrito apenas aos estrangeiros"
        ],
        "answer": "Muito grande, absorvendo grande parte da mão de obra que não encontra emprego no setor formal",
        "solution": "Nas grandes cidades africanas, a economia informal é uma estratégia de sobrevivência para milhões de pessoas, mas não oferece segurança, direitos trabalhistas ou contribuição para a previdência."
    },
    {
        "question": "A pesca é uma atividade econômica vital para muitos países costeiros da África Ocidental, mas está ameaçada pela:",
        "options": [
            "Falta de peixes no Oceano Atlântico",
            "Proibição do consumo de peixe por motivos religiosos",
            "Sobrepesca por parte de grandes frotas pesqueiras estrangeiras e ilegais",
            "Poluição causada pelo turismo"
        ],
        "answer": "Sobrepesca por parte de grandes frotas pesqueiras estrangeiras e ilegais",
        "solution": "Navios de países europeus e asiáticos, com tecnologia avançada, esgotam os recursos pesqueiros da costa africana, prejudicando a segurança alimentar e a economia das comunidades locais."
    },
    {
        "question": "O cultivo de flores em países como Quênia e Etiópia é um exemplo de:",
        "options": [
            "Agricultura de subsistência tradicional",
            "Produção agrícola moderna voltada para a exportação, principalmente para a Europa",
            "Uma atividade ilegal",
            "Uma cultura que não se adapta ao clima africano"
        ],
        "answer": "Produção agrícola moderna voltada para a exportação, principalmente para a Europa",
        "solution": "A floricultura é um setor de exportação importante, mas que gera debates sobre o uso intensivo de água e as condições de trabalho nos grandes latifúndios."
    },
    {
        "question": "O termo 'land grabbing' (apropriação de terras) na África se refere à:",
        "options": [
            "Reforma agrária que distribui terras para os camponeses",
            "Compra ou arrendamento em larga escala de terras agricultáveis por países estrangeiros e corporações",
            "Criação de parques nacionais para proteger a natureza",
            "Construção de moradias populares nas cidades"
        ],
        "answer": "Compra ou arrendamento em larga escala de terras agricultáveis por países estrangeiros e corporações",
        "solution": "Esse fenômeno é controverso, pois países como China, Arábia Saudita e Coreia do Sul adquirem terras na África para garantir sua própria segurança alimentar, muitas vezes deslocando comunidades locais."
    },

    // GEOGRAFIA - CAPÍTULO 10: ÁFRICA: POPULAÇÃO (20 QUESTÕES)
    {
        "question": "Qual é a principal característica da pirâmide etária da maioria dos países africanos?",
        "options": [
            "Base estreita e topo largo, indicando uma população envelhecida",
            "Base larga e topo estreito, indicando uma população jovem e alta taxa de natalidade",
            "Formato retangular, indicando equilíbrio entre todas as faixas etárias",
            "Topo mais largo que a base, indicando mais idosos do que jovens"
        ],
        "answer": "Base larga e topo estreito, indicando uma população jovem e alta taxa de natalidade",
        "solution": "A pirâmide etária africana é clássica de países em desenvolvimento, com alta proporção de crianças e jovens e baixa expectativa de vida, o que significa uma grande população jovem e um rápido crescimento demográfico."
    },
    {
        "question": "A África é o continente com as maiores taxas de crescimento populacional do mundo. Isso se deve principalmente à:",
        "options": [
            "Elevada taxa de mortalidade e baixa taxa de natalidade",
            "Baixa taxa de mortalidade e baixa taxa de natalidade",
            "Manutenção de altas taxas de natalidade e à gradual queda das taxas de mortalidade",
            "Intensa imigração de europeus e asiáticos"
        ],
        "answer": "Manutenção de altas taxas de natalidade e à gradual queda das taxas de mortalidade",
        "solution": "Melhoras no saneamento e na saúde reduziram a mortalidade, mas as taxas de natalidade continuam altas por fatores culturais e econômicos, resultando em um grande crescimento populacional."
    },
    {
        "question": "A urbanização na África nas últimas décadas tem sido:",
        "options": [
            "Lenta e planejada",
            "Inexistente, com a população retornando ao campo",
            "Acelerada e desordenada, levando à formação de grandes favelas",
            "Concentrada apenas nos países do norte do continente"
        ],
        "answer": "Acelerada e desordenada, levando à formação de grandes favelas",
        "solution": "O rápido êxodo rural leva a um crescimento caótico das cidades, que não conseguem oferecer infraestrutura (moradia, saneamento, transporte) para a população, resultando na proliferação de assentamentos precários."
    },
    {
        "question": "Qual é um dos maiores problemas sociais enfrentados pela população africana, especialmente na região subsaariana?",
        "options": [
            "O excesso de renda e o consumismo exagerado",
            "A pobreza extrema e a fome crônica",
            "O envelhecimento rápido da população",
            "A falta de mão de obra jovem"
        ],
        "answer": "A pobreza extrema e a fome crônica",
        "solution": "Apesar das riquezas naturais, grande parte da população africana vive abaixo da linha da pobreza, enfrentando a insegurança alimentar devido a conflitos, secas e desigualdade."
    },
    {
        "question": "A epidemia de HIV/AIDS teve um impacto devastador em qual região da África?",
        "options": [
            "No Norte da África (Magrebe)",
            "Na África Austral (países como África do Sul, Botsuana, Zimbábue)",
            "No Chifre da África",
            "Na África Ocidental"
        ],
        "answer": "Na África Austral (países como África do Sul, Botsuana, Zimbábue)",
        "solution": "Essa região foi o epicentro da epidemia, que causou milhões de mortes, reduziu drasticamente a expectativa de vida e deixou uma geração de órfãos."
    },
    {
        "question": "A diversidade linguística na África é imensa. Qual é a família linguística mais falada ao sul do Saara?",
        "options": [
            "Línguas indo-europeias",
            "Línguas afro-asiáticas",
            "Línguas nígero-congolesas (incluindo as línguas bantu)",
            "Línguas malaio-polinésias"
        ],
        "answer": "Línguas nígero-congolesas (incluindo as línguas bantu)",
        "solution": "A família nígero-congolesa abrange centenas de línguas, como o suaíli, iorubá e zulu, faladas por uma vasta porção da população subsaariana."
    },
    {
        "question": "A distribuição da população africana pelo território é:",
        "options": [
            "Uniforme, com a mesma densidade demográfica em todos os lugares",
            "Concentrada exclusivamente nos desertos",
            "Irregular, com grandes concentrações em áreas férteis (como o Vale do Nilo) e litorâneas, e grandes vazios demográficos (como nos desertos)",
            "Totalmente rural, sem a existência de grandes cidades"
        ],
        "answer": "Irregular, com grandes concentrações em áreas férteis (como o Vale do Nilo) e litorâneas, e grandes vazios demográficos (como nos desertos)",
        "solution": "A população se concentra onde há disponibilidade de água e terras férteis, como nas margens de rios e lagos, e no litoral, que facilita o comércio."
    },
    {
        "question": "O que são 'refugiados climáticos' ou 'refugiados ambientais', um problema crescente na África?",
        "options": [
            "Pessoas que se mudam para áreas de preservação ambiental",
            "Turistas que visitam regiões de climas extremos",
            "Pessoas forçadas a deixar suas casas devido a desastres ambientais como secas, desertificação e inundações",
            "Cientistas que estudam as mudanças climáticas"
        ],
        "answer": "Pessoas forçadas a deixar suas casas devido a desastres ambientais como secas, desertificação e inundações",
        "solution": "A África é um dos continentes mais vulneráveis às mudanças climáticas, e milhões de pessoas já são forçadas a migrar porque suas terras não são mais capazes de sustentá-las."
    },
    {
        "question": "As duas principais religiões na África, em número de adeptos, são:",
        "options": [
            "Hinduísmo e Budismo",
            "Cristianismo e Islamismo",
            "Judaísmo e Xintoísmo",
            "Ateísmo e Agnosticismo"
        ],
        "answer": "Cristianismo e Islamismo",
        "solution": "O Islamismo predomina no Norte da África e em partes da África Oriental e Ocidental, enquanto o Cristianismo é majoritário no Sul e em partes da África Central, muitas vezes coexistindo com religiões tradicionais."
    },
    {
        "question": "A alta taxa de mortalidade infantil em muitos países africanos está associada principalmente a:",
        "options": [
            "Fatores genéticos da população africana",
            "Condições precárias de saneamento, desnutrição e acesso limitado a serviços de saúde",
            "Excesso de vacinação nas crianças",
            "Baixas taxas de natalidade"
        ],
        "answer": "Condições precárias de saneamento, desnutrição e acesso limitado a serviços de saúde",
        "solution": "Doenças facilmente tratáveis em outros lugares, como diarreia e malária, ainda matam milhares de crianças na África devido à falta de infraestrutura básica de saúde e saneamento."
    },
    {
        "question": "Lagos, na Nigéria, e Cairo, no Egito, são exemplos de:",
        "options": [
            "Pequenas vilas rurais",
            "Cidades planejadas com baixa densidade populacional",
            "Megacidades africanas, com mais de 10 milhões de habitantes e rápido crescimento",
            "Cidades que estão perdendo população rapidamente"
        ],
        "answer": "Megacidades africanas, com mais de 10 milhões de habitantes e rápido crescimento",
        "solution": "Essas cidades são grandes centros econômicos e populacionais, mas enfrentam enormes desafios de infraestrutura, como congestionamentos, poluição e falta de moradia."
    },
    {
        "question": "O que o Índice de Desenvolvimento Humano (IDH) revela sobre a maioria dos países da África Subsaariana?",
        "options": [
            "Que eles possuem os mais altos níveis de desenvolvimento do mundo",
            "Que eles se concentram na faixa de baixo desenvolvimento humano, com indicadores de renda, saúde e educação abaixo da média mundial",
            "Que o desenvolvimento humano é igual em todos os países do continente",
            "Que a renda é alta, mas a educação e a saúde são precárias"
        ],
        "answer": "Que eles se concentram na faixa de baixo desenvolvimento humano, com indicadores de renda, saúde e educação abaixo da média mundial",
        "solution": "A região da África Subsaariana concentra a maioria dos países com os menores IDHs do mundo, refletindo os desafios sociais e econômicos históricos."
    },
    {
        "question": "A 'fuga de cérebros' é um problema para o desenvolvimento da África. O que isso significa?",
        "options": [
            "Uma doença neurológica que afeta a população",
            "A emigração de profissionais altamente qualificados (médicos, engenheiros, cientistas) para países desenvolvidos",
            "A perda de documentos históricos e científicos",
            "A crença em superstições em vez da ciência"
        ],
        "answer": "A emigração de profissionais altamente qualificados (médicos, engenheiros, cientistas) para países desenvolvidos",
        "solution": "Muitos africanos com alta formação buscam melhores oportunidades de trabalho e pesquisa no exterior, privando seus países de origem de capital humano essencial para o desenvolvimento."
    },
    {
        "question": "Qual doença, transmitida por mosquitos, é uma das principais causas de morte na África, especialmente entre crianças?",
        "options": [
            "Gripe",
            "Varíola",
            "Malária",
            "Asma"
        ],
        "answer": "Malária",
        "solution": "A malária é uma doença endêmica em grande parte da África Subsaariana e, apesar de ser prevenível e tratável, continua a ser um grave problema de saúde pública."
    },
    {
        "question": "A estrutura etária jovem da África pode ser considerada um 'bônus demográfico'. Isso significa que:",
        "options": [
            "Há um excesso de idosos que precisam de aposentadoria",
            "Há um grande potencial de mão de obra jovem para impulsionar o crescimento econômico, se houver investimento em educação e emprego",
            "A população vai diminuir drasticamente no futuro",
            "Todos os jovens recebem um bônus em dinheiro do governo"
        ],
        "answer": "Há um grande potencial de mão de obra jovem para impulsionar o crescimento econômico, se houver investimento em educação e emprego",
        "solution": "Se os países conseguirem qualificar e empregar sua grande população jovem, isso pode se converter em um poderoso motor para o desenvolvimento. Caso contrário, pode se tornar uma fonte de instabilidade."
    },
    {
        "question": "A questão da mulher na África é complexa. Em muitas sociedades, apesar de serem a base da agricultura familiar, elas enfrentam:",
        "options": [
            "Igualdade de direitos e de acesso à terra",
            "Desigualdade de gênero, acesso limitado à educação e sobrecarga de trabalho",
            "A proibição de trabalhar fora de casa",
            "Salários mais altos que os dos homens"
        ],
        "answer": "Desigualdade de gênero, acesso limitado à educação e sobrecarga de trabalho",
        "solution": "Embora o papel da mulher varie muito entre as diferentes culturas, a desigualdade de gênero ainda é um grande obstáculo para o desenvolvimento social e econômico em muitas partes do continente."
    },
    {
        "question": "O que é a União Africana (UA)?",
        "options": [
            "Uma aliança militar com os Estados Unidos",
            "Uma organização que promove a integração econômica e política entre os países africanos",
            "Um bloco econômico que inclui países da Europa",
            "Uma empresa de mineração que atua em todo o continente"
        ],
        "answer": "Uma organização que promove a integração econômica e política entre os países africanos",
        "solution": "A União Africana, sucessora da Organização da Unidade Africana, busca promover a paz, a democracia e o desenvolvimento, além de representar o continente em fóruns globais."
    },
    {
        "question": "O analfabetismo na África, apesar de ter diminuído, ainda é um grande desafio, principalmente entre:",
        "options": [
            "Homens que vivem nas capitais",
            "Mulheres e populações rurais",
            "Crianças da elite urbana",
            "Imigrantes europeus"
        ],
        "answer": "Mulheres e populações rurais",
        "solution": "O acesso à educação ainda é desigual, com as meninas e as populações que vivem em áreas rurais remotas tendo as maiores taxas de analfabetismo."
    },
    {
        "question": "A pandemia de COVID-19 representou um grande risco para a África devido à:",
        "options": [
            "Inexistência do vírus no continente",
            "Fragilidade dos sistemas de saúde e à dificuldade de acesso a vacinas",
            "População majoritariamente idosa",
            "Recusa da população em usar máscaras"
        ],
        "answer": "Fragilidade dos sistemas de saúde e à dificuldade de acesso a vacinas",
        "solution": "A pandemia ameaçou sobrecarregar os já frágeis sistemas de saúde e exacerbou as desigualdades, com os países africanos ficando para trás na corrida global pelas vacinas."
    },
    {
        "question": "Por que a esperança de vida ao nascer na África é a mais baixa do mundo?",
        "options": [
            "Devido ao clima quente do continente",
            "Pela combinação de alta mortalidade infantil, epidemias, pobreza e conflitos",
            "Porque os africanos têm uma predisposição genética a viver menos",
            "Devido a uma dieta excessivamente saudável"
        ],
        "answer": "Pela combinação de alta mortalidade infantil, epidemias, pobreza e conflitos",
        "solution": "Todos esses fatores somados contribuem para que a expectativa de vida média no continente seja significativamente menor do que em outras partes do mundo."
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