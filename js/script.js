let elTabs = document.querySelectorAll('.tabs__toggle'),contents = document.querySelectorAll('.tabs__content');

elTabs.forEach((tab, index) => {
   tab.addEventListener('click', () => {
      contents.forEach((content) => {
         content.classList.remove('is-active')
      })
      elTabs.forEach((tab) => {
         tab.classList.remove('is-active')
      })

      contents[index].classList.add('is-active');
      elTabs[index].classList.add('is-active');
   });
});