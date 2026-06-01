import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import JoinCTA from '../components/JoinCTA'
import Footer from '../components/Footer'
import {
  getHomepage,
  getFeaturedEvents,
  getTestimonials,
  getGallery,
  getNavigation,
} from '../lib/contentstack'

export default function Home({ homepage, events, testimonials, gallery, nav }) {
  const seoTitle = homepage?.seo_title || 'PaceX RunClub | #1 Running Community in Bangalore'
  const seoDesc = homepage?.seo_description || "Join PaceX, Bangalore's most vibrant run club. Morning runs at Ecoworld & Cubbon Park every weekend."

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar nav={nav} />
      <main>
        <Hero homepage={homepage} />
        <Events events={events} />
        <Gallery gallery={gallery} />
        <Testimonials testimonials={testimonials} />
        <JoinCTA nav={nav} />
      </main>
      <Footer nav={nav} />
    </>
  )
}

export async function getStaticProps() {
  const [homepage, events, testimonials, gallery, nav] = await Promise.all([
    getHomepage(),
    getFeaturedEvents(),
    getTestimonials(),
    getGallery(),
    getNavigation(),
  ])

  return {
    props: {
      homepage: homepage || null,
      events: events || [],
      testimonials: testimonials || [],
      gallery: gallery || [],
      nav: nav || null,
    },
    revalidate: 60,
  }
}
