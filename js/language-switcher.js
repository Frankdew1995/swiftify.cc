/**
 * Language Switcher Functionality
 * Handles switching between English and Chinese languages
 */
document.addEventListener('DOMContentLoaded', function() {
  const enBtn = document.getElementById('en-btn');
  const zhBtn = document.getElementById('zh-btn');
  const body = document.body;
  
  // Set initial language to Chinese by default
  function setInitialLanguage() {
    // Always default to Chinese
    setChineseLanguage();
  }
  
  // Set to English
  function setEnglishLanguage() {
    body.classList.remove('zh');
    body.classList.add('en');
    zhBtn.classList.remove('active');
    enBtn.classList.add('active');
    updatePlaceholders();
    localStorage.setItem('preferredLanguage', 'en');
  }
  
  // Set to Chinese
  function setChineseLanguage() {
    body.classList.remove('en');
    body.classList.add('zh');
    enBtn.classList.remove('active');
    zhBtn.classList.add('active');
    updatePlaceholders();
    localStorage.setItem('preferredLanguage', 'zh');
  }
  
  // Update form placeholders based on language
  function updatePlaceholders() {
    const isZh = body.classList.contains('zh');
    
    // Form fields
    const nameInput = document.getElementById('inputName');
    const phoneInput = document.getElementById('inputNumber');
    const emailInput = document.getElementById('inputEmail3');
    const messageInput = document.getElementById('inputMsg');
    
    if (nameInput) nameInput.placeholder = isZh ? '您的姓名' : 'Your Name';
    if (phoneInput) phoneInput.placeholder = isZh ? '您的电话号码' : 'Your Phone Number';
    if (emailInput) emailInput.placeholder = isZh ? '您的电子邮件' : 'Your Email';
    if (messageInput) messageInput.placeholder = isZh ? '您的留言内容' : 'Your Message';
  }
  
  // Event listeners for language buttons
  if (enBtn) {
    enBtn.addEventListener('click', setEnglishLanguage);
  }
  
  if (zhBtn) {
    zhBtn.addEventListener('click', setChineseLanguage);
  }
  
  // Initialize language
  setInitialLanguage();
}); 