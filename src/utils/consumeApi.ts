export const consumeApi = async (gqlEndpoint:string,query:string,variables?:object) => {
    const response = await fetch(gqlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query, variables })
    })
    return response.json()
}