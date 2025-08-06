// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';

function Custom() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
   useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: '/custom'
        })
        .promise();
        console.log("content", content)

      setContent(content);
      console.log("content", content)
      setNotFound(!content);

      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
       document.title = content.data.title
      }
    }
    fetchContent();
  }, [window.location.pathname]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Component Showcase</h1>
      {content ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <div>Loading...</div>
      )}
      <footer style={{ marginTop: '20px' }}>Static Footer</footer>
    </div>
  );
}

export default Custom;