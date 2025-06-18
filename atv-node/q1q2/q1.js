function calculateAge(date = '2001-07-30') {
    const millisecondsInYear = 31536000000; // 1000 * 60 * 60 * 24 * 365
    const data = new Date(date);
    const today = new Date();

    const diferença = (today - data) / millisecondsInYear;

    return Math.floor(diferença);
}
export default calculateAge;