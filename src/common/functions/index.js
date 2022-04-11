export const capitalizeString = (string) => {
    //Uppercase frist letter
    if (typeof string !== 'string') return string;
    else if (typeof string === 'string' && string.includes(' ')) {
        //Viết hoa tất cả các chữ cái đâu trong chuỗi có đấu " "
        let sentence = string.toLowerCase().split(' ');
        for (let i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }

        return sentence.join(' ');
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
};
export const randomColor = () => {
    //return hexa code color
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
