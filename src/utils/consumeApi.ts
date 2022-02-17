export const consumeApi = async (query:string) => {
    
    const gqlEndpoint = "http://localhost:4000/grqphql"
    
    const response = await fetch(gqlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
    })
    return response.json()
}