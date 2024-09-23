const LIST = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';

function searchByKoreanInitialSound(data, firstSounds = "") {
  const regexPattern = firstSounds.split("").map(kor => {
    const index = LIST.indexOf(kor);
    if (index === -1) {
      return kor;
    }
    const start = 0xAC00 + index * 588;
    const end = start + 587;
    return `[${String.fromCharCode(start)}-${String.fromCharCode(end)}]`;
  }).join(".*");

  const regex = new RegExp(regexPattern);
  return data.filter(item => regex.test(item));
}

module.exports = {
  searchByKoreanInitialSound
};

