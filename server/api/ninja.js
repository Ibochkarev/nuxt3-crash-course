export default defineEventHandler(async (event) => {

  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cLCzMna8Spo1RIqQKSj0aJ4YXJSIiUqwu9JU1JQY')

  return data
})