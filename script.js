function toggleLanguageOptions() {
    const options = document.getElementById('language-options');
    options.classList.toggle('hidden');
}

function selectLanguage(language) {
    document.getElementById('language').value = language;
    toggleLanguageOptions();
}

function validateInput() {
    const description = document.getElementById('description').value;
    const language = document.getElementById('language').value;
    const errorMessage = document.getElementById('error-message');

    if (description && language) {
        const code = `// Description: ${description}\n// Language: ${language}\n\n// Your generated code here`;
        localStorage.setItem('generatedCode', code);
        window.location.href = 'result.html';
    } else {
        errorMessage.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const codeOutput = document.getElementById('code-output');
    if (codeOutput) {
        const generatedCode = localStorage.getItem('generatedCode');
        if (generatedCode) {
            codeOutput.textContent = generatedCode;
        }
    }
});