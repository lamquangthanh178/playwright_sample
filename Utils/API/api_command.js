export async function login(request, userLoginInfoPayload, apiBaseURL) {
    const response = await request.post(`${apiBaseURL}/api/login`, {
        data: userLoginInfoPayload,
        headers: {
            'Content-Type': 'application/json',
            'Referer': apiBaseURL,
        }
    });

    return response;
}
