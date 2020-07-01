interface Response {
    token: string,
    user: {
        name: string,
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sdfgsfgsfg34t2545t25234tq3ef',
                user: {
                    name: 'Diego',
                    email: 'diego@rocketseat.com.br'
                }
            })
        }, 2000);
    });
}