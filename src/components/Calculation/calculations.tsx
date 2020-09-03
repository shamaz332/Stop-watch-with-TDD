function Calculation(timeInSec: number): Array<number | string> {


    let hours: number = Math.floor((timeInSec / 3600));
    let minutes: number = Math.floor(timeInSec /60);
    let seconds: number = timeInSec % 60


    let hoursFormat = hours < 10 ? `0${hours}`:hours;
    let minutesFormat = minutes < 10 ? `0${minutes%60}`:minutes;
    let secondsFormat = seconds < 10 ? `0${seconds}`:seconds;


    return [
        hoursFormat, minutesFormat, secondsFormat
    ]

}
export default Calculation;
