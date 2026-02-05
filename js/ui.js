import {
    ResourceType,
    DISCIPLINAS_OPTIONS,
    TIPO_RECURSO_OPTIONS,
    NIVEL_DESAFIO_OPTIONS,
    FORMATO_PROBLEMA_OPTIONS,
    PROFUNDIDADE_EXPOSITIVO_OPTIONS,
    ESTILO_ESCRITA_EXPOSITIVO_OPTIONS,
    ELEMENTOS_INCLUIR_EXPOSITIVO_OPTIONS,
    TIPO_MIDIA_OPTIONS,
    FOCO_TEXTO_MIDIA_OPTIONS,
    NATUREZA_DESAFIO_SEMANAL_OPTIONS,
    ESTRUTURA_ARTIGO_OPTIONS,
    NIVEL_FORMALIDADE_ARTIGO_OPTIONS,
    FORMATO_RESPOSTA_PROBLEMA_OPTIONS,
    NIVEL_DIFICULDADE_PROBLEMA_OPTIONS,
    STEAM_COMPONENTS_OPTIONS,
    LINGUAGEM_SAIDA_OPTIONS,
    TOM_VOZ_OPTIONS,
    FORMATO_SAIDA_OPTIONS
} from './constants.js';

import { getInitialFormData } from './state.js';

export function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    if (!select) return;
    select.innerHTML = '';
    options.forEach(opt => {
        const optionEl = document.createElement('option');
        optionEl.value = opt.value;
        optionEl.textContent = opt.label;
        select.appendChild(optionEl);
    });
}

export function populateCheckboxGroup(containerId, options, name) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    options.forEach(opt => {
        const id = `${name}-${opt.value.replace(/\s+/g, '-')}`;
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.id = id;
        input.name = name;
        input.type = 'checkbox';
        input.value = opt.value;
        const label = document.createElement('label');
        label.htmlFor = id;
        label.textContent = opt.label;
        div.appendChild(input);
        div.appendChild(label);
        container.appendChild(div);
    });
}

export function populateForm() {
    populateSelect('disciplina', DISCIPLINAS_OPTIONS);
    populateSelect('tipoRecurso', TIPO_RECURSO_OPTIONS);

    // IV.A. Desafio
    populateSelect('nivelDesafio', NIVEL_DESAFIO_OPTIONS);
    populateCheckboxGroup('formato-problema-options', FORMATO_PROBLEMA_OPTIONS, 'formatoProblema');

    // IV.B. Material Expositivo/Explicação
    populateSelect('profundidadeExpositivo', PROFUNDIDADE_EXPOSITIVO_OPTIONS);
    populateSelect('estiloEscritaExpositivo', ESTILO_ESCRITA_EXPOSITIVO_OPTIONS);
    populateCheckboxGroup('elementos-incluir-options', ELEMENTOS_INCLUIR_EXPOSITIVO_OPTIONS, 'elementosIncluir');

    // IV.C. Conteúdo para Mídias
    populateSelect('tipoMidia', TIPO_MIDIA_OPTIONS);
    populateSelect('focoTextoMidia', FOCO_TEXTO_MIDIA_OPTIONS);

    // IV.D. Desafio Semanal
    populateSelect('naturezaDesafioSemanal', NATUREZA_DESAFIO_SEMANAL_OPTIONS);

    // IV.E. Artigo Científico/Análise
    populateCheckboxGroup('estrutura-artigo-options', ESTRUTURA_ARTIGO_OPTIONS, 'estruturaTipica');
    populateSelect('nivelFormalidadeArtigo', NIVEL_FORMALIDADE_ARTIGO_OPTIONS);

    // IV.F. Problema
    populateSelect('formatoRespostaProblema', FORMATO_RESPOSTA_PROBLEMA_OPTIONS);
    populateSelect('nivelDificuldadeProblema', NIVEL_DIFICULDADE_PROBLEMA_OPTIONS);

    // IV.H. Projeto STEAM
    populateCheckboxGroup('steam-componentes-options', STEAM_COMPONENTS_OPTIONS, 'steamComponentes');

    // VII. Detalhes Adicionais
    populateSelect('linguagemSaida', LINGUAGEM_SAIDA_OPTIONS);
    populateSelect('tomVoz', TOM_VOZ_OPTIONS);
    populateSelect('formatoSaida', FORMATO_SAIDA_OPTIONS);
}

export function setFormValues(data) {
    document.getElementById('objetivoPrincipal').value = data.objetivoPrincipal;
    document.getElementById('disciplina').value = data.disciplina;
    document.getElementById('topicoEspecifico').value = data.topicoEspecifico;
    document.getElementById('tipoRecurso').value = data.tipoRecurso;
    document.getElementById('tipoRecursoOutroEspecificar').value = data.tipoRecursoOutroEspecificar;

    // Desafio
    document.getElementById('nivelDesafio').value = data.detalhesDesafio.nivel;
    document.querySelectorAll('input[name="formatoProblema"]').forEach(el => el.checked = data.detalhesDesafio.formatoProblema.includes(el.value));
    document.getElementById('incluirDica').checked = data.detalhesDesafio.incluirDica;
    document.getElementById('dicaConteudo').value = data.detalhesDesafio.dicaConteudo;
    document.getElementById('fornecerSolucao').checked = data.detalhesDesafio.fornecerSolucao;
    document.getElementById('solucaoConteudo').value = data.detalhesDesafio.solucaoConteudo;
    document.getElementById('requisitosAdicionaisDesafio').value = data.detalhesDesafio.requisitosAdicionais;

    // Expositivo
    document.getElementById('profundidadeExpositivo').value = data.detalhesExpositivo.profundidade;
    document.getElementById('estiloEscritaExpositivo').value = data.detalhesExpositivo.estiloEscrita;
    document.querySelectorAll('input[name="elementosIncluir"]').forEach(el => el.checked = data.detalhesExpositivo.elementosIncluir.includes(el.value));
    document.getElementById('requisitosAdicionaisExpositivo').value = data.detalhesExpositivo.requisitosAdicionais;

    // Mídias
    document.getElementById('tipoMidia').value = data.detalhesMidias.tipoMidia;
    document.getElementById('focoTextoMidia').value = data.detalhesMidias.focoTexto;
    document.getElementById('comprimentoAproximadoMidia').value = data.detalhesMidias.comprimentoAproximado;
    document.getElementById('requisitosAdicionaisMidia').value = data.detalhesMidias.requisitosAdicionais;

    // Desafio Semanal
    document.getElementById('naturezaDesafioSemanal').value = data.detalhesDesafioSemanal.naturezaDesafio;
    document.getElementById('tituloSugeridoDesafioSemanal').value = data.detalhesDesafioSemanal.tituloSugerido;
    document.getElementById('instrucaoPrincipalDesafioSemanal').value = data.detalhesDesafioSemanal.instrucaoPrincipal;

    // Artigo
    document.querySelectorAll('input[name="estruturaTipica"]').forEach(el => el.checked = data.detalhesArtigo.estruturaTipica.includes(el.value));
    document.getElementById('nivelFormalidadeArtigo').value = data.detalhesArtigo.nivelFormalidade;
    document.getElementById('requisitosAdicionaisArtigo').value = data.detalhesArtigo.requisitosAdicionais;

    // Problema
    document.getElementById('descricaoProblema').value = data.detalhesProblema.descricao;
    document.getElementById('formatoRespostaProblema').value = data.detalhesProblema.formatoResposta;
    document.getElementById('nivelDificuldadeProblema').value = data.detalhesProblema.nivelDificuldade;
    document.getElementById('requisitosAdicionaisProblema').value = data.detalhesProblema.requisitosAdicionais;

    // Estudo de Caso
    document.getElementById('estudoCasoSituacao').value = data.detalhesEstudoCaso.situacao;
    document.getElementById('estudoCasoQuestoes').value = data.detalhesEstudoCaso.questoes;
    document.getElementById('estudoCasoPontosChave').value = data.detalhesEstudoCaso.pontosChave;

    // STEAM
    document.getElementById('steamConceitoCentral').value = data.detalhesSteam.conceitoCentral;
    document.querySelectorAll('input[name="steamComponentes"]').forEach(el => el.checked = data.detalhesSteam.componentes.includes(el.value));
    document.getElementById('steamObjetivos').value = data.detalhesSteam.objetivos;
    document.getElementById('steamMateriais').value = data.detalhesSteam.materiais;
    document.getElementById('steamEtapas').value = data.detalhesSteam.etapas;
    document.getElementById('steamEntregaFinal').value = data.detalhesSteam.entregaFinal;

    document.getElementById('publicoAlvo').value = data.publicoAlvo;
    document.getElementById('metodologiaEnsino').value = data.metodologiaEnsino;
    document.getElementById('detalhesAdicionais').value = data.detalhesAdicionais;
    document.getElementById('linguagemSaida').value = data.linguagemSaida;
    document.getElementById('tomVoz').value = data.tomVoz;
    document.getElementById('formatoSaida').value = data.formatoSaida;

    updateConditionalSections(data.tipoRecurso, data.detalhesDesafio.incluirDica, data.detalhesDesafio.fornecerSolucao);
    updateAllCounters();
}

export function updateAllCounters() {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        if (textarea.id === 'generated-prompt-area') return;
        const counter = document.getElementById(`counter-${textarea.id}`);
        if (counter) {
            counter.textContent = `${textarea.value.length} caracteres`;
        }
    });
}

export function updateConditionalSections(tipoRecurso, incluirDica, fornecerSolucao) {
    const sections = {
        [ResourceType.DESAFIO]: 'section-desafio',
        [ResourceType.EXPOSITIVO]: 'section-expositivo',
        [ResourceType.MIDIAS]: 'section-midias',
        [ResourceType.DESAFIO_SEMANAL]: 'section-desafio-semanal',
        [ResourceType.ARTIGO]: 'section-artigo',
        [ResourceType.PROB]: 'section-problema',
        [ResourceType.ESTUDO_CASO]: 'section-estudo-caso',
        [ResourceType.PROJETO_STEAM]: 'section-steam',
        [ResourceType.OUTRO]: 'section-outro'
    };

    Object.values(sections).forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.classList.add('hidden-section');
        }
    });

    if (sections[tipoRecurso]) {
        const section = document.getElementById(sections[tipoRecurso]);
        if (section) {
            section.classList.remove('hidden-section');
        }
    }

    const dicaContainer = document.getElementById('dica-container');
    if (dicaContainer) {
        dicaContainer.classList.toggle('hidden-section', !incluirDica);
    }

    const solucaoContainer = document.getElementById('solucao-container');
    if (solucaoContainer) {
        solucaoContainer.classList.toggle('hidden-section', !fornecerSolucao);
    }
}

export function collectFormData() {
    const data = getInitialFormData();

    // Top-level fields
    data.objetivoPrincipal = document.getElementById('objetivoPrincipal').value;
    data.disciplina = document.getElementById('disciplina').value;
    data.topicoEspecifico = document.getElementById('topicoEspecifico').value;
    data.tipoRecurso = document.getElementById('tipoRecurso').value;
    data.tipoRecursoOutroEspecificar = document.getElementById('tipoRecursoOutroEspecificar').value;
    data.publicoAlvo = document.getElementById('publicoAlvo').value;
    data.metodologiaEnsino = document.getElementById('metodologiaEnsino').value;
    data.detalhesAdicionais = document.getElementById('detalhesAdicionais').value;
    data.linguagemSaida = document.getElementById('linguagemSaida').value;
    data.tomVoz = document.getElementById('tomVoz').value;
    data.formatoSaida = document.getElementById('formatoSaida').value;

    // Nested details
    // Desafio
    data.detalhesDesafio.nivel = document.getElementById('nivelDesafio').value;
    data.detalhesDesafio.formatoProblema = Array.from(document.querySelectorAll('input[name="formatoProblema"]:checked')).map(el => el.value);
    data.detalhesDesafio.incluirDica = document.getElementById('incluirDica').checked;
    data.detalhesDesafio.dicaConteudo = document.getElementById('dicaConteudo').value;
    data.detalhesDesafio.fornecerSolucao = document.getElementById('fornecerSolucao').checked;
    data.detalhesDesafio.solucaoConteudo = document.getElementById('solucaoConteudo').value;
    data.detalhesDesafio.requisitosAdicionais = document.getElementById('requisitosAdicionaisDesafio').value;

    // Expositivo
    data.detalhesExpositivo.profundidade = document.getElementById('profundidadeExpositivo').value;
    data.detalhesExpositivo.estiloEscrita = document.getElementById('estiloEscritaExpositivo').value;
    data.detalhesExpositivo.elementosIncluir = Array.from(document.querySelectorAll('input[name="elementosIncluir"]:checked')).map(el => el.value);
    data.detalhesExpositivo.requisitosAdicionais = document.getElementById('requisitosAdicionaisExpositivo').value;

    // Mídias
    data.detalhesMidias.tipoMidia = document.getElementById('tipoMidia').value;
    data.detalhesMidias.focoTexto = document.getElementById('focoTextoMidia').value;
    data.detalhesMidias.comprimentoAproximado = document.getElementById('comprimentoAproximadoMidia').value;
    data.detalhesMidias.requisitosAdicionais = document.getElementById('requisitosAdicionaisMidia').value;

    // Desafio Semanal
    data.detalhesDesafioSemanal.naturezaDesafio = document.getElementById('naturezaDesafioSemanal').value;
    data.detalhesDesafioSemanal.tituloSugerido = document.getElementById('tituloSugeridoDesafioSemanal').value;
    data.detalhesDesafioSemanal.instrucaoPrincipal = document.getElementById('instrucaoPrincipalDesafioSemanal').value;

    // Artigo
    data.detalhesArtigo.estruturaTipica = Array.from(document.querySelectorAll('input[name="estruturaTipica"]:checked')).map(el => el.value);
    data.detalhesArtigo.nivelFormalidade = document.getElementById('nivelFormalidadeArtigo').value;
    data.detalhesArtigo.requisitosAdicionais = document.getElementById('requisitosAdicionaisArtigo').value;

    // Problema
    data.detalhesProblema.descricao = document.getElementById('descricaoProblema').value;
    data.detalhesProblema.formatoResposta = document.getElementById('formatoRespostaProblema').value;
    data.detalhesProblema.nivelDificuldade = document.getElementById('nivelDificuldadeProblema').value;
    data.detalhesProblema.requisitosAdicionais = document.getElementById('requisitosAdicionaisProblema').value;

    // Estudo de Caso
    data.detalhesEstudoCaso.situacao = document.getElementById('estudoCasoSituacao').value;
    data.detalhesEstudoCaso.questoes = document.getElementById('estudoCasoQuestoes').value;
    data.detalhesEstudoCaso.pontosChave = document.getElementById('estudoCasoPontosChave').value;

    // STEAM
    data.detalhesSteam.conceitoCentral = document.getElementById('steamConceitoCentral').value;
    data.detalhesSteam.componentes = Array.from(document.querySelectorAll('input[name="steamComponentes"]:checked')).map(el => el.value);
    data.detalhesSteam.objetivos = document.getElementById('steamObjetivos').value;
    data.detalhesSteam.materiais = document.getElementById('steamMateriais').value;
    data.detalhesSteam.etapas = document.getElementById('steamEtapas').value;
    data.detalhesSteam.entregaFinal = document.getElementById('steamEntregaFinal').value;

    return data;
}

export function displayError(elementId, message) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let errorElement = document.getElementById(`error-${elementId}`);
    if (!errorElement) {
        errorElement = document.createElement('p');
        errorElement.id = `error-${elementId}`;
        errorElement.className = 'error-message';
        element.parentNode.insertBefore(errorElement, element.nextSibling);
    }
    errorElement.textContent = message;
    element.classList.add('input-error');
}

export function clearError(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    const errorElement = document.getElementById(`error-${elementId}`);
    if (errorElement) {
        errorElement.textContent = '';
    }
    element.classList.remove('input-error');
}

export function validateForm(data) {
    let isValid = true;
    // Limpar erros anteriores
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

    if (!data.objetivoPrincipal.trim()) {
        displayError('objetivoPrincipal', 'O objetivo principal é obrigatório.');
        isValid = false;
    }
    if (!data.topicoEspecifico.trim()) {
        displayError('topicoEspecifico', 'O tópico específico é obrigatório.');
        isValid = false;
    }

    if (data.tipoRecurso === ResourceType.OUTRO && !data.tipoRecursoOutroEspecificar.trim()) {
        displayError('tipoRecursoOutroEspecificar', 'Por favor, especifique o tipo de recurso.');
        isValid = false;
    }

    if (data.tipoRecurso === ResourceType.DESAFIO) {
        if (data.detalhesDesafio.incluirDica && !data.detalhesDesafio.dicaConteudo.trim()) {
            displayError('dicaConteudo', 'O conteúdo da dica é obrigatório.');
            isValid = false;
        }
        if (data.detalhesDesafio.fornecerSolucao && !data.detalhesDesafio.solucaoConteudo.trim()) {
            displayError('solucaoConteudo', 'O conteúdo da solução é obrigatório.');
            isValid = false;
        }
    }

    if (data.tipoRecurso === ResourceType.PROB && !data.detalhesProblema.descricao.trim()) {
        displayError('descricaoProblema', 'A descrição do problema é obrigatória.');
        isValid = false;
    }

    if (data.tipoRecurso === ResourceType.ESTUDO_CASO) {
        if (!data.detalhesEstudoCaso.situacao.trim()) {
            displayError('estudoCasoSituacao', 'A situação do estudo de caso é obrigatória.');
            isValid = false;
        }
        if (!data.detalhesEstudoCaso.questoes.trim()) {
            displayError('estudoCasoQuestoes', 'As questões para análise são obrigatórias.');
            isValid = false;
        }
    }

    if (data.tipoRecurso === ResourceType.PROJETO_STEAM) {
        if (!data.detalhesSteam.conceitoCentral.trim()) {
            displayError('steamConceitoCentral', 'O conceito central do projeto STEAM é obrigatório.');
            isValid = false;
        }
        if (data.detalhesSteam.componentes.length === 0) {
            displayError('steam-componentes-options', 'Selecione pelo menos um componente STEAM.');
            isValid = false;
        }
         if (!data.detalhesSteam.objetivos.trim()) {
            displayError('steamObjetivos', 'Os objetivos de aprendizagem são obrigatórios.');
            isValid = false;
        }
    }

    return isValid;
}

export function showCopyMessage(msgContainer, message, isSuccess) {
    msgContainer.textContent = message;
    msgContainer.className = isSuccess ? 'success-message' : 'error-message';
    setTimeout(() => { msgContainer.textContent = ''; }, 3000);
}

export function initAccordion() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('expanded');
        });
    });
}

export function initCharacterCounters() {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        // Ignora o textarea de prompt gerado
        if (textarea.id === 'generated-prompt-area') return;

        let counter = document.getElementById(`counter-${textarea.id}`);
        if (!counter) {
            counter = document.createElement('span');
            counter.id = `counter-${textarea.id}`;
            counter.className = 'char-counter';
            textarea.parentNode.insertBefore(counter, textarea.nextSibling);
        }

        const updateCounter = () => {
            const length = textarea.value.length;
            counter.textContent = `${length} caracteres`;
        };

        textarea.addEventListener('input', updateCounter);
        updateCounter();
    });
}
