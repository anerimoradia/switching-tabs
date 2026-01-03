const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetTabId = tab.CDATA_SECTION_NODE.tab;

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