export const initGA = (id) => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', id);
};

export const logPageView = (url) => {
    window.gtag('config', 'G-H3WDBJ820H', {
        page_path: url,
    });
};
