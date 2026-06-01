import contentstack from '@contentstack/delivery-sdk'

let Stack = null

function getStack() {
  if (Stack) return Stack

  const api_key = process.env.NEXT_PUBLIC_CS_API_KEY
  const delivery_token = process.env.NEXT_PUBLIC_CS_DELIVERY_TOKEN
  const environment = process.env.NEXT_PUBLIC_CS_ENV

  if (!api_key || !delivery_token || !environment) {
    console.warn(
      'Warning: Contentstack credentials (NEXT_PUBLIC_CS_API_KEY, NEXT_PUBLIC_CS_DELIVERY_TOKEN, NEXT_PUBLIC_CS_ENV) are not configured. Contentstack SDK will not be initialized.'
    )
    return null
  }

  Stack = contentstack.stack({
    apiKey: api_key,
    deliveryToken: delivery_token,
    environment,
  })

  return Stack
}

export default getStack()

export async function getHomepage() {
  try {
    const sdk = getStack()
    if (!sdk) return null
    const result = await sdk.contentType('homepage').entry().find()
    return result?.entries?.[0] || null
  } catch (e) {
    console.error('getHomepage error:', e.message)
    return null
  }
}

export async function getFeaturedEvents() {
  try {
    const sdk = getStack()
    if (!sdk) return []
    const result = await sdk.contentType('run_event').entry().query().where('is_featured', true).find()
    return result?.entries || []
  } catch (e) {
    console.error('getFeaturedEvents error:', e.message)
    return []
  }
}

export async function getTestimonials() {
  try {
    const sdk = getStack()
    if (!sdk) return []
    const result = await sdk.contentType('testimonial').entry().find()
    return result?.entries || []
  } catch (e) {
    console.error('getTestimonials error:', e.message)
    return []
  }
}

export async function getGallery() {
  try {
    const sdk = getStack()
    if (!sdk) return []
    const result = await sdk.contentType('gallery_image').entry().find()
    return result?.entries || []
  } catch (e) {
    console.error('getGallery error:', e.message)
    return []
  }
}

export async function getNavigation() {
  try {
    const sdk = getStack()
    if (!sdk) return null
    const result = await sdk.contentType('navigation').entry().find()
    return result?.entries?.[0] || null
  } catch (e) {
    console.error('getNavigation error:', e.message)
    return null
  }
}