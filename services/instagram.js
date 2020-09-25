export const getInstagram = async() => {
 const { IG_TOKEN, IG_USER } = process.env;  


  const getMediaURL = (id) => {
    return `https://graph.instagram.com/${id}/children?fields=media_url,id,media_type&access_token=${IG_TOKEN}`;
  };

  async function getIG() {
    try {
      const res = await fetch(
        `https://graph.instagram.com/${IG_USER}/media?fields=caption,media_url,id,media_type&access_token=${IG_TOKEN}&limit=10`
      );
      const { data } = await res.json();
      const carousels = data.filter(
        ({ media_type }) => media_type === 'CAROUSEL_ALBUM'
      );

      for (let obj of data) {
        if (obj.media_type === 'CAROUSEL_ALBUM') {
          const req = await fetch(getMediaURL(obj.id));
          const { data } = await req.json();
          obj.media_url = data;
        }
      }

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  return await getIG();
}