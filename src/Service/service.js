// I am used to call for all the apis and used through out the application.

export const login = async (username, password) => {
    const response = await fetch('/api/login', {
        method: 'post',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    const json = await response.json();
    return json;
};