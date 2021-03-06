import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-light text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Desenvolvimento de aplicativos</h5>

                <p>
                  Este aplicativo foi desenvolvido na semana React + SpringBoot do devsuperior,
                  é um sistema web aplicando todas as boas práticas de desenvolvimento de software.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a className="text-dark" href="https://github.com/caionmarqz/">© 2021 Copyright</a>
            </div>
        </footer>
      </div>
    );
  }
}
