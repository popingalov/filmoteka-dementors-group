

export const themeSwitcherRef = document.querySelector('#theme-switch-toggle');

export const teamBtn = document.querySelector('.button-team');
export const backdrop = document.querySelector('.backdrop');


/*
<div class='team__content'>
  <div class='team-title'>
    <button type='button' class='team__button-close' data-action='close-btn-team'>
      <span class='material-icons'>
        favorite
      </span>
    </button>
  </div>
  <div class='team-modal-container'>
    <ul class='row'>
      {{#each this}}
        <li class='col-12 col-sm-6 col-md-4 col-lg-3'>
          <a class='team-item__link' href="{{github}}" target='_blank'>
            <div class='our-team'>
              <div class='picture'>
                <img
                  class='img-fluid'
                  src="{{photo}}"
                  width='100px'
                  height='100px'
                  alt="{{name}} {{surname}}"
                />
              </div>
              <div class='team-content'>
                <h3 class='name'>
                  {{name}} {{surname}}
                </h3>
                <h4 class='title'>
                  Front-end Developer
                </h4>
              </div>
              <ul class='social'>
                <li>
                  <img
                    align='left'
                    class='github'
                    alt='GitHub'
                    width='32px'
                    src='https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png'
                  />
                </li>
              </ul>
            </div>
          </a>
        </li>
      {{/each}}
    </ul>
  </div>
</div>



*/






//доделать
/*
refs.openTeamModalBtn.addEventListener('click', teamModalOpen);
refs.closeTeamModalBtn.addEventListener('click', teamModalClose);


const teamModalOpen = function () {
  refs.teamBackdrop.classList.remove('is-hidden');
  refs.teamBackdrop.addEventListener('click',closingBackdropClick)
  teamModalAnimations();
  window.addEventListener('keydown', onEscapePress);

}

const teamModalClose = function() {
  refs.teamBackdrop.classList.add('is-hidden');
  clearInterval(paintCardInterval);
  clearInterval(animateCardInterval);
  window.removeEventListener('keydown', onEscapePress);
  refs.teamBackdrop.removeEventListener('click',teamModalClose)
}
const closingBackdropClick = function (e) {
  if (e.target.classList.contains('backdrop'))
    teamModalClose();

}

const onEscapePress = function (e) {
  if (e.code === 'Escape') {
    teamModalClose();
  }
  else {
    return;
  }
}
refs.openTeamModalBtn.addEventListener('click', teamModalOpen);
refs.closeTeamModalBtn.addEventListener('click', teamModalClose);*/