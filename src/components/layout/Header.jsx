import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link exact to="/">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/quan-ly-cong-viec">Quản lý công việc</Link>
            </li>
            <li>
              {" "}
              <Link to="/lien-he">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
