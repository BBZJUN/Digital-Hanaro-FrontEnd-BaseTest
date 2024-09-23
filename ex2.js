const range = (start, end, step = start > end ? -1 : 1) => {

    // step === 0 || s === e ? [s]
    if (step === 0 || start === end) {
        return [start];
    }


    //e 가 없다면
    if (end === undefined) {
        if (start > 0) {
        end = start;
        start = 1;
        } else if (start < 0) {
        end = -1;
        } else {
        return [0];
        }
    }

    // 비정상(예외) - 즉, (s - e) * step > 0
    if ((start - end) * step > 0) {
        return [];
    }


    //테스트코드 0.1 단위 처리
    const result = [];
    for (let i = start; step > 0 ? i <= end : i >= end; i = parseFloat((i + step).toFixed(1))) {
        result.push(parseFloat(i.toFixed(1)));
    }

    //기존
    // for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    // result.push(i);
    // }
    return result;
};

module.exports = { range };
