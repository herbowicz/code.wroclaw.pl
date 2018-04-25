import React from 'react'

(function() { 
  var d = document, s = d.createElement('script');
  s.src = 'https://codewro.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();

const Disqus = () => (
  <div id="disqus_thread"></div>
)

export default Disqus;