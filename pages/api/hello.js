// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* Do Not Fetch an API Route from getStaticProps() or getStaticPaths() 
because getStaticProps() and getStaticPaths() runs only on the server-side. It will never be run on the client-side. It won’t even be included in the JS bundle for the browser. 
*/
export default function handler(req, res) {
  /*
  - req is an instance of http.IncomingMessage, plus some pre-built middlewares
  you can see here.

  - res is an instance of http.ServerResponse, plus some helper functions you can see here.
  */
  res.status(200).json({ text: 'Hello' });
}
