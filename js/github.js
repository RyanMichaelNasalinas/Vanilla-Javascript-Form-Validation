class Github {
    constructor() {
            this.client_id = '41ba2688d6717f54b0e2';
            this.client_secret = '6acd6e2d0da011b95c3a567ee8727c60f913bf13';
            // Properties to filter repository
            this.repos_count = 5;
            this.repos_sort = 'created: asc';
        }
        // Get Github URL Profile
    async getUser(user) {
        // Match the input string to the github profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            // Return this data on the front end    
            profile,
            repos
        }
    }
}