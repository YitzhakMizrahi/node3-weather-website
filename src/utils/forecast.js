const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1e1ec60412f4e0ef19b0f1a0f3e4963b&query=${latitude},${longitude}`

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            const { weather_descriptions ,temperature, feelslike, humidity } = body.current
            callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. The humidity is ${humidity}%`)
        }
    })
}

module.exports = forecast