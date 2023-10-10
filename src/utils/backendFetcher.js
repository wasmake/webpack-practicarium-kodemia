export function getData(endpoint) {
    return fetch('http://localhost:5000/' + endpoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error fetching data");
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export async function getAsyncData(endpoint) {
    return await (await fetch('http://localhost:5000/' + endpoint)).json();
}

export async function removeAsyncTodo(id) {
    return await (await fetch(`http://localhost:5000/todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1
        })
    })).json();
}