import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer footer-center p-7 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-2">
        <Link
          className="link link-hover"
          href={"https://samor1014.github.io/"}
          target="_blank"
        >
          About me
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className="link link-hover"
          href={"https://github.com/SamOr1014"}
          target="_blank"
        >
          Github
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className="link link-hover"
          href="mailto:orchamsumsam1014@gmail.com"
          target="_blank"
        >
          Contact Me
        </Link>
      </div>
      <div>
        <p>A small full stack project by me - Sam Or</p>
      </div>
    </footer>
  );
};
