document.addEventListener('DOMContentLoaded', () => {

    const ResourceType = {
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

    const DISCIPLINAS_OPTIONS = [
        { value: "Matemática", label: "Matemática" }, { value: "Língua Portuguesa", label: "Língua Portuguesa" }, { value: "Programação e Robótica", label: "Programação e Robótica" }, { value: "Geografia", label: "Geografia" }, { value: "História", label: "História" }, { value: "Língua Inglesa", label: "Língua Inglesa" }, { value: "Educação Física", label: "Educação Física" }, { value: "Física", label: "Física" }, { value: "Química", label: "Química" }, { value: "Biologia", label: "Biologia" }, { value: "Filosofia", label: "Filosofia" }, { value: "Sociologia", label: "Sociologia" }, { value: "Libras", label: "Libras" }, { value: "STEAM", label: "STEAM" },
    ];

    const TIPO_RECURSO_OPTIONS = Object.values(ResourceType).map(value => ({ value, label: value }));

    // IV.A. Desafio
    const NIVEL_DESAFIO_OPTIONS = [ { value: "Fácil", label: "Fácil" }, { value: "Intermediário", label: "Intermediário" }, { value: "Difícil", label: "Difícil" }, { value: "Hardcore", label: "Hardcore" }];
    const FORMATO_PROBLEMA_OPTIONS = [ { value: "Múltipla escolha", label: "Múltipla escolha" }, { value: "Resposta curta", label: "Resposta curta" }, { value: "Desenvolvimento passo a passo", label: "Desenvolvimento passo a passo" }, { value: "Problema de lógica", label: "Problema de lógica" }, { value: "Estudo de caso", label: "Estudo de caso" }, { value: "Projeto prático", label: "Projeto prático" }];

    // IV.B. Material Expositivo/Explicação
    const PROFUNDIDADE_EXPOSITIVO_OPTIONS = [ { value: "Introdução ao tópico", label: "Introdução ao tópico" }, { value: "Explicação detalhada", label: "Explicação detalhada" }, { value: "Resumo para revisão", label: "Resumo para revisão" }];
    const ESTILO_ESCRITA_EXPOSITIVO_OPTIONS = [ { value: "Didático", label: "Didático" }, { value: "Formal", label: "Formal" }, { value: "Informal", label: "Informal" }, { value: "Com analogias", label: "Com analogias" }];
    const ELEMENTOS_INCLUIR_EXPOSITIVO_OPTIONS = [ { value: "Exemplos práticos", label: "Exemplos práticos" }, { value: "Divisão em seções com subtítulos", label: "Divisão em seções com subtítulos" }, { value: "Glossário de termos chave", label: "Glossário de termos chave" }, { value: "Sugestão de leituras/recursos adicionais", label: "Sugestão de leituras/recursos adicionais" }];

    // IV.C. Conteúdo para Mídias
    const TIPO_MIDIA_OPTIONS = [ { value: "Imagem", label: "Imagem" }, { value: "Vídeo", label: "Vídeo" }, { value: "Áudio", label: "Áudio" }, { value: "Infográfico", label: "Infográfico" }];
    const FOCO_TEXTO_MIDIA_OPTIONS = [ { value: "Descritivo", label: "Descritivo" }, { value: "Reflexivo", label: "Reflexivo" }, { value: "Análise técnica", label: "Análise técnica" }, { value: "Contexto histórico", label: "Contexto histórico" }];
    const FOCO_TEXTO_MIDIA_OPTIONS = [ { value: "Descritivo", label: "Descritivo" }, { value: "Reflexivo", label: "Reflexivo" }, { value: "Análise técnica", label: "Análise técnica" }, { value: "Contexto histórico", label: "Contexto histórico" }];

    // IV.D. Desafio Semanal
    const NATUREZA_DESAFIO_SEMANAL_OPTIONS = [ { value: "Enigma", label: "Enigma" }, { value: "Problema aberto", label: "Problema aberto" }, { value: "Questão interdisciplinar", label: "Questão interdisciplinar" }, { value: "Provocação filosófica", label: "Provocação filosófica" }];

    // IV.E. Artigo Científico/Análise
    const ESTRUTURA_ARTIGO_OPTIONS = [ { value: "Introdução", label: "Introdução" }, { value: "Metodologia (se aplicável)", label: "Metodologia (se aplicável)" }, { value: "Resultados (se aplicável)", label: "Resultados (se aplicável)" }, { value: "Discussão", label: "Discussão" }, { value: "Conclusão", label: "Conclusão" }, { value: "Referências", label: "Referências" }];
    const NIVEL_FORMALIDADE_ARTIGO_OPTIONS = [ { value: "Acadêmico (rigoroso)", label: "Acadêmico (rigoroso)" }, { value: "Divulgação Científica (acessível)", label: "Divulgação Científica (acessível)" }];

    // IV.F. Problema
    const FORMATO_RESPOSTA_PROBLEMA_OPTIONS = [ { value: "Numérico", label: "Numérico" }, { value: "Texto curto", label: "Texto curto" }, { value: "Múltipla Escolha (com justificativa)", label: "Múltipla Escolha (com justificativa)" }, { value: "Desenvolvimento completo", label: "Desenvolvimento completo" } ];
    const NIVEL_DIFICULDADE_PROBLEMA_OPTIONS = [ { value: "Básico", label: "Básico" }, { value: "Intermediário", label: "Intermediário" }, { value: "Avançado", label: "Avançado" } ];

    // IV.H. Projeto STEAM
    const STEAM_COMPONENTS_OPTIONS = [ { value: "Ciência", label: "Ciência" }, { value: "Tecnologia", label: "Tecnologia" }, { value: "Engenharia", label: "Engenharia" }, { value: "Artes", label: "Artes" }, { value: "Matemática", label: "Matemática" }];

    // VII. Detalhes Adicionais
    const LINGUAGEM_SAIDA_OPTIONS = [ { value: "Português do Brasil", label: "Português do Brasil" }, { value: "Inglês", label: "Inglês" }];
    const TOM_VOZ_OPTIONS = [ { value: "Informativo", label: "Informativo" }, { value: "Engajador", label: "Engajador" }, { value: "Formal", label: "Formal" }, { value: "Divertido", label: "Divertido" }, { value: "Desafiador", label: "Desafiador" }, { value: "Didático", label: "Didático" }, { value: "Sóbrio", label: "Sóbrio" }, { value: "Inspirador", label: "Inspirador" }];
    const FORMATO_SAIDA_OPTIONS = [ { value: "Texto Simples", label: "Texto Simples" }, { value: "Markdown", label: "Markdown" }, { value: "HTML (básico)", label: "HTML (básico)" }, { value: "JSON Estruturado", label: "JSON Estruturado" }, { value: "Documento de texto formatado", label: "Documento de texto formatado" }, { value: "Apresentação de slides", label: "Apresentação de slides" }, { value: "Roteiro", label: "Roteiro" }];

    const getInitialFormData = () => ({
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

    let formData = getInitialFormData();
    let generatedPrompt = '';

    // --- DOM ELEMENT REFERENCES ---
    const form = document.getElementById('prompt-form');
    const generateBtn = document.getElementById('generate-prompt-btn');
    const clearBtn = document.getElementById('clear-form-btn');
    const copyBtn = document.getElementById('copy-prompt-btn');
    const generatedPromptContainer = document.getElementById('generated-prompt-container');
    const generatedPromptArea = document.getElementById('generated-prompt-area');
    const copySuccessMsg = document.getElementById('copy-success-msg');
    
    // --- HELPER FUNCTIONS FOR POPULATING FORM ---
    function populateSelect(selectId, options) {
        const select = document.getElementById(selectId);
        select.innerHTML = '';
        options.forEach(opt => {
            const optionEl = document.createElement('option');
            optionEl.value = opt.value;
            optionEl.textContent = opt.label;
            select.appendChild(optionEl);
        });
    }

    function populateRadioGroup(containerId, options, name) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        options.forEach(opt => {
            const id = `${name}-${opt.value.replace(/\s+/g, '-')}`;
            const div = document.createElement('div');
            const input = document.createElement('input');
            input.id = id;
            input.name = name;
            input.type = 'radio';
            input.value = opt.value;
            const label = document.createElement('label');
            label.htmlFor = id;
            label.textContent = opt.label;
            div.appendChild(input);
            div.appendChild(label);
            container.appendChild(div);
        });
    }

    function populateCheckboxGroup(containerId, options, name) {
        const container = document.getElementById(containerId);
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

    // --- INITIAL POPULATION ---
    function populateForm() {
        populateSelect('disciplina', DISCIPLINAS_OPTIONS);
        populateSelect('tipoRecurso', TIPO_RECURSO_OPTIONS);

        // IV.A. Desafio
        populateSelect('nivelDesafio', NIVEL_DESAFIO_OPTIONS); // Alterado de RadioGroup para Select
        populateCheckboxGroup('formato-problema-options', FORMATO_PROBLEMA_OPTIONS, 'formatoProblema');

        // IV.B. Material Expositivo/Explicação
        populateSelect('profundidadeExpositivo', PROFUNDIDADE_EXPOSITIVO_OPTIONS); // Alterado de RadioGroup para Select
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
    
    // --- UI UPDATE FUNCTIONS ---
    function setFormValues(data) {
        document.getElementById('objetivoPrincipal').value = data.objetivoPrincipal;
        document.getElementById('disciplina').value = data.disciplina;
        document.getElementById('topicoEspecifico').value = data.topicoEspecifico;
        document.getElementById('tipoRecurso').value = data.tipoRecurso;
        document.getElementById('tipoRecursoOutroEspecificar').value = data.tipoRecursoOutroEspecificar;

        // Desafio
        document.getElementById('nivelDesafio').value = data.detalhesDesafio.nivel; // Alterado para .value
        document.querySelectorAll('input[name="formatoProblema"]').forEach(el => el.checked = data.detalhesDesafio.formatoProblema.includes(el.value));
        document.getElementById('incluirDica').checked = data.detalhesDesafio.incluirDica;
        document.getElementById('dicaConteudo').value = data.detalhesDesafio.dicaConteudo;
        document.getElementById('fornecerSolucao').checked = data.detalhesDesafio.fornecerSolucao;
        document.getElementById('solucaoConteudo').value = data.detalhesDesafio.solucaoConteudo;
        document.getElementById('requisitosAdicionaisDesafio').value = data.detalhesDesafio.requisitosAdicionais;
        
        // Expositivo
        document.getElementById('profundidadeExpositivo').value = data.detalhesExpositivo.profundidade; // Alterado para .value
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

        updateConditionalSections();
    }

    function updateConditionalSections() {
        const tipoRecurso = formData.tipoRecurso;
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
            dicaContainer.classList.toggle('hidden-section', !formData.detalhesDesafio.incluirDica);
        }
        
        const solucaoContainer = document.getElementById('solucao-container');
        if (solucaoContainer) {
            solucaoContainer.classList.toggle('hidden-section', !formData.detalhesDesafio.fornecerSolucao);
        }
    }
    
    function collectFormData() {
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
        data.detalhesDesafio.nivel = document.getElementById('nivelDesafio').value; // Alterado para .value
        data.detalhesDesafio.formatoProblema = Array.from(document.querySelectorAll('input[name="formatoProblema"]:checked')).map(el => el.value);
        data.detalhesDesafio.incluirDica = document.getElementById('incluirDica').checked;
        data.detalhesDesafio.dicaConteudo = document.getElementById('dicaConteudo').value;
        data.detalhesDesafio.fornecerSolucao = document.getElementById('fornecerSolucao').checked;
        data.detalhesDesafio.solucaoConteudo = document.getElementById('solucaoConteudo').value;
        data.detalhesDesafio.requisitosAdicionais = document.getElementById('requisitosAdicionaisDesafio').value;
        
        // Expositivo
        data.detalhesExpositivo.profundidade = document.getElementById('profundidadeExpositivo').value; // Alterado para .value
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

    // --- PROMPT FORMATTING ---
    function formatPrompt(data) {
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

    // --- EVENT HANDLERS ---
    function showCopyMessage(message, isSuccess) {
        copySuccessMsg.textContent = message;
        copySuccessMsg.className = isSuccess ? 'success-message' : 'error-message';
        setTimeout(() => { copySuccessMsg.textContent = ''; }, 2000);
    }
    
    form.addEventListener('change', () => {
        formData = collectFormData();
        updateConditionalSections();
    });

    generateBtn.addEventListener('click', () => {
        formData = collectFormData();
        generatedPrompt = formatPrompt(formData);
        generatedPromptArea.value = generatedPrompt;
        generatedPromptContainer.classList.remove('hidden-section');
        copySuccessMsg.textContent = '';
    });

    clearBtn.addEventListener('click', () => {
        formData = getInitialFormData();
        setFormValues(formData);
        generatedPrompt = '';
        generatedPromptArea.value = '';
        generatedPromptContainer.classList.add('hidden-section');
        copySuccessMsg.textContent = '';
    });

    copyBtn.addEventListener('click', () => {
        if (!generatedPrompt) {
            showCopyMessage('Nada para copiar!', false);
            return;
        }
        navigator.clipboard.writeText(generatedPrompt).then(() => {
            showCopyMessage('Prompt copiado com sucesso!', true);
        }).catch(err => {
            console.error('Erro ao copiar: ', err);
            showCopyMessage('Falha ao copiar.', false);
        });
    });
    
    // --- INITIALIZATION ---
    populateForm();
    setFormValues(formData);

});