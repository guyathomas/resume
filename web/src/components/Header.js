import React from 'react';
import SocialIcon from './SocialIcon';
import ContactDetail from './ContactDetail';

class Header extends React.Component {
  render() {
    return (
      <section className="o-section o-section--header  t-section  t-section--header">
        <div className="c-header">
          <div className="o-section__header-bg  t-section__header" />
          <div className="o-section__content-bg  t-section__content" />
          <div className="o-container">
            <div className="o-section__container">
              <header className="o-section__header  c-header__header  t-section__header">
                <div className="c-header__inner-header">
                  <div className="c-header__avatar">
                    <div className="a-header  c-avatar">
                      <img
                        className="c-avatar__img"
                        src="assets/images/header/avatar.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </header>
              <div className="o-section__content  c-header__content  t-section__content">
                <div className="c-header__inner-content">
                  <div className="c-header__top">
                    <div className="c-header__brand">
                      <div className="c-brand">
                        <h1 className="c-brand__title  t-title">
                          <span className="c-brand__sizer">
                            <span className="a-header  c-brand__first-word  t-title__first-word">                                 Guy
                            </span>
                            <span className="a-header  c-brand__second-word  t-title__second-word">                                Thomas
                            </span>
                          </span>
                        </h1>
                        <h2 className="a-header  c-brand__sub-title  t-sub-title">
                          <span className="c-brand__sizer">
                         Full Stack Developer &amp; Front-end Expert
                          </span>
                        </h2>
                      </div>
                    </div>
                    <ul className="c-header__social-buttons  c-social-buttons print--hide">
                      <SocialIcon username="guyathomas" platform="github" />
                      <SocialIcon username="stolemyusername" platform="medium" />
                      <SocialIcon username="guyathomas" platform="linkedin" />
                      <SocialIcon
                        username="assets/downloads/guy-thomas-resume.pdf"
                        platform="cloud-download"
                      />
                    </ul>
                  </div>

                  <div className="c-header__contact">

                    <hr className="a-header  c-header__contact-divider" />

                    <div className="o-grid print--no-wrap">
                      <ContactDetail label="Location" value="San Francisco" />
                      <ContactDetail label="Phone" value="425.827.5289" />
                      <ContactDetail
                        label="Web"
                        value="guythomas.me"
                        link="https://guythomas.me"
                      />
                      <ContactDetail
                        label="Email"
                        value="guythomas.us@gmail.com"
                        link="guythomas.us@gmail.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
