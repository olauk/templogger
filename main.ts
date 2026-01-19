input.onButtonPressed(Button.A, function () {
    logge_temperatur = 1
})
input.onButtonPressed(Button.B, function () {
    logge_temperatur = 0
})
let temperatur = 0
let logge_temperatur = 0
OLED.init(128, 64)
datalogger.setColumnTitles("temp")
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
logge_temperatur = 0
loops.everyInterval(500, function () {
    temperatur = Environment.Ds18b20Temp(DigitalPin.P0, Environment.ValType.DS18B20_temperature_C)
    if (logge_temperatur) {
        datalogger.log(datalogger.createCV("temp", temperatur))
    }
})
basic.forever(function () {
    OLED.writeStringNewLine("Temperatur: ")
    OLED.writeNumNewLine(temperatur)
})
