// chat idk how to organize
function twoCharacter(num){
    if(num.toString().length === 1){
        return '0'+num.toString();
    }else{
        return num;
    }
}
function toTime(time){
    time = new Date(time);
    const hour = time.getHours();
    const minute = twoCharacter(time.getMinutes());
    const second = twoCharacter(time.getSeconds());
    return `${hour}:${minute}:${second}`;
  }

  export {toTime};