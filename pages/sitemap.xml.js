import { Constants } from '../utils/constants'

const generateSiteMap = () => {
    const sitemaps = [
        'sitemap.course.xml',
        'sitemap.blog.xml',
        'sitemap.recipe.xml',
        'sitemap.static.xml'
    ]

    const sitemapUrl = sitemaps
        .map((id) => {
            return `
        <sitemap>
          <loc>${Constants.URL}/${id}</loc>
        </sitemap>
      `
        }).join('')

    return `<?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapUrl}
      </sitemapindex>
    `
}


function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({res}) {
    try {
        const sitemap = generateSiteMap()

        res.setHeader('Content-Type', 'text/xml')
        res.write(sitemap)
        res.end()

        return {
            props: {}
        }
    } catch (error) {
        console.log(error)

        return {
            props: {}
        }
    }
}

export default SiteMap
