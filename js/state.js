import {
    DISCIPLINAS_OPTIONS,
    ResourceType,
    NIVEL_DESAFIO_OPTIONS,
    PROFUNDIDADE_EXPOSITIVO_OPTIONS,
    ESTILO_ESCRITA_EXPOSITIVO_OPTIONS,
    TIPO_MIDIA_OPTIONS,
    FOCO_TEXTO_MIDIA_OPTIONS,
    NATUREZA_DESAFIO_SEMANAL_OPTIONS,
    ESTRUTURA_ARTIGO_OPTIONS,
    NIVEL_FORMALIDADE_ARTIGO_OPTIONS,
    FORMATO_RESPOSTA_PROBLEMA_OPTIONS,
    NIVEL_DIFICULDADE_PROBLEMA_OPTIONS,
    LINGUAGEM_SAIDA_OPTIONS,
    TOM_VOZ_OPTIONS,
    FORMATO_SAIDA_OPTIONS
} from './constants.js';

export const getInitialFormData = () => ({
    objetivoPrincipal: "",
    disciplina: DISCIPLINAS_OPTIONS[0].value,
    topicoEspecifico: "",
    tipoRecurso: ResourceType.DESAFIO,
    tipoRecursoOutroEspecificar: "",
    detalhesDesafio: { nivel: NIVEL_DESAFIO_OPTIONS[0].value, formatoProblema: [], incluirDica: false, dicaConteudo: "", fornecerSolucao: false, solucaoConteudo: "", requisitosAdicionais: "" },
    detalhesExpositivo: { profundidade: PROFUNDIDADE_EXPOSITIVO_OPTIONS[0].value, estiloEscrita: ESTILO_ESCRITA_EXPOSITIVO_OPTIONS[0].value, elementosIncluir: [], requisitosAdicionais: "" },
    detalhesMidias: { tipoMidia: TIPO_MIDIA_OPTIONS[0].value, focoTexto: FOCO_TEXTO_MIDIA_OPTIONS[0].value, comprimentoAproximado: "", requisitosAdicionais: "" },
    detalhesDesafioSemanal: { naturezaDesafio: NATUREZA_DESAFIO_SEMANAL_OPTIONS[0].value, tituloSugerido: "", instrucaoPrincipal: "" },
    detalhesArtigo: { estruturaTipica: ESTRUTURA_ARTIGO_OPTIONS.map(opt => opt.value), nivelFormalidade: NIVEL_FORMALIDADE_ARTIGO_OPTIONS[0].value, requisitosAdicionais: "" },
    detalhesProblema: { descricao: "", formatoResposta: FORMATO_RESPOSTA_PROBLEMA_OPTIONS[0].value, nivelDificuldade: NIVEL_DIFICULDADE_PROBLEMA_OPTIONS[0].value, requisitosAdicionais: "" },
    detalhesEstudoCaso: { situacao: "", questoes: "", pontosChave: "" },
    detalhesSteam: { conceitoCentral: "", componentes: [], objetivos: "", materiais: "", etapas: "", entregaFinal: "" },
    publicoAlvo: "",
    metodologiaEnsino: "",
    detalhesAdicionais: "",
    linguagemSaida: LINGUAGEM_SAIDA_OPTIONS[0].value,
    tomVoz: TOM_VOZ_OPTIONS[0].value,
    formatoSaida: FORMATO_SAIDA_OPTIONS[0].value,
});

const STORAGE_KEY = 'npc_formData';

export function saveState(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Error parsing saved state", e);
        }
    }
    return getInitialFormData();
}

export function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}
