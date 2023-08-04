import { getInfoAccount, updateAccount, deteleAccount } from "../services/api.js";
const data = await getInfoAccount();

let cardContainer = document.querySelector('.user-cards-container');
const buttonEdit = document.createElement('button');
const buttonDelete = document.createElement('button');

buttonEdit.className = 'edit';
buttonDelete.className = 'delete';

data.forEach(account => {
  const { name, identification, telephone, email, avatar } = account;
  cardContainer.innerHTML += `
  <div class="user-cards-container__card">
    <div class="user-cards-container__card--image-container">
      <div class="external-wrapper">
        <div class="inner-wrapper">
          <img src="${avatar}" alt="avatar image">
        </div>
      </div>
    </div>
    <div class="user-cards-container__card--info">
      <h3 class="user-cards-container__card--info--title">${name}</h3>
      <p class="user-cards-container__card--info--text">Información de contacto</p>
      <p class="user-cards-container__card--info--info-id"><i class="fa-solid fa-id-card"></i> ${identification}</p>
      <p class="user-cards-container__card--info--info-telephone"><i class="fa-solid fa-phone"></i> ${telephone}</p>
      <p class="user-cards-container__card--info--info-email"><i class="fa-solid fa-at"></i> ${email}</p>
      <div class="user-cards-container__card--info--buttons-container">
        <button class="card-button edit" type="button">Editar</button>
        <button class="card-button delete" type="button">Eliminar</button>
      </div>
    </div>
  </div>
  `
});
