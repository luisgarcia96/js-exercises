import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

async function getOGImageSource(url) {
  const response = await fetch(url);
  const html = await response.text();
  const { document } = new JSDOM(html).window;
  const metaTags = Array.from(document.getElementsByTagName('meta'));
  const ogImageTag = metaTags.find(tag => tag.getAttribute('property') === 'og:image');
  return ogImageTag ? ogImageTag.getAttribute('content') : null;
}


const urlTofetch = 'https://www.bfmtv.com/tech/actualites/odaptos-la-start-up-qui-decrypte-les-emotions-grace-a-l-intelligence-artificielle_AV-202301100745.html';

getOGImageSource(urlTofetch)
.then(imageUrl => {
if (imageUrl) {
    console.log('Open Graph Image URL:', imageUrl);
} else {
    console.log('No Open Graph Image Found');
}
});


