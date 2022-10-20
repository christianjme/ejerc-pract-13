function getLocalizacion(id){
  const $geolocation = document.getElementById(id)
  
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
  }

  const succes = position =>{
    const coords = position.coords

    $geolocation.innerHTML = `
    <p>Tu posición actual es:</p>
    <ul>
      <li>Latitud: ${coords.latitude}</li>
      <li>Longitud: ${coords.longitude}</li>
      <li>Presicion: ${coords.accuracy}</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en GoogleMaps</a>
    `
    console.log(position)
  }
  const error = error =>{
    $geolocation.insertAdjacentHTML('beforebegin',`<p>${error.message}</p>`)
    console.log(error)
  }

  navigator.geolocation.getCurrentPosition(succes, error, options)

}

addEventListener('DOMContentLoaded', e => getLocalizacion('geolocation'))