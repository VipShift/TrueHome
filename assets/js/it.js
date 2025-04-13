
/* copi contact number  */
function copyPhoneNumber(event) {
    event.preventDefault(); // чтобы ссылка не сработала
    const phoneNumber = '+34 677 096 557';

    // копирование в буфер обмена
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert('¡Número copiado al portapapeles: ' + phoneNumber + '!');
    }).catch(err => {
      alert('Error al copiar el número');
      console.error(err);
    });
  }








  