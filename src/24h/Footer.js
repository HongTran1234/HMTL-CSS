import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="list-footer">
                    <ul className="list-ul">
                        <li>Tin Tức</li>
                        <li>Tin Hà Nội</li>
                        <li>Tin TP Hồ Chí Minh</li>
                    </ul>
                    <ul className="list-ul">
                        <li>Bóng đá</li>
                        <li>Video</li>
                        <li>Ngoại hạng Anh</li>
                    </ul>
                    <ul className="list-ul">
                        <li>Thời trang</li>
                        <li>Bí quyết mặc đẹp</li>
                        <li>Người mẫu nữ</li>
                    </ul>
                    <ul className="list-ul">
                        <li>Pháp luật</li>
                        <li>Vụ án nổi tiếng</li>
                        <li>Trọng án</li>
                    </ul>
                    <ul className="list-ul">
                        <li>Hi-tech</li>
                        <li>Tin tức công nghệ</li>
                    </ul>
                    <ul className="list-ul">
                        <li>Kinh doanh</li>
                        <li>Khởi nghiệp</li>
                        <li>Tỉ giá</li>
                    </ul>
                </div>
                <div className="contact-adv">
                    <ul className="footer-contact">
                        <li>Giới thiệu</li>
                        <li>|</li>
                        <li>Góp ý</li>
                        <li>|</li>
                        <li>Đầu trang</li>
                        <li>|</li>
                        <li>LIÊN HỆ QUẢNG CÁO</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Footer