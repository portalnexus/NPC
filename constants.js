export const ResourceType = {
    // Categoria: Avaliações e Desafios
    DESAFIO: "Desafio",
    PROB: "Problema",
    DESAFIO_SEMANAL: "Desafio Semanal (Enunciado)",

    // Categoria: Materiais de Ensino
    EXPOSITIVO: "Material Expositivo/Explicação",
    ESTUDO_CASO: "Estudo de Caso",
    ARTIGO: "Artigo Científico/Análise",

    // Categoria: Atividades e Projetos
    ATIVIDADE: "Atividade",
    DINAMICA: "Dinâmica em Grupo",
    PROJETO_STEAM: "Projeto STEAM",
    PROJETO: "Projeto (Maker/Colaborativo)",

    // Categoria: Conteúdo Digital
    MIDIAS: "Conteúdo para Mídias",

    // Categoria: Outros
    OUTRO: "Outro",
};

export const DISCIPLINAS_OPTIONS = [
    { value: "Matemática", label: "Matemática" }, { value: "Língua Portuguesa", label: "Língua Portuguesa" }, { value: "Programação e Robótica", label: "Programação e Robótica" }, { value: "Geografia", label: "Geografia" }, { value: "História", label: "História" }, { value: "Língua Inglesa", label: "Língua Inglesa" }, { value: "Educação Física", label: "Educação Física" }, { value: "Física", label: "Física" }, { value: "Química", label: "Química" }, { value: "Biologia", label: "Biologia" }, { value: "Filosofia", label: "Filosofia" }, { value: "Sociologia", label: "Sociologia" }, { value: "Libras", label: "Libras" }, { value: "STEAM", label: "STEAM" },
];

export const TIPO_RECURSO_OPTIONS = [
    {
        label: "Avaliações e Desafios",
        options: [
            { value: ResourceType.DESAFIO, label: ResourceType.DESAFIO },
            { value: ResourceType.PROB, label: ResourceType.PROB },
            { value: ResourceType.DESAFIO_SEMANAL, label: ResourceType.DESAFIO_SEMANAL },
        ]
    },
    {
        label: "Materiais de Ensino",
        options: [
            { value: ResourceType.EXPOSITIVO, label: ResourceType.EXPOSITIVO },
            { value: ResourceType.ESTUDO_CASO, label: ResourceType.ESTUDO_CASO },
            { value: ResourceType.ARTIGO, label: ResourceType.ARTIGO },
        ]
    },
    {
        label: "Atividades e Projetos",
        options: [
            { value: ResourceType.ATIVIDADE, label: ResourceType.ATIVIDADE },
            { value: ResourceType.DINAMICA, label: ResourceType.DINAMICA },
            { value: ResourceType.PROJETO_STEAM, label: ResourceType.PROJETO_STEAM },
            { value: ResourceType.PROJETO, label: ResourceType.PROJETO },
        ]
    },
    {
        label: "Conteúdo Digital",
        options: [
            { value: ResourceType.MIDIAS, label: ResourceType.MIDIAS },
        ]
    },
    {
        label: "Outros",
        options: [
            { value: ResourceType.OUTRO, label: ResourceType.OUTRO },
        ]
    }
];
export const NIVEL_DESAFIO_OPTIONS = [ { value: "Fácil", label: "Fácil" }, { value: "Intermediário", label: "Intermediário" }, { value: "Difícil", label: "Difícil" }, { value: "Hardcore", label: "Hardcore" }];
export const FORMATO_PROBLEMA_OPTIONS = [ { value: "Múltipla escolha", label: "Múltipla escolha" }, { value: "Resposta curta", label: "Resposta curta" }, { value: "Desenvolvimento passo a passo", label: "Desenvolvimento passo a passo" }, { value: "Problema de lógica", label: "Problema de lógica" }, { value: "Estudo de caso", label: "Estudo de caso" }, { value: "Projeto prático", label: "Projeto prático" }];
export const PROFUNDIDADE_EXPOSITIVO_OPTIONS = [ { value: "Introdução ao tópico", label: "Introdução ao tópico" }, { value: "Explicação detalhada", label: "Explicação detalhada" }, { value: "Resumo para revisão", label: "Resumo para revisão" }];
export const ESTILO_ESCRITA_EXPOSITIVO_OPTIONS = [ { value: "Didático", label: "Didático" }, { value: "Formal", label: "Formal" }, { value: "Informal", label: "Informal" }, { value: "Com analogias", label: "Com analogias" }];
export const ELEMENTOS_INCLUIR_EXPOSITIVO_OPTIONS = [ { value: "Exemplos práticos", label: "Exemplos práticos" }, { value: "Divisão em seções com subtítulos", label: "Divisão em seções com subtítulos" }, { value: "Glossário de termos chave", label: "Glossário de termos chave" }, { value: "Sugestão de leituras/recursos adicionais", label: "Sugestão de leituras/recursos adicionais" }];
export const TIPO_MIDIA_OPTIONS = [ { value: "Imagem", label: "Imagem" }, { value: "Vídeo", label: "Vídeo" }, { value: "Áudio", label: "Áudio" }, { value: "Infográfico", label: "Infográfico" }];
export const FOCO_TEXTO_MIDIA_OPTIONS = [ { value: "Descritivo", label: "Descritivo" }, { value: "Reflexivo", label: "Reflexivo" }, { value: "Análise técnica", label: "Análise técnica" }, { value: "Contexto histórico", label: "Contexto histórico" }];
export const NATUREZA_DESAFIO_SEMANAL_OPTIONS = [ { value: "Enigma", label: "Enigma" }, { value: "Problema aberto", label: "Problema aberto" }, { value: "Questão interdisciplinar", label: "Questão interdisciplinar" }, { value: "Provocação filosófica", label: "Provocação filosófica" }];
export const ESTRUTURA_ARTIGO_OPTIONS = [ { value: "Introdução", label: "Introdução" }, { value: "Metodologia (se aplicável)", label: "Metodologia (se aplicável)" }, { value: "Resultados (se aplicável)", label: "Resultados (se aplicável)" }, { value: "Discussão", label: "Discussão" }, { value: "Conclusão", label: "Conclusão" }, { value: "Referências", label: "Referências" }];
export const NIVEL_FORMALIDADE_ARTIGO_OPTIONS = [ { value: "Acadêmico (rigoroso)", label: "Acadêmico (rigoroso)" }, { value: "Divulgação Científica (acessível)", label: "Divulgação Científica (acessível)" }];
export const LINGUAGEM_SAIDA_OPTIONS = [ { value: "Português do Brasil", label: "Português do Brasil" }, { value: "Inglês", label: "Inglês" }];
export const TOM_VOZ_OPTIONS = [ { value: "Informativo", label: "Informativo" }, { value: "Engajador", label: "Engajador" }, { value: "Formal", label: "Formal" }, { value: "Divertido", label: "Divertido" }, { value: "Desafiador", label: "Desafiador" }, { value: "Didático", label: "Didático" }, { value: "Sóbrio", label: "Sóbrio" }, { value: "Inspirador", label: "Inspirador" }];
export const FORMATO_SAIDA_OPTIONS = [ { value: "Texto Simples", label: "Texto Simples" }, { value: "Markdown", label: "Markdown" }, { value: "HTML (básico)", label: "HTML (básico)" }, { value: "JSON Estruturado", label: "JSON Estruturado" }, { value: "Documento de texto formatado", label: "Documento de texto formatado" }, { value: "Apresentação de slides", label: "Apresentação de slides" }, { value: "Roteiro", label: "Roteiro" }];

export const FORMATO_RESPOSTA_PROBLEMA_OPTIONS = [
    { value: "Apenas a resposta final", label: "Apenas a resposta final" },
    { value: "Passo a passo", label: "Passo a passo" },
    { value: "Código", label: "Código" },
];

export const NIVEL_DIFICULDADE_PROBLEMA_OPTIONS = [
    { value: "Fácil", label: "Fácil" },
    { value: "Médio", label: "Médio" },
    { value: "Difícil", label: "Difícil" },
];

export const STEAM_COMPONENTS_OPTIONS = [
    { value: "Science", label: "Science (Ciências)" },
    { value: "Technology", label: "Technology (Tecnologia)" },
    { value: "Engineering", label: "Engineering (Engenharia)" },
    { value: "Arts", label: "Arts (Artes)" },
    { value: "Mathematics", label: "Mathematics (Matemática)" },
];

// --- Novas Constantes para Seções Adicionadas ---

// IV.I. Detalhes para "Atividade"
export const TIPO_ATIVIDADE_OPTIONS = [
    { value: "Exercício de fixação", label: "Exercício de fixação" },
    { value: "Preenchimento de lacunas", label: "Preenchimento de lacunas" },
    { value: "Múltipla escolha", label: "Múltipla escolha" },
    { value: "Verdadeiro ou Falso", label: "Verdadeiro ou Falso" },
    { value: "Cruzadinha", label: "Cruzadinha" },
];
export const NIVEL_DIFICULDADE_ATIVIDADE_OPTIONS = [
    { value: "Fácil", label: "Fácil" },
    { value: "Médio", label: "Médio" },
    { value: "Difícil", label: "Difícil" },
];

// IV.J. Detalhes para "Dinâmica em Grupo"
export const OBJETIVO_DINAMICA_OPTIONS = [
    { value: "Quebra-gelo", label: "Quebra-gelo" },
    { value: "Team building (Construção de equipe)", label: "Team building (Construção de equipe)" },
    { value: "Debate ou Discussão", label: "Debate ou Discussão" },
    { value: "Resolução de Problemas em Grupo", label: "Resolução de Problemas em Grupo" },
];
export const PARTICIPANTES_DINAMICA_OPTIONS = [
    { value: "Pequenos grupos (2-4)", label: "Pequenos grupos (2-4)" },
    { value: "Grupos médios (5-10)", label: "Grupos médios (5-10)" },
    { value: "Grandes grupos (11+)", label: "Grandes grupos (11+)" },
    { value: "Toda a turma", label: "Toda a turma" },
];

// IV.K. Detalhes para "Projeto (Maker/Colaborativo)"
export const TIPO_PROJETO_OPTIONS = [
    { value: "Projeto de Pesquisa", label: "Projeto de Pesquisa" },
    { value: "Construção de Protótipo (Maker)", label: "Construção de Protótipo (Maker)" },
    { value: "Campanha de Conscientização", label: "Campanha de Conscientização" },
    { value: "Desenvolvimento de Solução", label: "Desenvolvimento de Solução" },
    { value: "Criação Artística/Cultural", label: "Criação Artística/Cultural" },
];
export const ENTREGA_PROJETO_OPTIONS = [
    { value: "Relatório escrito", label: "Relatório escrito" },
    { value: "Apresentação de slides", label: "Apresentação de slides" },
    { value: "Vídeo", label: "Vídeo" },
    { value: "Protótipo funcional", label: "Protótipo funcional" },
    { value: "Portfólio", label: "Portfólio" },
    { value: "Código-fonte", label: "Código-fonte" },
];