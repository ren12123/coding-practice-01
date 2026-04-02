export const setupValidation = (formSelector: string, btnSelector: string): void => {
    const form = document.querySelector<HTMLFormElement>(formSelector);
    const submitBtn = document.querySelector<HTMLButtonElement>(btnSelector);
    
    if (!form || !submitBtn) return;

    form.addEventListener('input', () => {
        // すべての必須入力が埋まっているかチェック
        const isValid = form.checkValidity();
        // 判定結果をボタンの活性/非活性に反映
        submitBtn.disabled = !isValid;
        submitBtn.style.opacity = isValid ? '1' : '0.5';
        submitBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
    });
};