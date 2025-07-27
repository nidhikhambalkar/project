function getStarted() {
  alert("Redirecting to sign-up page...");
}

function toggleFAQ(element) {
  const answer = element.querySelector('.answer');
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const translations = {
  en: {
    heading: "Unlimited movies, TV shows and more",
    subheading: "Watch anywhere. Cancel anytime.",
    placeholder: "Email address",
    button: "Get Started",
    reasons: [
      "📱 Watch on any device",
      "🕒 Cancel anytime",
      "🎁 New content every week"
    ],
    faq: [
      {
        q: "What is Netflix?",
        a: "Netflix is a streaming service with a wide variety of TV shows, movies, and more."
      },
      {
        q: "How much does it cost?",
        a: "Plans start at ₹149/month."
      }
    ]
  },
  h1: {
    heading: "अनगिनत फ़िल्में, टीवी शो और बहुत कुछ",
    subheading: "कहीं भी देखें. कभी भी रद्द करें.",
    placeholder: "ईमेल पता",
    button: "शुरू करें",
    reasons: [
      "📱 किसी भी डिवाइस पर देखें",
      "🕒 कभी भी रद्द करें",
      "🎁 हर हफ्ते नया कंटेंट"
    ],
    faq: [
      {
        q: "Netflix क्या है?",
        a: "Netflix एक स्ट्रीमिंग सेवा है जिसमें ढेर सारे टीवी शो और फ़िल्में हैं।"
      },
      {
        q: "इसकी कीमत कितनी है?",
        a: "प्लान ₹149/माह से शुरू होते हैं।"
      }
    ]
  }
};

document.getElementById('language').addEventListener('change', function () {
  const lang = this.value === 'Hindi' ? 'h1' : 'en';
  const t = translations[lang];

  // Hero section
  document.getElementById('heading').textContent = t.heading;
  document.getElementById('subheading').textContent = t.subheading;
  document.getElementById('emailInput').placeholder = t.placeholder;
  document.querySelector('.input-area button').textContent = t.button;

  // More Reasons to Join
  const reasonsList = document.querySelector('#reasons ul');
  reasonsList.innerHTML = "";
  t.reasons.forEach(reason => {
    const li = document.createElement('li');
    li.textContent = reason;
    reasonsList.appendChild(li);
  });

  // FAQ section
  const faqSection = document.querySelector('#faq');
  const faqItems = faqSection.querySelectorAll('.faq-item');
  faqItems.forEach((item, i) => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('.answer');
    question.textContent = t.faq[i].q;
    answer.textContent = t.faq[i].a;
  });
});
function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

