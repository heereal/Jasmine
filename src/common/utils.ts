// 현재 시간, 요일 가져오기
export const getCurrentTime = () => {
    const date = new Date();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    
    const currentTime = parseInt(hours + minutes);
    const day = date.getDay();
    
    return { currentTime, day }
};