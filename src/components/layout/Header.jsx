import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/quan-ly-cong-viec">Quản lý công việc</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
            <li>
              <Link to="/about">Về chúng tôi</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
