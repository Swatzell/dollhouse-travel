import React from "react";
import './Connect.css';
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';

const Connect = () => {
    return (
        <div className="Connect">
            <h1>Connect with Dollhouse</h1>
            <h2>Facebook</h2>
            <div>
  <FacebookEmbed url="https://www.facebook.com/61560671880324/posts/122097673736355729/?mibextid=WC7FNe&rdid=1wJtIc2OOsjnj8nS" width={550} />
</div>
<h2>Instagram</h2>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CkgMVfBOlxx/?igsh=MTJtYnBxdTBjOWRyMw%3D%3D" width={328} />
</div>
        </div>
    );
}

export default Connect;