export const consumeApi = async (gqlEndpoint:string,query:string) => {
    const response = await fetch(gqlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
    })
    return response.json()
}