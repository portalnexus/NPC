import { loadState, saveState, clearState, getInitialFormData } from './js/state.js';
import { formatPrompt } from './js/generator.js';
import {
    populateForm,
    setFormValues,
    collectFormData,
    validateForm,
    showCopyMessage,
    clearError,
    updateConditionalSections,
    initAccordion,
    initCharacterCounters
} from './js/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    let formData = loadState();

    // --- DOM ELEMENT REFERENCES ---
    const form = document.getElementById('prompt-form');
    const generateBtn = document.getElementById('generate-prompt-btn');
    const clearBtn = document.getElementById('clear-form-btn');
    const copyBtn = document.getElementById('copy-prompt-btn');
    const generatedPromptContainer = document.getElementById('generated-prompt-container');
    const generatedPromptArea = document.getElementById('generated-prompt-area');
    const copySuccessMsg = document.getElementById('copy-success-msg');
    
    // --- EVENT HANDLERS ---

    const updatePreview = () => {
        formData = collectFormData();
        saveState(formData);
        const generatedPrompt = formatPrompt(formData);
        generatedPromptArea.value = generatedPrompt;
        // Mostra o preview assim que houver algum conteúdo relevante
        if (formData.objetivoPrincipal || formData.topicoEspecifico) {
            generatedPromptContainer.classList.remove('hidden-section');
        }
    };

    // --- INITIALIZATION ---
    populateForm();
    setFormValues(formData);
    initAccordion();
    initCharacterCounters();
    updatePreview();

    // --- EVENT HANDLERS ---
    
    form.addEventListener('input', updatePreview);

    form.addEventListener('change', (event) => {
        updatePreview();
        updateConditionalSections(formData.tipoRecurso, formData.detalhesDesafio.incluirDica, formData.detalhesDesafio.fornecerSolucao);
        if (event.target && event.target.id) {
            clearError(event.target.id);
        }
    });

    generateBtn.addEventListener('click', () => {
        formData = collectFormData();
        if (validateForm(formData)) {
            updatePreview();
            generatedPromptContainer.scrollIntoView({ behavior: 'smooth' });
            copySuccessMsg.textContent = '';
        } else {
            showCopyMessage(copySuccessMsg, 'Por favor, corrija os erros no formulário.', false);
            const firstError = form.querySelector('.input-error');
            if (firstError) {
                firstError.focus();
            }
        }
    });

    clearBtn.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja limpar todo o formulário?')) {
            clearState();
            formData = getInitialFormData();
            setFormValues(formData);
            generatedPromptArea.value = '';
            generatedPromptContainer.classList.add('hidden-section');
            copySuccessMsg.textContent = '';
        }
    });

    copyBtn.addEventListener('click', () => {
        if (!generatedPromptArea.value) {
            showCopyMessage(copySuccessMsg, 'Nada para copiar!', false);
            return;
        }
        navigator.clipboard.writeText(generatedPromptArea.value).then(() => {
            showCopyMessage(copySuccessMsg, 'Prompt copiado com sucesso!', true);
        }).catch(err => {
            console.error('Erro ao copiar: ', err);
            showCopyMessage(copySuccessMsg, 'Falha ao copiar.', false);
        });
    });
});
