// Tema anahtar�n�n ad�
const themeKey = 'selectedTheme';

// Temay� de�i�tirme fonksiyonu
const switchTheme = () => {
    $('body').toggleClass('dark-theme');

    // Temay� localStorage'a kaydetme
    const isDarkTheme = $('body').hasClass('dark-theme');
    localStorage.setItem(themeKey, isDarkTheme);
};

// Sayfa y�klendi�inde tema kontrol�
$(document).ready(() => {
    const savedTheme = localStorage.getItem(themeKey);

    // E�er kullan�c� daha �nce tema se�tiyse, onu uygula
    if (savedTheme !== null && savedTheme === 'true') {
        $('body').addClass('dark-theme');
    }

    // Tema de�i�tirme butonuna t�klama olay�
    $('.theme-switch').on('click', switchTheme);
});
