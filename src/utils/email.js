const email = () => {
    const coded = 'yK1K.KRpr1+EsTZzUs@P8rz7.mK8';
    const key = 'sm9kjAxDPrTKw3LXIp6dF2YznNUlZ8QVM5ecCRGHEqgabofyv0Oh1JS7BiuWt4';
    const shift = coded.length;
    let link = '';
    let ltr = null;

    for (let i = 0; i < coded.length; i++) {
        if (key.indexOf(coded.charAt(i)) === -1) {
            ltr = coded.charAt(i)
            link += (ltr)
        }
        else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
            link += (key.charAt(ltr))
        }
    }

    return link;
};

export default email();
