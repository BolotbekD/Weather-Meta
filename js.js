let btnSearch = document.querySelector('.btnSearch'),
    inputSearch = document.querySelector('#weatherForm input'),
    weatherContainer = document.querySelector('.weatherContainer'),
    city = document.querySelector('.city'),
    image = document.querySelector('#weatherImage'),
    main = document.querySelector('.weatherMain'),
    temp = document.querySelector('#temp'),
    todayTime = document.querySelector('.todayTime'),
    body = document.querySelector('body'),
    wind = document.querySelector('.wind'),
    humidity = document.querySelector('.humidity')

    


btnSearch.addEventListener('click', (event) => {
    event.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch.value}&appid=c1675a4a11dc9769f20c9bc5920766c0&units=metric`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        if (data.name) {
        city.innerHTML = data.name
        image.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" >`
        main.innerHTML = data.weather[0].description
        temp.innerHTML = data.main.temp + '<span><sup>o</sup>C</span>'
        
        const timestamp = data.dt,
            GTM = data.timezone / 3600,
            timesMinutes = Math.floor((timestamp / 60) % 60),
            timesHours = Math.floor((timestamp / 3600) % 24)
        todayTime.innerHTML = `TIME: ${(timesHours + GTM) % 24}:${(timesMinutes + GTM) % 60}`
        wind.innerHTML = 'wind: ' + data.wind.speed + 'km/h'
        humidity.innerHTML = 'humidity: ' + data.main.humidity + '%'

        let back = data.weather[0].icon.slice(2)
        if (back === 'n') {
            body.style.background = "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')center/cover"
        } else {
            body.style.background = "url('https://storage.needpix.com/rsynced_images/day-966186_1280.jpg')center/cover"
        }
        inputSearch.value = ''
      

            if (main.textContent === 'clear sky') {
                weatherContainer.style.background = "url('https://i.redd.it/kth1hr4zsjea1.jpg')center/cover"
            } else if (main.textContent === 'few clouds') {
                weatherContainer.style.background = "url('https://www.vishopper.com/images/products/300x300/SK/15233_bright-sky-with-few-clouds.jpg')center/cover"
            } else if (main.textContent === 'scattered clouds') {
                weatherContainer.style.background = "url('https://www.shutterstock.com/image-photo/blue-sky-scattered-clouds-260nw-132256844.jpg')center/cover"
            } else if (main.textContent === 'broken clouds') {
                weatherContainer.style.background = "url('https://thumbs.dreamstime.com/b/scattered-white-clouds-against-dark-blue-sky-scattered-clouds-139595525.jpg')center/cover"
            } else if (main.textContent === 'shower rain') {
                weatherContainer.style.background = "url('https://t3.ftcdn.net/jpg/07/55/99/28/360_F_755992805_tNSIT4i0qbtFHjFcO2cGhugJmPeLjyoL.jpg')center/cover"
            } else if (main.textContent === 'rain') {
                weatherContainer.style.background = "url('https://arewaworld.com/wp-content/uploads/2023/10/unnamed.jpg')center/cover"
            } else if (main.textContent === 'light rain') {
                weatherContainer.style.background = "url('https://www.supertalk.fm/wp-content/uploads/2018/08/IMG_2959.jpg')center/cover"
            } else if (main.textContent === 'thunderstorm') {
                weatherContainer.style.background = "url('https://hips.hearstapps.com/vidthumb/images/thunderstorm-6463fa10c42e8.png?crop=1.00xw%3A1.00xh%3B0%2C0&resize=810%3A*')center/cover"
            } else if (main.textContent === 'snow') {
                weatherContainer.style.background = "url('https://images.ctfassets.net/hrltx12pl8hq/5thrWp3Se4mcffFgMORIds/9013edc6afcdfe220a7334eb49d81b9d/snow-images.jpg?fit=fill&w=600&h=1200')center/cover"
            } else if (main.textContent === 'mist') {
                weatherContainer.style.background = "url('https://media.arubanetworks.com/blogs/GettyImages-1164051562.jpg')center/cover"
            } else if (main.textContent === 'overcast clouds') {
                weatherContainer.style.background = "url('https://t3.ftcdn.net/jpg/03/02/03/70/360_F_302037028_WgdzBqp7MCTF0iITajUUVryCKJsyjOE6.jpg')center/cover"
            }  else if (main.textContent === 'moderate rain') {
                weatherContainer.style.background = "url('https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg')center/cover"
            }
        } else {
            city.innerHTML = 'ENTERED INCORRECTLY'
            city.style.fontSize = '28px'

        }    
    })
})

    