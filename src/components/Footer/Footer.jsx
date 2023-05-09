import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.developerData}>
        © 2023 | All Rights Reserved | Developed by
        <a
          className={s.link}
          target="_blank"
          href="https://github.com/AslanovRustam"
        >
          Rustam A
        </a>
      </div>
    </footer>
  );
};

export default Footer;
