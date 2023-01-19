function euler9() {
    console.time("TIME");

    for (let a = 1; a <= 332; a++) {
        for (let b = a + 1; b <= 499; b++) {
            const c = 1000 - a - b;
                if (Math.sqrt(a**2 + b**2) === c) {
                    console.log(a * b * c);
                    break;
                }
            }
        }
    console.timeEnd("TIME");
}

euler9();
