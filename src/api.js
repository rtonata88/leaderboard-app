const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'ADBmyAgeUHMPNvm7Bm5F';
export default function url() {
  return `${baseUrl}games/${gameId}/scores/`;
}
