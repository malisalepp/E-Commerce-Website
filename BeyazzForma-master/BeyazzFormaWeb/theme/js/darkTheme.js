// Tema anahtarýnýn adý
const themeKey = 'selectedTheme';

// Temayý deðiþtirme fonksiyonu
const switchTheme = () => {
    $('body').toggleClass('dark-theme');

    // Temayý localStorage'a kaydetme
    const isDarkTheme = $('body').hasClass('dark-theme');
    localStorage.setItem(themeKey, isDarkTheme);
};

// Sayfa yüklendiðinde tema kontrolü
$(document).ready(() => {
    const savedTheme = localStorage.getItem(themeKey);

    // Eðer kullanýcý daha önce tema seçtiyse, onu uygula
    if (savedTheme !== null && savedTheme === 'true') {
        $('body').addClass('dark-theme');
    }

    // Tema deðiþtirme butonuna týklama olayý
    $('.theme-switch').on('click', switchTheme);
});
