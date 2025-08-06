export const ResourceType = {
    ARTIGO: "Artigo Científico/Análise",
    ATIVIDADE: "Atividade",
    MIDIAS: "Conteúdo para Mídias",
    DESAFIO: "Desafio",
    DESAFIO_SEMANAL: "Desafio Semanal (Enunciado)",
    DINAMICA: "Dinâmica",
    EXPOSITIVO: "Material Expositivo/Explicação",
    PROB: "Problema",
    PROJETO_COLABORATIVO: "Projeto colaborativo",
    PROJETO_MAKER: "Projeto Maker",
    PROJETO_STEAM: "Projeto STEAM",
    ESTUDO_CASO: "Estudo de Caso",
    OUTRO: "Outro",
};

export const DISCIPLINAS_OPTIONS = [
    { value: "Matemática", label: "Matemática" }, { value: "Língua Portuguesa", label: "Língua Portuguesa" }, { value: "Programação e Robótica", label: "Programação e Robótica" }, { value: "Geografia", label: "Geografia" }, { value: "História", label: "História" }, { value: "Língua Inglesa", label: "Língua Inglesa" }, { value: "Educação Física", label: "Educação Física" }, { value: "Física", label: "Física" }, { value: "Química", label: "Química" }, { value: "Biologia", label: "Biologia" }, { value: "Filosofia", label: "Filosofia" }, { value: "Sociologia", label: "Sociologia" }, { value: "Libras", label: "Libras" }, { value: "STEAM", label: "STEAM" },
];

export const TIPO_RECURSO_OPTIONS = Object.values(ResourceType).map(value => ({ value, label: value }));
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