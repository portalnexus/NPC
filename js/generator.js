import { ResourceType } from './constants.js';

export function formatPrompt(data) {
    let promptLines = [];
    const addLine = (label, value, indent = 0) => {
        const prefix = ' '.repeat(indent * 2);
        if (value && (Array.isArray(value) ? value.length > 0 : String(value).trim() !== "")) {
            promptLines.push(`${prefix}${label}: ${Array.isArray(value) ? value.join(', ') : value}`);
        } else {
            promptLines.push(`${prefix}${label}: Não especificado`);
        }
    };
    const addRawLine = (value, indent = 0) => {
        promptLines.push(' '.repeat(indent * 2) + (value || 'Não especificado'));
    };

    promptLines.push("I. Objetivo Principal do Conteúdo:");
    addRawLine(data.objetivoPrincipal, 1);

    promptLines.push("\nII. Disciplina:");
    addRawLine(data.disciplina, 1);

    promptLines.push("\nIII. Tópico/Conteúdo Específico:");
    addRawLine(data.topicoEspecifico, 1);

    promptLines.push("\nIV. Tipo de Recurso/Formato:");
    if (data.tipoRecurso === ResourceType.OUTRO) {
        addRawLine(`${ResourceType.OUTRO}: ${data.tipoRecursoOutroEspecificar || "Não especificado"}`, 1);
    } else {
        addRawLine(data.tipoRecurso, 1);
    }

    if (data.tipoRecurso === ResourceType.DESAFIO) {
        promptLines.push("\nIV.A. Detalhes para \"Desafio\":");
        addLine("Nível", data.detalhesDesafio.nivel, 1);
        addLine("Formato do Problema", data.detalhesDesafio.formatoProblema, 1);
        addLine("Incluir Dica?", data.detalhesDesafio.incluirDica ? "Sim" : "Não", 1);
        if (data.detalhesDesafio.incluirDica) {
            addLine("Dica", data.detalhesDesafio.dicaConteudo, 2);
        }
        addLine("Fornecer Solução Completa?", data.detalhesDesafio.fornecerSolucao ? "Sim" : "Não", 1);
        if (data.detalhesDesafio.fornecerSolucao) {
            addLine("Solução", data.detalhesDesafio.solucaoConteudo, 2);
        }
        addLine("Requisitos Adicionais do Desafio", data.detalhesDesafio.requisitosAdicionais, 1);
    }

    if (data.tipoRecurso === ResourceType.EXPOSITIVO) {
      promptLines.push("\nIV.B. Detalhes para \"Material Expositivo/Explicação\":");
      addLine("Profundidade", data.detalhesExpositivo.profundidade, 1);
      addLine("Estilo de Escrita", data.detalhesExpositivo.estiloEscrita, 1);
      addLine("Elementos a Incluir", data.detalhesExpositivo.elementosIncluir, 1);
      addLine("Requisitos Adicionais da Explicação", data.detalhesExpositivo.requisitosAdicionais, 1);
    }

    if (data.tipoRecurso === ResourceType.MIDIAS) {
      promptLines.push("\nIV.C. Detalhes para \"Conteúdo para Mídias\":");
      addLine("Tipo de Mídia", data.detalhesMidias.tipoMidia, 1);
      addLine("Foco do Texto", data.detalhesMidias.focoTexto, 1);
      addLine("Comprimento Aproximado (palavras)", data.detalhesMidias.comprimentoAproximado, 1);
      addLine("Requisitos Adicionais", data.detalhesMidias.requisitosAdicionais, 1);
    }

    if (data.tipoRecurso === ResourceType.DESAFIO_SEMANAL) {
      promptLines.push("\nIV.D. Detalhes para \"Desafio Semanal (Enunciado)\":");
      addLine("Natureza do Desafio", data.detalhesDesafioSemanal.naturezaDesafio, 1);
      addLine("Título Sugerido", data.detalhesDesafioSemanal.tituloSugerido, 1);
      addLine("Instrução Principal para o Leitor", data.detalhesDesafioSemanal.instrucaoPrincipal, 1);
    }

    if (data.tipoRecurso === ResourceType.ARTIGO) {
      promptLines.push("\nIV.E. Detalhes para \"Artigo Científico/Análise\":");
      addLine("Estrutura Típica", data.detalhesArtigo.estruturaTipica, 1);
      addLine("Nível de Formalidade", data.detalhesArtigo.nivelFormalidade, 1);
      addLine("Requisitos Adicionais do Artigo", data.detalhesArtigo.requisitosAdicionais, 1);
    }

    if (data.tipoRecurso === ResourceType.PROB) {
        promptLines.push("\nIV.F. Detalhes para \"Problema\":");
        addLine("Descrição do Problema", data.detalhesProblema.descricao, 1);
        addLine("Formato da Resposta Esperada", data.detalhesProblema.formatoResposta, 1);
        addLine("Nível de Dificuldade", data.detalhesProblema.nivelDificuldade, 1);
        addLine("Requisitos Adicionais do Problema", data.detalhesProblema.requisitosAdicionais, 1);
    }

    if (data.tipoRecurso === ResourceType.ESTUDO_CASO) {
        promptLines.push("\nIV.G. Detalhes para \"Estudo de Caso\":");
        addLine("Situação/Contexto", data.detalhesEstudoCaso.situacao, 1);
        addLine("Questões para Análise/Discussão", data.detalhesEstudoCaso.questoes, 1);
        addLine("Pontos Chave para Investigação", data.detalhesEstudoCaso.pontosChave, 1);
    }

    if (data.tipoRecurso === ResourceType.PROJETO_STEAM) {
        promptLines.push("\nIV.H. Detalhes para \"Projeto STEAM\":");
        addLine("Conceito Central do Projeto", data.detalhesSteam.conceitoCentral, 1);
        addLine("Componentes STEAM Envolvidos", data.detalhesSteam.componentes, 1);
        addLine("Objetivos de Aprendizagem", data.detalhesSteam.objetivos, 1);
        addLine("Materiais Sugeridos", data.detalhesSteam.materiais, 1);
        addLine("Etapas do Projeto (sugestão)", data.detalhesSteam.etapas, 1);
        addLine("Formato de Entrega Final", data.detalhesSteam.entregaFinal, 1);
    }

    if (data.publicoAlvo) {
        promptLines.push("\nV. Público Alvo:");
        addRawLine(data.publicoAlvo, 1);
    }
    if (data.metodologiaEnsino) {
        promptLines.push("\nVI. Metodologia de Ensino/Abordagem Preferida:");
        addRawLine(data.metodologiaEnsino, 1);
    }

    promptLines.push("\nVII. Detalhes Adicionais Gerais / Requisitos Específicos do Prompt Final:");
    addRawLine(data.detalhesAdicionais, 1);
    addLine("Linguagem de Saída do Conteúdo Gerado", data.linguagemSaida, 1);
    addLine("Tom de Voz Desejado no Conteúdo Gerado", data.tomVoz, 1);
    addLine("Formato de Saída Desejado do Conteúdo Gerado", data.formatoSaida, 1);

    return promptLines.join('\n').trim();
}
