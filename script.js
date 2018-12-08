console.log('script loaded');

function initSkillsPage() {
    $.ajax('data/skills.json').done(function (data) {
        console.log('data: ', data);
    })
}

$('#skills-page').show();
initSkillsPage();