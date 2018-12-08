function initMenu() {
    $('#top-menu-bar a').click(function (e) {
        console.debug('a click:', e.target);
    })
}

function initSkillsPage() {
    $.ajax('data/skills.json').done(function (skills) {
        var resultList = $('#skills-page ul');

        var listItems = skills.map(function (skill) {
            var endorsedBy = skill.endorsedBy;

            if (endorsedBy) {
                endorsedBy = ` <span class="greyed-out"> - Endorsed by</span> ${endorsedBy}`
            }

            return `<li>
                        ${skill.name.toUpperCase()} - ${skill.endorsments} 
                        ${endorsedBy}
                    </li>`;
        });

        resultList.append(listItems.join(''));
    })
}

initMenu();
$('#skills-page').show();
initSkillsPage();