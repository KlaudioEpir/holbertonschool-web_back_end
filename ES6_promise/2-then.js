export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
//.then() (Sukses): Ekzekutohet vetëm nëse Promise zgjidhet me sukses. 
// Në këtë rast, rikthen objektin me statusin 200 dhe trupin 'success'.

//.catch() (Gabim): Ekzekutohet nëse Promise refuzohet (ka një gabim). 
// Aty kapim gabimin dhe rikthejmë thjesht një objekt bosh new Error().

//.finally() (Gjithmonë): Ekzekutohet në çdo rast, pavarësisht nëse Promise doli me sukses apo me gabim. 
// Pikërisht këtu vendosim console.log('Got a response from the API') 
// sepse kërkesa thotë që ky mesazh të afishohet për çdo përfundim (resolution).