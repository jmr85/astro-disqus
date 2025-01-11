import React, { useEffect } from 'react';

const Comments = ({ url, id, title }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://jmruiz.disqus.com/embed.js';
    script.setAttribute('data-timestamp', +new Date());
    
    // Reset Disqus
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function() {
          this.page.url = url;
          this.page.identifier = id;
          this.page.title = title;
        }
      });
    }
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
      const disqusThread = document.getElementById('disqus_thread');
      if (disqusThread) {
        while (disqusThread.hasChildNodes()) {
          disqusThread.removeChild(disqusThread.firstChild);
        }
      }
      script.remove();
    };
  }, [url, id, title]);

  return <div id="disqus_thread" />;
};

export default Comments;
