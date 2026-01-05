const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetTabId = tab.dataset.tab;

        tabs.forEach((t) => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });

        tabPanels.forEach((panel) => {
            panel.classList.remove('active');
        });

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        document
            .getElementById(targetTabId)
            .classList.add('active');
    });
});