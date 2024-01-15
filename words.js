async function getRandomNoun() {
    try {
        const apiUrl = 'https://api.api-ninjas.com/v1/randomword?type=noun';
        const apiKey = 'YOUR_API_KEY'; 

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: { 'X-Api-Key': apiKey }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Random Noun:", data.word);
        return data.word;
    } catch (error) {
        console.error('Error:', error);
    }
}

getRandomNoun();