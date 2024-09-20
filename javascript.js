document.addEventListener("DOMContentLoaded", () => {
    const profiles = {
        'player1': {
            name: 'Player One',
            image: 'images/player1.jpg',
            stats: 'Runs - 10000, Wickets - 500',
            achievements: 'Awarded Player of the Year 2015'
        },
        'player2': {
            name: 'Player Two',
            image: 'images/player2.jpg',
            stats: 'Runs - 8000, Wickets - 400',
            achievements: 'Best Bowler of the Decade'
        }
    };

    function showProfile(playerId) {
        const profile = profiles[playerId];
        const profileContainer = document.getElementById('profile-container');
        profileContainer.innerHTML = `
            <div class="profile">
                <img src="${profile.image}" alt="${profile.name}">
                <h3>${profile.name}</h3>
                <p>Stats: ${profile.stats}</p>
                <p>${profile.achievements}</p>
            </div>
        `;
    }

    const fanForm = document.getElementById('fan-form');
    const fanStories = document.getElementById('fan-stories');

    fanForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const story = document.getElementById('story').value;
        if (story) {
            const storyDiv = document.createElement('div');
            storyDiv.className = 'fan-story';
            storyDiv.textContent = story;
            fanStories.appendChild(storyDiv);
            document.getElementById('story').value = ''; // Clear the textarea
        }
    });
});
