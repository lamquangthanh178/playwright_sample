import { test, expect } from '@playwright/test';
import { login

 } from '../../Utils/API/api_command';
test('User login API test', async ({ request }) => {
    const apiBaseURL = test.info().project.use.apiBaseURL;

    const userLoginInfoPayload = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    };

    const response = await login(request, userLoginInfoPayload, apiBaseURL);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
});
