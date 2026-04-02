export const setupScroll = (btnSelector: string, targetSelector: string): void => {
    // 1. 全ての対象ボタンを取得 (NodeList)
    const buttons = document.querySelectorAll<HTMLButtonElement>(btnSelector);
    const target = document.querySelector<HTMLElement>(targetSelector);

    // 3. 存在チェック（targetがない場合は何もしない）
    if (buttons.length > 0 && target) {
        // 4. リストの中の各ボタンに対して処理を登録
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
};