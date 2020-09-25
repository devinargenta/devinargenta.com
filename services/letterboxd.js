import { xml2json } from 'xml-js';

export const getLetterboxd = async() => {
  const res = await fetch(`https://letterboxd.com/steelydevin/rss/`);
  const xml = await res.text();
  const { rss } = JSON.parse(xml2json(xml, { compact: true, spaces: 2 }));
  return rss.channel;
} 