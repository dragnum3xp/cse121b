document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const apiKey = 'live_wb3GGHMp1fNm4ICEXEkBniIcjlOJpHxtTBK3DmTeUweato9dsOEhNps8km9mxr3j'; 
    
    const catGrid = document.getElementById('catGrid');
    const catCountSelect = document.getElementById('catCountSelect');

    function fetchCats() {
        const catCount = parseInt(catCountSelect.value);
        fetch(`${url}?limit=${catCount}`, {
            headers: {
                'x-api-key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            catGrid.innerHTML = '';
            data.forEach(cat => {
                const image = document.createElement('img');
                image.src = cat.url;
                image.alt = 'Cat';
                const textBox = document.createElement('input')
                textBox.type = 'text';
                textBox.placeholder = 'Give this Cat a name :)'

                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.appendChild(image);
                gridItem.appendChild(textBox)

                catGrid.appendChild(gridItem);

                textBox.addEventListener('change', function() {
                    const catName = this.value.trim(); 
                    if (catName !== '') {
                        const catHeader = document.createElement('h3');
                        catHeader.textContent = `You named the Cat ${catName} ;)`;
                        gridItem.replaceChild(catHeader, textBox);
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching cat images:', error);
        });
    }

    fetchCats();

    catCountSelect.addEventListener('change', fetchCats);

    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();
});
