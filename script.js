console.log('script loaded');

function initSkillsPage() {
    $.ajax('data/skills.json').done(function (skills) {
        console.log('skills: ', skills);

        var resultList = $('#skills-page ul');

        var listItems = skills.map(function (skill) {
            return `<li>${skill.name.toUpperCase()}</li>`;
        });

        resultList.append(listItems.join(''));
    })
}

$('#skills-page').show();
initSkillsPage();