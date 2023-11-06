// DOM, click event, hien thi noi dung
// DOM, click event, hiển thị nội dung
/**
 * Đầu vào: Số ngày làm việc
 * Xử lý:
 * 1. Tạo biến nhận số ngày làm việc, giá trị khởi tạo 0 soNgayLamViec = 0
 * 2. Tạo biến TIENLUONGMOTNGAY gán trị 100000
 * 3. Nhận giá trị soNgayLamViec từ input
 * 4. Tạo biến tienLuong = soNgayLamViec * TIENLUONGMOTNGAY
 * 5. Xuất ra màn hình 'Tiền lương là: ' + tienLuong
 * Đầu ra: TIền Lương
 */

const TIENLUONGMOTNGAY = 100000;
var soNgayLamViec = 0;

const hienThiLuongMotNgay = document.getElementById('hienThiLuongMotNgay');
const btn = document.getElementById('btnTinhLuong');
const hienThiLuong = document.getElementById('hienThiLuong');

hienThiLuongMotNgay.innerText = 'Lương một ngày: ' + TIENLUONGMOTNGAY;
btn.addEventListener('click', function () {
    soNgayLamViec = document.getElementById('dayField').value;
    const tienLuong = soNgayLamViec * TIENLUONGMOTNGAY;
    hienThiLuong.innerText = 'Tiền lương là: ' + tienLuong;
});

/**
 * TÍNH TRUNG BÌNH
 * Đầu vào: 5 số thực
 * Xử lý:
 * Tạo biến TONG, nhân lần lượt từng số với 1 và tính tổng 5 số
 * Tạo biến TB, tính trung bình bằng tổng chia 5 TONG / 5
 * Làm tròn đến 2 chữ số thập phân
 * In kết quả ra màn hình
 * Đầu ra: Giá trị trung bình của 5 số thực
 */

const hienThiTB = document.getElementById('hienThiTB');
const btnTinhTB = document.getElementById('btnTinhTB');
btnTinhTB.addEventListener('click', function () {
    console.log('Ok');
    const num_1 = document.getElementById('num_1').value;
    const num_2 = document.getElementById('num_2').value;
    const num_3 = document.getElementById('num_3').value;
    const num_4 = document.getElementById('num_4').value;
    const num_5 = document.getElementById('num_5').value;

    const TONG = num_1 * 1 + num_2 * 1 + num_3 * 1 + num_4 * 1 + num_5 * 1;
    const TB = TONG / 5;
    hienThiTB.innerText = 'Trung bình cộng: ' + TB.toFixed(2);
});

/**
 * QUY ĐỔI TIỀN
 * Đầu vào: Số tiền USD
 * Xử lý:
 * 1. Tạo hằng số giaUSD gán giá trị 23500
 * 2. Tạo biến soTienUSD gán giá trị người dùng nhập vào
 * 3. Tạo biến soTienVND, dùng công thức soTienVND = soTienUSD * giaUSD
 * 4. In kết quả ra màn hình
 * Đầu ra: Số tiền VND
 */

const giaUSD = 23500;

const btnTinhTienVND = document.getElementById('btnTinhTienVND');
const hienThiVND = document.getElementById('hienThiVND');

btnTinhTienVND.addEventListener('click', function () {
    const soTienUSD = document.getElementById('soTienUSD').value;
    const soTienVND = soTienUSD * giaUSD;

    const config = { style: 'currency', currency: 'VND' };
    const soTienVNDFixed = new Intl.NumberFormat('vn-VN', config).format(soTienVND);

    hienThiVND.innerText = soTienVNDFixed;
});

/**
 * TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
 * Đầu vào:
 * Chiều dài HCN
 * Chiều rộng HCN
 * Xử lý:
 * Khai báo chiều dài, chiều rộng, gán giá trị người dụng nhập và ép kiểu string -> number (nhân 1)
 * Khai báo diện tích, chu vi, tính chu vi = (dài + rộng)*2, diện tích bằng dài nhân rộng
 * In kết quả ra màn hình
 * Đầu ra:
 * Chu vi
 * Diện tích
 */
const btnHCN = document.getElementById('btnTinhHCN');
const hienThiDTCV = document.getElementById('hienThiDTCV');
btnHCN.addEventListener('click', function () {
    const chieuDai = document.getElementById('chieuDai').value * 1;
    const chieuRong = document.getElementById('chieuRong').value * 1;
    const dienTich = chieuDai * chieuRong;
    const chuVi = (chieuDai + chieuRong) * 2;

    hienThiDTCV.innerText = 'Diện tích: ' + dienTich + '; Chu vi: ' + chuVi;
});

/**
 * TÍNH TỔNG HAI KÝ SỐ
 * Đầu vào:
 * Một số có hai chữ số
 * Xử lý:
 * Tạo biến soHaiChuSo, gán giá trị số người dùng nhập vào
 * Tạo biến chuSoHangChuc, gán giá trị ký số thứ nhất tính bằng công thức: số chia cho 10 làm tròn
 * Tạo biến chuSoHangDonVi, ------------------ thứ hai --------------------: số chia lấy dư cho 10
 * Tạo biến tong, tính tổng = kySoThuHai + kySoThuNhat
 * In kết quả ra màn hình
 * Đầu ra:
 * Tổng hai ký số
 */
const btnTinhTongKySo = document.getElementById('btnTinhTongKySo');
const hienThiTongKySo = document.getElementById('hienThiTongKySo');

btnTinhTongKySo.addEventListener('click', function () {
    const soHaiChuSo = document.getElementById('soHaiChuSo').value;
    const chuSoHangChuc = Math.floor(soHaiChuSo / 10);
    const chuSoHangDonVi = soHaiChuSo % 10;

    const tong = chuSoHangChuc + chuSoHangDonVi;
    console.log(tong);

    hienThiTongKySo.innerText = 'Tổng hai ký số của: ' + soHaiChuSo + ' là ' + tong;
});
