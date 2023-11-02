import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getData } from '../../../utils/data-manager'; // Assuming this is the correct path to your data-manager

function Blog() {
  const [blogData, setBlogData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching blog data from Strapi
        const response = await getData('blogs?populate=*');
        
        // Setting the blog data to state if response is valid
        if (response && response.data && response.data.data.length > 0) {
          const content = response.data.data[0].attributes.content;
          setBlogData(content);
        }
      } catch (error) {
        // Logging error to console if there is an issue fetching the data
        console.error('Error fetching blog data:', error);
      }
    };

    // Calling the fetchData function
    fetchData();
  }, []); // Empty dependency array to ensure this effect runs once on component mount

  return (
    <div>
      {/* Rendering the blog content using ReactMarkdown */}
      {/* <ReactMarkdown>{blogData}</ReactMarkdown> */}
      <div dangerouslySetInnerHTML={{ __html: blogData}} />
    </div>
  );
}

export default Blog;
