const urls = {
  'Flush Google': 'https://myactivity.google.com/delete-activity',
  'Flush Google Maps Activity': 'https://support.google.com/maps/answer/3137804',
  'Flush Amazon Voice Recordings': 'https://www.amazon.com/gp/help/customer/display.html?nodeId=201602040',
  'Manage your Alexa data': 'https://www.amazon.com/alexa-privacy/apd/myad',
  'Flush Microsoft Privacy Stuff': 'https://account.microsoft.com/privacy/',
  'Flush Apple Privacy Stuff': 'https://privacy.apple.com/',
  'Flush Facebook Stuff': 'https://www.facebook.com/help/325807937506242?helpref=faq_content',
  'Delete Instagram Search History': 'https://help.instagram.com/354860134605952',
  'Flush LinkedIn': 'https://www.linkedin.com/help/linkedin/answer/a1340649'
};

const buttonContainer = document.getElementById('button-container');

for (const [text, url] of Object.entries(urls)) {
  const button = document.createElement('button');
  button.textContent = text;
  button.onclick = () => {
    chrome.tabs.create({ url: url });
  };
  buttonContainer.appendChild(button);
}
