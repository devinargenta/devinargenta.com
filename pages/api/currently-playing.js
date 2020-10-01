import { getLastPlayed } from '../../services/spotify';

export default async function currentlyPlaying(req, res) {
  try {
    const lastPlayed = await getLastPlayed();
    return res.status(200).send(lastPlayed);
  } catch (error) {
    return res.sendStatus(500);
  }
}
