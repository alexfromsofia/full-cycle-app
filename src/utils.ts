export const canUseDOM = !!(
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"
)

export const graphqlURI = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/?access_token=${process.env.CDA_TOKEN}`
