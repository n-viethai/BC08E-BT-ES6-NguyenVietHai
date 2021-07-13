export class BenhNhan {
    ten = '';
    ho = '';
    email = '';
    soDienThoai = '';
    ngay = '';
    thang = '';
    nam = '';
    diaChi = '';
    thongTinDiChuyen = '';
    loaiNhiem = '';
    constructor() {

    }

    hienThiThongTin (id) {
        let contentHTML = 
        `
            <tr>
                <td>${this.ten}</td>
                <td>${this.ho}</td>
                <td>${this.email}</td>
                <td>${this.soDienThoai}</td>
                <td>${this.ngay}/${this.thang}/${this.nam}</td>
                <td>${this.diaChi}</td>
                <td>${this.thongTinDiChuyen}</td>
                <td>${this.loaiNhiem}</td>
            </tr>
        `;
        document.querySelector(id).innerHTML = contentHTML;
    }
}