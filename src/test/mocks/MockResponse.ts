export const mockResponse = () => {
    const res: any = {};
    
    res.status = (status: number) => {
        res.statusCode = status;
        return res;
    };
    return res;
}