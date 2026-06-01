import contentstack from '@contentstack/delivery-sdk'

const Stack = contentstack.stack({
  api_key: process.env.NEXT_PUBLIC_CS_API_KEY,
  delivery_token: process.env.NEXT_PUBLIC_CS_DELIVERY_TOKEN,
  environment: process.env.NEXT_PUBLIC_CS_ENV,
})

export default Stack

export async function getHomepage() {
  try {
    const result = await Stack.contentType('homepage').entry().fetch()
    return result || null
  } catch (e) {
    console.error('getHomepage error:', e.message)
    return null
  }
}

export async function getFeaturedEvents() {
  try {
    const result = await Stack.contentType('run_event').query().where('is_featured', true).find()
    return result?.entries || []
  } catch (e) {
    console.error('getFeaturedEvents error:', e.message)
    return []
  }
}

export async function getTestimonials() {
  try {
    const result = await Stack.contentType('testimonial').query().find()
    return result?.entries || []
  } catch (e) {
    console.error('getTestimonials error:', e.message)
    return []
  }
}

export async function getGallery() {
  try {
    const result = await Stack.contentType('gallery_image').query().find()
    return result?.entries || []
  } catch (e) {
    console.error('getGallery error:', e.message)
    return []
  }
}

export async function getNavigation() {
  try {
    const result = await Stack.contentType('navigation').entry().fetch()
    return result || null
  } catch (e) {
    console.error('getNavigation error:', e.message)
    return null
  }
}