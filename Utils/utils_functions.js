export function generateRandomEmail() {
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
    return `email${timestamp}@yopmail.com`;
}
