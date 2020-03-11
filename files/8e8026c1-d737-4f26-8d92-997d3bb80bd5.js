function currency(value) {
    if (isNaN(value)) return value;
    return numbro(value).formatCurrency('0,0.00');
}

function number(value, format) {
    if (isNaN(value)) return value;
    return numbro(value).format(format);
}

function headers(batch) {
    return _.compact([
        batch.hdr_pay_code1,
        batch.hdr_pay_code2,
        batch.hdr_pay_code3,
        batch.hdr_pay_code4,
        batch.hdr_pay_code5,
        batch.hdr_pay_code6,
        batch.hdr_pay_code7,
        batch.hdr_pay_code8,
        batch.hdr_pay_code9,
        batch.hdr_pay_code10,
    ])
}

function date(value) {
    return moment(value).format('MM/DD/YYYY');
}

function period_desc(period) {
    switch (period) {
        case 'W':
            return 'WEEKL';
    }
}