// switching of stacks
const mySkillSets = document.querySelectorAll('.each-stack');

function removeActiveClasses() { /*this function remove active from all .each-stack */
  mySkillSets.forEach((skillSet) => {
      skillSet.classList.remove('active');
    });
};

mySkillSets.forEach((skillSet) => {
  skillSet.addEventListener('click', () => {
    removeActiveClasses();
    skillSet.classList.add('active');
    
  })
});