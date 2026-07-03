function checkLink() {
    const linkInput = document.getElementById('linkInput');
    const resultDiv = document.getElementById('result');
    const url = linkInput.value.trim();
    
    if (!url) {
        resultDiv.innerHTML = 'اكتبي رابط اولاً';
        resultDiv.className = 'danger';
        return;
    }

    // قائمة كلمات مشبوهة بسيطة
    const dangerWords = ['free-gift', 'bit.ly', 'prize', 'urgent', 'login-now', 'verify-account'];
    const isDangerous = dangerWords.some(word => url.toLowerCase().includes(word));

    if (isDangerous) {
        resultDiv.innerHTML = '⚠️ تحذير: هذا الرابط مشبوه! لا تضغطي عليه';
        resultDiv.className = 'danger';
    } else {
        resultDiv.innerHTML = '✅ الرابط يبدو آمن مبدئياً. بس دائماً كوني حذرة';
        resultDiv.className = 'safe';
    }
}

// تخلي الانتر هم يشتغل
document.getElementById('linkInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkLink();
    }
});
