class UI {
    constructor() {
            this.profile = document.querySelector('#profile');
        }
        // Display Profile
    showProfile(user) {
        this.profile.innerHTML =
            `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-block btn-dark">View Profile</a>
                    </div>
                    <div class="col-md-9 text-center">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br>
                        <ul class="list-group mt-2">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
            <!-- Insert Repository Here -->
            <div id="repos"></div>
        `;
    }

    // Show User Repos
    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output +=
                `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>    
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-info">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>    
            `;
        });
        // Output repositories
        document.querySelector('#repos').innerHTML = output;
    }

    // Show Alert
    showAlert(message, className) {
        // Clear Remaining Alerts
        this.clearAlertMsg();
        // Create Div
        const div = document.createElement('div');
        // Add Classes
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Search Box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);
        // Clear Alert Message After 3seconds
        setTimeout(() => {
            this.clearAlertMsg();
        }, 2000);
    }

    clearAlertMsg() {
            const currentAlert = document.querySelector('.alert');

            if (currentAlert) {
                currentAlert.remove();
            }
        }
        // Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}