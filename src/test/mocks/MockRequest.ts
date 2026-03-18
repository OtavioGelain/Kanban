export const mockRequest = (data: any ={}) => {
    return {
        body: {},
        params: {},
        query: {},
        ...data
    } as any
}