
const getInfo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }

}



document.addEventListener('DOMContentLoaded', async () => {
    const data = await getInfo();
    let cards = '';
    const containerRow = document.querySelector('#card-container');

    data.forEach(d => {
        cards += `
            <div class="col-md-6 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${d.title.toUpperCase()}</h5>
                        <p class="card-text">${d.body}</p>
                        <p class="card-text"><small class="text-muted">ID: ${d.id}</small></p>
                        <p class="card-text"><small class="text-muted">User ID: ${d.userId}</small></p>
                    </div>
                </div>
            </div>
        `;
    });

    containerRow.innerHTML = cards;
});