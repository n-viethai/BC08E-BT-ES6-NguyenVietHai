import { BenhNhan } from "../models/BenhNhan.js";

let benhNhan = new BenhNhan;

document.querySelector('.actions ul li:nth-child(2) a').onclick = function() {
    let arrTagInput = document.querySelectorAll('.form-group input, .form-date-group input, .form-group select');
    for(let input of arrTagInput ){
        let {id,value} = input;
        benhNhan[id] = value;
    }
    benhNhan.hienThiThongTin('#hienThiThongTin');
}