import { getAllBlogs } from '../services/blog/blogService'
import { Constants } from '../utils/constants'

const generateSiteMap = (article) => {
    const articleUrls = article
        .map(({ id }) => {
            return `
        <url>
          <loc>${Constants.URL}/blog/${id}</loc>
          <changefreq>weekly</changefreq>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.80</priority>
        </url>
      `;
        }).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${articleUrls}
    </urlset>
  `;
};

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    try {
        const articles = await getAllBlogs();
        const sitemap = generateSiteMap(articles);

        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemap);
        res.end();

        return {
            props: {},
        };
    } catch (error) {
        console.log(error);

        return {
            props: {},
        };
    }
};

export default SiteMap;
